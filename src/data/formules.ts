export interface Formule {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  minGuests: number;
  notice: string;
  zone: string;
  includes: string[];
  highlight?: boolean;
  startingPrice: number;
  cta: string;
  image: string;
}

export const formules: Formule[] = [
  {
    slug: "livraison",
    name: "Livraison à domicile",
    badge: "Dès 10 personnes",
    tagline: "Tout est prêt, vous n'avez qu'à dresser.",
    description:
      "Je cuisine dans mes locaux, je livre chaud chez vous. Vous gardez la maîtrise de votre soirée, je garantis le goût dans l'assiette. Règlement à la livraison, CB ou espèces.",
    minGuests: 10,
    notice: "48h à l'avance",
    zone: "Pyla · Arcachon · La Teste · Cazaux · La Hume · Gujan · Le Teich",
    includes: [
      "Paella cuisinée le jour même",
      "Tapas et planches dressées",
      "Sélection de boissons locales",
      "Kit couverts bambou éco (option · 1,50 €/pers)",
    ],
    highlight: true,
    startingPrice: 18,
    cta: "Je suis intéressé",
    image: "/images/ambiance/livraison.jpg",
  },
  {
    slug: "chef-prive",
    name: "Chef à domicile",
    badge: "Dès 23 personnes",
    tagline: "Je viens chez vous, avec mon matériel.",
    description:
      "J'arrive avec mon matériel et je cuisine votre repas devant vos invités. Vous profitez de la soirée, je m'occupe du reste — l'organisation, la cuisson, le service. Bassin d'Arcachon & Bordeaux.",
    minGuests: 23,
    notice: "72h à l'avance",
    zone: "Bassin d'Arcachon & Bordeaux",
    includes: [
      "J'arrive avec tout mon matériel",
      "Cuisson en direct devant vos invités",
      "Mise en place du repas",
      "Sélection de boissons locales",
      "Kit couverts bambou éco (option · 1,50 €/pers)",
    ],
    highlight: true,
    startingPrice: 18,
    cta: "Je suis intéressé",
    image: "/images/ambiance/chef-prive.jpg",
  },
];

export function getFormule(slug: string) {
  return formules.find((f) => f.slug === slug);
}
