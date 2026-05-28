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
  const menuItems = menu.map((m) => ({ name: m.name, description: m.description, price: m.price, category: m.category }));
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
            Cinq paellas, six tapas tartinables, trois planches ibériques, sangrias maison et vins espagnols.
            Tout est à composer sur votre devis.
          </p>
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
