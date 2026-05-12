export type Category =
  | "paellas"
  | "tapas"
  | "planches"
  | "sangrias"
  | "vins"
  | "extras";

export interface MenuItem {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  price: number;
  unit: string;
  highlights?: string[];
  image: string;
  signature?: boolean;
}

export const categoryMeta: Record<
  Category,
  { label: string; tagline: string; emoji: string; accent: string }
> = {
  paellas: {
    label: "Paellas",
    tagline: "4 paellas, 2 versions : classique ou bodega.",
    emoji: "🥘",
    accent: "saffron",
  },
  tapas: {
    label: "Tapas",
    tagline: "Pour environ 4 personnes par plat.",
    emoji: "🦐",
    accent: "terracotta",
  },
  planches: {
    label: "Planches dégustation",
    tagline: "1 planche pour 8 personnes, servie avec guindillas.",
    emoji: "🥓",
    accent: "olive",
  },
  sangrias: {
    label: "Sangrias maison",
    tagline: "Bag-in-Box 3L ou 5L · toujours fraîche, jusqu'à la dernière goutte.",
    emoji: "🍷",
    accent: "terracotta",
  },
  vins: {
    label: "Vins espagnols",
    tagline: "5 bouteilles achetées, la 6ᵉ offerte.",
    emoji: "🍇",
    accent: "olive",
  },
  extras: {
    label: "Extras",
    tagline: "Couverts éco-responsables et eau.",
    emoji: "✨",
    accent: "saffron",
  },
};

