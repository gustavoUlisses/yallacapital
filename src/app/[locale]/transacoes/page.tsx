import type { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/locales";
import { transactions } from "@/lib/transactions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return dict.transactions.meta;
}

export default async function TransacoesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.transactions;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.yallacapital.com.br/${locale}` },
      { "@type": "ListItem", "position": 2, "name": t.pageLabel, "item": `https://www.yallacapital.com.br/${locale}/transacoes` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
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
          <p className="text-[#6B6B6B] text-sm mt-4 max-w-lg leading-relaxed">{t.sub}</p>
        </div>
      </section>

      {/* Deal cards */}
      <section className="bg-[#FFFFFF] py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-0 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
            {transactions.map((tx, i) => (
              <div
                key={i}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 hover:bg-[#F8F9FC] -mx-6 px-6 transition-colors duration-200"
              >
                {/* Index */}
                <div className="hidden lg:flex lg:col-span-1 items-start pt-1">
                  <span
                    className="text-xs text-[#D4CFC8] group-hover:text-[#C4A35A] transition-colors"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Logo card — target + seta + acquirer */}
                <div className="lg:col-span-5 flex items-center gap-4">
                  {/* Target logo */}
                  <div className="flex-1 bg-white border border-[#E2E8F0] rounded-sm p-4 flex items-center justify-center min-h-[80px] group-hover:border-[#C4A35A]/30 transition-colors">
                    <div className="relative w-full h-10">
                      <Image
                        src={tx.targetLogo}
                        alt={tx.target}
                        fill
                        className="object-contain"
                        sizes="200px"
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <span className="text-[#C4A35A] text-lg leading-none">→</span>
                    <span className="text-[8px] text-[#C4A35A] tracking-widest uppercase font-medium whitespace-nowrap">
                      {t.role}
                    </span>
                  </div>

                  {/* Acquirer logo */}
                  <div className="flex-1 bg-white border border-[#E2E8F0] rounded-sm p-4 flex items-center justify-center min-h-[80px] group-hover:border-[#C4A35A]/30 transition-colors">
                    <div className="relative w-full h-10">
                      <Image
                        src={tx.acquirerLogo}
                        alt={tx.acquirer}
                        fill
                        className="object-contain"
                        sizes="200px"
                      />
                    </div>
                  </div>
                </div>

                {/* Deal info */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <span
                      className="text-[#1A1A1A] font-medium group-hover:text-[#12133F] transition-colors"
                      style={{ fontFamily: "var(--font-display), serif", fontSize: "1.15rem" }}
                    >
                      {tx.target}
                    </span>
                    <span className="text-[#C4A35A] text-sm">→</span>
                    <span
                      className="text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display), serif", fontSize: "1.15rem" }}
                    >
                      {tx.acquirer}
                    </span>
                    <span
                      className="text-[10px] text-[#6B6B6B] uppercase tracking-wider border border-[#E2E8F0] px-2 py-0.5"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      {t.typeLabels[tx.type]}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{tx.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Confidentiality note */}
          <p className="mt-12 text-xs text-[#6B6B6B] border-l-2 border-[#C4A35A] pl-4 leading-relaxed max-w-xl">
            {t.confidentiality}
          </p>
        </div>
      </section>
    </>
  );
}
