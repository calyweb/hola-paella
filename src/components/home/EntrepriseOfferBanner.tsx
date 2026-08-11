import Link from "next/link";
import { ArrowRight, Percent } from "lucide-react";

export function EntrepriseOfferBanner() {
  return (
    <Link
      href="/offre-entreprises"
      className="group block md:col-span-2 bg-terracotta rounded-3xl px-6 sm:px-10 py-7 hover:brightness-105 transition-[filter]"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="w-12 h-12 rounded-2xl bg-saffron/25 flex items-center justify-center text-saffron shrink-0">
          <Percent size={22} />
        </div>
        <div className="flex-1">
          <span className="inline-block bg-saffron text-ink text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full mb-2">
            Entreprises et associations
          </span>
          <div className="font-display text-2xl sm:text-3xl text-paper leading-tight">
            -20% minimum le midi en semaine
          </div>
          <p className="text-cream/75 text-[15px] mt-1">
            Sur toute la facture, pour vos repas d&apos;équipe, AG ou séminaires du lundi au vendredi midi.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 text-paper font-semibold text-sm sm:text-base shrink-0">
          En savoir plus
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
