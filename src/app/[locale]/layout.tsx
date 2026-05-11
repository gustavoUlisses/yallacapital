import type { Metadata } from "next";
import { DM_Sans, Ormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import { locales, type Locale, isValidLocale, defaultLocale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/getDictionary";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const ormorant = Ormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Yalla Capital | Assessoria Financeira em M&A",
  description:
    "Boutique independente de assessoria financeira especializada em M&A e soluções de capital para empresas em crescimento.",
  keywords: "M&A, fusões e aquisições, assessoria financeira, investment banking, São Paulo",
  openGraph: {
    title: "Yalla Capital | Assessoria Financeira em M&A",
    description:
      "Boutique independente de assessoria financeira especializada em M&A e soluções de capital para empresas em crescimento.",
    url: "https://www.yallacapital.com.br",
    siteName: "Yalla Capital",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const langMap: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-Hans",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (isValidLocale(localeParam) ? localeParam : defaultLocale) as Locale;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={langMap[locale]}
      className={`${dmSans.variable} ${ormorant.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="min-h-screen flex flex-col antialiased bg-[#F5F2ED] text-[#1A1A1A]"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <CookieBanner dict={dict} locale={locale} />
      </body>
    </html>
  );
}
