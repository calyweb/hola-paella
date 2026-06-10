import { Suspense } from "react";
import { DevisForm } from "./DevisForm";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Demander un devis",
  description:
    "Demandez votre devis paella personnalisé. Réponse sous 24h pour votre événement sur le Bassin d'Arcachon ou à Bordeaux.",
  alternates: { canonical: `${SITE.url}/devis` },
};

export default function DevisPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Accueil", url: SITE.url },
        { name: "Demander un devis", url: `${SITE.url}/devis` },
      ])} />
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="pill mb-5">Devis personnalisé · Réponse sous 24h</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
            Préparons
            <br />
            <span className="italic font-light">votre événement.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Quelques questions pour bien faire les choses. Plus vous serez précis,
            plus ma proposition sera juste.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pt-12 pb-24">
        <Suspense>
          <DevisForm />
        </Suspense>
      </section>
    </>
  );
}
