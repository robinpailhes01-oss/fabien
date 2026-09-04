import Link from "next/link";
import NewsletterButton from "./NewsletterButton";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "./site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--hairline)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#accueil" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/ls.png"
              alt="LS Consulting"
              className="dark-invertible h-14 w-auto"
            />
          </a>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-muted">
            Stratégie · Impact · Croissance
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
            L&apos;agence
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft">
            LS Consulting
            <br />
            11 rue Alexandre Cabanel
            <br />
            34000 Montpellier
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
            Contact
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-gold mt-4 inline-block text-sm font-light"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:+33${CONTACT_PHONE.replaceAll(" ", "").slice(1)}`}
            className="link-gold mt-2 block text-sm font-light"
          >
            {CONTACT_PHONE}
          </a>
          <div className="mt-4 flex gap-5 text-xs uppercase tracking-[0.18em] text-muted">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              WhatsApp
            </a>
            <NewsletterButton className="link-gold uppercase" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-8 text-[0.7rem] tracking-wide text-muted sm:flex-row sm:items-center">
        <p>© {year} Fabien Quetel — LS Consulting</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <p>SARL Layonn Style Holding · SIRET 880 325 949</p>
          <Link href="/mentions-legales" className="link-gold">
            Mentions légales & confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
