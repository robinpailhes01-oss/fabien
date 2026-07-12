"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    // Skip on subsequent navigations within the session.
    try {
      if (sessionStorage.getItem("introSeen")) {
        setDone(true);
        return;
      }
    } catch {
      /* ignore */
    }

    document.body.style.overflow = "hidden";

    const duration = 1300;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("introSeen", "1");
      } catch {
        /* ignore */
      }
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-[0.62rem] uppercase tracking-[0.5em] text-gold"
          >
            LS Consulting
          </motion.span>
          <span className="font-display text-6xl font-light tracking-tight text-ink sm:text-8xl">
            Fabien
          </span>

          <div className="mt-10 h-px w-40 overflow-hidden bg-ink/10">
            <div
              className="h-full bg-gold transition-[width] duration-100 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
          <span className="mt-4 font-display text-sm text-muted">
            {count.toString().padStart(3, "0")}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
