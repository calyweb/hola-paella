import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CarteClient } from "./CarteClient";
import { SITE, JsonLd, menuJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { menu } from "@/data/menu";

export const metadata = {
  title: "La carte",
  description:
    "Paellas, tapas, planches de Pata Negra, sangrias maison et vins espagnols. Découvrez notre carte traiteur sur le Bassin d'Arcachon et Bordeaux.",
  alternates: { canonical: `${SITE.url}/carte` },
};

export default function CartePage() {
  const menuItems = menu.filter((m) => !m.surDevis).map((m) => ({ name: m.name, description: m.description, price: m.price, category: m.category }));
  const paellasPrincipales = menu.filter((m) => m.category === "paellas" && !m.surDevis);
  return (
    <>
      <JsonLd data={[
        menuJsonLd(menuItems),
        breadcrumbJsonLd([
          { name: "Accueil", url: SITE.url },
          { name: "La carte", url: `${SITE.url}/carte` },
        ]),
      ]} />
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="pill mb-5">Notre carte</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
            La carte d&apos;un traiteur
            <br />
            <span className="italic font-light">paella d&apos;exception.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            4 paellas déclinables en 2 versions, trois tapas, six planches ibériques, sangrias maison et vins espagnols.
            Tout est à composer sur votre devis.
          </p>
        </div>
      </section>

      <section className="bg-paper pt-14 pb-2 px-5 sm:px-8" aria-label="Nos paellas">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-8 text-center">
            Nos <span className="italic font-light">4 paellas</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {paellasPrincipales.map((p) => (
              <div key={p.slug} className="card-warm p-6 flex flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg text-ink leading-tight">{p.name}</h3>
                  <span className="font-display text-xl text-ink shrink-0">
                    {p.price}€<span className="text-xs font-body text-ink-soft font-normal ml-1">{p.unit}</span>
                  </span>
                </div>
                <p className="text-terracotta italic text-sm">{p.tagline}</p>
                <p className="text-ink-soft text-sm leading-relaxed mt-1">{p.description}</p>
                {p.classicVersion && (
                  <span className="mt-2 self-start text-[11px] text-ink-soft border border-ink/15 rounded-full px-2.5 py-1 leading-none">
                    Dispo aussi en version classique
                  </span>
                )}
                {p.signature && (
                  <span className="mt-2 self-start text-[11px] bg-saffron text-ink rounded-full px-2.5 py-1 leading-none uppercase tracking-[0.12em] font-semibold">
                    Signature
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CarteClient />

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-paper/95 backdrop-blur-md border-t border-ink/10 px-5 py-3">
        <Link href="/devis" className="btn-primary w-full group">
          Demander un devis
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <section className="pt-10 pb-24 px-5 sm:px-8 bg-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            Prêt à composer votre menu&nbsp;?
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Je reviens vers vous rapidement avec une proposition sur mesure.
          </p>
          <Link href="/devis" className="btn-primary mt-7 group">
            Demander un devis
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
