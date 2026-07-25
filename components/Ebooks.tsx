import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { CONTACT_EMAIL } from "./site-config";

// PayPal links to come — CTA falls back to email until then.
const ebooks = [
  { tag: "Mindset", title: "Clarté Mentale" },
  { tag: "Méthode", title: "Carte Mentale" },
  { tag: "Média", title: "Lancer son podcast" },
];

export default function Ebooks() {
  return (
    <section id="ressources" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Mes e-books</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1]">
            <RevealText text="Des guides concrets," />{" "}
            <RevealText text="issus du terrain." accent />
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ebooks.map((e) => (
            <Reveal key={e.title} className="h-full">
              <div className="card-lift panel flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="tag-badge">{e.tag}</span>
                  <svg
                    className="text-gold/70"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path d="M14 4v5h5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </div>
                <h3 className="mt-4 flex-1 font-display text-xl leading-tight">
                  {e.title}
                </h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=E-book — ${encodeURIComponent(e.title)}`}
                  className="link-gold mt-5 inline-flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em]"
                >
                  Obtenir
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
