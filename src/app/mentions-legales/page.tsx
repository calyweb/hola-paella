import { SITE, JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales du site hola-paella.fr. Editeur, hebergeur, conditions d'utilisation et politique de confidentialite.",
  alternates: { canonical: `${SITE.url}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", url: SITE.url },
          { name: "Mentions legales", url: `${SITE.url}/mentions-legales` },
        ])}
      />

      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-5xl sm:text-6xl text-ink leading-[1.02]">
            Mentions l&eacute;gales
          </h1>
        </div>
      </section>

      <section className="bg-paper px-5 sm:px-8 pt-16 pb-24">
        <div className="max-w-3xl mx-auto prose prose-ink">
          <h2>1. &Eacute;diteur du site</h2>
          <p>
            <strong>Hola Paella</strong>
            <br />
            Entrepreneur individuel
            <br />
            Nicolas Cubie
            <br />
            5 rue B&eacute;ranger, 33260 La Teste-de-Buch, France
            <br />
            T&eacute;l&eacute;phone : {SITE.phoneDisplay}
            <br />
            Email : {SITE.email}
          </p>

          <h2>2. H&eacute;bergement</h2>
          <p>
            Ce site est h&eacute;berg&eacute; par <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, &Eacute;tats-Unis
            <br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>

          <h2>3. Propri&eacute;t&eacute; intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos, vid&eacute;os)
            est la propri&eacute;t&eacute; exclusive de Hola Paella ou de ses partenaires.
            Toute reproduction, m&ecirc;me partielle, est interdite sans autorisation
            pr&eacute;alable &eacute;crite.
          </p>

          <h2>4. Donn&eacute;es personnelles</h2>
          <p>
            Les informations collect&eacute;es via le formulaire de devis sont
            destin&eacute;es exclusivement &agrave; Hola Paella pour le traitement de
            votre demande. Conform&eacute;ment au RGPD, vous disposez d&apos;un droit
            d&apos;acc&egrave;s, de rectification et de suppression de vos donn&eacute;es.
            Pour exercer ces droits, contactez-nous &agrave; {SITE.email}.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi ou publicitaires. Seuls des
            cookies techniques n&eacute;cessaires au fonctionnement du site peuvent
            &ecirc;tre d&eacute;pos&eacute;s.
          </p>

          <h2>6. Cr&eacute;dits</h2>
          <p>
            Conception et d&eacute;veloppement :{" "}
            <a href="https://www.calyweb.com" target="_blank" rel="noopener noreferrer">
              Studio Calyweb
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
