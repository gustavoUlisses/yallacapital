import type { Dictionary } from "@/i18n/types";

interface ManifestoStripProps {
  dict: Dictionary;
}

export default function ManifestoStrip({ dict }: ManifestoStripProps) {
  const t = dict.manifesto;

  return (
    <section style={{ background: "#12133F" }} className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-8">{t.label}</p>
        <blockquote
          className="text-white leading-tight"
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
            maxWidth: "22ch",
          }}
        >
          {t.quote}{" "}
          <em className="not-italic text-[#C4A35A]">{t.quoteEmphasis1}</em>{" "}
          {t.quotePart2}{" "}
          <em className="not-italic text-[#C4A35A]">{t.quoteEmphasis2}</em>
        </blockquote>
        <div className="mt-12 flex flex-wrap gap-10">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="text-white/40 text-xs tracking-widest uppercase border-b border-white/15 pb-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
