"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

interface ContactFormProps {
  dict: Dictionary;
  locale: string;
}

export default function ContactForm({ dict, locale }: ContactFormProps) {
  const t = dict.contact.form;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, interest, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#D4CFC8] p-12 text-center">
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
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#D4CFC8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#12133F] transition-colors bg-white"
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.companyLabel}</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-[#D4CFC8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#12133F] transition-colors bg-white"
            placeholder={t.companyPlaceholder}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.emailLabel}</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-[#D4CFC8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#12133F] transition-colors bg-white"
          placeholder={t.emailPlaceholder}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.interestLabel}</label>
        <select
          name="interest"
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full border border-[#D4CFC8] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#12133F] transition-colors bg-white"
        >
          <option value="">{t.interestDefault}</option>
          {t.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-2">{t.messageLabel}</label>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-[#D4CFC8] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#12133F] transition-colors resize-none bg-white"
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
          <Link href={`/${locale}/privacidade`} className="underline hover:text-[#12133F]">
            {t.privacyLink}
          </Link>{" "}
          {t.consentAnd}
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#12133F] text-white py-4 text-sm font-medium hover:bg-[#1A1A2E] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? t.submitting : t.submitButton}
        {!loading && <Send size={14} />}
      </button>
    </form>
  );
}
