import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "5", label: "Marques fondées de zéro" },
  { value: "4", label: "Secteurs maîtrisés" },
  { value: "100%", label: "Bâti, pas sous-traité" },
];

export default function About() {
  return (
    <section id="apropos" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">À propos</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.04] tracking-tight">
              Je ne théorise pas la croissance.
              <span className="text-gradient-gold"> Je l&apos;exécute.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted">
              La plupart des consultants vendent des slides. Moi, j&apos;ai
              construit. Cinq marques nées d&apos;une feuille blanche : une maison
              de champagne de prestige, une marque de mode made in France, une
              plateforme de lieux d&apos;exception, un studio média. Chaque
              positionnement, chaque tunnel d&apos;acquisition, chaque euro de
              croissance : pensé, testé, prouvé sur le terrain. Aujourd&apos;hui,
              je mets cette expérience au service d&apos;une seule chose : faire
              scaler votre marque.
            </p>
          </Reveal>

          <Reveal
            stagger
            className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal-child
                className="reveal flex flex-col items-start"
              >
                <span className="font-display text-5xl font-light text-gold sm:text-6xl">
                  {s.value}
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
            <Image
              src="/images/authority.jpg"
              alt="L'ambition derrière LS Consulting"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
