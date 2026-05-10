"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface CookieBannerProps {
  dict: Dictionary;
  locale: Locale;
}

export default function CookieBanner({ dict, locale }: CookieBannerProps) {
  const t = dict.cookies;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A2E] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
          {t.bannerText}{" "}
          <Link href={`/${locale}/cookies`} className="underline hover:text-white">
            {t.cookiesPolicyLink}
          </Link>{" "}
          {t.and}{" "}
          <Link href={`/${locale}/privacidade`} className="underline hover:text-white">
            {t.privacyPolicyLink}
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-white/60 border border-white/20 rounded hover:border-white/40 hover:text-white transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-[#2B5499] text-white rounded hover:bg-[#12133F] transition-colors font-medium"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
