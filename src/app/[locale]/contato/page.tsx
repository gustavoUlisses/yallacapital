import type { Metadata } from "next";
import { MapPin, Mail } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/locales";
import ContactForm from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return dict.contact.meta;
}

export default async function ContatoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.contact;

  return (
    <>
      <section className="bg-[#FAFAFA] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[#2B5499] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              {t.pageLabel}
            </p>
            <h1
              className="text-4xl lg:text-6xl text-[#1A1A2E] mb-6"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              {t.title}
            </h1>
            <p className="text-[#6B7280] text-lg leading-relaxed">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactForm dict={dict} />
            </div>

            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl text-[#1A1A2E] mb-6"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  {t.infoTitle}
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#F0F4FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#12133F]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E] mb-1">{t.addressLabel}</p>
                      <address className="not-italic text-sm text-[#6B7280] leading-relaxed">
                        Rua Henrique Monteiro, 234<br />
                        8º Andar<br />
                        São Paulo, SP — 01451-001
                      </address>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#F0F4FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#12133F]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E] mb-1">{t.emailLabel}</p>
                      <a
                        href="mailto:contato@yallacapital.com.br"
                        className="text-sm text-[#6B7280] hover:text-[#12133F] transition-colors"
                      >
                        contato@yallacapital.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-lg p-6">
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  <strong className="text-[#1A1A2E]">{t.confidentialityTitle}</strong>{" "}
                  {t.confidentialityNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
