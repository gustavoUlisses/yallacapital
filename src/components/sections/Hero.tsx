"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict, locale }: HeroProps) {
  const t = dict.hero;
  const [mounted, setMounted] = useState(false);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const FADE_DURATION = 2.5;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    // outgoing fades out, incoming fades in over FADE_DURATION seconds
    const crossfade = (outgoing: HTMLVideoElement, incoming: HTMLVideoElement) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / (FADE_DURATION * 1000), 1);
        outgoing.style.opacity = String(1 - progress);
        incoming.style.opacity = String(progress);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    // Start B playing when A is FADE_DURATION seconds from the end
    const onTimeUpdateA = () => {
      if (!a.duration) return;
      if (a.duration - a.currentTime <= FADE_DURATION && b.paused) {
        b.currentTime = 0;
        b.play();
        crossfade(a, b);
      }
    };

    const onTimeUpdateB = () => {
      if (!b.duration) return;
      if (b.duration - b.currentTime <= FADE_DURATION && a.paused) {
        a.currentTime = 0;
        a.play();
        crossfade(b, a);
      }
    };

    // When outgoing ends, ensure incoming is fully visible and outgoing is hidden/reset
    const onEndedA = () => {
      a.style.opacity = "0";
      b.style.opacity = "1";
      a.pause();
    };

    const onEndedB = () => {
      b.style.opacity = "0";
      a.style.opacity = "1";
      b.pause();
    };

    a.addEventListener("timeupdate", onTimeUpdateA);
    b.addEventListener("timeupdate", onTimeUpdateB);
    a.addEventListener("ended", onEndedA);
    b.addEventListener("ended", onEndedB);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      a.removeEventListener("timeupdate", onTimeUpdateA);
      b.removeEventListener("timeupdate", onTimeUpdateB);
      a.removeEventListener("ended", onEndedA);
      b.removeEventListener("ended", onEndedB);
    };
  }, []);

  const billions = useCountUp(12, 1600, mounted);
  const years = useCountUp(20, 1200, mounted);
  const pct = useCountUp(100, 1400, mounted);

  // Extract the unit suffix from the dictionary value (e.g. "+20 anos" → "anos", "+20 years" → "years", "+20年" → "年")
  const yearsSuffix = t.stats[1].value.replace(/[+\d]/g, "").trim();

  const animatedStats = [
    { value: `+$${billions}B`, label: t.stats[0].label },
    { value: `+${years} ${yearsSuffix}`, label: t.stats[1].label },
    { value: `${pct}%`, label: t.stats[2].label },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#12133F] overflow-hidden">
      <video
        ref={videoARef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
        src="/assets/hero.mp4"
      />
      <video
        ref={videoBRef}
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
        src="/assets/hero.mp4"
      />
      <div className="absolute inset-0 bg-[#12133F]/60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-36 pb-24">
        <div
          className="h-[2px] bg-[#C4A35A] mb-10 transition-all duration-700"
          style={{ width: mounted ? "3rem" : "0" }}
        />

        <p
          className="text-white/60 text-xs font-medium tracking-[0.3em] uppercase mb-8 transition-all duration-500"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(8px)" }}
        >
          {t.kicker}
        </p>

        <h1
          className="text-white leading-[1.05] mb-12 transition-all duration-700"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            maxWidth: "16ch",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transitionDelay: "100ms",
          }}
        >
          {t.headline}{" "}
          <em className="not-italic" style={{ color: "white" }}>
            {t.headlineEmphasis}
          </em>
        </h1>

        <div
          className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(12px)",
            transitionDelay: "200ms",
          }}
        >
          <p className="text-white/70 leading-relaxed max-w-md text-[1rem]">{t.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href={`/${locale}/contato`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#12133F] px-7 py-3.5 text-sm font-medium hover:bg-[#F0F4FB] transition-colors"
            >
              {t.ctaPrimary}
              <ArrowRight size={15} />
            </Link>
            <Link
              href={`/${locale}/transacoes`}
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 text-sm font-medium hover:border-white transition-colors"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>

        <div
          className="mt-24 pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-10 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(12px)",
            transitionDelay: "350ms",
          }}
        >
          {animatedStats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-[#C4A35A] mb-1"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 500,
                }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-white/60 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
