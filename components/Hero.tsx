"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { BOOKING_URL, CTA_LABEL } from "./site-config";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";

const ease = [0.16, 1, 0.3, 1] as const;

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
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Premium gold glow (replaces the 3D bubbles) */}
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
        className="relative z-20 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="mb-9 text-[0.66rem] font-light uppercase tracking-[0.5em] text-gold/90"
        >
          Fabien · LS Consulting
        </motion.span>

        <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-light leading-[1.02] tracking-[-0.01em]">
          <span className="block">
            <RevealText text="J'ai bâti 5 marques." />
          </span>
          <span className="block">
            <RevealText text="Construisons la vôtre." accent />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-9 max-w-md text-sm font-light leading-relaxed tracking-wide text-muted"
        >
          Stratégie, acquisition, digital — votre marque en machine de
          croissance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-9"
        >
          <Magnetic>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-full border border-gold/40 px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-500"
            >
              <span className="relative z-10">{CTA_LABEL}</span>
              <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </a>
          </Magnetic>
          <a
            href="#methode"
            className="link-gold text-[0.7rem] font-light uppercase tracking-[0.24em]"
          >
            La méthode
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="relative h-10 w-px overflow-hidden bg-ink/15">
          <span className="animate-scrollcue absolute left-0 top-0 h-1/2 w-full bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
