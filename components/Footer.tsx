import { CONTACT_EMAIL } from "./site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--hairline)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#accueil" className="font-display text-2xl tracking-wide">
            Fabien<span className="text-gold">.</span>
          </a>
          <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted">
            Fondateur de six marques. 21 ans de terrain. Aujourd&apos;hui, je
            construis la vôtre.
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
          <div className="mt-4 flex gap-5 text-xs uppercase tracking-[0.18em] text-muted">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-[color:var(--hairline)] pt-8 text-[0.7rem] tracking-wide text-muted sm:flex-row sm:items-center">
        <p>© {year} Fabien — LS Consulting</p>
        <p>SARL Layonn Style Holding · SIRET 880 325 949</p>
      </div>
    </footer>
  );
}
