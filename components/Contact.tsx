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
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-[clamp(2.4rem,7vw,5rem)] leading-[1.05]">
            <RevealText text="Commençons dès maintenant." accent />
          </h2>
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
