import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { BOOKING_URL, CTA_LABEL } from "./site-config";

const pillars = [
  {
    n: "I",
    title: "Stratégie business",
    promise:
      "Une vision claire, un plan d'exécution net. Vous savez exactement où aller et comment y arriver.",
    points: [
      "Positionnement qui justifie vos prix premium",
      "Modèle économique et priorités de croissance",
      "Feuille de route trimestrielle actionnable",
    ],
  },
  {
    n: "II",
    title: "Acquisition client",
    promise:
      "Des canaux qui amènent les bons clients, de façon régulière et rentable.",
    points: [
      "Tunnels d'acquisition testés et mesurés",
      "Offres et messages qui convertissent",
      "Coût d'acquisition maîtrisé, marge protégée",
    ],
  },
  {
    n: "III",
    title: "Développement digital",
    promise:
      "Un écosystème en ligne qui transforme l'attention en chiffre d'affaires.",
    points: [
      "Sites et pages de vente pensés pour convertir",
      "Présence de marque cohérente et premium",
      "Automatisations qui font gagner temps et ventes",
    ],
  },
];

const forYou = [
  "Fondateurs de marques ou de startups prêts à passer à l'échelle",
  "Entrepreneurs ambitieux qui veulent une marque désirable, pas un logo de plus",
  "Ceux qui cherchent l'exécution, pas une nouvelle théorie",
  "Porteurs d'une offre solide qui veulent enfin la faire connaître",
];

const notForYou = [
  "Ceux qui cherchent un raccourci magique sans rien implémenter",
  "Les projets sans réelle volonté d'investir dans leur croissance",
];

function PillarIcon({ i }: { i: number }) {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (i === 0)
    return (
      <svg {...p}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    );
  if (i === 1)
    return (
      <svg {...p}>
        <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
      </svg>
    );
  return (
    <svg {...p}>
      <rect x="3" y="4.5" width="18" height="12.5" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

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

function Cross() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-muted"
    >
      <path
        d="M7 7l10 10M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Offer() {
  return (
    <section
      id="offre"
      className="relative border-y border-ink/10 bg-paper-soft px-6 py-28 sm:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">L&apos;accompagnement</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="LS Consulting — votre croissance," />{" "}
            <RevealText text="structurée." accent />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-muted">
            Trois leviers, une seule direction : le scale.
          </p>
        </Reveal>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => (
            <Reveal key={p.n} className="h-full">
              <div className="card-lift panel panel--glow flex h-full flex-col rounded-2xl p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="icon-badge">
                    <PillarIcon i={idx} />
                  </span>
                  <span className="tag-badge">Pilier {p.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-light tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {p.promise}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* For / not for */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="panel panel--glow rounded-2xl p-8 sm:p-10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold">
              Pour qui c&apos;est
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {forYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed">
                  <Check />
                  <span className="font-light text-ink-soft">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="panel rounded-2xl p-8 sm:p-10">
            <h3 className="text-xs uppercase tracking-[0.25em] text-muted">
              Pour qui ce n&apos;est pas
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {notForYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed">
                  <Cross />
                  <span className="font-light text-muted">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-gold px-9 py-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-500"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-paper">
              {CTA_LABEL}
            </span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
