import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cities, events, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

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
  const url = `${SITE.url}/paella-${c.slug}`;
  return {
    title: c.delivery
      ? `Paella ${c.name} — Livraison & chef à domicile`
      : `Paella ${c.name} — Chef traiteur à domicile`,
    description: c.delivery
      ? `Commandez votre paella à ${c.name}. Livraison à domicile dès 10 personnes ou chef sur place dès 23 invités. Tapas, planches ibériques, sangria maison.`
      : `Chef traiteur paella à domicile à ${c.name} dès 23 invités. Je viens avec mon matériel et je cuisine devant vos invités. Tapas, planches, sangria.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `Paella ${c.name} · Hola Paella`,
      description: c.delivery
        ? `Paella livree ou cuisinee sur place a ${c.name}. De 18 a 21 EUR/pers.`
        : `Chef paella a domicile a ${c.name}. Des 23 invites, de 18 a 21 EUR/pers.`,
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
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const url = `${SITE.url}/paella-${c.slug}`;
  const others = cities.filter((x) => x.slug !== c.slug);

  const faqs = c.delivery
    ? [
        {
          q: `Comment commander une paella a ${c.name} ?`,
          a: `Remplissez le formulaire de devis en ligne avec votre date, nombre d'invites et preferences. Je vous reponds sous 24h avec une proposition sur mesure.`,
        },
        {
          q: `Quelles paellas proposez-vous a ${c.name} ?`,
          a: "4 paellas au choix : Royale (gambas, lotte, langoustines, poulet bio - 21 EUR/pers), Del Pueblo (travers, poulet, Serrano, gambas - 20 EUR/pers), Fruits de mer & Poisson (19 EUR/pers), Fruits de mer & Poulet bio (18 EUR/pers). Toutes disponibles en version classique ou Bodega.",
        },
        {
          q: `Livrez-vous ou cuisinez-vous sur place a ${c.name} ?`,
          a: `Les deux. Livraison a domicile des 10 personnes (reservation 48h), chef a domicile des 23 invites (reservation 72h). ${c.name} est dans ma zone de livraison principale.`,
        },
        {
          q: `Que proposez-vous en dehors de la paella ?`,
          a: "Tapas (carpaccio de poulpe, gambas, chipirons), planches de charcuterie iberique (Pata Negra 36 mois, Chorizo Bellota), sangria maison rouge ou blanche en Bag-in-Box, vins espagnols.",
        },
      ]
    : [
        {
          q: `Comment commander une paella a ${c.name} ?`,
          a: `Remplissez le formulaire de devis en ligne avec votre date, nombre d'invites et preferences. Je vous reponds sous 24h avec une proposition sur mesure.`,
        },
        {
          q: `Quelles paellas proposez-vous a ${c.name} ?`,
          a: "4 paellas au choix : Royale (gambas, lotte, langoustines, poulet bio - 21 EUR/pers), Del Pueblo (travers, poulet, Serrano, gambas - 20 EUR/pers), Fruits de mer & Poisson (19 EUR/pers), Fruits de mer & Poulet bio (18 EUR/pers). Toutes disponibles en version classique ou Bodega.",
        },
        {
          q: `Quel est le minimum d'invites a ${c.name} ?`,
          a: `Je me deplace a ${c.name} des 23 invites pour la formule chef a domicile. Je viens avec mon materiel complet et je cuisine devant vos invites. Reservation 72h a l'avance.`,
        },
        {
          q: `Que proposez-vous en dehors de la paella ?`,
          a: "Tapas (carpaccio de poulpe, gambas, chipirons), planches de charcuterie iberique (Pata Negra 36 mois, Chorizo Bellota), sangria maison rouge ou blanche en Bag-in-Box, vins espagnols.",
        },
      ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(
            `Paella à ${c.name}`,
            c.delivery
              ? `Service traiteur paella à ${c.name} : livraison à domicile et chef sur place.`
              : `Chef traiteur paella à domicile à ${c.name} : je viens cuisiner sur place dès 23 invités.`,
            c.name,
            url,
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
                <span className="text-saffron-dark">&#10022;</span>{" "}
                {c.delivery ? "Livraison & chef a domicile" : "Chef traiteur a domicile"}
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                Paella
                <br />
                <span className="italic font-light text-terracotta">a {c.name}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                {c.delivery ? (
                  <>
                    Commandez votre paella a {c.name} : livraison a domicile des 10 personnes
                    ou chef sur place des 23 invites. Tapas, planches iberiques, sangria maison.
                    Du producteur a votre table.
                  </>
                ) : (
                  <>
                    Je me deplace a {c.name} avec mon materiel pour cuisiner votre paella
                    devant vos invites, des 23 personnes. Tapas, planches iberiques, sangria
                    maison. Reservation 72h a l&apos;avance.
                  </>
                )}
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
                alt={`Paella a ${c.name}`}
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
            {c.delivery ? (
              <>Nos paellas <span className="italic font-light">livrees a {c.name}.</span></>
            ) : (
              <>Nos paellas <span className="italic font-light">a {c.name}.</span></>
            )}
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
                <div className="font-display text-2xl text-ink shrink-0 ml-4">{p.price}&euro;<span className="text-xs font-body text-ink-soft font-normal ml-1">/ pers.</span></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-ink-soft text-sm">
            Toutes servies sur riz au safran, moules, calamars, chorizo, poivrons et epices.
            Version classique ou Bodega (fruits de mer decortiques).
          </p>
          <Link href="/carte" className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-terracotta transition-colors group mt-4">
            Voir la carte complete
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            Comment ca marche <span className="italic font-light">a {c.name} ?</span>
          </h2>
          <div className={`mt-10 grid ${c.delivery ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}>
            {c.delivery ? (
              <>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">01</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Composez votre menu</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Paellas, tapas, planches, sangrias, vins. Vous choisissez, je m&apos;adapte a votre budget et vos envies.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">02</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Je cuisine le jour J</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Livraison chaude a {c.name} des 10 personnes. Chef a domicile des 23 invites — je viens avec tout mon materiel.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">03</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Vous profitez</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Tout est pret. Vous servez vos invites, vous passez une bonne soiree. Le reste, c&apos;est mon affaire.</p>
                </div>
              </>
            ) : (
              <>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">01</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Composez votre menu</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Paellas, tapas, planches, sangrias, vins. Vous choisissez, je m&apos;adapte a votre budget et vos envies. Devis en ligne sous 24h.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">02</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Je viens cuisiner chez vous</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">J&apos;arrive a {c.name} avec mon materiel complet et je cuisine votre paella en direct, devant vos invites. Des 23 personnes.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-10">
            Questions frequentes
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
            {others.slice(0, 10).map((o) => (
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

      <section className="py-16 px-5 sm:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Paella a {c.name} pour quel evenement&nbsp;?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {events.map((ev) => (
              <Link
                key={ev.slug}
                href={`/paella-${ev.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">{ev.name.replace("Paella ", "")}</div>
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
          Votre paella a <span className="italic">{c.name},</span> c&apos;est par ici.
        </h2>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
