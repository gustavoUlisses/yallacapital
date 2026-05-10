import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
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
  return dict.careers.meta;
}

const icons = [GraduationCap, Briefcase];

export default async function CarreirasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.careers;

  return (
    <>
      <section className="bg-[#FAFAFA] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#2B5499] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              {t.pageLabel}
            </p>
            <h1
              className="text-4xl lg:text-6xl text-[#1A1A2E] mb-6"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              {t.title}
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-2xl text-[#1A1A2E] mb-10"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            {t.openingsTitle}
          </h2>

          <div className="space-y-6 max-w-3xl">
            {t.openings.map((job, idx) => {
              const Icon = icons[idx] ?? Briefcase;
              return (
                <div
                  key={job.title}
                  className="border border-[#E5E7EB] rounded-lg p-8 hover:shadow-sm hover:border-[#12133F]/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-[#F0F4FB] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-[#12133F]" />
                      </div>
                      <div>
                        <h3
                          className="text-xl text-[#1A1A2E] mb-1"
                          style={{ fontFamily: "var(--font-display), serif" }}
                        >
                          {job.title}
                        </h3>
                        <div className="flex gap-3 text-xs text-[#6B7280] mb-3">
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                        <p className="text-sm text-[#6B7280] leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                    <Link
                      href={`/${locale}/contato?vaga=${encodeURIComponent(job.title)}`}
                      className="inline-flex items-center gap-2 text-sm text-[#12133F] font-medium hover:gap-3 transition-all"
                    >
                      {t.applyButton}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-8 max-w-3xl">
            <h3
              className="text-xl text-[#1A1A2E] mb-3"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              {t.fallbackTitle}
            </h3>
            <p className="text-[#6B7280] text-sm mb-4">{t.fallbackSub}</p>
            <Link
              href={`/${locale}/contato`}
              className="inline-flex items-center gap-2 text-sm text-[#12133F] font-medium hover:gap-3 transition-all"
            >
              {t.fallbackCta}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
