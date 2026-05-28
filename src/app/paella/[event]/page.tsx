import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { events, cities, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return events.map((e) => ({ event: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ event: string }>;
}): Promise<Metadata> {
  const { event } = await params;
  const e = events.find((x) => x.slug === event);
  if (!e) return {};
  const url = `${SITE.url}/paella-${e.slug}`;
  return {
    title: `${e.name} — Traiteur paella sur le Bassin d'Arcachon & Bordeaux`,
    description: e.intro.substring(0, 160),
    alternates: { canonical: url },
    openGraph: { url, title: e.h1, description: e.intro, images: ["/images/hero-paella.jpg"] },
  };
}

const eventContent: Record<
  string,
  { hooks: { title: string; text: string }[]; faqs: { q: string; a: string }[] }
> = {
  mariage: {
    hooks: [
      { title: "Je cuisine sur place", text: "Je viens avec mon matériel et je cuisine votre paella devant vos invités. Spectacle dans l'assiette, photos sublimes, c'est ce que j'aime faire." },
      { title: "Carte mariage à composer", text: "Tapas et planches de Pata Negra à l'apéritif, paella au plat principal, sangria maison Bag-in-Box. J'adapte le menu à vos envies et votre budget." },
      { title: "Cool, mais carré sur les délais", text: "On reste accessibles, sans jargon. Carnets qui se remplissent vite en saison — on confirme votre date contre acompte." },
      { title: "Devis en ligne en 7 étapes", text: "Vous composez vous-même votre devis en ligne (non contractuel), on revient vers vous pour caler les détails." },
    ],
    faqs: [
      { q: "Quel budget pour un mariage avec paella ?", a: "Comptez 18 à 21 €/pers pour la paella selon la version choisie, à compléter avec tapas, planches, sangria et vins. Frais de déplacement calculés selon le lieu. Devis personnalisé via notre formulaire en ligne." },
      { q: "Combien d'invités pour un mariage paella ?", a: "J'interviens à partir de 23 invités pour la formule chef à domicile. Pour les très grands événements, appelez-moi, on adapte le matériel et l'équipe." },
      { q: "Combien de temps à l'avance réserver ?", a: "Idéalement plusieurs mois pour les samedis de juin à septembre, qui se remplissent vite. Préavis minimum 72 h pour le chef à domicile." },
      { q: "Vous déplacez-vous où pour un mariage ?", a: "Je me déplace de septembre à juin jusqu'au Cap Ferret. Toute l'année jusqu'à Biganos. Pour les autres communes (Bordeaux notamment), c'est sur étude." },
    ],
  },
  entreprise: {
    hooks: [
      { title: "Version Bodega pour le cocktail", text: "Nos paellas existent en version Bodega — fruits de mer décortiqués, sans carapaces. Idéal pour le service debout en cocktail dînatoire." },
      { title: "Chef à domicile pour effet wow", text: "Pour vos lancements, séminaires, soirées clients — la paella cuisinée sur place devant vos invités fait parler de votre événement." },
      { title: "Facture entreprise", text: "Devis détaillé, facturation pro. On reste cool sur la forme mais carré sur le fond." },
      { title: "Tapas, planches, sangrias", text: "Carpaccio de poulpe, gambas Espelette, chipirons, planches de Pata Negra. Et la sangria maison en Bag-in-Box pour rester fraîche pendant toute la soirée." },
    ],
    faqs: [
      { q: "Quelle formule pour un cocktail entreprise ?", a: "La paella en version Bodega (fruits de mer décortiqués) accompagnée de tapas et planches de charcuterie ibérique. Service debout, format propre." },
      { q: "Vous gérez la vaisselle pour un événement entreprise ?", a: "Kit couverts bambou éco-responsable disponible en option à 1,50 €/pers. Pour la vaisselle complète, on étudie au cas par cas." },
      { q: "Quel délai pour réserver ?", a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. Pour vos événements stratégiques, prévoyez 2 à 4 semaines." },
      { q: "Vous livrez à Bordeaux pour un événement entreprise ?", a: "Sur étude. Notre zone principale est le Bassin d'Arcachon ; pour Bordeaux et la métropole, contactez-nous et on calcule les frais de déplacement." },
    ],
  },
  anniversaire: {
    hooks: [
      { title: "Livraison à domicile dès 10 personnes", text: "Pour vos anniversaires entre amis ou en famille, on livre la paella chaude chez vous, prête à servir. Vous restez maître de votre soirée." },
      { title: "Chef à domicile dès 23 invités", text: "Pour les grandes tablées, je viens cuisiner sur place. Zéro stress côté logistique, effet \"wahou\" côté invités." },
      { title: "Carte personnalisable", text: "Mes 4 paellas (Royale, Del Pueblo, Fruits de mer & Poisson, Fruits de mer & Poulet bio), planches de Pata Negra, sangria maison. J'adapte selon vos envies." },
      { title: "Tarif clair, sans surprise", text: "Paellas de 18 à 21 €/pers, planches de 20 à 48 €, sangria 27 € le Bag-in-Box 3L. Vous composez votre devis en ligne." },
    ],
    faqs: [
      { q: "Combien coûte une paella pour 30 personnes ?", a: "Entre 540 € (paella Fruits de mer & Poulet bio à 18 €/pers) et 630 € (paella Royale à 21 €/pers) pour la paella seule, à compléter selon votre carte." },
      { q: "Préavis pour un anniversaire ?", a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. En haute saison, prévoyez plusieurs semaines à l'avance." },
      { q: "Vous gérez la vaisselle ?", a: "Option kit couverts bambou éco-responsable à 1,50 €/pers. Pour la vaisselle complète, sur étude." },
      { q: "Anniversaire enfant possible ?", a: "Bien sûr — la paella Fruits de mer & Poulet bio est douce et plaît aux enfants. J'adapte le menu selon vos invités." },
    ],
  },
  bapteme: {
    hooks: [
      { title: "Un repas convivial et généreux", text: "La paella, c'est le plat familial par excellence. Tout le monde se sert, on partage, on profite — parfait pour un baptême." },
      { title: "Menu adaptable pour les enfants", text: "La paella Fruits de mer & Poulet bio plaît aux petits comme aux grands. J'adapte les quantités et le menu selon vos invités." },
      { title: "Livraison dès 10 personnes", text: "Paella livrée chaude chez vous, prête à servir. Vous vous occupez de la cérémonie, je m'occupe du repas." },
      { title: "Chef à domicile dès 23 invités", text: "Pour un baptême plus grand, je viens avec mon matériel et je cuisine devant vos invités. Moment convivial garanti." },
    ],
    faqs: [
      { q: "Quel budget pour un baptême avec paella ?", a: "De 18 à 21 €/pers pour la paella, à compléter avec tapas, planches et sangria selon vos envies. Devis sur mesure via le formulaire en ligne." },
      { q: "Peut-on adapter le menu pour les enfants ?", a: "Oui. La paella Fruits de mer & Poulet bio est douce et convient aux enfants. Je peux aussi prévoir des portions adaptées." },
      { q: "Quel délai pour réserver ?", a: "48 h pour la livraison, 72 h pour le chef à domicile. En saison, prévoyez quelques semaines à l'avance." },
      { q: "Vous déplacez-vous le dimanche ?", a: "Oui, je travaille le week-end. La plupart des baptêmes ont lieu le dimanche — c'est mon quotidien." },
    ],
  },
  "soiree-privee": {
    hooks: [
      { title: "Zéro prise de tête", text: "Je livre la paella chaude chez vous, prête à servir. Vous ouvrez la porte, vous servez vos invités, c'est tout." },
      { title: "L'apéro complet", text: "Tapas (carpaccio de poulpe, gambas, chipirons), planches de Pata Negra Bellota 36 mois, sangria maison en Bag-in-Box. L'apéro est aussi bon que le plat." },
      { title: "Chef sur place pour les grandes soirées", text: "Dès 23 invités, je viens cuisiner chez vous. La paella se fait devant vos invités — ça lance toujours la soirée." },
      { title: "Devis en ligne en 5 minutes", text: "Vous composez votre menu, je vous envoie une proposition sous 24 h. Pas de mauvaise surprise à la facture." },
    ],
    faqs: [
      { q: "Combien de personnes minimum ?", a: "10 invités pour la livraison, 23 pour le chef à domicile. En dessous de 10, appelez-moi, on voit ensemble." },
      { q: "Jusqu'à quelle heure livrez-vous ?", a: "Je m'adapte à votre programme. Dites-moi l'heure du repas, je livre en conséquence." },
      { q: "Vous fournissez les couverts ?", a: "Kit couverts bambou éco-responsable en option à 1,50 €/pers. Compostable, élégant." },
      { q: "Peut-on commander uniquement des tapas et planches ?", a: "Oui, sans problème. Tapas, planches de charcuterie ibérique et sangria — un format apéritif dînatoire très demandé." },
    ],
  },
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event } = await params;
  const e = events.find((x) => x.slug === event);
  if (!e) return notFound();
  const content = eventContent[e.slug];
  const url = `${SITE.url}/paella-${e.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(e.h1, e.intro),
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE.url },
            { name: e.name, url },
          ]),
        ]}
      />

      <section className="warm-bg pt-12 pb-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <nav className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
            <Link href="/" className="hover:text-terracotta">Accueil</Link>
            <span className="mx-2">/</span>
            <span>{e.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="pill pill-terracotta mb-5">{e.badge}</div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                {e.h1.split(" pour ")[0]}
                <br />
                <span className="italic font-light text-terracotta">pour {e.h1.split(" pour ")[1] || e.name.toLowerCase()}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                {e.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link href="/devis" className="btn-primary group">
                  Devis pour {e.name.toLowerCase()} <ArrowRight size={18} />
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost">
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-paella.jpg"
                alt={e.h1}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            Notre approche pour <span className="italic font-light">{e.name.toLowerCase()}.</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {content.hooks.map((b) => (
              <div key={b.title} className="card-warm p-7">
                <div className="w-10 h-10 rounded-2xl bg-saffron/15 flex items-center justify-center text-saffron-dark mb-4">
                  <Check size={18} />
                </div>
                <h3 className="font-display text-xl text-ink leading-tight mb-2">{b.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-10">
            Vos questions sur {e.name.toLowerCase()}
          </h2>
          <div className="space-y-3">
            {content.faqs.map((f) => (
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
            Nos zones d&apos;intervention
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {cities.filter((c) => c.delivery).slice(0, 4).map((c) => (
              <Link
                key={c.slug}
                href={`/livraison-paella-${c.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">{e.name.split(" ").slice(0, 2).join(" ")} {c.name}</div>
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
          On en parle&nbsp;?
        </h2>
        <p className="mt-4 text-ink-soft">Réponse à votre demande sous 24 h.</p>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
