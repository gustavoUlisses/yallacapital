import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return dict.advisory.meta;
}

export default async function AdvisoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.advisory;

  return (
    <>
      <section className="bg-white pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="gold-rule" />
          <p className="text-xs text-[#6B7280] tracking-[0.3em] uppercase mb-4">{t.pageLabel}</p>
          <h1
            className="text-[#12133F] max-w-2xl"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            {t.title}
          </h1>
          <p className="text-[#6B7280] text-sm leading-relaxed mt-5 max-w-lg">{t.sub}</p>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
            {t.services.map((s, idx) => (
              <div
                key={s.n}
                className={`py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 ${
                  idx % 2 === 1 ? "bg-[#F0F4FB] -mx-6 px-6" : ""
                }`}
              >
                <div className="lg:col-span-4">
                  <span
                    className="text-[#C4A35A] text-xs mb-4 block"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {s.n}
                  </span>
                  <h2
                    className="text-[#12133F] mb-2"
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-[#6B7280] text-sm">{s.headline}</p>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-[#111827] text-sm leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#6B7280]">
                        <span className="text-[#C4A35A] mt-0.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F0F4FB" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <div className="w-8 h-[2px] bg-[#C4A35A] mb-6" />
            <h3
              className="text-[#12133F]"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              {t.ctaTitle}
            </h3>
          </div>
          <Link
            href={`/${locale}/contato`}
            className="inline-flex items-center gap-2 bg-[#12133F] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1A1A2E] transition-colors flex-shrink-0"
          >
            {t.ctaButton}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