export const menu: MenuItem[] = [
  // PAELLAS — ingrédients communs : moules, calamars, chorizo, petits pois, poivrons, oignons, riz, safran, épices
  {
    slug: "paella-royale",
    name: "Paella Royale",
    category: "paellas",
    tagline: "Gambas sauvages, poulet bio, lotte, langoustines.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages, poulet bio, lotte et langoustines. Version classique ou Bodega (fruits de mer décortiqués).",
    price: 21,
    unit: "/ pers.",
    highlights: ["Gambas sauvages", "Lotte", "Langoustines", "Poulet bio"],
    image: "/images/products/paella-royale.jpg",
    signature: true,
  },
  {
    slug: "paella-del-pueblo",
    name: "Paella Del Pueblo",
    category: "paellas",
    tagline: "Travers de porc, poulet bio, Serrano, gambas décortiquées.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Travers de porc, poulet bio, jambon Serrano et gambas décortiquées. Version classique ou Bodega.",
    price: 20,
    unit: "/ pers.",
    image: "/images/products/paella-poulet.jpg",
  },
  {
    slug: "paella-fruits-de-mer-poisson",
    name: "Paella Fruits de mer & Poisson",
    category: "paellas",
    tagline: "Gambas sauvages, lotte.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages et lotte. Version classique ou Bodega (fruits de mer décortiqués).",
    price: 19,
    unit: "/ pers.",
    image: "/images/products/paella-mer.jpg",
  },
  {
    slug: "paella-fruits-de-mer-poulet",
    name: "Paella Fruits de mer & Poulet",
    category: "paellas",
    tagline: "Gambas sauvages, poulet bio.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages et poulet bio. Version classique ou Bodega.",
    price: 18,
    unit: "/ pers.",
    image: "/images/products/paella-bodega.jpg",
  },

  // TAPAS — ~4 personnes par plat
  {
    slug: "carpaccio-poulpe-galicienne",
    name: "Carpaccio de poulpe à la Galicienne",
    category: "tapas",
    tagline: "Environ 8 personnes.",
    description:
      "Tranché finement, huile d'olive, paprika fumé. La recette galicienne, sans fioriture.",
    price: 30,
    unit: "/ plat",
    image: "/images/products/poulpe.jpg",
    signature: true,
  },
  {
    slug: "gambas-ail-espelette",
    name: "Gambas sautées à l'ail & piment d'Espelette",
    category: "tapas",
    tagline: "Décortiquées par nos soins.",
    description:
      "Sautées à l'ail et au piment d'Espelette. Décortiquées, prêtes à déguster.",
    price: 16,
    unit: "/ plat (env. 4 pers.)",
    image: "/images/products/gambas.jpg",
  },
  {
    slug: "chipirons-lard-pyrenees",
    name: "Chipirons au lard poivré des Pyrénées",
    category: "tapas",
    tagline: "Pêchés sur la Côte Basque.",
    description:
      "Pêchés sur la Côte Basque, sautés au lard poivré des Pyrénées.",
    price: 16,
    unit: "/ plat (env. 4 pers.)",
    image: "/images/products/chipirons.jpg",
  },

  // PLANCHES DÉGUSTATION — 1 planche / 8 personnes, servies avec piments guindillas
  {
    slug: "planche-pata-negra",
    name: "Planche Jambon Pata Negra 36 mois",
    category: "planches",
    tagline: "3 ans d'affinage. Le sommet.",
    description:
      "36 mois d'affinage. Servie avec piments guindillas.",
    price: 48,
    unit: "/ planche 8 pers.",
    highlights: ["Pata Negra", "36 mois"],
    image: "/images/products/pata-negra.jpg",
    signature: true,
  },
  {
    slug: "planche-iberique",
    name: "Planche Ibérique",
    category: "planches",
    tagline: "Le grand tour ibérique.",
    description:
      "Fuet extra, Chorizo Bellota, jambon ibérique Bellota Pata Negra 24 mois. Avec piments guindillas.",
    price: 29,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-iberique.jpg",
  },
  {
    slug: "planche-pena",
    name: "Planche Peña",
    category: "planches",
    tagline: "La grande dégustation.",
    description:
      "Fuet extra, Chorizo Bellota, Serrano Duroc 18 mois, Pata Negra 36 mois. Avec piments guindillas.",
    price: 25,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-iberique.jpg",
  },
  {
    slug: "planche-serrano-duroc",
    name: "Planche Jambon Serrano Duroc 24 mois",
    category: "planches",
    tagline: "La race Duroc, après 24 mois.",
    description:
      "Jambon Serrano Duroc, 24 mois d'affinage. Avec piments guindillas.",
    price: 22,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-decouverte.jpg",
  },
  {
    slug: "planche-decouverte",
    name: "Planche Découverte",
    category: "planches",
    tagline: "Pour s'initier en bonne compagnie.",
    description:
      "Fuet extra, Chorizo Bellota, Serrano Duroc 24 mois. Avec piments guindillas.",
    price: 21,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-decouverte.jpg",
  },
  {
    slug: "planche-chorizo-bellota",
    name: "Planche Chorizo Bellota",
    category: "planches",
    tagline: "Le chorizo des connaisseurs.",
    description:
      "Chorizo Bellota Pata Negra. Avec piments guindillas.",
    price: 20,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-iberique.jpg",
  },

  // SANGRIAS — BIB
  {
    slug: "sangria-rouge",
    name: "Sangria rouge maison",
    category: "sangrias",
    tagline: "Bag-in-Box · pack fraîcheur 2 h.",
    description:
      "Préparée dans mes locaux. BIB 3L (≈18 verres) ou 5L (≈30 verres).",
    price: 27,
    unit: "/ BIB 3L (39€ le 5L)",
    image: "/images/products/sangria-rouge.jpg",
  },
  {
    slug: "sangria-blanche",
    name: "Sangria blanche maison",
    category: "sangrias",
    tagline: "Bag-in-Box · pack fraîcheur 2 h.",
    description:
      "Préparée dans mes locaux. BIB 3L (≈18 verres) ou 5L (≈30 verres).",
    price: 27,
    unit: "/ BIB 3L (39€ le 5L)",
    image: "/images/products/sangria-blanche.jpg",
  },

  // VINS ESPAGNOLS — 5 bouteilles achetées = la 6ème offerte
  {
    slug: "villa-del-camino-rioja",
    name: "Villa del Camino Tinto · Rioja 2022",
    category: "vins",
    tagline: "DOC Rioja · Tempranillo.",
    description:
      "Tempranillo, Bodegas Navajas. Fruité, souple, proche du modèle français.",
    price: 14,
    unit: "/ btl · 70€ le carton de 6",
    image: "/images/products/rioja.jpg",
  },
  {
    slug: "san-gregorio-las-martas",
    name: "Bodega San Gregorio Las Martas 2021",
    category: "vins",
    tagline: "DO Calatayud · 100% grenache.",
    description:
      "100 % grenache. Complexe, fruité, puissant et souple à la fois.",
    price: 13,
    unit: "/ btl · 65€ le carton de 6",
    image: "/images/products/rioja.jpg",
  },
  {
    slug: "la-muela-cervera",
    name: "La Muela Cervera 2022",
    category: "vins",
    tagline: "DO Calatayud · blanc.",
    description:
      "De la même maison que Las Martas. Frais, désaltérant.",
    price: 12,
    unit: "/ btl · 60€ le carton de 6",
    image: "/images/products/albarino.jpg",
  },
  {
    slug: "chamboredon-belle-rose",
    name: "Chamboredon Belle Rose 2023",
    category: "vins",
    tagline: "IGP Coteaux de Béziers · cinsault.",
    description:
      "Cinsault du Languedoc. Digeste, rafraîchissant — le rosé pour la paella.",
    price: 13,
    unit: "/ btl · 65€ le carton de 6",
    image: "/images/products/albarino.jpg",
  },

  // EXTRAS
  {
    slug: "couverts-eco",
    name: "Kit couverts bambou éco-responsable",
    category: "extras",
    tagline: "Élégant, compostable.",
    description:
      "Kit complet en bambou compostable. Sans plastique, sans vaisselle.",
    price: 1.5,
    unit: "/ pers.",
    image: "/images/products/couverts.jpg",
  },
];

export function getMenuByCategory(category: Category) {
  return menu.filter((item) => item.category === category);
}

export function getSignatureItems() {
  return menu.filter((item) => item.signature);
}

export function getItem(slug: string) {
  return menu.find((item) => item.slug === slug);
}
