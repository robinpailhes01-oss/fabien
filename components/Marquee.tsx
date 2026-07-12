const words = [
  "Stratégie business",
  "Acquisition client",
  "Développement digital",
  "Positionnement de marque",
  "Croissance",
  "Exécution",
];

function Track() {
  return (
    <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-display text-3xl font-light text-ink-soft sm:text-5xl">
            {w}
          </span>
          <span className="text-gold">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative border-y border-ink/10 py-8 sm:py-10">
      <div className="marquee-mask flex overflow-hidden">
        <Track />
        <Track />
      </div>
    </section>
  );
}
