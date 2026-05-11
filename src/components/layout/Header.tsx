"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import { locales, localeNames } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const switchLocale = (next: Locale) => {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/");
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const nav = [
    { label: dict.nav.about, href: `/${locale}/sobre` },
    { label: dict.nav.team, href: `/${locale}/equipe` },
    { label: dict.nav.solutions, href: `/${locale}/advisory` },
    { label: dict.nav.transactions, href: `/${locale}/transacoes` },
    { label: dict.nav.contact, href: `/${locale}/contato` },
  ];

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const darkBg = isHome && !scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex-shrink-0">
            <span
              className="tracking-[0.08em] uppercase transition-colors duration-300"
              style={{
                fontFamily: "var(--font-logo), serif",
                fontSize: "29px",
                color: darkBg ? "white" : "#12133F",
              }}
            >
              Yalla Capital
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-medium pb-1 group transition-colors duration-300"
                  style={{
                    color: darkBg
                      ? active ? "white" : "rgba(255,255,255,0.7)"
                      : active ? "#12133F" : "#6B6B6B",
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#C4A35A] transition-all duration-300"
                    style={{ width: active ? "100%" : "0%", right: 0 }}
                  />
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#C4A35A] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}

            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-300"
                style={{ color: darkBg ? "rgba(255,255,255,0.7)" : "#6B6B6B" }}
              >
                {localeNames[locale]}
                <ChevronDown size={13} className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-[#E2E8F0] shadow-md py-1 min-w-[80px]">
                  {locales.filter((l) => l !== locale).map((l) => (
                    <Link
                      key={l}
                      href={switchLocale(l)}
                      onClick={() => setLangOpen(false)}
                      className="block px-4 py-2 text-sm text-[#6B6B6B] hover:text-[#12133F] hover:bg-[#F0F4FB] transition-colors"
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: darkBg ? "white" : "#1A1A1A" }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium py-2 border-b border-[#D4CFC8] last:border-0"
                style={{ color: pathname === item.href ? "#12133F" : "#1A1A1A" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  className="text-xs font-medium tracking-wide transition-colors"
                  style={{ color: l === locale ? "#12133F" : "#9CA3AF" }}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
