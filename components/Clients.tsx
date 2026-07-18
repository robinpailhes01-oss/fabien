import Reveal from "./Reveal";

const clients = ["Gifi", "Sparta", "Jean Ba Jardin", "Biwizz"];

export default function Clients() {
  return (
    <section className="relative border-y border-[color:var(--hairline)] px-6 py-12 sm:py-14">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted lg:text-left">
          Ils me font <span className="text-gold">confiance</span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <li
              key={c}
              className="font-display text-2xl font-light tracking-tight text-ink/70 transition-colors duration-500 hover:text-ink sm:text-3xl"
            >
              {c}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
