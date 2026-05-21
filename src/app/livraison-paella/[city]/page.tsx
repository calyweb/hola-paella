import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { cities, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return {};
  const url = `${SITE.url}/livraison-paella-${c.slug}`;
  return {
    title: `${c.h1} — Traiteur paella à domicile`,
    description: `${c.intro.substring(0, 155)}…`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${c.h1} · Hola Paella`,
      description: c.intro,
      images: ["/images/hero-paella.jpg"],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const url = `${SITE.url}/livraison-paella-${c.slug}`;
  const others = cities.filter((x) => x.slug !== c.slug).slice(0, 5);

  const localFaqs = c.delivery ? [
    {
      q: `Livrez-vous la paella à ${c.name} ?`,
      a: `Oui. Je livre votre paella à ${c.name} dès 10 personnes, réservation 48h à l'avance. La paella est cuisinée le jour même et livrée chaude, prête à servir.`,
    },
    {
      q: `Quel est le minimum pour une livraison à ${c.name} ?`,
      a: `10 invités pour la livraison à domicile, 23 invités pour la formule chef à domicile (je viens cuisiner sur place avec mon matériel).`,
    },
    {
      q: `Combien coûte une paella livrée à ${c.name} ?`,
      a: `Mes 4 paellas vont de 18 €/pers (Fruits de mer & Poulet bio) à 21 €/pers (Royale : gambas sauvages, poulet bio, lotte, langoustines). Tarif identique en livraison ou avec chef sur place.`,
    },
    {
      q: `Le chef se déplace-t-il à ${c.name} ?`,
      a: `Oui, je me déplace à ${c.name} avec mon matériel pour cuisiner sur place devant vos invités. Réservation 72h à l'avance, dès 23 invités.`,
    },
  ] : [
    {
      q: `Livrez-vous la paella à ${c.name} ?`,
      a: `${c.name} n'est pas dans ma zone de livraison, mais je me déplace avec mon matériel pour cuisiner votre paella sur place, dès 23 invités. Réservation 72h à l'avance.`,
    },
    {
      q: `Combien d'invités minimum à ${c.name} ?`,
      a: `23 invités minimum pour la formule chef à domicile à ${c.name}. J'arrive avec tout mon matériel et je cuisine devant vos invités.`,
    },
    {
      q: `Combien coûte une paella à ${c.name} ?`,
      a: `Mes 4 paellas vont de 18 €/pers (Fruits de mer & Poulet bio) à 21 €/pers (Royale : gambas sauvages, poulet bio, lotte, langoustines). Frais de déplacement selon votre adresse.`,
    },
    {
      q: `Quelles prestations proposez-vous à ${c.name} ?`,
      a: `Paella cuisinée sur place, tapas, planches de charcuterie ibérique, sangria maison. Je m'occupe de tout : matériel, cuisson, mise en place.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(
            `Livraison paella à ${c.name}`,
            `Service de livraison de paella à domicile et de chef privé à ${c.name} et alentours.`,
            c.name,
          ),
          faqJsonLd(localFaqs),
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE.url },
            { name: `Livraison paella ${c.name}`, url },
          ]),
        ]}
      />

      <section className="warm-bg pt-12 pb-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
            <Link href="/" className="hover:text-terracotta">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Livraison paella {c.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="pill mb-5">
                <span className="text-saffron-dark">✦</span> Traiteur paella · {c.name}
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                {c.h1.split(" à ")[0]}
                <br />
                <span className="italic font-light text-terracotta">à {c.name}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                {c.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link href="/devis" className="btn-primary group">
                  Devis pour {c.name} <ArrowRight size={18} />
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost">
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-paella.jpg"
                alt={`Paella livrée à ${c.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {(c.delivery ? [
            { label: "Minimum livraison", value: "10 invités" },
            { label: "Réservation", value: "48h à l'avance" },
            { label: "Zone", value: c.distance },
          ] : [
            { label: "Minimum", value: "23 invités" },
            { label: "Réservation", value: "72h à l'avance" },
            { label: "Zone", value: c.distance },
          ]).map((s) => (
            <div key={s.label} className="card-warm p-7">
              <div className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-1">{s.label}</div>
              <div className="font-display text-2xl text-ink leading-tight">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            {c.delivery ? "Notre service traiteur" : "Chef à domicile"} à <span className="italic font-light">{c.name}.</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {(c.delivery ? [
              {
                title: "Paella livrée chaude, prête à servir",
                text: `Je cuisine la paella le jour même dans mes locaux et je la livre chaude à ${c.name}, à l'heure que vous me donnez. Dès 10 personnes.`,
              },
              {
                title: "Chef à domicile dès 23 invités",
                text: `Pour les grands événements, je me déplace à ${c.name} avec mon matériel et je cuisine la paella devant vos invités.`,
              },
              {
                title: "Tapas, planches, sangrias",
                text: `Carpaccio de poulpe, Pata Negra Bellota 36 mois, sangria maison. Carte complète à composer pour votre événement à ${c.name}.`,
              },
              {
                title: "Devis sur mesure en 24 h",
                text: "Date, nombre d'invités, ambiance — je réponds à votre demande sous 24 h. Aucune surprise sur la facture.",
              },
            ] : [
              {
                title: "Je cuisine sur place",
                text: `J'arrive à ${c.name} avec tout mon matériel et je cuisine votre paella devant vos invités. Cuisson en direct, convivialité garantie.`,
              },
              {
                title: "Dès 23 invités",
                text: `La formule chef à domicile est disponible à ${c.name} dès 23 personnes. Réservation 72h à l'avance.`,
              },
              {
                title: "Tapas, planches, sangrias",
                text: `Carpaccio de poulpe, Pata Negra Bellota 36 mois, sangria maison. Carte complète à composer pour votre événement à ${c.name}.`,
              },
              {
                title: "Devis sur mesure en 24 h",
                text: "Date, nombre d'invités, ambiance — je réponds à votre demande sous 24 h. Aucune surprise sur la facture.",
              },
            ]).map((b) => (
              <div key={b.title} className="card-warm p-7">
                <h3 className="font-display text-xl text-ink leading-tight mb-2">{b.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream-warm">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
            Quartiers desservis à {c.name}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.quartiers.map((q) => (
              <li key={q} className="pill">
                <Check size={13} className="text-olive" /> {q}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-ink-soft">
            Vous êtes ailleurs sur {c.name} ou en limite&nbsp;? Appelez-moi au{" "}
            <a href={`tel:${SITE.phone}`} className="text-terracotta font-medium">
              {SITE.phoneDisplay}
            </a>
            , on trouve une solution.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-10">
            Vos questions sur la livraison à {c.name}
          </h2>
          <div className="space-y-3">
            {localFaqs.map((f) => (
              <div key={f.q} className="bg-cream rounded-2xl p-6 border border-ink/8">
                <div className="font-display text-lg text-ink mb-2">{f.q}</div>
                <p className="text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            On livre aussi à&nbsp;:
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/livraison-paella-${o.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">{o.name}</div>
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
          Bloquons votre date à <span className="italic">{c.name}.</span>
        </h2>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
