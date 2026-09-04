"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT_EMAIL } from "./site-config";

const STORAGE_KEY = "newsletter-popup";
const SNOOZE_DAYS = 14; // re-offer after a dismiss, but not after a signup
const DELAY_MS = 16000;

// Web3Forms delivers straight to Fabien's inbox (the email he verified
// there). Their free tier only accepts submissions made from a real
// visitor's browser — not from a server — so this call happens client-side
// on purpose. The access key is meant to be public (it's normally embedded
// in a plain HTML form), so shipping it here is expected and safe.
const WEB3FORMS_ACCESS_KEY = "ec4d17c4-b128-4c90-9188-f4b319da9923";

type Status = "idle" | "loading" | "success" | "error";

function alreadyHandled() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { state, ts } = JSON.parse(raw) as { state: string; ts: number };
    if (state === "subscribed") return true;
    if (state === "dismissed") {
      const days = (Date.now() - ts) / 86_400_000;
      return days < SNOOZE_DAYS;
    }
    return false;
  } catch {
    return false;
  }
}

function remember(state: "subscribed" | "dismissed") {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, ts: Date.now() }));
  } catch {
    /* ignore */
  }
}

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState(""); // bots fill this, humans don't
  const shownRef = useRef(false);

  useEffect(() => {
    if (alreadyHandled()) return;

    const reveal = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      setOpen(true);
    };

    const timer = setTimeout(reveal, DELAY_MS);

    // Desktop exit-intent: cursor leaves through the top of the viewport.
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) reveal();
    };
    window.addEventListener("mouseout", onLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  const close = (state: "subscribed" | "dismissed") => {
    remember(state);
    setOpen(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (honeypot) {
      // Bot filled the hidden field — pretend success, send nothing.
      setStatus("success");
      remember("subscribed");
      setTimeout(() => setOpen(false), 2200);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Nouvel inscrit — Newsletter LS Consulting",
          from_name: "Site LS Consulting",
          email, // lets Fabien hit "reply" to reach the subscriber directly
          message: `Nouvelle inscription à la newsletter depuis le site : ${email}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        remember("subscribed");
        setTimeout(() => setOpen(false), 2200);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => close("dismissed")}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="panel relative w-full max-w-md rounded-3xl p-8 text-center sm:p-10"
          >
            <button
              onClick={() => close("dismissed")}
              aria-label="Fermer"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:bg-[color:var(--panel-border)] hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {status === "success" ? (
              <div className="py-6">
                <span className="icon-badge mx-auto">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-2xl">Bienvenue.</h3>
                <p className="mt-2 text-sm font-light text-muted">
                  Vous êtes inscrit — à très vite.
                </p>
              </div>
            ) : (
              <>
                <span className="eyebrow">Newsletter</span>
                <h3 className="mt-4 font-display text-2xl leading-tight sm:text-[1.7rem]">
                  Des conseils de croissance,
                  <br />
                  directement dans votre boîte mail.
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm font-light leading-relaxed text-muted">
                  Stratégie, acquisition, développement digital — l&apos;essentiel
                  de mon expérience terrain, sans spam.
                </p>

                <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="text"
                    name="company"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    autoComplete="email"
                    className="w-full rounded-full border border-[color:var(--panel-border)] bg-paper px-5 py-3.5 text-center text-sm text-ink outline-none transition-colors duration-300 focus:border-gold/60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold px-6 py-3.5 text-sm disabled:opacity-60"
                  >
                    {status === "loading" ? "Envoi..." : "Je m'inscris"}
                  </button>
                </form>

                {status === "error" && (
                  <p className="mt-4 text-xs font-light text-muted">
                    Un souci est survenu. Écrivez-nous directement à{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="link-gold">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <p className="mt-5 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  Désinscription en 1 clic, à tout moment
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
