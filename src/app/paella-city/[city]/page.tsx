import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { cities, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const deliveryCities = cities.filter((c) => c.delivery);

export function generateStaticParams() {
  return deliveryCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = deliveryCities.find((x) => x.slug === city);
  if (!c) return {};
  const url = `${SITE.url}/paella-${c.slug}`;
  return {
    title: `Paella ${c.name} — Traiteur livraison & chef à domicile`,
    description: `Commandez votre paella à ${c.name}. Livraison à domicile dès 10 personnes ou chef sur place dès 23 invités. Tapas, planches ibériques, sangria maison.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `Paella ${c.name} · Hola Paella`,
      description: `Paella livrée ou cuisinée sur place à ${c.name}. De 18 à 21 €/pers.`,
      images: ["/images/hero-paella.jpg"],
    },
  };
}

export default async function PaellaCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = deliveryCities.find((x) => x.slug === city);
  if (!c) return notFound();

  const url = `${SITE.url}/paella-${c.slug}`;
  const others = deliveryCities.filter((x) => x.slug !== c.slug);

  const faqs = [
    {
      q: `Comment commander une paella à ${c.name} ?`,
      a: `Remplissez le formulaire de devis en ligne avec votre date, nombre d'invités et préférences. Je vous réponds sous 24h avec une proposition sur mesure.`,
    },
    {
      q: `Quelles paellas proposez-vous à ${c.name} ?`,
      a: "4 paellas au choix : Royale (gambas, lotte, langoustines, poulet bio · 21 €/pers), Del Pueblo (travers, poulet, Serrano, gambas · 20 €/pers), Fruits de mer & Poisson (19 €/pers), Fruits de mer & Poulet bio (18 €/pers). Toutes disponibles en version classique ou Bodega.",
    },
    {
      q: `Livrez-vous ou cuisinez-vous sur place à ${c.name} ?`,
      a: `Les deux. Livraison à domicile dès 10 personnes (réservation 48h), chef à domicile dès 23 invités (réservation 72h). ${c.name} est dans ma zone de livraison principale.`,
    },
    {
      q: `Que proposez-vous en dehors de la paella ?`,
      a: "Tapas (carpaccio de poulpe, gambas, chipirons), planches de charcuterie ibérique (Pata Negra 36 mois, Chorizo Bellota), sangria maison rouge ou blanche en Bag-in-Box, vins espagnols.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(
            `Paella à ${c.name}`,
            `Service traiteur paella à ${c.name} : livraison à domicile et chef sur place.`,
            c.name,
          ),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE.url },
            { name: `Paella ${c.name}`, url },
          ]),
        ]}
      />

      <section className="warm-bg pt-12 pb-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
            <Link href="/" className="hover:text-terracotta">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Paella {c.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="pill mb-5">
                <span className="text-saffron-dark">✦</span> Livraison & chef à domicile
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                Paella
                <br />
                <span className="italic font-light text-terracotta">à {c.name}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                Commandez votre paella à {c.name} : livraison à domicile dès 10 personnes
                ou chef sur place dès 23 invités. Tapas, planches ibériques, sangria maison.
                Du producteur à votre table.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link href="/devis" className="btn-primary group">
                  Commander pour {c.name} <ArrowRight size={18} />
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost">
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-paella.jpg"
                alt={`Paella à ${c.name}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            Nos paellas <span className="italic font-light">livrées à {c.name}.</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { name: "Paella Royale", price: "21", desc: "Gambas sauvages, poulet bio, lotte, langoustines." },
              { name: "Paella Del Pueblo", price: "20", desc: "Travers de porc, poulet bio, Serrano, gambas." },
              { name: "Fruits de mer & Poisson", price: "19", desc: "Gambas sauvages, lotte." },
              { name: "Fruits de mer & Poulet bio", price: "18", desc: "Gambas sauvages, poulet bio." },
            ].map((p) => (
              <div key={p.name} className="card-warm p-7 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl text-ink leading-tight">{p.name}</h3>
                  <p className="text-ink-soft text-sm mt-1">{p.desc}</p>
                </div>
                <div className="font-display text-2xl text-ink shrink-0 ml-4">{p.price}€<span className="text-xs font-body text-ink-soft font-normal ml-1">/ pers.</span></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-ink-soft text-sm">
            Toutes servies sur riz au safran, moules, calamars, chorizo, poivrons et épices.
            Version classique ou Bodega (fruits de mer décortiqués).
          </p>
          <Link href="/carte" className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-terracotta transition-colors group mt-4">
            Voir la carte complète
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            Comment ça marche <span className="italic font-light">à {c.name} ?</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                title: "Composez votre menu",
                text: "Paellas, tapas, planches, sangrias, vins. Vous choisissez, je m'adapte à votre budget et vos envies.",
              },
              {
                n: "02",
                title: "Je cuisine le jour J",
                text: `Livraison chaude à ${c.name} dès 10 personnes. Chef à domicile dès 23 invités — je viens avec tout mon matériel.`,
              },
              {
                n: "03",
                title: "Vous profitez",
                text: "Tout est prêt. Vous servez vos invités, vous passez une bonne soirée. Le reste, c'est mon affaire.",
              },
            ].map((step) => (
              <div key={step.n} className="card-warm p-7">
                <div className="text-saffron font-display text-4xl mb-3">{step.n}</div>
                <h3 className="font-display text-xl text-ink leading-tight mb-2">{step.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
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

      <section className="py-16 px-5 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Paella dans d&apos;autres villes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/paella-${o.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">Paella {o.name}</div>
                <div className="text-sm text-ink-soft mt-1 flex items-center gap-1">
                  Voir <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-5 sm:px-8 bg-paper text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl mx-auto">
          Votre paella à <span className="italic">{c.name},</span> c&apos;est par ici.
        </h2>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
