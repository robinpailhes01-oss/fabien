import Image from "next/image";
import Reveal from "./Reveal";

type Logo = {
  name: string;
  src?: string;
  w: number;
  h: number;
};

// Brand + client logos. LS Consulting renders as a wordmark
// until its logo file is added to /public/logos/ls.png.
const logos: Logo[] = [
  { name: "Sparta Académie", src: "/logos/sparta.png", w: 1034, h: 266 },
  { name: "Champagne Perla", src: "/logos/perla.png", w: 1247, h: 333 },
  { name: "Layonn", src: "/logos/layonn.png", w: 552, h: 164 },
  { name: "Love Explorers", src: "/logos/lovexplorers.png", w: 222, h: 113 },
  { name: "LS Consulting", w: 0, h: 0 },
];

function LogoChip({ logo }: { logo: Logo }) {
  return (
    <div className="mr-6 flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--panel-border)] bg-white px-6 shadow-[0_10px_28px_-18px_rgba(70,52,22,0.25)] sm:mr-8 sm:h-24 sm:w-52">
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.name}
          width={logo.w}
          height={logo.h}
          className="max-h-12 w-auto max-w-full object-contain sm:max-h-14"
        />
      ) : (
        <span className="text-center leading-tight text-neutral-800">
          <span className="block text-xl font-extrabold tracking-tight">
            LS<span className="align-super text-[0.5rem]">.</span>
          </span>
          <span className="block text-[0.55rem] font-medium uppercase tracking-[0.35em]">
            Consulting
          </span>
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  // One animated track containing the set twice -> seamless -50% loop.
  const doubled = [...logos, ...logos];
  return (
    <section className="relative border-y border-[color:var(--hairline)] py-12 sm:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <p className="px-6 text-center text-xs uppercase tracking-[0.28em] text-muted">
          Ils me font <span className="text-gold">confiance</span>
        </p>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {doubled.map((l, i) => (
              <LogoChip key={`${l.name}-${i}`} logo={l} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
