export const locales = ["pt", "en", "es", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const localeNames: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  zh: "中文",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
