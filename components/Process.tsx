"use client";

import { useEffect, useRef, useState } from "react";
import RevealText from "./RevealText";

const steps = [
  {
    n: "01",
    title: "Appel stratégique",
    text: "On clarifie votre situation, vos objectifs et le potentiel réel de votre marque.",
  },
  {
    n: "02",
    title: "Diagnostic & plan",
    text: "J'audite stratégie, acquisition et digital, puis je trace la feuille de route prioritaire.",
  },
  {
    n: "03",
    title: "Exécution",
    text: "On implémente ensemble : positionnement, canaux, tunnels, écosystème digital.",
  },
  {
    n: "04",
    title: "Scale",
    text: "On optimise ce qui marche, on coupe le reste, et on accélère la croissance.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="methode" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Sticky title */}
        <div className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
          <span className="eyebrow">La méthode</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.8rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="Du diagnostic au scale," />{" "}
            <RevealText text="en quatre temps." accent />
          </h2>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-display text-2xl text-gold">
              {steps[active].n}
            </span>
            <div className="h-px w-24 overflow-hidden bg-ink/10">
              <div
                className="h-full bg-gold transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: `${((active + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              {active + 1} / {steps.length}
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="flex min-h-[52vh] flex-col justify-center border-t border-ink/10 py-10"
            >
              <span
                className={`font-display text-6xl font-light transition-colors duration-500 sm:text-7xl ${
                  i === active ? "text-gold" : "text-ink/15"
                }`}
              >
                {s.n}
              </span>
              <h3
                className={`mt-5 font-display text-2xl font-light tracking-tight transition-colors duration-500 sm:text-3xl ${
                  i === active ? "text-ink" : "text-muted/50"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 max-w-md text-sm font-light leading-relaxed transition-colors duration-500 ${
                  i === active ? "text-muted" : "text-muted/30"
                }`}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
