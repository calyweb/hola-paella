import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/85 mt-28">
      {/* Paper-colored fill behind the gap so it matches the FAQ section */}
      <div className="absolute -top-28 left-0 right-0 h-28 bg-paper" />
      {/* CTA band */}
      <div className="absolute -top-28 left-0 right-0 px-5">
        <div className="max-w-5xl mx-auto bg-terracotta rounded-[2rem] px-8 sm:px-14 py-12 sm:py-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-saffron/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-cream/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-saffron text-sm uppercase tracking-[0.2em] mb-3">
                Vous avez un événement ?
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-paper leading-[1.05]">
                Recevons vos invités
                <br />
                <span className="italic font-light">comme il se doit.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Link href="/devis" className="btn-saffron whitespace-nowrap">
                Demander un devis
              </Link>
              <a href="tel:+33646198234" className="btn-ghost border-cream/30 text-cream hover:bg-cream hover:text-ink whitespace-nowrap">
                <Phone size={16} /> 06 46 19 82 34
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-72 sm:pt-60 md:pt-50 pb-12 px-5 sm:px-8 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-saffron text-xs uppercase tracking-[0.2em] mb-4">Hola Paella</div>
            <p className="text-cream/65 max-w-md leading-relaxed">
              Je suis Nicolas Cubie, traiteur espagnol sur le Bassin d&apos;Arcachon depuis 2018. Livraison sur le sud Bassin d&apos;Arcachon, chef à domicile jusqu&apos;à Bordeaux. Produits sélectionnés en Espagne et chez mes producteurs locaux.
            </p>
          </div>

          <div>
            <div className="text-saffron text-xs uppercase tracking-[0.2em] mb-4">Le traiteur</div>
            <ul className="space-y-2.5 text-cream/75">
              <li><Link href="/formules" className="hover:text-saffron transition-colors">Nos formules</Link></li>
              <li><Link href="/carte" className="hover:text-saffron transition-colors">Notre carte</Link></li>
              <li><Link href="/a-propos" className="hover:text-saffron transition-colors">Notre histoire</Link></li>
              <li><Link href="/devis" className="hover:text-saffron transition-colors">Demander un devis</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-saffron text-xs uppercase tracking-[0.2em] mb-4">Contact</div>
            <ul className="space-y-3 text-cream/75 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-1 text-saffron shrink-0" />
                <a href="tel:+33646198234" className="hover:text-saffron">06 46 19 82 34</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-1 text-saffron shrink-0" />
                <a href="mailto:contact@hola-paella.fr" className="hover:text-saffron break-all">contact@hola-paella.fr</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-1 text-saffron shrink-0" />
                <span>Bassin d&apos;Arcachon · Bordeaux</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram size={15} className="mt-1 text-saffron shrink-0" />
                <a href="https://www.instagram.com/hola_paella33/" target="_blank" rel="noopener noreferrer" className="hover:text-saffron">@hola_paella33</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10">
          <div className="text-saffron text-xs uppercase tracking-[0.2em] mb-4">Zones desservies</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/70 mb-8">
            <li><Link href="/paella-pyla" className="hover:text-saffron">Paella Pyla-sur-Mer</Link></li>
            <li><Link href="/paella-arcachon" className="hover:text-saffron">Paella Arcachon</Link></li>
            <li><Link href="/paella-la-teste-de-buch" className="hover:text-saffron">Paella La Teste-de-Buch</Link></li>
            <li><Link href="/paella-cazaux" className="hover:text-saffron">Paella Cazaux</Link></li>
            <li><Link href="/paella-la-hume" className="hover:text-saffron">Paella La Hume</Link></li>
            <li><Link href="/paella-gujan-mestras" className="hover:text-saffron">Paella Gujan-Mestras</Link></li>
            <li><Link href="/paella-le-teich" className="hover:text-saffron">Paella Le Teich</Link></li>
            <li><Link href="/paella-biganos" className="hover:text-saffron">Paella Biganos</Link></li>
            <li><Link href="/paella-mios" className="hover:text-saffron">Paella Mios</Link></li>
            <li><Link href="/paella-audenge" className="hover:text-saffron">Paella Audenge</Link></li>
            <li><Link href="/paella-lanton" className="hover:text-saffron">Paella Lanton</Link></li>
            <li><Link href="/paella-andernos" className="hover:text-saffron">Paella Andernos</Link></li>
            <li><Link href="/paella-lege" className="hover:text-saffron">Paella Lège</Link></li>
            <li><Link href="/paella-cap-ferret" className="hover:text-saffron">Paella Cap Ferret</Link></li>
            <li><Link href="/paella-bordeaux" className="hover:text-saffron">Paella Bordeaux</Link></li>
          </ul>

          <div className="text-saffron text-xs uppercase tracking-[0.2em] mb-4">Pour quel événement&nbsp;?</div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/70 mb-10">
            <li><Link href="/paella-mariage" className="hover:text-saffron">Paella mariage</Link></li>
            <li><Link href="/paella-anniversaire" className="hover:text-saffron">Paella anniversaire</Link></li>
            <li><Link href="/paella-bapteme" className="hover:text-saffron">Paella baptême</Link></li>
            <li><Link href="/paella-entreprise" className="hover:text-saffron">Paella entreprise</Link></li>
            <li><Link href="/paella-soiree-privee" className="hover:text-saffron">Paella soirée privée</Link></li>
            <li><Link href="/paella-evjf" className="hover:text-saffron">Paella EVJF</Link></li>
            <li><Link href="/paella-evg" className="hover:text-saffron">Paella EVG</Link></li>
            <li><Link href="/paella-communion" className="hover:text-saffron">Paella communion</Link></li>
            <li><Link href="/paella-depart-retraite" className="hover:text-saffron">Paella départ retraite</Link></li>
            <li><Link href="/paella-cousinade" className="hover:text-saffron">Paella cousinade</Link></li>
            <li><Link href="/paella-repas-de-chantier" className="hover:text-saffron">Paella repas de chantier</Link></li>
            <li><Link href="/paella-club-sportif" className="hover:text-saffron">Paella club sportif</Link></li>
            <li><Link href="/paella-associations" className="hover:text-saffron">Paella associations</Link></li>
          </ul>

          <div className="flex flex-col md:flex-row gap-4 justify-between text-xs text-cream/50 pt-6 border-t border-cream/10">
            <div>© {new Date().getFullYear()} Hola Paella · Traiteur paella sur le Bassin d&apos;Arcachon &amp; Bordeaux.</div>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-cream/80">Mentions légales</Link>
              <Link href="/cgv" className="hover:text-cream/80">CGV</Link>
              <Link href="/politique-de-confidentialite" className="hover:text-cream/80">Confidentialité</Link>
              <a href="https://www.calyweb.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream/80">Réalisation studio Calyweb</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
