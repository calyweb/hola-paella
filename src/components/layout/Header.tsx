"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { href: "/formules", label: "Nos formules" },
  { href: "/carte", label: "Notre carte" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setScrolled(window.scrollY > 12);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="Hola Paella"
              fill
              className="object-contain drop-shadow-sm"
              sizes="56px"
              loading="eager"
            />
          </div>
          <div className="leading-none hidden sm:block">
            <div className="font-display text-xl text-ink tracking-tight">Hola Paella</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft mt-1">
              Bassin d&apos;Arcachon · Bordeaux
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-[15px] font-semibold text-ink hover:text-terracotta transition-colors${pathname === item.href ? " active" : ""}`}
              style={{ fontFamily: "var(--font-nav)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+33646198234"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-saffron/15 border border-saffron/40 text-ink hover:bg-saffron hover:border-saffron transition-all group"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            <span className="w-7 h-7 rounded-full bg-terracotta text-paper flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={13} strokeWidth={2.5} />
            </span>
            <span className="text-base font-semibold tracking-tight">06 46 19 82 34</span>
          </a>
          <Link
            href="/devis"
            className="btn-primary py-2.5 px-5"
            style={{ fontFamily: "var(--font-nav)", fontWeight: 600, fontSize: "15px" }}
          >
            Demander un devis
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a
            href="tel:+33646198234"
            className="w-10 h-10 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center text-terracotta"
            aria-label="Appeler Hola Paella"
          >
            <Phone size={16} strokeWidth={2.5} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 rounded-full bg-paper border border-ink/10 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-ink/5 px-5 py-6 space-y-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block font-display text-2xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/devis" onClick={() => setOpen(false)} className="btn-primary w-full mt-4">
            Demander un devis
          </Link>
          <a href="tel:+33646198234" className="flex items-center gap-2 text-ink-soft pt-2">
            <Phone size={16} /> 06 46 19 82 34
          </a>
        </div>
      )}
    </header>
  );
}
