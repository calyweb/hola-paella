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
    tagline: "5 paellas au choix — cuisson au feu de bois, riz bomba, safran.",
    emoji: "🥘",
    accent: "saffron",
  },
  tapas: {
    label: "Tapas tartinables",
    tagline: "Pour environ 5 personnes · servis avec toasts classiques & multi-grains.",
    emoji: "🦐",
    accent: "terracotta",
  },
  planches: {
    label: "Planches dégustation",
    tagline: "1 planche pour 8 personnes · servie avec pan con tomate à la catalane.",
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
  // PAELLAS — base commune : moules, calamars, chorizo, petits pois, poivrons, oignons, riz bomba, safran & épices
  {
    slug: "paella-fruits-de-mer-poulet",
    name: "Paella Fruits de mer & Poulet fermier",
    category: "paellas",
    tagline: "Gambas sauvages, poulet fermier label rouge.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages et poulet fermier label rouge.",
    price: 15,
    unit: "/ pers.",
    highlights: ["Gambas sauvages", "Poulet fermier label rouge"],
    image: "/images/products/paella-bodega.jpg",
  },
  {
    slug: "paella-bodega",
    name: "Paella Bodega",
    category: "paellas",
    tagline: "Tout décortiqué — se mange à la fourchette, debout ou assis.",
    description:
      "Grosses crevettes sauvages décortiquées, moules, calamars, chorizo, bouchées de poulet, petits pois, poivrons, oignons, riz, safran & épices. La paella facile à manger — parfaite sur un bateau ou au coin d'une table.",
    price: 15,
    unit: "/ pers.",
    image: "/images/products/paella-bodega.jpg",
  },
  {
    slug: "paella-royale",
    name: "Paella Royale",
    category: "paellas",
    tagline: "Gambas sauvages, poulet fermier, lotte, langoustines.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages, poulet fermier label rouge, lotte et langoustines.",
    price: 19,
    unit: "/ pers.",
    highlights: ["Gambas sauvages", "Lotte", "Langoustines", "Poulet fermier"],
    image: "/images/products/paella-royale.jpg",
    signature: true,
  },
  {
    slug: "paella-fruits-de-mer-poisson",
    name: "Paella Fruits de mer & Poisson",
    category: "paellas",
    tagline: "Gambas sauvages, lotte.",
    description:
      "Riz au safran, moules, calamars, chorizo, poivrons et épices. Gambas sauvages et lotte.",
    price: 25,
    unit: "/ pers.",
    highlights: ["Gambas sauvages", "Lotte"],
    image: "/images/products/paella-mer.jpg",
  },
  {
    slug: "paella-homard-bleu",
    name: "Paella Fruits de mer & Homard bleu",
    category: "paellas",
    tagline: "½ homard bleu décortiqué, gambas sauvages.",
    description:
      "½ homard bleu décortiqué, gambas sauvages, moules, calamars, chorizo, petits pois, poivrons, oignons, riz, safran & épices.",
    price: 25,
    unit: "/ pers.",
    highlights: ["½ Homard bleu", "Gambas sauvages"],
    image: "/images/products/paella-mer.jpg",
    signature: true,
  },

  // TAPAS TARTINABLES — ~5 personnes par plat, servis avec toasts classiques & multi-grains
  {
    slug: "effiloche-surimi-crabe",
    name: "Effiloché de surimi au crabe",
    category: "tapas",
    tagline: "Oeuf, oignon frais, mayonnaise maison.",
    description:
      "Un classique des bars à tapas. Effiloché de surimi au crabe, œuf, pointe d'oignon frais et mayonnaise maison. Servi avec toasts classiques & multi-grains.",
    price: 11,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/gambas.jpg",
  },
  {
    slug: "caviar-aubergine-tomate",
    name: "Caviar d'aubergine & tomate confite",
    category: "tapas",
    tagline: "Vegan · sans gluten · sans conservateurs.",
    description:
      "100 % plaisir : sans ingrédient d'origine animale, sans gluten, sans conservateurs, sans huile de palme. Servi avec toasts classiques & multi-grains.",
    price: 11,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/gambas.jpg",
  },
  {
    slug: "rillettes-chorizo-chevre",
    name: "Rillettes de chorizo & chèvre frais",
    category: "tapas",
    tagline: "La force du chorizo, la douceur du chèvre.",
    description:
      "La rencontre entre la force du chorizo et la douceur du chèvre frais. Un délice. Servi avec toasts classiques & multi-grains.",
    price: 12,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/gambas.jpg",
  },
  {
    slug: "crevettes-ail-espelette",
    name: "Crevettes sautées à l'ail & piment d'Espelette",
    category: "tapas",
    tagline: "Décortiquées — prêtes à déguster.",
    description:
      "Queues de crevettes décortiquées par nos soins pour un plaisir immédiat, sans se salir les doigts. Servi avec toasts classiques & multi-grains.",
    price: 14,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/gambas.jpg",
  },
  {
    slug: "friture-calamars-citron",
    name: "Friture de calamars au pimentón",
    category: "tapas",
    tagline: "Tartare de citron bio · croustillante & relevée.",
    description:
      "Lamelles de calamars enrobées d'une panure fine, croustillante et légèrement relevée au piment d'Espelette, servies avec un tartare de citron bio.",
    price: 14,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/chipirons.jpg",
  },
  {
    slug: "chipirons-chorizo",
    name: "Chipirons poêlés au chorizo",
    category: "tapas",
    tagline: "Pêchés sur la Côte Basque.",
    description:
      "Pêchés sur la Côte Basque, ce petit calamar très tendre est un régal à l'heure de l'apéritif, poêlé au chorizo.",
    price: 14,
    unit: "/ plat (env. 5 pers.)",
    image: "/images/products/chipirons.jpg",
    signature: true,
  },

  // PLANCHES DÉGUSTATION — 1 planche / 8 personnes, servies avec pan con tomate à la catalane
  {
    slug: "planche-decouverte",
    name: "Planche Découverte",
    category: "planches",
    tagline: "Saucisson Bellota · Chorizo Bellota · Serrano Duroc 18 mois.",
    description:
      "Saucisson Bellota, Chorizo Bellota, Jambon Serrano Duroc affinage 18 mois. Servie avec pan con tomate à la catalane.",
    price: 19,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-decouverte.jpg",
  },
  {
    slug: "planche-pena",
    name: "Planche Peña",
    category: "planches",
    tagline: "Manchego 9 mois · Serrano Duroc 18 mois.",
    description:
      "Manchego affinage 9 mois, Jambon Serrano Duroc affinage 18 mois. Servie avec pan con tomate à la catalane.",
    price: 21,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-iberique.jpg",
  },
  {
    slug: "planche-iberique",
    name: "Planche Ibérique",
    category: "planches",
    tagline: "Saucisson Bellota · Chorizo Bellota · Pata Negra 24 mois.",
    description:
      "Saucisson Bellota, Chorizo Bellota, Jambon ibérique Pata Negra affinage 24 mois. Servie avec pan con tomate à la catalane.",
    price: 28,
    unit: "/ planche 8 pers.",
    image: "/images/products/planche-iberique.jpg",
    signature: true,
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
    name: "Kit couvert à usage unique",
    category: "extras",
    tagline: "Assiette, serviettes, couteau, fourchette & verre bodega.",
    description:
      "Kit complet : assiette, serviettes, couteau, fourchette & verre bodega.",
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
