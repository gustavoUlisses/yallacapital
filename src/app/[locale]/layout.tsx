import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
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
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const BASE = "https://www.yallacapital.com.br";

const ogLocaleMap: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  zh: "zh_Hans",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (isValidLocale(localeParam) ? localeParam : defaultLocale) as Locale;
  const dict = await getDictionary(locale);
  const { title, description } = dict.home.meta;

  return {
    title,
    description,
    keywords: "M&A, fusões e aquisições, assessoria financeira, investment banking, São Paulo, boutique",
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        "pt-BR": `${BASE}/pt`,
        "en":    `${BASE}/en`,
        "es":    `${BASE}/es`,
        "zh-Hans": `${BASE}/zh`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE}/${locale}`,
      siteName: "Yalla Capital",
      type: "website",
      locale: ogLocaleMap[locale],
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: "Yalla Capital" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE}/og-image.jpg`],
    },
    robots: { index: true, follow: true },
  };
}

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Yalla Capital",
        "url": BASE,
        "logo": `${BASE}/og-image.jpg`,
        "email": "contato@yallacapital.com.br",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Henrique Monteiro, 234, 8º Andar",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "postalCode": "01451-001",
          "addressCountry": "BR",
        },
        "sameAs": ["https://www.linkedin.com/company/yallacapital"],
      },
      {
        "@type": "WebSite",
        "name": "Yalla Capital",
        "url": BASE,
      },
    ],
  };

  return (
    <html
      lang={langMap[locale]}
      className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
