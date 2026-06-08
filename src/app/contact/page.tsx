import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Contact",
  description:
    "Joindre Hola Paella : téléphone, email, zone d'intervention. Bassin d'Arcachon et Bordeaux Métropole.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Accueil", url: SITE.url },
        { name: "Contact", url: `${SITE.url}/contact` },
      ])} />
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pill mb-5">Contact</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
            On en discute&nbsp;?
            <br />
            <span className="italic font-light">Avec plaisir.</span>
          </h1>
          <p className="mt-6 text-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
            Pour un devis structuré, mieux vaut passer par mon formulaire.
            Pour le reste, je suis joignable tous les jours.
          </p>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pb-24 pt-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <a href="tel:+33646198234" className="card-warm p-8 group block">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-1">Téléphone</div>
            <div className="font-display text-3xl text-ink">06 46 19 82 34</div>
            <div className="text-ink-soft text-sm mt-2">Du lundi au samedi, de 9h à 19h</div>
          </a>

          <a href="mailto:contact@hola-paella.fr" className="card-warm p-8 group block">
            <div className="w-12 h-12 rounded-2xl bg-saffron/15 text-saffron-dark flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-1">Email</div>
            <div className="font-display text-2xl text-ink break-all">contact@hola-paella.fr</div>
            <div className="text-ink-soft text-sm mt-2">Réponse sous 24-48h</div>
          </a>

          <div className="card-warm p-8">
            <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-5">
              <MapPin size={20} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-1">Zone d&apos;intervention</div>
            <div className="font-display text-2xl text-ink leading-tight">La Teste-de-Buch, 33260</div>
            <div className="text-ink-soft text-sm mt-2 leading-relaxed">Bassin d&apos;Arcachon · Bordeaux Métropole</div>
          </div>

          <div className="card-warm p-8">
            <div className="w-12 h-12 rounded-2xl bg-clay/15 text-clay flex items-center justify-center mb-5">
              <Clock size={20} />
            </div>
            <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-1">Réservation</div>
            <div className="font-display text-2xl text-ink leading-tight">48 à 72h à l&apos;avance</div>
            <div className="text-ink-soft text-sm mt-2 leading-relaxed">
              48h pour la livraison, 72h pour une prestation à domicile
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
