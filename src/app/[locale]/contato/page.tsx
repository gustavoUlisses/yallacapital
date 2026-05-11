import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";
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
      {/* Hero */}
      <section className="bg-[#F0F4FB] pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="gold-rule" />
          <p className="text-xs text-[#6B6B6B] tracking-[0.3em] uppercase mb-4">{t.pageLabel}</p>
          <h1
            className="text-[#1A1A1A] max-w-2xl"
            style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            {t.title}
          </h1>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mt-6 max-w-xl">{t.sub}</p>
        </div>
      </section>

      {/* Formulário + Info */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

            {/* Formulário */}
            <div className="flex flex-col">
              <span className="gold-rule" />
              <h2
                className="text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
              >
                {t.formTitle ?? "Envie uma mensagem"}
              </h2>
              <div className="flex-1">
                <ContactForm dict={dict} />
              </div>
            </div>

            {/* Informações de contato */}
            <div className="flex flex-col">
              <span className="gold-rule" />
              <h2
                className="text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
              >
                {t.infoTitle}
              </h2>

              <div className="divide-y divide-[#D4CFC8] border-t border-[#D4CFC8]">
                <div className="py-6 flex gap-5 items-start">
                  <MapPin size={16} className="text-[#C4A35A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-1">{t.addressLabel}</p>
                    <address className="not-italic text-sm text-[#1A1A1A] leading-relaxed">
                      Rua Henrique Monteiro, 234 — 8º Andar<br />
                      São Paulo, SP · 01451-001
                    </address>
                  </div>
                </div>

                <div className="py-6 flex gap-5 items-start">
                  <Mail size={16} className="text-[#C4A35A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-1">{t.emailLabel}</p>
                    <a
                      href="mailto:contato@yallacapital.com.br"
                      className="text-sm text-[#1A1A1A] hover:text-[#C4A35A] transition-colors"
                    >
                      contato@yallacapital.com.br
                    </a>
                  </div>
                </div>

                <div className="py-6 flex gap-5 items-start">
                  <ExternalLink size={16} className="text-[#C4A35A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[#6B6B6B] tracking-[0.2em] uppercase mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/yallacapital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1A1A1A] hover:text-[#C4A35A] transition-colors"
                    >
                      linkedin.com/company/yallacapital
                    </a>
                  </div>
                </div>
              </div>

              {/* Nota de confidencialidade */}
              <div className="border-l-2 border-[#C4A35A] pl-5 mt-8">
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  <strong className="text-[#1A1A1A] font-medium">{t.confidentialityTitle} </strong>
                  {t.confidentialityNote}
                </p>
              </div>

              {/* Mapa */}
              <div className="mt-8 flex-1 min-h-[200px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6923!3d-23.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579e4f5c3b1f%3A0x0!2sRua+Henrique+Monteiro%2C+234%2C+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Yalla Capital"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
