"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const billions = useCountUp(12, 1600, mounted);
  const pct = useCountUp(100, 1200, mounted);
  const partners = useCountUp(3, 800, mounted);

  const animatedStats = [
    { value: `+$${billions}B`, label: t.stats[0].label },
    { value: `${pct}%`, label: t.stats[1].label },
    { value: `${partners}`, label: t.stats[2].label },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
      <div
        className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F0F4FB 0%, transparent 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-36 pb-24">
        <div
          className="h-[2px] bg-[#C4A35A] mb-10 transition-all duration-700"
          style={{ width: mounted ? "3rem" : "0" }}
        />

        <p
          className="text-[#6B7280] text-xs font-medium tracking-[0.3em] uppercase mb-8 transition-all duration-500"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(8px)" }}
        >
          {t.kicker}
        </p>

        <h1
          className="text-[#12133F] leading-[1.05] mb-12 transition-all duration-700"
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
          <em className="not-italic" style={{ color: "#111827" }}>
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
          <p className="text-[#6B7280] leading-relaxed max-w-md text-[1rem]">{t.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href={`/${locale}/contato`}
              className="inline-flex items-center justify-center gap-2 bg-[#12133F] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#162d54] transition-colors"
            >
              {t.ctaPrimary}
              <ArrowRight size={15} />
            </Link>
            <Link
              href={`/${locale}/transacoes`}
              className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#111827] px-7 py-3.5 text-sm font-medium hover:border-[#12133F] transition-colors"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>

        <div
          className="mt-24 pt-10 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-10 transition-all duration-700"
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
              <p className="text-xs text-[#6B7280] tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
