"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "hp_promo_tartiflette_2026";

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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        aria-label="Fermer"
        onClick={dismiss}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm cursor-pointer"
      />
      <div className="relative w-full max-w-[min(36rem,calc((100dvh-7rem)*1.1))] bg-paper rounded-2xl shadow-2xl overflow-hidden">
        <button
          aria-label="Fermer"
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-paper/90 hover:bg-paper flex items-center justify-center text-ink shadow-sm transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <Link href="/devis" onClick={dismiss} className="block">
          <Image
            src="/images/popup-tartiflette.jpg"
            alt="Nouveauté : forfait tartiflette au reblochon AOP, avec mesclun de salade, jambon cru grande réserve et vin blanc sélectionné par notre caviste. Tarif unique 22 € TTC par personne, vin inclus."
            width={1236}
            height={1122}
            className="w-full h-auto"
            sizes="(max-width: 640px) 100vw, 576px"
          />
        </Link>

        <div className="relative -mt-[1.7%] bg-paper p-3">
          <Link
            href="/devis"
            onClick={dismiss}
            className="btn-primary w-full justify-center hover:brightness-95"
            style={{ background: "#b57701", boxShadow: "0 8px 24px -10px rgba(181, 119, 1, 0.5)" }}
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
