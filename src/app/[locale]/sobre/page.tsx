import type { Metadata } from "next";
import Image from "next/image";
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
  return dict.about.meta;
}

export default async function SobrePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.about;

  return (
    <>
      <section className="bg-[#F0F4FB] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="gold-rule" />
          <p className="text-xs text-[#6B6B6B] tracking-[0.3em] uppercase mb-4">{t.pageLabel}</p>
          <h1
            className="text-[#1A1A1A] max-w-3xl"
            style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            {t.title}
          </h1>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <span className="gold-rule" />
              <h2
                className="text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                {t.historyTitle}
              </h2>
              <div className="space-y-4 text-[#6B6B6B] text-sm leading-relaxed">
                <p>{t.p1}</p>
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#D4CFC8] pt-8">
                {[t.stat1, t.stat2].map((s) => (
                  <div key={s.l}>
                    <p
                      className="text-[#C4A35A] mb-1"
                      style={{ fontFamily: "var(--font-mono), monospace", fontSize: "1.75rem" }}
                    >
                      {s.v}
                    </p>
                    <p className="text-xs text-[#6B6B6B] leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/yalla-sobre.webp"
                  alt="Escritório Yalla Capital"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F4FB] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="gold-rule" />
          <h2
            className="text-[#1A1A1A] mb-16"
            style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
          >
            {t.pillarsTitle}
          </h2>
          <div className="divide-y divide-[#D4CFC8] border-t border-[#D4CFC8]">
            {t.pillars.map((p) => (
              <div key={p.n} className="grid grid-cols-12 gap-6 py-8">
                <div className="col-span-1">
                  <span className="text-[#C4A35A] text-xs" style={{ fontFamily: "var(--font-mono), monospace" }}>
                    {p.n}
                  </span>
                </div>
                <div className="col-span-11 lg:col-span-4">
                  <h3
                    className="text-[#1A1A1A]"
                    style={{ fontFamily: "var(--font-display), serif", fontSize: "1.15rem" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-11 lg:col-span-7 lg:col-start-6">
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
