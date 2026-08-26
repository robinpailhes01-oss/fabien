"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { BOOKING_URL, CTA_LABEL, VSL_YOUTUBE_ID } from "./site-config";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";
import CountUp from "./CountUp";

const ease = [0.16, 1, 0.3, 1] as const;

const audiences = ["Décideurs", "Managers", "Entrepreneurs francophones"];

const zones = [
  { flag: "🇫🇷", name: "France" },
  { flag: "🇪🇸", name: "Espagne" },
  { flag: "🇮🇹", name: "Italie" },
  { flag: "🇮🇩", name: "Bali" },
  { flag: "🇲🇽", name: "Mexique" },
];

const stats = [
  { value: "20", prefix: "+", label: "ans d'expérience terrain" },
  { value: "100+", prefix: "+", label: "entreprises accompagnées" },
  { value: "6", prefix: "", label: "marques bâties" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Glow gently follows the cursor.
  const px: MotionValue<number> = useSpring(0, { stiffness: 50, damping: 20 });
  const py: MotionValue<number> = useSpring(0, { stiffness: 50, damping: 20 });
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 50);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 36);
  };

  return (
    <section
      ref={ref}
      id="accueil"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-28 sm:pt-24"
    >
      {/* Premium gold glow */}
      <motion.div style={{ y: glowY }} className="absolute inset-0 z-0">
        <motion.div style={{ x: px, y: py }} className="absolute inset-0">
          <span className="hero-glow" />
          <span className="hero-glow hero-glow--top" />
        </motion.div>
      </motion.div>

      {/* Vignette */}
      <div className="hero-veil-linear pointer-events-none absolute inset-0 z-10" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex flex-col items-center px-6 pb-16 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="mb-8 text-[0.66rem] font-light uppercase tracking-[0.5em] text-gold/90"
        >
          LS Consulting · Conseil stratégique
        </motion.span>

        <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.2rem,5.6vw,4.3rem)] leading-[1.06]">
          <RevealText text="Ma méthode en quelques secondes." accent />
        </h1>

        {/* VSL — right under the headline */}
        <motion.div
          id="vsl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-8 w-full max-w-2xl"
        >
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="mt-8 max-w-lg text-base font-light leading-relaxed text-muted"
        >
          Un écosystème de cinq marques intégrées au service de votre
          croissance.
        </motion.p>

        {/* Audiences */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
        >
          {audiences.map((a) => (
            <li key={a} className="tag-badge">
              {a}
            </li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease }}
          className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
        >
          <Magnetic>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-9 py-4 text-sm"
            >
              {CTA_LABEL}
            </a>
          </Magnetic>
          <a href="#offres" className="link-gold text-sm font-medium">
            Découvrir les offres
          </a>
        </motion.div>

        {/* Presence */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {zones.map((z) => (
            <li
              key={z.name}
              className="flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted"
            >
              <span className="text-sm">{z.flag}</span>
              {z.name}
            </li>
          ))}
        </motion.ul>

        {/* Stats — Mindeo-style row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center border-l border-gold/30 first:border-l-0"
            >
              <span className="font-display text-3xl text-ink sm:text-4xl">
                {s.prefix === "+" && !s.value.endsWith("+") ? "+" : ""}
                <CountUp value={s.value} />
              </span>
              <span className="mt-1 max-w-[9rem] text-[0.62rem] uppercase leading-snug tracking-[0.16em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
