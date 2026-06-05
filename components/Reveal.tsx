"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** stagger children that carry the `data-reveal-child` attribute */
  stagger?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-in");

            if (stagger) {
              const kids = el.querySelectorAll<HTMLElement>(
                "[data-reveal-child]",
              );
              kids.forEach((kid, i) => {
                kid.style.transitionDelay = `${delay + i * 90}ms`;
                kid.classList.add("is-in");
              });
            }
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -12% 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [delay, stagger]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
