"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "hp_promo_livraison_ete_2026";

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

        <div className="relative h-44 sm:h-52">
          <Image
            src="/images/paella-royale-bodega.png"
            alt="Paella Royale Hola Paella"
            fill
            className="object-cover"
            sizes="450px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </div>

        <div className="p-7 sm:p-8">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-[1.05]">
            Livraison offerte
            <br />
            <span className="italic font-light text-terracotta">cet été.</span>
          </h2>

          <p className="mt-4 text-ink-soft leading-relaxed">
            Sur le sud du Bassin d&apos;Arcachon — d&apos;Arcachon au Teich, en
            passant par Pyla-sur-Mer, La Teste-de-Buch, Cazaux, La Hume et
            Gujan-Mestras — la livraison de votre paella est offerte cet été.
          </p>

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
