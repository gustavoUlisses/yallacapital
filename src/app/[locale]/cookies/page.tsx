import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  return { title: `${dict.cookies.pageTitle} | Yalla Capital` };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.cookies;

  return (
    <section className="bg-white pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-[#2B5499] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          {t.pageLabel}
        </p>
        <h1
          className="text-4xl text-[#1A1A2E] mb-8"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          {t.pageTitle}
        </h1>
        <p className="text-xs text-[#6B7280] mb-12">{t.lastUpdated}</p>

        <div className="space-y-8 text-sm text-[#6B7280] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site reconheça seu dispositivo em visitas futuras e melhore sua experiência de navegação.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Cookies que utilizamos</h2>
            <div className="space-y-4">
              <div className="border border-[#E5E7EB] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-[#1A1A2E]">cookie-consent</p>
                  <span className="text-xs bg-[#ECFDF5] text-[#065F46] px-2 py-0.5 rounded-full">Essencial</span>
                </div>
                <p>Armazena sua escolha de consentimento de cookies (aceito/recusado).</p>
                <p className="mt-1 text-xs">Duração: 1 ano · Tipo: localStorage</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Cookies de terceiros</h2>
            <p>
              Este site atualmente não utiliza cookies de terceiros, ferramentas de analytics ou pixels de rastreamento. Caso isso mude, esta política será atualizada e um novo consentimento será solicitado.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Como gerenciar cookies</h2>
            <p>
              Você pode controlar e/ou excluir cookies a qualquer momento através das configurações do seu navegador. Também pode revogar seu consentimento limpando o localStorage do seu navegador para este site.
            </p>
            <p className="mt-2">
              Note que desabilitar cookies essenciais pode afetar o funcionamento do site.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
              <a href="mailto:contato@yallacapital.com.br" className="text-[#12133F] underline">
                contato@yallacapital.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
