"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/(\d+)(\D*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const [n, setN] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const duration = 1200;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
