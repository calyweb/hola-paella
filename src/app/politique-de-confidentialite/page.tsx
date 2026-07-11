import Link from "next/link";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite et protection des donnees personnelles de Hola Paella, conformement au RGPD.",
  alternates: { canonical: `${SITE.url}/politique-de-confidentialite` },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE.url },
          { name: "Politique de confidentialité", url: `${SITE.url}/politique-de-confidentialite` },
        ])}
      />

      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl text-ink leading-[1.02]">
            Politique de confidentialit&eacute;
          </h1>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto prose prose-ink">
          <p className="text-ink-soft text-sm">
            Derni&egrave;re mise &agrave; jour : 11 juillet 2026
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des donn&eacute;es collect&eacute;es sur ce site est
            <strong> ANNA</strong> (nom commercial &laquo;&nbsp;Hola Paella&nbsp;&raquo;), SARL au
            capital de 5&nbsp;000&nbsp;&euro;, SIREN 537&nbsp;864&nbsp;084, dont le si&egrave;ge social est
            situ&eacute; 5 Impasse du Domaine de B&eacute;ranger, 33260 La Teste-de-Buch.
            Contact : {SITE.email}.
          </p>

          <h2>2. Donn&eacute;es collect&eacute;es</h2>
          <p>
            Nous collectons les donn&eacute;es que vous nous transmettez volontairement
            via le formulaire de devis en ligne : pr&eacute;nom, nom, t&eacute;l&eacute;phone, email,
            type d&apos;&eacute;v&eacute;nement, date, nombre d&apos;invit&eacute;s et pr&eacute;f&eacute;rences de menu.
            Aucune donn&eacute;e bancaire n&apos;est collect&eacute;e ou stock&eacute;e sur ce site.
          </p>

          <h2>3. Finalit&eacute; du traitement</h2>
          <p>
            Ces donn&eacute;es sont utilis&eacute;es exclusivement pour traiter votre demande
            de devis, vous recontacter et organiser la prestation command&eacute;e. Elles
            ne sont ni revendues, ni transmises &agrave; des tiers &agrave; des fins
            commerciales.
          </p>

          <h2>4. Base l&eacute;gale</h2>
          <p>
            Le traitement de vos donn&eacute;es repose sur l&apos;ex&eacute;cution de mesures
            pr&eacute;contractuelles prises &agrave; votre demande (&eacute;tablissement d&apos;un devis)
            et, le cas &eacute;ch&eacute;ant, sur l&apos;ex&eacute;cution du contrat de prestation.
          </p>

          <h2>5. Destinataires des donn&eacute;es</h2>
          <p>
            Vos donn&eacute;es sont trait&eacute;es par Hola Paella et transmises &agrave; nos
            prestataires techniques strictement n&eacute;cessaires &agrave; l&apos;envoi de votre
            demande (h&eacute;bergement Vercel Inc., service d&apos;envoi d&apos;email
            transactionnel Resend). Ces prestataires n&apos;utilisent vos donn&eacute;es que
            pour la stricte ex&eacute;cution de leur mission technique.
          </p>

          <h2>6. Dur&eacute;e de conservation</h2>
          <p>
            Les donn&eacute;es li&eacute;es &agrave; une demande de devis sont conserv&eacute;es le temps
            n&eacute;cessaire au traitement de votre demande, puis pendant une dur&eacute;e
            maximale de 3 ans en l&apos;absence de suite commerciale, sauf obligation
            l&eacute;gale de conservation plus longue (facturation, comptabilit&eacute;).
          </p>

          <h2>7. Cookies et mesure d&apos;audience</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi ou publicitaires. Nous
            utilisons Vercel Analytics et Vercel Speed Insights pour mesurer la
            fr&eacute;quentation et les performances du site : ces outils fonctionnent
            sans cookie et ne collectent aucune donn&eacute;e personnelle identifiable
            (pas d&apos;adresse IP compl&egrave;te ni d&apos;identifiant unique conserv&eacute;).
          </p>

          <h2>8. Vos droits</h2>
          <p>
            Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es
            (RGPD) et &agrave; la loi Informatique et Libert&eacute;s, vous disposez d&apos;un droit
            d&apos;acc&egrave;s, de rectification, d&apos;effacement, de limitation et
            d&apos;opposition au traitement de vos donn&eacute;es, ainsi que d&apos;un droit &agrave; la
            portabilit&eacute;. Pour exercer ces droits, contactez-nous &agrave; {SITE.email}.
            Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation
            aupr&egrave;s de la CNIL (www.cnil.fr).
          </p>

          <h2>9. S&eacute;curit&eacute;</h2>
          <p>
            Le site est servi exclusivement en HTTPS et h&eacute;berg&eacute; chez Vercel Inc.,
            qui applique des mesures de s&eacute;curit&eacute; standard de l&apos;industrie pour
            prot&eacute;ger les donn&eacute;es transmises.
          </p>

          <p className="mt-10">
            <Link href="/mentions-legales">Retour aux mentions l&eacute;gales</Link>
            {" · "}
            <Link href="/cgv">Conditions g&eacute;n&eacute;rales de vente</Link>
          </p>
        </div>
      </section>
    </>
  );
}
