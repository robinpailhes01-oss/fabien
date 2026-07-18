import Reveal from "./Reveal";
import RevealText from "./RevealText";
import { CONTACT_EMAIL } from "./site-config";

const ebooks = [
  {
    tag: "Marque",
    title: "Bâtir une marque désirable",
    desc: "Les 5 piliers qui transforment une entreprise en marque que l'on choisit.",
  },
  {
    tag: "Croissance",
    title: "De 0 à 6 marques",
    desc: "Le système que j'applique pour lancer, structurer et faire scaler.",
  },
  {
    tag: "Acquisition",
    title: "L'acquisition qui convertit",
    desc: "Attirer les bons clients, de façon régulière et rentable.",
  },
];

export default function Ebooks() {
  return (
    <section id="ressources" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ressources gratuites</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="Mes ebooks," />{" "}
            <RevealText text="offerts." accent />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-muted">
            Des guides concrets, tirés de 21 ans de terrain. À télécharger
            librement.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ebooks.map((e) => (
            <Reveal key={e.title} className="h-full">
              <div className="card-lift panel flex h-full flex-col overflow-hidden rounded-3xl">
                {/* Cover */}
                <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br from-gold/25 via-gold/10 to-transparent p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,168,106,0.35),transparent_55%)]" />
                  <span className="relative tag-badge">{e.tag}</span>
                  <svg
                    className="absolute right-6 top-6 text-gold/70"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M14 4v5h5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-light leading-tight tracking-tight">
                    {e.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                    {e.desc}
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Ebook — ${encodeURIComponent(
                      e.title,
                    )}`}
                    className="link-gold mt-6 inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.2em]"
                  >
                    Télécharger
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
