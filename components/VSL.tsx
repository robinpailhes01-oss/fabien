import Reveal from "./Reveal";
import { VSL_YOUTUBE_ID } from "./site-config";

// Sits directly below the Hero, whose headline already reads
// "Ma méthode en quelques secondes." — no need to repeat a title here.
export default function VSL() {
  return (
    <section id="vsl" className="relative px-6 pb-24 pt-2 sm:pb-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
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
