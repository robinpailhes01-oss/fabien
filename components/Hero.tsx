"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { BOOKING_URL, CTA_LABEL } from "./site-config";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { theme } = useTheme();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Content drifts up and fades; the 3D layer drifts slower (depth).
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const layerY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* 3D layer */}
      <motion.div style={{ y: layerY }} className="absolute inset-0 z-0">
        <Hero3D key={theme} theme={theme} />
      </motion.div>

      {/* Vignette / gradient to keep text legible */}
      <div className="hero-veil-radial pointer-events-none absolute inset-0 z-10" />
      <div className="hero-veil-linear pointer-events-none absolute inset-0 z-10" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-9 text-[0.66rem] font-light uppercase tracking-[0.45em] text-gold/90"
        >
          Fabien — Fondateur · Opérateur · Consultant
        </motion.span>

        <h1 className="font-display text-[clamp(2.4rem,7.5vw,6rem)] font-light leading-[1] tracking-[-0.01em]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease }}
            className="block"
          >
            J&apos;ai bâti 5 marques d&apos;exception.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.62, ease }}
            className="block text-gradient-gold"
          >
            Construisons la vôtre.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mt-10 max-w-xl text-balance text-sm font-light leading-loose tracking-wide text-muted sm:text-base"
        >
          Stratégie business, acquisition client, développement digital. Je
          transforme votre marque en machine de croissance — avec la méthode qui
          a lancé cinq entreprises de prestige.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease }}
          className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-10"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-gold/40 bg-gold/0 px-9 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-500"
          >
            <span className="relative z-10">{CTA_LABEL}</span>
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </a>
          <a
            href="#methode"
            className="link-gold text-[0.7rem] font-light uppercase tracking-[0.24em]"
          >
            Découvrir la méthode
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.35em] text-muted">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-ink/20">
          <span className="animate-scrollcue absolute left-0 top-0 h-1/2 w-full bg-gold" />
        </span>
      </motion.div>
    </section>
  );
}
