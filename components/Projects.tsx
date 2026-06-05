import Reveal from "./Reveal";
import { projects } from "./projects-data";

function Arrow() {
  return (
    <svg
      width="20"
      height="20"
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
    <section id="projets" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Mes projets</span>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1] tracking-tight">
              L&apos;écosystème
              <span className="text-gradient-gold"> Fabien</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-cream-dim">
            Cinq marques, cinq mondes. Chacune pensée comme une signature.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {projects.map((p) => {
            const Wrapper = p.href ? "a" : "div";
            const linkProps = p.href
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Reveal key={p.index}>
                <Wrapper
                  {...linkProps}
                  className="group relative block border-t border-cream/10 py-9 transition-colors duration-500 last:border-b hover:border-gold/40"
                >
                  {/* Hover wash */}
                  <span className="pointer-events-none absolute inset-0 -z-0 origin-bottom scale-y-0 bg-gradient-to-r from-gold/[0.06] to-transparent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                  <div className="relative z-10 grid grid-cols-1 items-start gap-5 md:grid-cols-12 md:items-center">
                    <span className="font-display text-sm text-gold md:col-span-1">
                      {p.index}
                    </span>

                    <div className="md:col-span-4">
                      <h3 className="font-display text-3xl font-light tracking-tight text-cream transition-colors duration-500 group-hover:text-gold-light sm:text-4xl">
                        {p.name}
                      </h3>
                      <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-cream-dim">
                        {p.category}
                      </span>
                    </div>

                    <p className="text-sm font-light leading-relaxed text-cream-dim md:col-span-5">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                      <span className="text-xs text-cream-dim md:hidden">
                        {p.year}
                      </span>
                      <span className="flex items-center gap-2 text-cream transition-colors duration-500 group-hover:text-gold">
                        {p.href ? (
                          <>
                            <span className="text-xs uppercase tracking-[0.2em]">
                              Visiter
                            </span>
                            <Arrow />
                          </>
                        ) : (
                          <span className="text-xs uppercase tracking-[0.2em] text-cream-dim">
                            Bientôt
                          </span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* tags */}
                  <div className="relative z-10 mt-4 flex flex-wrap gap-2 md:ml-[8.33%]">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-cream/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-cream-dim"
                      >
                        {t}
                      </span>
                    ))}
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
