import { NextResponse } from "next/server";

// Forwards newsletter sign-ups to Fabien's inbox via Web3Forms.
// Setup (one-time, ~2 min, no account needed):
//   1. Go to https://web3forms.com/, enter Fabien's email, verify it.
//   2. Copy the access key you receive.
//   3. Add it as WEB3FORMS_ACCESS_KEY in Vercel → Project → Settings →
//      Environment Variables, then redeploy.
// Every submission is emailed straight to the address used in step 1.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  // Honeypot: real visitors never fill this hidden field.
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    // Silently pretend success to the bot.
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error(
      "[newsletter] WEB3FORMS_ACCESS_KEY is not set — see app/api/newsletter/route.ts",
    );
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "Nouvel inscrit — Newsletter LS Consulting",
        from_name: "Site LS Consulting",
        email, // lets Fabien hit "reply" to reach the subscriber directly
        message: `Nouvelle inscription à la newsletter depuis le site : ${email}`,
      }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      console.error("[newsletter] Web3Forms error:", data);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] fetch failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
