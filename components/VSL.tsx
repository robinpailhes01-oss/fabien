import Reveal from "./Reveal";

export default function VSL() {
  return (
    <section id="vsl" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="eyebrow">La vision</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.05] tracking-tight">
            Découvrez l&apos;histoire derrière chaque marque
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-muted">
            Quelques minutes pour comprendre la philosophie de Fabien et ce qui
            relie ses projets.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          {/* Replace this block with the real VSL embed (YouTube / Vimeo / mux) */}
          <div
            className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/20 bg-paper-soft"
            data-vsl-placeholder
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.12),transparent_70%)]" />

            {/* Soft animated sheen */}
            <div className="pointer-events-none absolute -inset-x-1/2 inset-y-0 -skew-x-12 bg-gradient-to-r from-transparent via-gold/[0.06] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <button
              aria-label="Lire la vidéo"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-paper/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/10"
            >
              <span className="absolute inset-0 animate-ping rounded-full border border-gold/30" />
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path d="M21 13L0 25.99V0L21 13Z" fill="#c9a86a" />
              </svg>
            </button>

            <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.25em] text-muted">
              VSL — bientôt disponible
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
