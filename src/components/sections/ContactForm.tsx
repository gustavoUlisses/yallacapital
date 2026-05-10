"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

interface ContactFormProps {
  dict: Dictionary;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const t = dict.contact.form;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[#E5E7EB] rounded-lg p-12 text-center">
        <div className="w-12 h-12 bg-[#ECFDF5] rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={20} className="text-[#065F46]" />
        </div>
        <h3
          className="text-xl text-[#1A1A2E] mb-2"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {t.successTitle}
        </h3>
        <p className="text-sm text-[#6B7280]">{t.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.nameLabel}</label>
          <input
            type="text"
            required
            className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#6B7280] focus:outline-none focus:border-[#12133F] transition-colors"
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.companyLabel}</label>
          <input
            type="text"
            className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#6B7280] focus:outline-none focus:border-[#12133F] transition-colors"
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.emailLabel}</label>
        <input
          type="email"
          required
          className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#6B7280] focus:outline-none focus:border-[#12133F] transition-colors"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.interestLabel}</label>
        <select className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#1A1A2E] focus:outline-none focus:border-[#12133F] transition-colors bg-white">
          <option value="">{t.interestDefault}</option>
          {t.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.messageLabel}</label>
        <textarea
          required
          rows={5}
          className="w-full border border-[#E5E7EB] rounded px-4 py-3 text-sm text-[#1A1A2E] placeholder:text-[#6B7280] focus:outline-none focus:border-[#12133F] transition-colors resize-none"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-0.5 rounded border-[#E5E7EB]"
        />
        <label htmlFor="consent" className="text-xs text-[#6B7280] leading-relaxed">
          {t.consentText}{" "}
          <Link href="/privacidade" className="underline hover:text-[#12133F]">
            {t.privacyLink}
          </Link>{" "}
          {t.consentAnd}
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#12133F] text-white py-4 text-sm font-medium rounded hover:bg-[#2B5499] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? t.submitting : t.submitButton}
        {!loading && <Send size={14} />}
      </button>
    </form>
  );
}
