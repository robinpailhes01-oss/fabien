import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";
import { BOOKING_URL, CTA_LABEL } from "./site-config";

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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
