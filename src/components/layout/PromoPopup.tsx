"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, X } from "lucide-react";

const STORAGE_KEY = "hp_promo_automne_2026";

export function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <button
        aria-label="Fermer"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm cursor-pointer"
      />
      <div className="relative w-full max-w-md bg-paper rounded-3xl shadow-2xl overflow-hidden">
        <button
          aria-label="Fermer"
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-paper/90 hover:bg-paper flex items-center justify-center text-ink shadow-sm transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="relative h-[16dvh] min-h-24 sm:h-52">
          <Image
            src="/images/planche-iberique.png"
            alt="Planche de charcuterie ibérique Hola Paella"
            fill
            className="object-cover"
            sizes="450px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </div>

        <div className="p-7 sm:p-8">
          <div className="pill pill-terracotta mb-4">Offre d&apos;automne</div>

          <h2 className="font-display text-[1.5rem] sm:text-3xl text-ink leading-[1.1]">
            Livraison offerte
            <br />
            <span className="italic font-light text-terracotta whitespace-nowrap">+ planche de charcuterie</span>
          </h2>

          <p className="mt-4 text-ink-soft leading-relaxed">
            La livraison de votre paella est offerte sur le sud du Bassin
            d&apos;Arcachon — d&apos;Arcachon au Teich, en passant par Pyla-sur-Mer,
            La Teste-de-Buch, Cazaux, La Hume et Gujan-Mestras — et une planche
            de charcuterie vous est offerte.
          </p>

          <div className="mt-4 flex items-center gap-2.5 bg-saffron/20 border border-saffron/40 text-ink rounded-xl px-4 py-3 text-[15px] font-semibold leading-snug">
            <CalendarDays size={18} className="shrink-0 text-saffron-dark" />
            Valable pour tout événement jusqu&apos;au 31 décembre 2026
          </div>

          <div className="mt-7">
            <Link href="/devis" onClick={dismiss} className="btn-primary w-full justify-center group">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
