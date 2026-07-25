import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";
import { BOOKING_URL, CTA_LABEL, CONTACT_EMAIL } from "./site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-44">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="eyebrow">Passons à l&apos;action</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.1] tracking-tight">
            <RevealText text="Votre entreprise mérite une attention particulière et un investissement de chaque instant." />
          </h2>
          <p className="mt-6 font-display text-[clamp(1.5rem,3.5vw,2.4rem)]">
            <RevealText text="Commençons dès maintenant." accent />
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-col items-center gap-7">
            <Magnetic strength={0.4}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-4 text-sm"
              >
                {CTA_LABEL}
              </a>
            </Magnetic>

            <ul className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
              {[
                "Appel offert",
                "Sans engagement",
                "Réponse claire sur votre potentiel",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gold"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted">
              <a href={`mailto:${CONTACT_EMAIL}`} className="link-gold">
                {CONTACT_EMAIL}
              </a>
              <span className="text-ink/20">/</span>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
