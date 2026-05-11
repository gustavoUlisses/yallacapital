import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const t = dict.footer;
  const nav = dict.nav;

  const navLinks: { label: string; href: string; external?: boolean }[] = [
    { label: nav.about, href: `/${locale}/sobre` },
    { label: nav.team, href: `/${locale}/equipe` },
    { label: nav.solutions, href: `/${locale}/advisory` },
    { label: nav.transactions, href: `/${locale}/transacoes` },
    { label: nav.careers, href: "https://www.linkedin.com/company/yallacapital", external: true },
    { label: nav.contact, href: `/${locale}/contato` },
  ];

  return (
    <footer style={{ background: "#12133F" }} className="text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-12">
          <div>
            <span
              className="text-white tracking-[0.08em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-logo), serif", fontSize: "29px" }}
            >
              Yalla Capital
            </span>
            <p className="text-xs leading-relaxed">{t.description}</p>
          </div>

          <div>
            <h3 className="text-white/40 text-xs font-medium mb-4 uppercase tracking-widest">
              {t.navLabel}
            </h3>
            <ul className="space-y-2 text-xs">
              {navLinks.map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#C4A35A] transition-colors">
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="hover:text-[#C4A35A] transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/40 text-xs font-medium mb-4 uppercase tracking-widest">
              {t.contactLabel}
            </h3>
            <address className="not-italic text-xs space-y-1.5">
              <p>Rua Henrique Monteiro, 234 — 8º Andar</p>
              <p>São Paulo, SP · 01451-001</p>
              <a
                href="mailto:contato@yallacapital.com.br"
                className="hover:text-[#C4A35A] transition-colors block mt-3"
              >
                contato@yallacapital.com.br
              </a>
            </address>
            <a
              href="https://www.linkedin.com/company/yallacapital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs hover:text-[#C4A35A] transition-colors"
            >
              <ExternalLink size={12} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Yalla Capital. {t.rights}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacidade`} className="hover:text-[#C4A35A] transition-colors">
              {t.privacyLink}
            </Link>
            <Link href={`/${locale}/cookies`} className="hover:text-[#C4A35A] transition-colors">
              {t.cookiesLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
