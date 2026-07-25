import Reveal from "./Reveal";
import RevealText from "./RevealText";

type Brand = { name: string; src?: string; href?: string };

// Fabien's five integrated brands — single-line scrolling band.
const brands: Brand[] = [
  { name: "Maison Perla", src: "/logos/perla.png", href: "https://maisonperla.com/" },
  { name: "Layonn", src: "/logos/layonn.png", href: "https://layonnstyle.com/" },
  { name: "Dream Studio" },
  {
    name: "Love Explorers",
    src: "/logos/lovexplorers.png",
    href: "https://www.lovexplorers.com/",
  },
  { name: "Vision'R Media" },
];

function BrandItem({ brand }: { brand: Brand }) {
  const content = brand.src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.src}
      alt={brand.name}
      loading="lazy"
      className="max-h-10 w-auto object-contain opacity-80 transition-opacity duration-500 hover:opacity-100 sm:max-h-12"
    />
  ) : (
    <span className="whitespace-nowrap font-display text-2xl text-ink/70 transition-colors duration-500 hover:text-ink sm:text-3xl">
      {brand.name}
    </span>
  );

  return (
    <span className="mr-14 flex shrink-0 items-center sm:mr-20">
      {brand.href ? (
        <a
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={brand.name}
        >
          {content}
        </a>
      ) : (
        content
      )}
      <span className="ml-14 text-gold/50 sm:ml-20">✦</span>
    </span>
  );
}

export default function Projects() {
  const doubled = [...brands, ...brands];
  return (
    <section
      id="marques"
      className="relative border-y border-[color:var(--hairline)] px-0 py-20 sm:py-24"
    >
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">Mon univers de marques</span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.1]">
          <RevealText text="Un écosystème au service" />{" "}
          <RevealText text="de votre entreprise." accent />
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="marquee-mask mt-12 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {doubled.map((b, i) => (
              <BrandItem key={`${b.name}-${i}`} brand={b} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
