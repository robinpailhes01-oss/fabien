import Reveal from "./Reveal";

const stats = [
  { value: "5", label: "Marques fondées" },
  { value: "100%", label: "Made in France" },
  { value: "∞", label: "Vision long terme" },
];

export default function About() {
  return (
    <section id="apropos" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="eyebrow">À propos</span>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Un entrepreneur,{" "}
              <span className="text-gradient-gold">plusieurs univers</span>,
              une même exigence.
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex items-end">
            <p className="text-base font-light leading-relaxed text-muted">
              Fabien construit des marques qui ont une âme. Du champagne au
              prêt-à-porter, des lieux les plus romantiques au monde au conseil
              stratégique, chaque projet partage la même obsession :
              l&apos;élégance, le sens du détail et une expérience qui laisse une
              empreinte. Son terrain de jeu, c&apos;est le luxe accessible —
              celui qui se ressent plus qu&apos;il ne s&apos;affiche.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 hairline" />

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              data-reveal-child
              className="reveal flex flex-col items-start"
            >
              <span className="font-display text-6xl font-light text-gold sm:text-7xl">
                {s.value}
              </span>
              <span className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
