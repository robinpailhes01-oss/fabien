import Image from "next/image";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import CountUp from "./CountUp";

const stats = [
  { value: "20+", label: "Années d'expérience" },
  { value: "5", label: "Marques bâties" },
  { value: "100+", label: "Entreprises accompagnées" },
];

export default function About() {
  return (
    <section id="apropos" className="relative px-6 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Round portrait */}
        <Reveal className="flex justify-center">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-gold/40 shadow-[0_18px_44px_-18px_rgba(70,52,22,0.4)] sm:h-44 sm:w-44">
            <Image
              src="/images/fabien.jpg"
              alt="Fabien Quetel, fondateur de LS Consulting"
              fill
              sizes="176px"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <span className="eyebrow mt-8 block">À propos</span>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.1]">
            <RevealText text="Je ne théorise pas la croissance." />{" "}
            <RevealText text="Je l'exécute." accent />
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted">
            Après plus de 20 ans comme décideur dans le retail et après avoir
            créé plusieurs entreprises, j&apos;accompagne aujourd&apos;hui les
            dirigeants à structurer, développer et accélérer leur activité.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-[color:var(--hairline)] pt-10"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              data-reveal-child
              className="reveal flex flex-col items-center"
            >
              <span className="font-display text-4xl text-gold sm:text-5xl">
                <CountUp value={s.value} />
              </span>
              <span className="mt-2 max-w-[10rem] text-[0.65rem] uppercase leading-snug tracking-[0.16em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
