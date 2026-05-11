import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface CtaBannerProps {
  dict: Dictionary;
  locale: Locale;
}

export default function CtaBanner({ dict, locale }: CtaBannerProps) {
  const t = dict.cta;

  return (
    <section style={{ background: "#F0F4FB" }} className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="w-10 h-[2px] bg-[#C4A35A] mb-8" />
            <h2
              className="text-[#12133F] leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {t.title}
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed">{t.sub}</p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}/contato`}
              className="inline-flex items-center gap-2 bg-[#12133F] text-white px-8 py-4 text-sm font-semibold hover:bg-[#1A1A2E] transition-colors"
            >
              {t.button}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
