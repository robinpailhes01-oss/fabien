"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* 3D layer */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Vignette / gradient to keep text legible */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_50%_42%_at_center,rgba(246,243,237,0.72)_0%,rgba(246,243,237,0.25)_45%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(246,243,237,0.6)_0%,transparent_22%,transparent_70%,rgba(246,243,237,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="mb-9 text-[0.66rem] font-light uppercase tracking-[0.55em] text-gold/90"
        >
          Multi-entrepreneur
        </motion.span>

        <h1 className="font-display text-[clamp(3.2rem,13vw,10rem)] font-light leading-[0.92] tracking-[-0.01em]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45, ease }}
            className="block"
          >
            Fabien
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-10 max-w-lg text-balance text-sm font-light leading-loose tracking-wide text-muted sm:text-base"
        >
          Bâtisseur de marques d&apos;exception — du champagne à la mode, de la
          romance au conseil. Un seul fil conducteur :{" "}
          <span className="text-gold">l&apos;élégance qui marque.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-10"
        >
          <a
            href="#projets"
            className="group relative overflow-hidden rounded-full border border-gold/40 px-9 py-3.5 text-[0.7rem] font-light uppercase tracking-[0.28em] text-ink transition-colors duration-500 hover:text-ink"
          >
            <span className="relative z-10">Découvrir ses projets</span>
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </a>
          <a
            href="#contact"
            className="link-gold text-[0.7rem] font-light uppercase tracking-[0.28em]"
          >
            Collaborer
          </a>
        </motion.div>
      </div>

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
