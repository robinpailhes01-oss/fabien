import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { BOOKING_URL } from "./site-config";

type Offer = {
  n: string;
  name: string;
  tagline: string;
  format: string;
  points: string[];
  cta: string;
  featured?: boolean;
};

const offers: Offer[] = [
  {
    n: "01",
    name: "Clarity Session",
    tagline: "Une heure pour y voir clair et repartir avec un cap net.",
    format: "En visio · 60 min",
    points: [
      "Diagnostic express de votre situation",
      "Vos priorités et prochaines actions",
      "Une direction claire, tout de suite",
    ],
    cta: "Réserver ma session",
  },
  {
    n: "02",
    name: "Accompagnement",
    tagline: "Un partenariat dans la durée pour exécuter et scaler.",
    format: "Sur 3 à 6 mois",
    points: [
      "Stratégie, acquisition & développement digital",
      "Un partenaire à chaque étape",
      "Des résultats suivis et mesurés",
    ],
    cta: "Candidater",
    featured: true,
  },
  {
    n: "03",
    name: "Audit complet",
    tagline: "Un audit 360° en présentiel, avec plan d'action livré.",
    format: "Présentiel · 1 journée",
    points: [
      "Immersion dans votre entreprise",
      "Analyse marque, stratégie & croissance",
      "Plan d'action détaillé remis",
    ],
    cta: "Réserver mon audit",
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-gold"
    >
      <path
        d="M5 12.5l4 4L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Offer() {
  return (
    <section id="offres" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Travailler ensemble</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="Trois façons" />{" "}
            <RevealText text="d'avancer avec moi." accent />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-muted">
            Du déclic ponctuel à l&apos;accompagnement complet — choisissez le
            niveau qui vous ressemble.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((o) => (
            <Reveal key={o.n} className="h-full">
              <div
                className={`card-lift panel relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
                  o.featured ? "ring-1 ring-gold/40" : ""
                }`}
              >
                {o.featured && (
                  <span className="absolute right-6 top-6 tag-badge">
                    Le plus choisi
                  </span>
                )}
                <span className="font-display text-sm text-gold">{o.n}</span>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight">
                  {o.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                  {o.format}
                </p>
                <p className="mt-5 text-sm font-light leading-relaxed text-ink-soft">
                  {o.tagline}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3 border-t border-[color:var(--hairline)] pt-7">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check />
                      <span className="font-light text-ink-soft">{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-8 flex items-center justify-center rounded-full px-6 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                    o.featured
                      ? "bg-gold text-ink hover:bg-gold-soft"
                      : "border border-gold/40 text-ink hover:bg-gold hover:text-ink"
                  }`}
                >
                  {o.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
