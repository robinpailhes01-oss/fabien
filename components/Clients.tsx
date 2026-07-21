"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Logo = { name: string; src?: string; fallbackWordmark?: boolean };

// Brand + client logos.
// LS Consulting: drop the real file at /public/logos/ls.png and it appears
// automatically (until then, a styled "LS / CONSULTING" wordmark shows).
const logos: Logo[] = [
  { name: "Sparta Académie", src: "/logos/sparta.png" },
  { name: "Champagne Perla", src: "/logos/perla.png" },
  { name: "Layonn", src: "/logos/layonn.png" },
  { name: "Love Explorers", src: "/logos/lovexplorers.png" },
  { name: "Biwiz", src: "/logos/biwiz.svg" },
  { name: "Maison Bonnaire", src: "/logos/bonnaire.png" },
  { name: "LS Consulting", src: "/logos/ls.png", fallbackWordmark: true },
];

function Wordmark() {
  return (
    <span className="flex flex-col items-center leading-none text-[#262626]">
      <span className="font-display text-[2rem] font-black tracking-[-0.05em]">
        LS
      </span>
      <span className="mt-1.5 text-[0.5rem] font-normal uppercase tracking-[0.42em]">
        Consulting
      </span>
    </span>
  );
}

function LogoChip({ logo }: { logo: Logo }) {
  const [errored, setErrored] = useState(false);
  const showWordmark = !logo.src || (logo.fallbackWordmark && errored);

  return (
    <div className="mr-6 flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--panel-border)] bg-white px-6 shadow-[0_10px_28px_-18px_rgba(70,52,22,0.25)] sm:mr-8 sm:h-24 sm:w-52">
      {showWordmark ? (
        <Wordmark />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="max-h-11 w-auto max-w-full object-contain sm:max-h-14"
        />
      )}
    </div>
  );
}

export default function Clients() {
  // One animated track holding the set twice -> seamless -50% loop.
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-[color:var(--hairline)] py-12 sm:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <p className="px-6 text-center text-xs uppercase tracking-[0.28em] text-muted">
          Ils me font <span className="text-gold">confiance</span>
        </p>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {doubled.map((l, i) => (
              <LogoChip key={`${l.name}-${i}`} logo={l} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
