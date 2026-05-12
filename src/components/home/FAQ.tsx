"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Où livrez-vous la paella à domicile ?",
    a: "Je livre sur tout le Bassin d'Arcachon et jusqu'à Bordeaux, dès 10 personnes. Réservation 48h à l'avance. Règlement à la livraison en CB ou espèces.",
  },
  {
    q: "Pour le chef à domicile, jusqu'où vous déplacez-vous ?",
    a: "Je me déplace sur tout le Bassin d'Arcachon et jusqu'à Bordeaux, dès 23 personnes. Réservation 72h à l'avance.",
  },
  {
    q: "Combien coûte une paella ?",
    a: "Nos 4 paellas vont de 18 €/pers (Fruits de mer & Poulet bio) à 21 €/pers (Royale : gambas sauvages, poulet bio, lotte, langoustines). Tarif identique en livraison ou avec chef sur place — les frais de déplacement du chef sont calculés selon le lieu.",
  },
  {
    q: "Quel est le minimum de personnes ?",
    a: "10 personnes pour la livraison à domicile, 23 personnes pour la formule chef à domicile (je viens avec mon matériel et je cuisine devant vos invités).",
  },
  {
    q: "Combien de temps à l'avance dois-je réserver ?",
    a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. En haute saison ou pour un mariage, mieux vaut s'y prendre plusieurs semaines à l'avance.",
  },
  {
    q: "Que proposez-vous en dehors de la paella ?",
    a: "Oui. Je propose aussi des tapas (gambas, chipirons, carpaccio de poulpe), des planches de charcuterie ibérique (Pata Negra, Serrano, Chorizo Bellota), des sangrias maison en Bag-in-Box et une sélection de vins espagnols.",
  },
  {
    q: "Peut-on personnaliser le menu ?",
    a: "Bien sûr. J'établis un menu en fonction de vos envies et de votre budget. Allergies, régimes, repas enfants — je m'adapte. Précisez-le sur votre demande de devis.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-paper">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <div className="pill mb-5">Vos questions</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Avant de
            <br />
            <span className="italic font-light">passer à table.</span>
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Pas de réponse à votre question&nbsp;? Appelez-moi au{" "}
            <a href="tel:0646198234" className="text-terracotta font-medium underline decoration-saffron decoration-2 underline-offset-4">
              06 46 19 82 34
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-cream/60 border border-ink/8 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-display text-lg text-ink leading-snug">{f.q}</span>
                <span className="w-8 h-8 rounded-full bg-paper border border-ink/10 flex items-center justify-center shrink-0">
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-ink-soft leading-relaxed border-t border-ink/8 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
