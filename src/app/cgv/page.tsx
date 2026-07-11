import Link from "next/link";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Conditions generales de vente",
  description:
    "Conditions generales de vente de Hola Paella : reservation, acompte, annulation, livraison, paiement.",
  alternates: { canonical: `${SITE.url}/cgv` },
};

export default function CGVPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE.url },
          { name: "CGV", url: `${SITE.url}/cgv` },
        ])}
      />

      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl text-ink leading-[1.02]">
            Conditions g&eacute;n&eacute;rales de vente
          </h1>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto prose prose-ink">
          <p className="text-ink-soft text-sm">
            Derni&egrave;re mise &agrave; jour : 11 juillet 2026
          </p>

          <h2>1. Objet et champ d&apos;application</h2>
          <p>
            Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente (CGV) r&eacute;gissent les
            relations contractuelles entre <strong>ANNA</strong> (nom commercial &laquo;&nbsp;Hola
            Paella&nbsp;&raquo;), SARL au capital de 5&nbsp;000&nbsp;&euro;, SIREN 537&nbsp;864&nbsp;084, dont le
            si&egrave;ge social est situ&eacute; 5 Impasse du Domaine de B&eacute;ranger, 33260 La
            Teste-de-Buch, et tout client passant commande de prestations traiteur
            (livraison de paella &agrave; domicile ou chef cuisinant sur place). Toute
            commande implique l&apos;acceptation sans r&eacute;serve des pr&eacute;sentes CGV.
          </p>

          <h2>2. Devis et commande</h2>
          <p>
            Toute prestation fait l&apos;objet d&apos;un devis personnalis&eacute; &eacute;tabli &agrave; partir
            du formulaire en ligne ou par contact direct. Le devis pr&eacute;cise le
            nombre de convives, la formule choisie (livraison ou chef &agrave; domicile),
            la date, le lieu et le prix total. La commande est confirm&eacute;e d&egrave;s
            acceptation &eacute;crite du devis par le client (email ou signature) et, le
            cas &eacute;ch&eacute;ant, versement de l&apos;acompte demand&eacute;.
          </p>

          <h2>3. Minimums de commande et d&eacute;lais</h2>
          <p>
            Livraison &agrave; domicile : commande minimum de 10 personnes, r&eacute;servation
            48 heures &agrave; l&apos;avance. Chef &agrave; domicile : commande minimum de 24
            personnes, r&eacute;servation 72 heures &agrave; l&apos;avance. En haute saison
            (juin &agrave; septembre) ou pour un mariage, il est recommand&eacute; de r&eacute;server
            plusieurs semaines, voire plusieurs mois &agrave; l&apos;avance.
          </p>

          <h2>4. Prix et paiement</h2>
          <p>
            Les prix sont indiqu&eacute;s en euros toutes taxes comprises. Pour la
            formule livraison, le r&egrave;glement s&apos;effectue le jour de la livraison,
            par carte bancaire ou esp&egrave;ces. Pour la formule chef &agrave; domicile, un
            acompte peut &ecirc;tre demand&eacute; &agrave; la confirmation de la commande, le
            solde &eacute;tant r&egrave;gl&eacute; le jour de la prestation. Les frais de
            d&eacute;placement, lorsqu&apos;ils s&apos;appliquent (zones &eacute;loign&eacute;es, Bordeaux),
            sont calcul&eacute;s et communiqu&eacute;s avant confirmation du devis.
          </p>

          <h2>5. Annulation et modification</h2>
          <p>
            Toute annulation doit &ecirc;tre notifi&eacute;e par email ou t&eacute;l&eacute;phone d&egrave;s que
            possible. En cas d&apos;annulation moins de 48 heures avant la prestation
            (livraison) ou 72 heures (chef &agrave; domicile), l&apos;acompte vers&eacute;, le cas
            &eacute;ch&eacute;ant, reste acquis pour couvrir les achats de mati&egrave;res premi&egrave;res
            d&eacute;j&agrave; engag&eacute;s. Toute modification du nombre de convives ou du menu
            doit &ecirc;tre communiqu&eacute;e au plus tard 48 heures avant la date de
            prestation, sous r&eacute;serve de disponibilit&eacute;.
          </p>

          <h2>6. Livraison</h2>
          <p>
            La paella est livr&eacute;e chaude, pr&ecirc;te &agrave; servir, &agrave; l&apos;heure convenue avec
            le client. La zone de livraison couvre le sud du Bassin d&apos;Arcachon
            (Pyla-sur-Mer, Arcachon, La Teste-de-Buch, Cazaux, La Hume,
            Gujan-Mestras, Le Teich). En dehors de cette zone, seule la formule chef
            &agrave; domicile est propos&eacute;e, sur &eacute;tude.
          </p>

          <h2>7. Responsabilit&eacute;</h2>
          <p>
            Hola Paella s&apos;engage &agrave; fournir des prestations conformes au devis
            accept&eacute;. Le client s&apos;engage &agrave; signaler toute allergie ou restriction
            alimentaire au moment de la commande. Hola Paella ne saurait &ecirc;tre tenu
            responsable des cons&eacute;quences li&eacute;es &agrave; une information non
            communiqu&eacute;e.
          </p>

          <h2>8. Litiges</h2>
          <p>
            Les pr&eacute;sentes CGV sont soumises au droit fran&ccedil;ais. En cas de litige,
            une solution amiable sera recherch&eacute;e en priorit&eacute; en contactant Hola
            Paella &agrave; {SITE.email}. &Agrave; d&eacute;faut d&apos;accord amiable, les tribunaux du
            ressort de Bordeaux seront seuls comp&eacute;tents.
          </p>

          <p className="mt-10">
            <Link href="/mentions-legales">Retour aux mentions l&eacute;gales</Link>
            {" · "}
            <Link href="/politique-de-confidentialite">Politique de confidentialit&eacute;</Link>
          </p>
        </div>
      </section>
    </>
  );
}
