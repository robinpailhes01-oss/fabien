import Reveal from "./Reveal";
import RevealText from "./RevealText";
import {
  BOOKING_URL,
  CALENDLY_CLARITY,
  CALENDLY_BUSINESS360,
} from "./site-config";

type Offer = {
  n: string;
  name: string;
  tagline: string;
  format: string;
  price: string;
  priceNote?: string;
  points: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const offers: Offer[] = [
  {
    n: "01",
    name: "Clarity Session",
    tagline: "Prendre du recul, clarifier vos priorités.",
    format: "2h · Présentiel ou visio",
    price: "250 €",
    priceNote: "TTC",
    points: [
      "Analyse du business",
      "3 à 5 priorités à fort impact",
      "Carte mentale",
      "Feuille de route personnalisée",
    ],
    cta: "Réserver ma session",
    href: CALENDLY_CLARITY,
  },
  {
    n: "02",
    name: "Immersion 360",
    tagline: "Une immersion complète au cœur de votre entreprise.",
    format: "2 jours · Sur site",
    price: "890 €",
    priceNote: "TTC",
    points: [
      "Audit 360 de l'entreprise",
      "Analyse CA, marges & objectifs",
      "Analyse des process, outils & performances",
      "Accompagnement managérial si nécessaire",
      "Plan d'action priorisé",
    ],
    cta: "Réserver mon immersion",
    href: CALENDLY_BUSINESS360,
    featured: true,
  },
  {
    n: "03",
    name: "Accompagnement sur mesure",
    tagline: "Mettre en œuvre, piloter et accélérer les résultats.",
    format: "1 semaine à 3 mois+",
    price: "Sur mesure",
    points: [
      "Intégration dans l'entreprise selon les besoins",
      "Pilotage stratégique",
      "Mise en œuvre des actions",
      "Coaching",
      "Résultats mesurables",
    ],
    cta: "Prendre rendez-vous",
    href: BOOKING_URL,
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
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="3 piliers" />{" "}
            <RevealText text="d'accompagnement." accent />
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((o) => (
            <Reveal key={o.n} className="h-full">
              <div
                className={`card-lift panel relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
                  o.featured
                    ? "ring-2 ring-gold/60 shadow-[0_36px_80px_-40px_rgba(169,130,63,0.5)] lg:-my-4 lg:scale-[1.03]"
                    : ""
                }`}
              >
                {o.featured && (
                  <span className="absolute right-6 top-6 tag-badge">
                    Offre principale
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

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl">{o.price}</span>
                  {o.priceNote && (
                    <span className="text-xs uppercase tracking-[0.15em] text-muted">
                      {o.priceNote}
                    </span>
                  )}
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-[color:var(--hairline)] pt-6">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check />
                      <span className="font-light text-ink-soft">{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex items-center justify-center px-6 py-3.5 text-sm ${
                    o.featured
                      ? "btn-gold"
                      : "rounded-full border border-gold/40 font-medium text-ink transition-colors duration-500 hover:bg-gold hover:text-white"
                  }`}
                >
                  {o.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm font-light text-muted">
            Pas encore sûr ?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-gold font-medium"
            >
              Commencez par un appel découverte offert de 30 min
            </a>{" "}
            — sans engagement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
