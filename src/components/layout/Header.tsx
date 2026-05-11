"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const nav = [
    { label: dict.nav.about, href: `/${locale}/sobre` },
    { label: dict.nav.team, href: `/${locale}/equipe` },
    { label: dict.nav.solutions, href: `/${locale}/advisory` },
    { label: dict.nav.transactions, href: `/${locale}/transacoes` },
    { label: dict.nav.contact, href: `/${locale}/contato` },
  ];

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
              className="text-xl tracking-[0.18em] font-normal text-[#12133F] uppercase"
              style={{ fontFamily: "var(--font-logo), serif" }}
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
                  className="relative text-sm font-medium pb-1 group"
                  style={{ color: active ? "#12133F" : "#6B6B6B" }}
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

          </nav>

          <button
            className="md:hidden p-2 text-[#1A1A1A]"
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

          </nav>
        </div>
      )}
    </header>
  );
}
