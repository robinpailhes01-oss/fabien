"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKING_URL, CTA_LABEL_SHORT } from "./site-config";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      const nearBottom = y + vh > doc - 620;
      setShow(y > vh * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))]"
          >
            <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-full border border-gold/25 bg-paper-soft/80 py-2 pl-5 pr-2 shadow-[0_12px_44px_-14px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              <span className="whitespace-nowrap text-xs font-light text-ink-soft">
                Prêt à scaler ?
              </span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold whitespace-nowrap px-5 py-2.5 text-xs"
              >
                {CTA_LABEL_SHORT}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.button
            onClick={toTop}
            aria-label="Remonter en haut"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-paper-soft/80 text-gold backdrop-blur-xl transition-colors duration-400 hover:bg-gold/10 lg:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19V5M6 11l6-6 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
