import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

const institutions = [
  { label: "Goldman Sachs", logo: "/assets/goldman-sachs.png" },
  { label: "Merrill Lynch", logo: "/assets/merrill-lynch.png" },
  { label: "Itaú BBA",      logo: "/assets/itau-bba.png" },
  { label: "HSBC",          logo: "/assets/hsbc.avif" },
  { label: "ABN AMRO",      logo: "/assets/abn-amro.png" },
];

interface AboutSnippetProps {
  dict: Dictionary;
  locale: Locale;
}

export default function AboutSnippet({ dict, locale }: AboutSnippetProps) {
  const t = dict.aboutSnippet;

  return (
    <section className="bg-[#F0F4FB] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          <div>
            <span className="gold-rule" />
            <p className="text-xs text-[#6B7280] tracking-[0.3em] uppercase mb-4">{t.label}</p>
            <h2
              className="text-[#12133F] mb-6"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              {t.title}
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-5 text-sm">{t.p1}</p>
            <p className="text-[#6B7280] leading-relaxed mb-8 text-sm">{t.p2}</p>
            <Link
              href={`/${locale}/sobre`}
              className="inline-flex items-center gap-2 text-[#12133F] text-sm font-medium group"
            >
              {t.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="text-xs text-[#6B7280] tracking-[0.3em] uppercase mb-5">{t.foundersLabel}</p>
            <div className="grid grid-cols-3 gap-px flex-1" style={{ background: "#D1D9E6" }}>
              {institutions.map((item, i) => (
                <div
                  key={item.label}
                  className={`bg-white flex items-center justify-center p-8 min-h-[120px]${i === 3 ? " col-start-1" : i === 4 ? " col-start-2" : ""}`}
                >
                  <div className="relative w-full h-8">
                    <Image
                      src={item.logo}
                      alt={item.label}
                      fill
                      className="object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
              <div className="bg-white flex flex-col items-center justify-center p-8 min-h-[120px] col-start-3">
                <p
                  className="text-[#C4A35A] leading-none mb-1"
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 500,
                  }}
                >
                  +$12B
                </p>
                <p className="text-[#6B7280] text-[10px] tracking-[0.2em] uppercase text-center">
                  {t.statLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
