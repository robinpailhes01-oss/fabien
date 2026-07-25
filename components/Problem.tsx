import { Fragment } from "react";
import Reveal from "./Reveal";
import RevealText from "./RevealText";

const steps = [
  {
    n: "01",
    title: "Clarté",
    sub: "Appel découverte + Clarity Session",
    text: "Clarté, alignement, priorités définies.",
    violet: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Exécution",
    sub: "Accompagnement 360",
    text: "Mise en œuvre étape par étape, sur le terrain.",
    violet: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Croissance",
    sub: "Résultats suivis et mesurés",
    text: "Pilotage, optimisation, accélération.",
    violet: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 17l5-5 4 4 7-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8h5v5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function Arrow() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      className="hidden shrink-0 text-gold/50 lg:block"
    >
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Problem() {
  return (
    <section id="methode" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">La méthode</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1]">
            <RevealText text="Une méthode simple." />{" "}
            <RevealText text="Des résultats concrets." accent />
          </h2>
        </Reveal>

        {/* Horizontal, left-to-right flow */}
        <div className="mt-14 flex flex-col items-stretch gap-5 lg:flex-row lg:items-center">
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <Reveal delay={i * 90} className="flex-1">
                <div className="card-lift panel flex h-full flex-col rounded-3xl p-8">
                  <div className="flex items-center justify-between">
                    <span
                      className={`icon-badge ${s.violet ? "icon-badge--violet" : ""}`}
                    >
                      {s.icon}
                    </span>
                    <span
                      className={`tag-badge ${s.violet ? "tag-badge--violet" : ""}`}
                    >
                      Étape {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                  <p
                    className={`mt-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] ${
                      s.violet ? "text-violet" : "text-gold"
                    }`}
                  >
                    {s.sub}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </Reveal>
              {i < steps.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
