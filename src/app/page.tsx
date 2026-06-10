import { Hero } from "@/components/home/Hero";
import { Formules } from "@/components/home/Formules";
import { Signatures } from "@/components/home/Signatures";
import { Origines } from "@/components/home/Origines";
import { Mood } from "@/components/home/Mood";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { JsonLd, faqJsonLd } from "@/lib/seo";

const homeFaqs = [
  {
    q: "Où livrez-vous la paella à domicile ?",
    a: "Je livre sur le Bassin d'Arcachon (Pyla, Arcachon, La Teste-de-Buch, Cazaux, La Hume, Gujan-Mestras, Le Teich), dès 10 personnes. Réservation 48h minimum à l'avance. Règlement à la livraison en CB ou espèces.",
  },
  {
    q: "Combien coûte une paella ?",
    a: "Nos 4 paellas vont de 18 €/pers (Fruits de mer & Poulet bio) à 21 €/pers (Royale : gambas sauvages, poulet bio, lotte, langoustines). Tarif identique en livraison ou avec chef à domicile.",
  },
  {
    q: "Quel est le minimum de personnes ?",
    a: "10 personnes pour la livraison à domicile, 23 personnes pour la formule chef à domicile.",
  },
  {
    q: "Combien de temps à l'avance dois-je réserver ?",
    a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. En haute saison ou pour un mariage, prévoyez plusieurs semaines à l'avance.",
  },
  {
    q: "Pour le chef à domicile, jusqu'où vous déplacez-vous ?",
    a: "Je me déplace sur tout le Bassin d'Arcachon et jusqu'à Bordeaux, dès 23 personnes. Réservation 72h à l'avance.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <Formules />
      <Signatures />
      <Origines />
      <Mood />
      <Testimonials />
      <FAQ />
    </>
  );
}
