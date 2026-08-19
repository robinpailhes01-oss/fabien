import Reveal from "./Reveal";
import RevealText from "./RevealText";

// Real Google reviews (LS Consulting Group). Léa's review is lightly
// trimmed for length — trimmed parts marked with "[...]".
const testimonials = [
  {
    quote:
      "J'ai fait appel à Fabien pour clarifier la structure de mon entreprise et affiner ma vision de développement. Ce fut une révélation. [...] Fabien ne se contente pas de donner des conseils génériques ; il a pris le temps de s'immerger dans mon positionnement et mes aspirations pour m'offrir un accompagnement sur mesure. [...] Foncez les yeux fermés !",
    name: "Léa",
    role: "Local Guide · 20 avis",
    avatarBg: "bg-[#4285F4]",
  },
  {
    quote: "Super expérience avec Fabien, je recommande.",
    name: "Thomas Sanchez",
    role: "Local Guide · 17 avis",
    avatarBg: "bg-[#EA4C89]",
  },
  {
    quote:
      "De vrais conseils pertinents et une approche humaine, nous recommandons vivement les services de Fabien et son équipe.",
    name: "toyotomihideyoshi34",
    role: "Local Guide · 24 avis",
    avatarBg: "bg-[#F4A322]",
  },
];

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.09V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.85z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#F4A322]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative border-y border-[color:var(--hairline)] bg-paper-soft px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Témoignages</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1]">
            <RevealText text="Des décideurs." />{" "}
            <RevealText text="Des résultats." accent />
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-soft">
            <GoogleIcon />
            <Stars />
            <span className="font-medium">5.0</span>
            <span className="text-muted">— avis Google vérifiés</span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card-lift panel flex h-full flex-col rounded-2xl p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <Stars />
                  <GoogleIcon />
                </div>
                <blockquote className="mt-5 flex-1 text-[0.92rem] font-light leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[color:var(--hairline)] pt-5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white ${t.avatarBg}`}
                  >
                    {t.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="font-display text-base leading-none">
                      {t.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
