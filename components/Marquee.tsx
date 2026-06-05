import Reveal from "./Reveal";

const words = ["Champagne", "Mode", "Romance", "Média", "Conseil"];

export default function Marquee() {
  return (
    <Reveal className="px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="hairline w-24" />
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {words.map((w, i) => (
            <li key={w} className="flex items-center gap-8">
              <span className="text-xs font-light uppercase tracking-[0.35em] text-cream-dim">
                {w}
              </span>
              {i < words.length - 1 && (
                <span className="text-[0.5rem] text-gold/60">✦</span>
              )}
            </li>
          ))}
        </ul>
        <div className="hairline w-24" />
      </div>
    </Reveal>
  );
}
