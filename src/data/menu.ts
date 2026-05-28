export type Category =
  | "paellas"
  | "tapas"
  | "planches"
  | "sangrias"
  | "bieres"
  | "vins"
  | "eaux"
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
    label: "Tapas",
    tagline: "Pour environ 5 personnes · servis avec toasts classiques & multi-grains.",
    emoji: "🦐",
    accent: "terracotta",
  },
  planches: {
    label: "Planches",
    tagline: "1 planche pour 8 personnes · servie avec pan con tomate à la catalane.",
    emoji: "🥓",
    accent: "olive",
  },
  sangrias: {
    label: "Sangrias",
    tagline: "Sangrias maison en Bag-in-Box · préparées dans nos locaux.",
    emoji: "🍷",
    accent: "terracotta",
  },
  bieres: {
    label: "Bières",
    tagline: "Bière pression à domicile · location tireuse + fût.",
    emoji: "🍺",
    accent: "saffron",
  },
  vins: {
    label: "Vins",
    tagline: "Rouges, rosé, blanc · sélection espagnole 75cl.",
    emoji: "🍇",
    accent: "olive",
  },
  eaux: {
    label: "Eaux",
    tagline: "Eau plate ou pétillante · à la bouteille ou au carton.",
    emoji: "💧",
    accent: "olive",
  },
  extras: {
    label: "Extras",
    tagline: "Couverts éco-responsables.",
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
    slug: "sangria-rouge-3l",
    name: "Sangria rouge maison · BIB 3L",
    category: "sangrias",
    tagline: "Env. 8–9 personnes · pack fraîcheur 2 h.",
    description:
      "Sangria rouge préparée dans nos locaux. Bag-in-Box 3L, environ 8 à 9 personnes.",
    price: 20,
    unit: "/ BIB 3L",
    image: "/images/products/sangria-rouge.jpg",
  },
  {
    slug: "sangria-rouge-5l",
    name: "Sangria rouge maison · BIB 5L",
    category: "sangrias",
    tagline: "Env. 14–15 personnes · pack fraîcheur 2 h.",
    description:
      "Sangria rouge préparée dans nos locaux. Bag-in-Box 5L, environ 14 à 15 personnes.",
    price: 30,
    unit: "/ BIB 5L",
    image: "/images/products/sangria-rouge.jpg",
  },
  {
    slug: "sangria-blanche-3l",
    name: "Sangria blanche maison · BIB 3L",
    category: "sangrias",
    tagline: "Env. 8–9 personnes · pack fraîcheur 2 h.",
    description:
      "Sangria blanche préparée dans nos locaux. Bag-in-Box 3L, environ 8 à 9 personnes.",
    price: 20,
    unit: "/ BIB 3L",
    image: "/images/products/sangria-blanche.jpg",
  },
  {
    slug: "sangria-blanche-5l",
    name: "Sangria blanche maison · BIB 5L",
    category: "sangrias",
    tagline: "Env. 14–15 personnes · pack fraîcheur 2 h.",
    description:
      "Sangria blanche préparée dans nos locaux. Bag-in-Box 5L, environ 14 à 15 personnes.",
    price: 30,
    unit: "/ BIB 5L",
    image: "/images/products/sangria-blanche.jpg",
  },

  // BIÈRES — location tireuse + fûts
  {
    slug: "location-tireuse",
    name: "Location tireuse à bière",
    category: "bieres",
    tagline: "Livraison et reprise incluses.",
    description:
      "Location de la tireuse à bière pour votre événement. À combiner avec un fût Stella Artois ou Leffe.",
    price: 30,
    unit: "/ location",
    image: "/images/products/couverts.jpg",
  },
  {
    slug: "fut-stella-artois",
    name: "Fût Stella Artois 6L",
    category: "bieres",
    tagline: "Bière blonde · environ 12 pintes.",
    description:
      "Fût Stella Artois 6 litres, environ 12 pintes. À utiliser avec la tireuse à bière.",
    price: 48,
    unit: "/ fût 6L",
    image: "/images/products/couverts.jpg",
  },
  {
    slug: "fut-leffe",
    name: "Fût Leffe 6L",
    category: "bieres",
    tagline: "Bière d'abbaye · environ 12 pintes.",
    description:
      "Fût Leffe 6 litres, environ 12 pintes. À utiliser avec la tireuse à bière.",
    price: 56,
    unit: "/ fût 6L",
    image: "/images/products/couverts.jpg",
  },

  // VINS ROUGES
  {
    slug: "calatayud-baltasar",
    name: "Calatayud – Baltasar 2014",
    category: "vins",
    tagline: "Rouge · 100% grenache · 75cl.",
    description:
      "DO Calatayud. 100% grenache, fruité et structuré.",
    price: 11,
    unit: "/ btl 75cl",
    image: "/images/products/rioja.jpg",
  },
  {
    slug: "rioja-villa-del-camino",
    name: "Rioja – Villa del Camino",
    category: "vins",
    tagline: "Rouge · DOC Rioja · 75cl.",
    description:
      "DOC Rioja. Fruité, souple, proche du modèle français.",
    price: 12,
    unit: "/ btl 75cl",
    image: "/images/products/rioja.jpg",
  },
  {
    slug: "valencia-la-tribu",
    name: "Valencia – La Tribu 2016",
    category: "vins",
    tagline: "Rouge · vieilli 4 mois en barrique · 75cl.",
    description:
      "DO Valencia. Vieilli 4 mois en barrique. Rond et élégant.",
    price: 12,
    unit: "/ btl 75cl",
    image: "/images/products/rioja.jpg",
  },
  {
    slug: "rioja-hado-pujanza",
    name: "Rioja – Hado Pujanza 2013",
    category: "vins",
    tagline: "Rouge · 100% Tinta de toro · vieilli en fût · 75cl.",
    description:
      "DOC Rioja. 100% Tinta de toro, vieilli en fût. Puissant et complexe.",
    price: 19,
    unit: "/ btl 75cl",
    image: "/images/products/rioja.jpg",
    signature: true,
  },
  {
    slug: "ribeira-del-duero-camino-romano",
    name: "Ribeira del Duero – Camino Romano 2014",
    category: "vins",
    tagline: "Rouge bio · 12 mois fût de chêne français · vigne de 30 ans · 75cl.",
    description:
      "Agriculture biologique. 12 mois en fût de chêne français. Vigne de 30 ans. La bouteille de caractère.",
    price: 20,
    unit: "/ btl 75cl",
    image: "/images/products/rioja.jpg",
    signature: true,
  },
  // ROSÉ
  {
    slug: "miedes-viura-rose",
    name: "Miedes Viura Rosé 2017",
    category: "vins",
    tagline: "Rosé · 75cl.",
    description:
      "DO Calatayud. Frais et désaltérant, idéal à l'apéritif.",
    price: 11,
    unit: "/ btl 75cl",
    image: "/images/products/albarino.jpg",
  },
  // BLANC
  {
    slug: "miedes-viura-blanc",
    name: "Miedes 2014 – 100% Viura",
    category: "vins",
    tagline: "Blanc · 75cl.",
    description:
      "DO Calatayud. 100% Viura. Frais, minéral, parfait avec les fruits de mer.",
    price: 11,
    unit: "/ btl 75cl",
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
  {
    slug: "eau-abatilles-bouteille",
    name: "Eau Abatilles plate 1,5L",
    category: "eaux",
    tagline: "La bouteille.",
    description: "Eau minérale naturelle Abatilles, 1,5L.",
    price: 2,
    unit: "/ btl 1,5L",
    image: "/images/products/couverts.jpg",
  },
  {
    slug: "eau-abatilles-carton",
    name: "Eau Abatilles plate 1,5L — carton",
    category: "eaux",
    tagline: "Carton de 6 bouteilles.",
    description: "Eau minérale naturelle Abatilles, 1,5L. Carton de 6 bouteilles.",
    price: 10,
    unit: "/ carton de 6",
    image: "/images/products/couverts.jpg",
  },
  {
    slug: "eau-abatilles-petillante-bouteille",
    name: "Eau Abatilles pétillante 1L",
    category: "extras",
    tagline: "La bouteille.",
    description: "Eau minérale gazeuse Abatilles, 1L.",
    price: 2.5,
    unit: "/ btl 1L",
    image: "/images/products/couverts.jpg",
  },
  {
    slug: "eau-abatilles-petillante-carton",
    name: "Eau Abatilles pétillante 1L — carton",
    category: "eaux",
    tagline: "Carton de 6 bouteilles.",
    description: "Eau minérale gazeuse Abatilles, 1L. Carton de 6 bouteilles.",
    price: 13,
    unit: "/ carton de 6",
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
