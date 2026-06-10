export interface Formule {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  minGuests: number;
  notice: string;
  noticeNote?: string;
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
    notice: "48h à l'avance minimum",
    noticeNote: "Notre agenda se remplit rapidement, réservez vite !",
    zone: "Pyla · Arcachon · La Teste · Cazaux · La Hume · Gujan · Le Teich",
    includes: [
      "Paella cuisinée pour vous à la dernière minute",
      "Livrée chaude dans le plat de cuisson",
      "Tapas et planches dressées",
      "Sélection de boissons",
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
    badge: "Dès 24 personnes",
    tagline: "Je viens chez vous, avec mon matériel.",
    description:
      "J'arrive avec mon matériel et je cuisine votre repas devant vos invités. Vous profitez de la soirée, je m'occupe du reste — l'organisation, la cuisson, le service. Bassin d'Arcachon & Bordeaux.",
    minGuests: 24,
    notice: "72h à l'avance minimum",
    noticeNote: "Notre agenda se remplit rapidement, réservez vite !",
    zone: "Bassin d'Arcachon & Bordeaux",
    includes: [
      "J'arrive avec tout mon matériel",
      "Cuisson en direct devant vos invités",
      "Mise en place du repas",
      "Sélection de boissons",
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
