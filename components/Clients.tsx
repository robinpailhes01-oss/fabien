"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Logo = { name: string; src?: string; fallbackWordmark?: boolean };

// Companies Fabien has worked with — logos shown without chips ("sans fond").
const logos: Logo[] = [
  { name: "GIFI", src: "/logos/gifi.svg" },
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
    <span className="flex flex-col items-center leading-none text-ink/80">
      <span className="font-display text-[1.7rem] font-black tracking-[-0.05em]">
        LS
      </span>
      <span className="mt-1 text-[0.45rem] font-normal uppercase tracking-[0.42em]">
        Consulting
      </span>
    </span>
  );
}

function LogoItem({ logo }: { logo: Logo }) {
  const [errored, setErrored] = useState(false);
  const showWordmark = !logo.src || (logo.fallbackWordmark && errored);

  return (
    <span className="mr-16 flex h-14 shrink-0 items-center sm:mr-24">
      {showWordmark ? (
        <Wordmark />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="max-h-11 w-auto max-w-[10rem] object-contain opacity-85 transition-opacity duration-500 hover:opacity-100 sm:max-h-12 sm:max-w-[12rem]"
        />
      )}
    </span>
  );
}

export default function Clients() {
  // One animated track holding the set twice -> seamless -50% loop.
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-[color:var(--hairline)] py-12 sm:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <p className="px-6 text-center text-xs uppercase tracking-[0.28em] text-muted">
          Entreprises <span className="text-gold">accompagnées</span>
        </p>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {doubled.map((l, i) => (
              <LogoItem key={`${l.name}-${i}`} logo={l} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
