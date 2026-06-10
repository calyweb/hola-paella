"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menu, categoryMeta, type Category } from "@/data/menu";

const order: Category[] = ["paellas", "tapas", "planches", "sangrias", "vins", "eaux", "extras"];

export function CarteClient() {
  const [active, setActive] = useState<Category>("paellas");

  return (
    <div className="bg-paper">

      {/* Navigation centrée */}
      <div className="sticky top-[72px] z-30 bg-paper/90 backdrop-blur-md pt-14 pb-10">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 px-5">
          {order.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-display text-3xl sm:text-4xl leading-none transition-colors duration-200 ${
                active === c
                  ? "text-ink underline underline-offset-4 decoration-saffron decoration-2 cursor-default"
                  : "text-ink/20 hover:text-ink/50 cursor-pointer"
              }`}
            >
              {categoryMeta[c].label}
            </button>
          ))}
        </div>
      </div>

      {/* Toutes les catégories rendues, seule l'active est visible */}
      {order.map((c) => {
        const items = menu.filter((m) => m.category === c);
        const meta = categoryMeta[c];
        // Promo visible si la tagline commence par "Commandez"
        const promo = meta.tagline.startsWith("Commandez") ? meta.tagline.split(" · ")[0] : null;
        return (
          <section
            key={c}
            className={`pt-6 pb-6 px-5 sm:px-8 ${active === c ? "block" : "hidden"}`}
          >
            <div className="max-w-[1440px] mx-auto">
              {promo && (
                <div className="mb-6 inline-flex items-center gap-2 bg-saffron/20 border border-saffron/40 text-ink px-5 py-2.5 rounded-full text-sm font-medium">
                  <span className="text-saffron-dark">🎁</span> {promo}
                </div>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <article key={item.slug} className="card-warm overflow-hidden flex flex-col">
                    <div className="relative aspect-[5/3] overflow-hidden bg-saffron/10">
                      {item.surDevis ? (
                        <div className="w-full h-full bg-terracotta flex flex-col items-center justify-center gap-3 px-6 text-center">
                          <div className="text-saffron text-4xl">✦</div>
                          <div className="font-display text-paper text-2xl leading-tight">Paella sur mesure</div>
                          <div className="text-paper/60 text-xs uppercase tracking-[0.2em]">Homard · Truffes · Prestige</div>
                        </div>
                      ) : (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      {item.signature && !item.nouveaute && (
                        <div className="absolute top-3 left-3 bg-saffron text-ink text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1 rounded-full">
                          ✦ Signature
                        </div>
                      )}
                      {item.nouveaute && (
                        <div className="absolute top-3 left-3 bg-terracotta text-paper text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1 rounded-full">
                          ✦ Nouveauté
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl text-ink leading-tight">{item.name}</h3>
                      <p className="text-terracotta italic text-sm mt-1">{item.tagline}</p>
                      <p className="text-ink-soft text-sm mt-3 leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-ink/8 flex items-center justify-between gap-4 flex-wrap">
                        {item.surDevis ? (
                          <span className="font-display text-xl text-ink">Sur devis</span>
                        ) : (
                          <span className="font-display text-xl text-ink">
                            {item.price}€
                            <span className="text-xs font-body text-ink-soft font-normal ml-1">
                              {item.unit}
                            </span>
                          </span>
                        )}
                        {item.cartonPrice && (
                          <span className="text-sm text-ink-soft">
                            <span className="font-semibold text-ink">{item.cartonPrice}€</span>{" "}
                            {item.cartonUnit}
                          </span>
                        )}
                        {item.classicVersion && (
                          <span className="text-[11px] text-ink-soft border border-ink/15 rounded-full px-2.5 py-1 leading-none">
                            Dispo aussi en version classique
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
