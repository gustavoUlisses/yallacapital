import type { Dictionary } from "@/i18n/types";

interface ValuePropsProps {
  dict: Dictionary;
}

export default function ValueProps({ dict }: ValuePropsProps) {
  const t = dict.valueProps;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="gold-rule" />
            <p className="text-xs text-[#6B7280] tracking-[0.3em] uppercase mb-4">{t.label}</p>
            <h2
              className="text-[#12133F]"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              {t.title}
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E2E8F0] border-t border-[#E2E8F0]">
            {t.pillars.map((p) => (
              <div
                key={p.n}
                className="group grid grid-cols-12 gap-6 py-8 hover:bg-[#F0F4FB] -mx-4 px-4 transition-colors duration-200 cursor-default"
              >
                <div className="col-span-2 sm:col-span-1 pt-1">
                  <span
                    className="text-[#C4A35A] text-xs"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {p.n}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-4">
                  <h3
                    className="text-[#111827] group-hover:text-[#12133F] transition-colors"
                    style={{ fontFamily: "var(--font-display), serif", fontSize: "1.15rem" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <p className="text-[#6B7280] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
