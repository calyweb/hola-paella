import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { formules } from "@/data/formules";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Nos formules",
  description:
    "Livraison à domicile ou chef privé : choisissez la formule paella qui correspond à votre événement.",
  alternates: { canonical: `${SITE.url}/formules` },
};

export default function FormulesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Accueil", url: SITE.url },
        { name: "Nos formules", url: `${SITE.url}/formules` },
      ])} />
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pill mb-5">Nos formules</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
            Deux façons
            <br />
            <span className="italic font-light">de bien recevoir</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
            Selon le nombre d&apos;invités et l&apos;ambiance souhaitée, j&apos;adapte le geste &mdash;
            sans rien céder sur la qualité.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pt-24 pb-24 space-y-10">
        {formules.map((f, idx) => (
          <div
            key={f.slug}
            className="max-w-6xl mx-auto card-warm overflow-hidden grid md:grid-cols-2"
          >
            <div className={`p-8 sm:p-12 ${f.highlight ? "bg-saffron/10" : ""}`}>
              <div className="text-xs uppercase tracking-[0.18em] text-ink-soft/70 mb-2">
                {f.badge}
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-ink leading-[1.05]">
                {f.name}
              </h2>
              <p className="mt-3 italic text-terracotta text-lg">{f.tagline}</p>
              <p className="mt-5 text-ink-soft leading-relaxed">{f.description}</p>

              <ul className="mt-7 space-y-3">
                {f.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-ink-soft">
                    <Check size={17} className="mt-1 text-olive shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-12 bg-paper border-t md:border-t-0 md:border-l border-ink/8 flex flex-col">
              <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-2">À partir de</div>
              <div className="font-display text-6xl text-ink">
                {f.startingPrice}€
                <span className="text-base font-body font-normal text-ink-soft ml-1">/ pers.</span>
              </div>

              <dl className="mt-8 space-y-4 flex-1">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-soft">Minimum</dt>
                  <dd className="font-display text-xl text-ink mt-1">{f.minGuests} invités</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-soft">Réservation</dt>
                  <dd className="font-display text-xl text-ink mt-1">{f.notice}</dd>
                  {f.noticeNote && (
                    <dd className="text-sm text-ink-soft mt-1 italic">{f.noticeNote}</dd>
                  )}
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-soft">Zone</dt>
                  <dd className="text-ink mt-1">{f.zone}</dd>
                </div>
              </dl>

              <Link href="/devis" className="btn-primary mt-8 group w-full">
                {f.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
