import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import RevealText from "./RevealText";
import { projects } from "./projects-data";

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="realisations" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Réalisations</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1.08] tracking-tight">
            <RevealText text="Cinq marques." />{" "}
            <RevealText text="Une seule méthode." accent />
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const isLink = Boolean(p.href);
            const external = p.href?.startsWith("http");
            const Wrapper = isLink ? "a" : "div";
            const linkProps = isLink
              ? {
                  href: p.href as string,
                  ...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {};

            return (
              <Reveal key={p.index}>
                <Wrapper
                  {...linkProps}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <RevealImage
                      src={p.image}
                      alt={p.name}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="absolute inset-0"
                      imgClassName="grayscale-[0.4] transition-[transform,filter] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 z-10 font-display text-sm text-paper/90">
                      {p.index}
                    </span>
                    <span className="absolute right-5 top-5 z-10 text-[0.62rem] uppercase tracking-[0.2em] text-paper/70">
                      {p.year}
                    </span>

                    {/* Bottom floating label panel */}
                    <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between gap-3 rounded-xl border border-paper/10 bg-ink/55 px-4 py-3 backdrop-blur-md">
                      <div>
                        <h3 className="font-display text-xl font-light leading-none text-paper sm:text-2xl">
                          {p.name}
                        </h3>
                        <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.2em] text-paper/70">
                          {p.category}
                        </span>
                      </div>
                      <span className="flex shrink-0 items-center gap-1.5 text-paper transition-colors duration-500 group-hover:text-gold-soft">
                        {isLink ? (
                          <Arrow />
                        ) : (
                          <span className="text-[0.58rem] uppercase tracking-[0.2em] text-paper/70">
                            Bientôt
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
