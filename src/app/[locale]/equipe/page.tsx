import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { partners } from "@/lib/team";
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
  return dict.team.meta;
}

export default async function EquipePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.team;

  return (
    <>
      <section className="bg-[#F0F4FB] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="gold-rule" />
          <p className="text-xs text-[#6B6B6B] tracking-[0.3em] uppercase mb-4">{t.pageLabel}</p>
          <h1
            className="text-[#1A1A1A] max-w-2xl"
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            {t.title}
          </h1>
        </div>
      </section>

      <section className="bg-[#F0F4FB] pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="divide-y divide-[#D4CFC8] border-t border-[#D4CFC8]">
            {partners.map((member, idx) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative w-full aspect-[4/5] bg-[#E8E4DD] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 flex flex-col justify-center p-8 lg:p-16 bg-[#FFFFFF] ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p
                    className="text-[#C4A35A] text-xs mb-4"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {String(idx + 1).padStart(2, "0")} — {member.role}
                  </p>
                  <h2
                    className="text-[#1A1A1A] mb-5"
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    {member.name}
                  </h2>
                  <div className="text-[#6B6B6B] text-sm leading-relaxed mb-6 space-y-3">
                    {member.bio.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.previous.map((inst) => (
                      <span
                        key={inst}
                        className="text-xs border border-[#D1D9E6] text-[#6B7280] px-3 py-1"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#6B6B6B] hover:text-[#12133F] transition-colors"
                    >
                      <ExternalLink size={12} />
                      {t.linkedinLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
