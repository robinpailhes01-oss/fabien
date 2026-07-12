import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { BOOKING_URL, CTA_LABEL, CONTACT_EMAIL } from "./site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-44">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="eyebrow">Passons à l&apos;action</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] font-light leading-[1] tracking-tight">
            Votre marque mérite de scaler.
            <span className="block text-gradient-gold">
              Commençons maintenant.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-sm text-base font-light leading-relaxed text-muted">
            Un appel. Une vision claire de votre potentiel. Les prochaines
            étapes.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-col items-center gap-7">
            <Magnetic strength={0.4}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-full bg-gold px-10 py-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-500"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-paper">
                  {CTA_LABEL}
                </span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            </Magnetic>

            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              Appel offert · Sans engagement · Réponse claire sur votre potentiel
            </p>

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
