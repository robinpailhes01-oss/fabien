import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Appel stratégique",
    text: "On clarifie votre situation, vos objectifs et le potentiel réel de votre marque.",
  },
  {
    n: "02",
    title: "Diagnostic & plan",
    text: "J'audite stratégie, acquisition et digital, puis je trace la feuille de route prioritaire.",
  },
  {
    n: "03",
    title: "Exécution",
    text: "On implémente ensemble : positionnement, canaux, tunnels, écosystème digital.",
  },
  {
    n: "04",
    title: "Scale",
    text: "On optimise ce qui marche, on coupe le reste, et on accélère la croissance.",
  },
];

export default function Process() {
  return (
    <section id="methode" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">La méthode</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1.02] tracking-tight">
            Du diagnostic au scale,
            <span className="text-gradient-gold"> en quatre temps.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-5xl font-light text-gold">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                </div>
                <h3 className="font-display text-xl font-light tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
