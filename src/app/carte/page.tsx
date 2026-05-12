import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CarteClient } from "./CarteClient";

export const metadata = {
  title: "La carte",
  description:
    "Paellas, tapas, planches de Pata Negra, sangrias maison et vins espagnols. Découvrez notre carte traiteur sur le Bassin d'Arcachon et Bordeaux.",
};

export default function CartePage() {
  return (
    <>
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="pill mb-5">Notre carte</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
            La carte d&apos;un traiteur
            <br />
            <span className="italic font-light">paella d&apos;exception.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Quatre paellas, trois tapas, six planches ibériques, sangrias maison et vins espagnols.
            Tout est à composer sur votre devis.
          </p>
        </div>
      </section>

      <CarteClient />

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
