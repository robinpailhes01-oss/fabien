"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RevealImage({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-[opacity,clip-path] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: shown ? 1 : 0,
        clipPath: shown ? "inset(0% 0 0 0)" : "inset(18% 0 0 0)",
      }}
    >
      <motion.div style={{ y }} className="absolute inset-[-7%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}
