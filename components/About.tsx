import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import RevealText from "./RevealText";
import CountUp from "./CountUp";

const stats = [
  { value: "5", label: "Marques fondées de zéro" },
  { value: "4", label: "Secteurs maîtrisés" },
  { value: "100%", label: "Bâti, pas sous-traité" },
];

export default function About() {
  return (
    <section id="apropos" className="relative px-6 py-20 sm:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">À propos</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.08] tracking-tight">
              <RevealText text="Je ne théorise pas la croissance." />{" "}
              <RevealText text="Je l'exécute." accent />
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted">
              La plupart des consultants vendent des slides. Moi, j&apos;ai
              construit cinq marques de zéro. Cette expérience, je la mets au
              service d&apos;une seule chose : faire scaler la vôtre.
            </p>
          </Reveal>

          <Reveal
            stagger
            className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal-child
                className="reveal flex flex-col items-start"
              >
                <span className="font-display text-5xl font-light text-gold sm:text-6xl">
                  <CountUp value={s.value} />
                </span>
                <span className="mt-3 text-[0.7rem] uppercase leading-snug tracking-[0.18em] text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink/10">
            <RevealImage
              src="/images/fabien.jpg"
              alt="Fabien, fondateur de LS Consulting"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="absolute inset-0"
              priority
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 z-[2] rounded-full border border-paper/15 bg-ink/70 px-3.5 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-paper backdrop-blur-md">
              Fabien · Fondateur
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
