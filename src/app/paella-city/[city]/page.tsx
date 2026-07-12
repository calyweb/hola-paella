import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cities, events, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { testimonialForCity } from "@/data/testimonials";
import { SocialProof } from "@/components/SocialProof";

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
      ? `Commandez votre paella à ${c.name}. Livraison à domicile dès 10 personnes ou chef sur place dès 24 invités. Tapas, planches ibériques, sangria maison.`
      : `Chef traiteur paella à domicile à ${c.name} dès 24 invités. Je viens avec mon matériel et je cuisine devant vos invités. Tapas, planches, sangria.`,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `Paella ${c.name} · Hola Paella`,
      description: c.delivery
        ? `Paella livrée ou cuisinée sur place à ${c.name}. À partir de 18 €/pers.`
        : `Chef paella à domicile à ${c.name}. Dès 24 invités, à partir de 18 €/pers.`,
      images: ["/images/hero-banner.png"],
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
  const testimonial = testimonialForCity(c.slug);

  const faqs = c.delivery
    ? [
        {
          q: `Comment commander une paella à ${c.name} ?`,
          a: `Remplissez le formulaire de devis en ligne avec votre date, nombre d'invités et préférences. Je vous réponds sous 24 h avec une proposition sur mesure.`,
        },
        {
          q: `Quelles paellas proposez-vous à ${c.name} ?`,
          a: "4 paellas au choix : Fruits de mer & Poulet bio (18 €/pers), Fruits de mer & Poisson (19 €/pers), Del Pueblo (20 €/pers), Royale — gambas sauvages, poulet bio, lotte, langoustines (21 €/pers).",
        },
        {
          q: `Livrez-vous ou cuisinez-vous sur place à ${c.name} ?`,
          a: `Les deux. Livraison à domicile dès 10 personnes (réservation 48 h), chef à domicile dès 24 invités (réservation 72 h). ${c.name} est dans ma zone de livraison principale.`,
        },
        {
          q: `Que proposez-vous en dehors de la paella ?`,
          a: "Des tapas (poulpe à la Galicienne, gambas à l'ail et piment d'Espelette, chipirons au lard poivré des Pyrénées), des planches de charcuterie ibérique (Fuet, Chorizo ibérique, Serrano Duroc, Pata Negra 36 mois), des sangrias maison rouge ou blanche en Bag-in-Box, et des vins espagnols.",
        },
      ]
    : [
        {
          q: `Comment commander une paella à ${c.name} ?`,
          a: `Remplissez le formulaire de devis en ligne avec votre date, nombre d'invités et préférences. Je vous réponds sous 24 h avec une proposition sur mesure.`,
        },
        {
          q: `Quelles paellas proposez-vous à ${c.name} ?`,
          a: "4 paellas au choix : Fruits de mer & Poulet bio (18 €/pers), Fruits de mer & Poisson (19 €/pers), Del Pueblo (20 €/pers), Royale — gambas sauvages, poulet bio, lotte, langoustines (21 €/pers).",
        },
        {
          q: `Quel est le minimum d'invités à ${c.name} ?`,
          a: `Je me déplace à ${c.name} dès 24 invités pour la formule chef à domicile. Je viens avec mon matériel complet et je cuisine devant vos invités. Réservation 72 h à l'avance.`,
        },
        {
          q: `Que proposez-vous en dehors de la paella ?`,
          a: "Des tapas (poulpe à la Galicienne, gambas à l'ail et piment d'Espelette, chipirons au lard poivré des Pyrénées), des planches de charcuterie ibérique (Fuet, Chorizo ibérique, Serrano Duroc, Pata Negra 36 mois), des sangrias maison rouge ou blanche en Bag-in-Box, et des vins espagnols.",
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
              : `Chef traiteur paella à domicile à ${c.name} : je viens cuisiner sur place dès 24 invités.`,
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
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
            <Link href="/" className="hover:text-terracotta">Accueil</Link>
            <span className="mx-2">/</span>
            <span>Paella {c.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="pill mb-5">
                <span className="text-saffron-dark">&#10022;</span>{" "}
                {c.delivery ? "Livraison & chef à domicile" : "Chef traiteur à domicile"}
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                Paella
                <br />
                <span className="italic font-light text-terracotta">à {c.name}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                {c.delivery ? (
                  <>
                    Commandez votre paella à {c.name} : livraison à domicile dès 10 personnes
                    ou chef sur place dès 24 invités. Tapas, planches ibériques, sangria maison.
                    Du producteur à votre table.
                  </>
                ) : (
                  <>
                    Je me déplace à {c.name} avec mon matériel pour cuisiner votre paella
                    devant vos invités, dès 24 personnes. Tapas, planches ibériques, sangria
                    maison. Réservation 72 h à l&apos;avance.
                  </>
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link href="/devis" className="btn-primary group">
                  Commander sur {c.name} <ArrowRight size={18} />
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost">
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-banner.png"
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
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            {c.delivery ? (
              <>Nos paellas <span className="italic font-light">livrées à {c.name}.</span></>
            ) : (
              <>Nos paellas <span className="italic font-light">à {c.name}.</span></>
            )}
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { name: "Fruits de mer & Poulet", price: "18", desc: "Poulet, gambas entières." },
              { name: "Fruits de mer & Poisson", price: "19", desc: "Gambas entières, lotte." },
              { name: "Del Pueblo", price: "20", desc: "Travers de porc, poulet désossé, jambon Serrano, gambas décortiquées." },
              { name: "Royale", price: "21", desc: "Gambas entières, poulet, lotte, langoustines entières." },
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
            Toutes servies sur riz au safran, moules, calamars, chorizo, poivrons, oignons et petits pois.
            {c.paellaNote && <> {c.paellaNote}</>}
          </p>
          <Link href="/carte" className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-terracotta transition-colors group mt-4">
            Voir la carte complète
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            Comment ça marche <span className="italic font-light">sur {c.name} ?</span>
          </h2>
          <div className={`mt-10 grid ${c.delivery ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}>
            {c.delivery ? (
              <>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">01</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Préparez votre évènement</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Paellas, tapas, planches, sangrias, vins. Vous choisissez, je m&apos;adapte à votre budget et vos envies.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">02</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Je cuisine le jour J</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Livraison chaude à {c.name} dès 10 personnes. Chef à domicile dès 24 invités — je viens avec tout mon matériel.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">03</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Vous profitez</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Tout est prêt. Vous servez vos invités, vous passez une bonne soirée. Le reste, c&apos;est mon affaire.</p>
                </div>
              </>
            ) : (
              <>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">01</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Préparez votre évènement</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">Paellas, tapas, planches, sangrias, vins. Vous choisissez, je m&apos;adapte à votre budget et vos envies. Devis en ligne sous 24 h.</p>
                </div>
                <div className="card-warm p-7">
                  <div className="text-saffron font-display text-4xl mb-3">02</div>
                  <h3 className="font-display text-xl text-ink leading-tight mb-2">Je viens cuisiner chez vous</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">J&apos;arrive à {c.name} avec mon matériel complet et je cuisine votre paella en direct, devant vos invités. Dès 24 personnes.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>


      <section className="py-14 px-5 sm:px-8 bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Ils nous ont fait confiance
          </h2>
          <SocialProof testimonial={testimonial} />
        </div>
      </section>

      {c.quartiers && c.quartiers.length > 0 && (
        <section className="py-14 px-5 sm:px-8 bg-paper">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-display text-3xl text-ink mb-6">
              Quartiers desservis à {c.name}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {c.quartiers.map((q) => (
                <li key={q} className="bg-cream rounded-full px-4 py-1.5 text-sm text-ink-soft border border-ink/8">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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

      <section className="py-16 px-5 sm:px-8 bg-paper">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Hola Paella près de chez vous
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

      <section className="py-16 px-5 sm:px-8 bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Paella sur {c.name} — pour quel événement&nbsp;?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {events.map((ev) => (
              <Link
                key={ev.slug}
                href={`/paella-${ev.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">{(() => { const s = ev.name.replace("Paella pour ", "").replace("Paella ", ""); return s.charAt(0).toUpperCase() + s.slice(1); })()}</div>
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
          Votre paella à <span className="italic">{c.name},</span>{" "}c&apos;est par ici.
        </h2>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
