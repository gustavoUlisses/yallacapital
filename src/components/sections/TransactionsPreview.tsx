import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { transactions } from "@/lib/transactions";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface TransactionsPreviewProps {
  dict: Dictionary;
  locale: Locale;
}

export default function TransactionsPreview({ dict, locale }: TransactionsPreviewProps) {
  const t = dict.transactionsPreview;
  const preview = transactions.slice(0, 4);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="gold-rule" />
            <p className="text-xs text-[#6B7280] tracking-[0.3em] uppercase mb-3">{t.label}</p>
            <h2
              className="text-[#12133F]"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              }}
            >
              {t.title}
            </h2>
          </div>
          <Link
            href={`/${locale}/transacoes`}
            className="inline-flex items-center gap-2 text-sm text-[#12133F] font-medium group flex-shrink-0"
          >
            {t.viewAll}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
          {preview.map((tx, i) => (
            <div
              key={i}
              className="group relative flex flex-col sm:grid sm:grid-cols-12 sm:items-center gap-3 sm:gap-4 py-5 sm:py-6 hover:bg-[#F8F9FC] -mx-6 px-6 transition-colors duration-200"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C4A35A] scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

              {/* Index */}
              <div className="hidden sm:block sm:col-span-1">
                <span
                  className="text-xs text-[#E2E8F0] group-hover:text-[#C4A35A] transition-colors"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Logo pair */}
              <div className="sm:col-span-5 flex items-center gap-3">
                <div className="bg-white border border-[#E2E8F0] rounded-sm px-3 py-2 flex items-center justify-center w-20 h-9 sm:w-24 sm:h-10 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={tx.targetLogo}
                      alt={tx.target}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                </div>
                <span className="text-[#C4A35A] flex-shrink-0 text-sm">→</span>
                <div className="bg-white border border-[#E2E8F0] rounded-sm px-3 py-2 flex items-center justify-center w-20 h-9 sm:w-24 sm:h-10 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={tx.acquirerLogo}
                      alt={tx.acquirer}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>
                </div>
              </div>

              {/* Type + Role — inline no mobile, colunas separadas no desktop */}
              <div className="flex items-center justify-between sm:contents">
                <div className="sm:col-span-3">
                  <span
                    className="text-xs text-[#6B7280] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {t.typeLabels[tx.type]}
                  </span>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <span className="text-xs text-[#C4A35A]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
