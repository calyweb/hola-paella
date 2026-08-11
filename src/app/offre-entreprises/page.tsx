import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Percent, Calendar, Receipt, CheckCircle2 } from "lucide-react";
import { SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const url = `${SITE.url}/offre-entreprises`;

export const metadata: Metadata = {
  title: "Offre entreprises & associations : -20% le midi en semaine",
  description:
    "Entreprises et associations : -20% minimum sur toute la facture pour vos repas de paella réservés le midi en semaine (lundi à vendredi). Devis en ligne sous 24 h.",
  alternates: { canonical: url },
  openGraph: {
    url,
    title: "Offre entreprises & associations · Hola Paella",
    description: "-20% minimum sur toute la facture, le midi en semaine, pour les entreprises et associations.",
    images: ["/images/hero-banner.png"],
  },
};

const points = [
  {
    icon: Calendar,
    title: "Quand ?",
    text: "Du lundi au vendredi, sur le service du midi uniquement. Idéal pour un repas d'équipe, une AG ou un séminaire.",
  },
  {
    icon: Percent,
    title: "Sur quoi ?",
    text: "-20% minimum sur toute la facture : paella, tapas, planches ibériques, sangria et boissons compris.",
  },
  {
    icon: Receipt,
    title: "Pour qui ?",
    text: "Entreprises et associations, quelle que soit la taille de l'équipe (livraison dès 10 personnes, chef à domicile dès 24).",
  },
  {
    icon: CheckCircle2,
    title: "Comment en profiter ?",
    text: "Indiquez-le simplement dans votre demande de devis. La remise est appliquée automatiquement sur votre proposition.",
  },
];

const faqs = [
  {
    q: "Comment bénéficier de la remise de 20% ?",
    a: "Remplissez le formulaire de devis en précisant qu'il s'agit d'un repas d'entreprise ou d'association pour un midi en semaine. La remise d'au moins 20% est appliquée directement sur votre proposition, sans code ni démarche supplémentaire.",
  },
  {
    q: "La remise s'applique-t-elle aussi le soir ou le week-end ?",
    a: "Non, cette offre concerne uniquement le service du midi, du lundi au vendredi. Pour un événement en soirée ou le week-end, je reste bien sûr disponible sur devis classique.",
  },
  {
    q: "Y a-t-il un minimum de personnes ?",
    a: "Oui, comme pour toutes mes prestations : 10 personnes minimum pour la livraison à domicile, 24 personnes pour la formule chef à domicile avec cuisson sur place.",
  },
  {
    q: "La remise est-elle cumulable avec d'autres offres ?",
    a: "Cette remise s'applique sur le tarif standard de la facture. Contactez-moi si vous avez une autre demande particulière, on regarde ensemble ce qui est possible.",
  },
  {
    q: "Proposez-vous une facture professionnelle adaptée ?",
    a: "Oui, je fournis systématiquement un devis puis une facture en bonne et due forme, avec mention de la TVA, adaptée à la comptabilité de votre entreprise ou association.",
  },
  {
    q: "Jusqu'où vous déplacez-vous pour un repas d'entreprise ?",
    a: "Je livre sur le sud du Bassin d'Arcachon dès 10 personnes, et je me déplace avec mon matériel pour cuisiner sur place jusqu'à Bordeaux dès 24 invités.",
  },
];

export default function OffreEntreprisesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(
            "Offre entreprises & associations -20% le midi",
            "Remise minimum de 20% sur toute la facture pour les repas de paella réservés le midi en semaine par une entreprise ou une association.",
            undefined,
            url,
          ),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE.url },
            { name: "Offre entreprises & associations", url },
          ]),
        ]}
      />

      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="pill pill-terracotta mb-5">
              <span className="text-saffron-dark">&#10022;</span> Entreprises &amp; associations
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
              -20% minimum
              <br />
              <span className="italic font-light text-terracotta">le midi en semaine.</span>
            </h1>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-2xl mx-auto">
              Réservez votre paella un midi de semaine pour votre entreprise ou votre association :
              -20% minimum sur toute la facture. Repas d&apos;équipe, AG, séminaire, cocktail —
              le format idéal pour rassembler tout le monde sans exploser le budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7 justify-center">
              <Link href="/devis" className="btn-primary group">
                Demander un devis <ArrowRight size={18} />
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn-ghost">
                <Phone size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            Comment ça <span className="italic font-light">marche ?</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.title} className="card-warm p-7">
                <div className="w-10 h-10 rounded-2xl bg-saffron/15 flex items-center justify-center text-saffron-dark mb-4">
                  <p.icon size={18} />
                </div>
                <h3 className="font-display text-xl text-ink leading-tight mb-2">{p.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="bg-paper rounded-2xl p-6 border border-ink/8">
                <div className="font-display text-lg text-ink mb-2">{f.q}</div>
                <p className="text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8 bg-paper text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl mx-auto">
          Votre repas d&apos;équipe, <span className="italic">c&apos;est par ici.</span>
        </h2>
        <p className="mt-4 text-ink-soft">Réponse à votre demande sous 24 h.</p>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
