"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { VOICE_NOTE_SRC } from "./site-config";

// Static waveform bars — same look as a WhatsApp voice note.
const BARS = [
  8, 14, 10, 18, 24, 16, 28, 34, 22, 30, 18, 26, 36, 28, 20, 32, 24, 14, 22, 30,
  26, 18, 28, 34, 20, 12, 24, 30, 16, 22, 28, 18, 10, 20, 26, 14, 24, 16, 10, 8,
];

function fmt(sec: number) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VoiceNote() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      if (a.duration) setProgress(a.currentTime / a.duration);
    };
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setCurrent(0);
    };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    a.addEventListener("error", () => setAvailable(false));
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setAvailable(false));
    }
  };

  const activeBars = Math.round(progress * BARS.length);

  return (
    <section className="relative px-6 pb-8 pt-4 sm:pb-12">
      <Reveal className="mx-auto max-w-lg">
        <p className="mb-4 text-center text-[0.65rem] uppercase tracking-[0.28em] text-muted">
          Un mot de Fabien
        </p>

        {/* WhatsApp-style bubble */}
        <div className="relative mx-auto flex items-center gap-3 rounded-2xl rounded-tl-sm border border-[color:var(--panel-border)] bg-[#dcf8c6] px-3 py-3 shadow-[0_14px_36px_-22px_rgba(0,0,0,0.4)] dark:bg-[#075e54]/25 sm:gap-4 sm:px-4">
          {/* Avatar */}
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70 sm:h-12 sm:w-12">
            <Image
              src="/images/fabien.jpg"
              alt="Fabien Quetel"
              fill
              sizes="48px"
              className="object-cover"
            />
          </span>

          {/* Play / pause */}
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Écouter le message"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 hover:scale-105"
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="16" viewBox="0 0 22 26" fill="currentColor">
                <path d="M21 13L0 25.99V0L21 13Z" />
              </svg>
            )}
          </button>

          {/* Waveform + time */}
          <div className="min-w-0 flex-1">
            <div className="flex h-8 items-center gap-[2px]">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`w-[2px] shrink-0 rounded-full transition-colors duration-200 ${
                    i < activeBars ? "bg-[#25D366]" : "bg-neutral-500/40"
                  }`}
                />
              ))}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[0.65rem] tabular-nums text-neutral-600 dark:text-neutral-300">
                {available
                  ? playing || current > 0
                    ? fmt(current)
                    : fmt(duration)
                  : "0:00"}
              </span>
              <span className="text-[0.6rem] text-neutral-500 dark:text-neutral-400">
                {available ? "Message vocal" : "Bientôt disponible"}
              </span>
            </div>
          </div>

          <audio ref={audioRef} src={VOICE_NOTE_SRC} preload="metadata" />
        </div>
      </Reveal>
    </section>
  );
}
