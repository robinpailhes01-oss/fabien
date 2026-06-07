import Reveal from "./Reveal";

// Placeholder testimonials — replace names/brands with real clients.
const testimonials = [
  {
    quote:
      "En trois mois, notre positionnement est devenu enfin clair et nos ventes ont suivi. Fabien voit ce que les autres ne voient pas.",
    name: "[Prénom Nom]",
    role: "Fondatrice, [Marque mode]",
  },
  {
    quote:
      "On est passés d'une acquisition aléatoire à un tunnel qui tourne tout seul. Le meilleur investissement de l'année.",
    name: "[Prénom Nom]",
    role: "CEO, [Startup SaaS]",
  },
  {
    quote:
      "Une marque premium crédible et un site qui convertit vraiment. L'exécution est au rendez-vous, pas que les idées.",
    name: "[Prénom Nom]",
    role: "Cofondateur, [Marque lifestyle]",
  },
];

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative border-y border-ink/10 bg-paper-soft px-6 py-28 sm:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ils témoignent</span>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[1] tracking-tight">
            Des fondateurs,
            <span className="text-gradient-gold"> des résultats.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-8 sm:p-9">
                <span className="font-display text-5xl leading-none text-gold/50">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-[0.95rem] font-light leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-display text-lg font-light">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-muted">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
