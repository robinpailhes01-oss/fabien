const words = [
  "Champagne",
  "Mode",
  "Romance",
  "Média",
  "Conseil",
  "Élégance",
  "Made in France",
];

export default function Marquee() {
  const sequence = [...words, ...words];
  return (
    <div className="relative flex overflow-hidden border-y border-cream/10 py-7">
      <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-light text-cream-dim sm:text-3xl">
              {w}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8"
      >
        {sequence.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-light text-cream-dim sm:text-3xl">
              {w}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
