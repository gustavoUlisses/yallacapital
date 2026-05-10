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
  return { title: `${dict.privacy.pageTitle} | Yalla Capital` };
}

export default async function PrivacidadePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const t = dict.privacy;

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

        <div className="prose prose-sm max-w-none text-[#6B7280] space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">1. Responsável pelo tratamento dos dados</h2>
            <p>
              A <strong className="text-[#1A1A2E]">Yalla Capital Assessoria Financeira Ltda.</strong>,
              com sede na Rua Henrique Monteiro, 234, 8º Andar, São Paulo, SP, CEP 01451-001,
              é a controladora dos dados pessoais coletados por meio deste site.
            </p>
            <p className="mt-2">
              Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo
              e-mail: <a href="mailto:contato@yallacapital.com.br" className="text-[#12133F] underline">contato@yallacapital.com.br</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">2. Dados coletados</h2>
            <p>Coletamos os seguintes dados pessoais:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Nome da empresa (opcional)</li>
              <li>Mensagem enviada via formulário de contato</li>
              <li>Dados de navegação (via cookies técnicos)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">3. Finalidade do tratamento</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responder às suas solicitações de contato</li>
              <li>Avaliar candidaturas a vagas de emprego</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
            <p className="mt-2">
              Não utilizamos seus dados para fins de marketing ou comunicações não solicitadas sem seu consentimento explícito.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">4. Base legal (LGPD)</h2>
            <p>O tratamento de dados é realizado com base nas seguintes hipóteses legais previstas na Lei nº 13.709/2018 (LGPD):</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-[#1A1A2E]">Consentimento</strong> — para o envio de formulários de contato e uso de cookies não essenciais</li>
              <li><strong className="text-[#1A1A2E]">Legítimo interesse</strong> — para a segurança do site e manutenção da funcionalidade</li>
              <li><strong className="text-[#1A1A2E]">Cumprimento de obrigação legal</strong> — quando exigido por lei</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">5. Seus direitos</h2>
            <p>Em conformidade com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou inexatos</li>
              <li>Solicitar anonimização, bloqueio ou eliminação</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
            <p className="mt-2">
              Para exercer esses direitos, entre em contato pelo e-mail:{" "}
              <a href="mailto:contato@yallacapital.com.br" className="text-[#12133F] underline">contato@yallacapital.com.br</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">6. Segurança dos dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou divulgação indevida.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">7. Retenção dos dados</h2>
            <p>
              Seus dados são mantidos pelo tempo necessário para atender às finalidades descritas nesta política ou pelo período exigido por lei, após o qual são eliminados de forma segura.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1A1A2E] mb-3">8. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data da última atualização está indicada no início deste documento. Recomendamos revisá-la periodicamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
