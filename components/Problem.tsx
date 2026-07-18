import Reveal from "./Reveal";
import RevealText from "./RevealText";

const pains = [
  {
    n: "01",
    title: "Une offre solide, mais invisible",
    text: "Vous avez quelque chose de rare entre les mains — et pourtant personne ne le connaît vraiment.",
  },
  {
    n: "02",
    title: "Beaucoup d'actions, aucune direction",
    text: "Vous multipliez posts, pubs et idées sans stratégie qui les relie ni les fasse converger.",
  },
  {
    n: "03",
    title: "Un plafond que vous ne savez pas percer",
    text: "Vous sentez que vous pourriez aller 10× plus loin — sans savoir par où commencer.",
  },
];

export default function Problem() {
  return (
    <section id="constat" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Le constat</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4rem)] font-light leading-[1.1] tracking-tight">
            <RevealText text="Une marque désirable qui ne scale pas," />{" "}
            <RevealText text="c'est une fortune qui dort." accent />
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {pains.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="group flex items-start gap-6 border-t border-ink/10 py-8 last:border-b sm:gap-10">
                <span className="font-display text-2xl text-gold/70 sm:text-3xl">
                  {p.n}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light tracking-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 max-w-2xl font-display text-2xl font-light leading-snug tracking-tight sm:text-3xl">
            Ce n&apos;est pas un problème de talent.{" "}
            <span className="text-gradient-gold">
              C&apos;est un problème de structure.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
