"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X, Truck } from "lucide-react";

const STORAGE_KEY = "hp_promo_livraison_ete_2026";

const villes = [
  "Arcachon",
  "Pyla-sur-Mer",
  "La Teste-de-Buch",
  "Cazaux",
  "La Hume",
  "Gujan-Mestras",
  "Le Teich",
];

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
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-4">
      <button
        aria-label="Fermer"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md bg-paper rounded-3xl shadow-2xl p-7 sm:p-8 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-saffron/25 blur-3xl" />
        <div className="absolute -bottom-14 -left-14 w-48 h-48 rounded-full bg-terracotta/15 blur-3xl" />

        <button
          aria-label="Fermer"
          onClick={dismiss}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink transition-colors"
        >
          <X size={18} />
        </button>

        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-terracotta text-paper flex items-center justify-center mb-5">
            <Truck size={22} strokeWidth={2} />
          </div>

          <div className="pill mb-4">Offre d&apos;été</div>

          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-[1.05]">
            Livraison offerte
            <br />
            <span className="italic font-light text-terracotta">cet été.</span>
          </h2>

          <p className="mt-4 text-ink-soft leading-relaxed">
            Sur Arcachon, Pyla-sur-Mer, La Teste-de-Buch, Cazaux, La Hume,
            Gujan-Mestras et Le Teich, la livraison de votre paella est offerte
            cet été.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {villes.map((v) => (
              <span
                key={v}
                className="text-[11px] text-ink-soft border border-ink/15 rounded-full px-3 py-1"
              >
                {v}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link href="/devis" onClick={dismiss} className="btn-primary group">
              Demander un devis
            </Link>
            <button onClick={dismiss} className="btn-ghost">
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
