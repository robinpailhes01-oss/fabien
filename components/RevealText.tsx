"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const word: Variants = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Kinetic word-by-word reveal (mask rise). Place inside a heading. */
export default function RevealText({
  text,
  accent = false,
  className = "",
  once = true,
}: {
  text: string;
  accent?: boolean;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-8%" }}
      className={`inline ${className}`}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ lineHeight: 1.16 }}
        >
          <motion.span
            variants={word}
            className={`inline-block ${accent ? "text-gradient-gold" : ""}`}
          >
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
