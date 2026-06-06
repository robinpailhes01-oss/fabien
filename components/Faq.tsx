"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "À qui s'adresse LS Consulting ?",
    a: "Aux fondateurs de marques et entrepreneurs ambitieux qui veulent structurer leur croissance : stratégie, acquisition et digital. Que vous lanciez ou que vous cherchiez à scaler, l'accompagnement s'adapte à votre stade.",
  },
  {
    q: "Comment se déroule l'accompagnement ?",
    a: "Tout commence par un appel stratégique offert. Ensuite, selon vos besoins : diagnostic, feuille de route, puis exécution accompagnée sur la stratégie, l'acquisition et le digital. Un format sur mesure, jamais un programme générique.",
  },
  {
    q: "Combien ça coûte ?",
    a: "L'investissement dépend de votre projet et du périmètre. C'est un accompagnement haut de gamme, pensé pour générer un retour bien supérieur à son coût. Le premier appel sert justement à définir le bon format pour vous.",
  },
  {
    q: "Quand vais-je voir des résultats ?",
    a: "La clarté stratégique est immédiate dès les premières semaines. Les effets sur l'acquisition et les ventes s'installent généralement sur quelques mois, selon votre marché et votre rythme d'exécution.",
  },
  {
    q: "Vous garantissez les résultats ?",
    a: "Je garantis mon engagement, ma méthode et une exécution rigoureuse. Aucun consultant sérieux ne promet des chiffres magiques : les résultats dépendent aussi de votre implication. C'est un partenariat, pas une baguette magique.",
  },
  {
    q: "En quoi êtes-vous différent des autres consultants ?",
    a: "Je n'ai pas appris la croissance dans les livres. J'ai fondé cinq marques de zéro. Vous bénéficiez d'un opérateur qui a déjà fait, pas seulement conseillé.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl font-light tracking-tight sm:text-2xl">
          {q}
        </span>
        <span
          className={`relative h-4 w-4 shrink-0 text-gold transition-transform duration-500 ${open ? "rotate-45" : ""}`}
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm font-light leading-relaxed text-muted">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.05] tracking-tight">
            Tout ce que vous devez savoir.
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
