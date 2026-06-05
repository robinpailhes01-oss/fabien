import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-44">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.6rem,8vw,6rem)] font-light leading-[0.98] tracking-tight">
            Construisons quelque chose
            <span className="block text-gradient-gold">d&apos;inoubliable.</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-cream-dim">
            Un projet, un partenariat, une collaboration ? Écrivez à Fabien.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href="mailto:contact@fabien.com"
              className="group relative overflow-hidden rounded-full bg-gold px-10 py-4 text-sm font-medium tracking-wide text-noir transition-colors duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-cream">
                contact@fabien.com
              </span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-noir transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </a>

            <div className="mt-2 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-cream-dim">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold"
              >
                Instagram
              </a>
              <span className="text-cream/20">/</span>
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
        </Reveal>
      </div>
    </section>
  );
}
