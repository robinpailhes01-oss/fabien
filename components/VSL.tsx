import Reveal from "./Reveal";
import { VSL_YOUTUBE_ID } from "./site-config";

export default function VSL() {
  return (
    <section id="vsl" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="eyebrow">La VSL</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.05] tracking-tight">
            Ma méthode en quelques secondes.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/20 bg-paper-soft shadow-[0_30px_70px_-40px_rgba(70,52,22,0.45)]">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VSL_YOUTUBE_ID}?rel=0&modestbranding=1`}
              title="LS Consulting — la méthode de Fabien Quetel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
