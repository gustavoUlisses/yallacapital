import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/locales";
import Hero from "@/components/sections/Hero";
import ManifestoStrip from "@/components/sections/ManifestoStrip";
import ValueProps from "@/components/sections/ValueProps";
import AboutSnippet from "@/components/sections/AboutSnippet";
import TransactionsPreview from "@/components/sections/TransactionsPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <ManifestoStrip dict={dict} />
      <ValueProps dict={dict} />
      <AboutSnippet dict={dict} locale={locale} />
      <TransactionsPreview dict={dict} locale={locale} />
      <CtaBanner dict={dict} locale={locale} />
    </>
  );
}
