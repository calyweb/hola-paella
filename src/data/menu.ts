export type Category =
  | "paellas"
  | "tapas"
  | "planches"
  | "sangrias"
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
  cartonPrice?: number;
  cartonUnit?: string;
  bodegaVersion?: boolean;
  bodegaNote?: string;
  nouveaute?: boolean;
  surDevis?: boolean;
}

export const categoryMeta: Record<
  Category,
  { label: string; tagline: string; emoji: string; accent: string }
> = {
  paellas: {
    label: "Paellas",
    tagline: "4 paellas déclinables en 2 versions · cuisson au feu de bois, riz bomba, safran.",
    emoji: "🥘",
    accent: "saffron",
  },
  tapas: {
    label: "Tapas",
    tagline: "Pour environ 4 personnes.",
    emoji: "🦐",
    accent: "terracotta",
  },
  planches: {
    label: "Planches",
    tagline: "1 planche pour 8 personnes · servies avec piments guindillas.",
    emoji: "🥓",
    accent: "olive",
  },
  sangrias: {
    label: "Sangrias",
    tagline: "Sangrias maison en Bag-in-Box · préparées dans nos locaux.",
    emoji: "🍷",
    accent: "terracotta",
  },
  vins: {
    label: "Vins",
    tagline: "Rouges, rosé, blanc · 75cl.",
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
  // PAELLAS — base commune : moules, calamars, chorizo, poivrons, riz bomba, safran & épices
  // Version Classique (défaut) = poulet avec os, gambas entières avec coquille
  // Version Bodéga = poulet désossé, gambas décortiquées — prêts à déguster, même prix
  {
    slug: "paella-fruits-de-mer-poulet",
    name: "Paella Fruits de mer & Poulet",
    category: "paellas",
    tagline: "Poulet avec os · Gambas entières.",
    description:
      "Poulet avec os, gambas entières avec leur coquille. Riz au safran, moules, calamars, chorizo, poivrons et épices.",
    price: 18,
    unit: "/ pers.",
    highlights: ["Poulet avec os", "Gambas entières"],
    image: "/images/paella-poulet-bodega.png",
    bodegaVersion: true,
    bodegaNote: "Disponible en version Bodéga au même prix, avec poulet désossé et gambas décortiquées.",
  },
  {
    slug: "paella-fruits-de-mer-poisson",
    name: "Paella Fruits de mer & Poisson",
    category: "paellas",
    tagline: "Gambas entières · Lotte.",
    description:
      "Gambas entières avec leur coquille et lotte. Riz au safran, moules, calamars, chorizo, poivrons et épices.",
    price: 19,
    unit: "/ pers.",
    highlights: ["Gambas entières", "Lotte"],
    image: "/images/paella-poisson-bodega.png",
    bodegaVersion: true,
    bodegaNote: "Disponible en version Bodéga au même prix, avec gambas décortiquées.",
  },
  {
    slug: "paella-royale",
    name: "Paella Royale",
    category: "paellas",
    tagline: "Gambas entières · Poulet avec os · Lotte · Langoustines entières.",
    description:
      "Gambas entières, poulet avec os, lotte et langoustines entières avec leur coquille. Riz au safran, moules, calamars, chorizo, poivrons et épices.",
    price: 21,
    unit: "/ pers.",
    highlights: ["Gambas entières", "Poulet avec os", "Lotte", "Langoustines entières"],
    image: "/images/paella-royale-bodega.png",
    bodegaVersion: true,
    bodegaNote: "Disponible en version Bodéga au même prix, avec gambas, poulet et langoustines décortiqués.",
  },
  {
    slug: "paella-del-pueblo",
    name: "Paella Del Pueblo",
    category: "paellas",
    tagline: "Travers de porc · Poulet désossé · Jambon Serrano · Gambas décortiquées.",
    description:
      "Tout désossé et décortiqué. Travers de porc, poulet désossé, jambon Serrano et gambas décortiquées. Riz au safran, moules, calamars, chorizo, poivrons et épices.",
    price: 20,
    unit: "/ pers.",
    highlights: ["Travers de porc", "Gambas décortiquées", "Jambon Serrano"],
    image: "/images/paella-del-pueblo.png",
    signature: true,
  },
  {
    slug: "paella-sur-mesure",
    name: "Paella sur mesure",
    category: "paellas",
    tagline: "Homard, truffes, gambas tigrées… j'adapte.",
    description:
      "Vous avez une idée précise, un ingrédient en tête, un budget particulier ? Je m'adapte et je source les meilleurs produits pour vous. Rien n'est impossible.",
    price: 0,
    unit: "",
    image: "",
    surDevis: true,
  },

  // TAPAS — ~4 personnes par plat
  {
    slug: "carpaccio-poulpe-galicienne",
    name: "Émincé de poulpe à la Galicienne",
    category: "tapas",
    tagline: "Environ 8 personnes.",
    description:
      "Savourez la finesse du poulpe réhaussé par les arômes typiques de la cuisine galicienne.",
    price: 30,
    unit: "/ plat (env. 8 pers.)",
    image: "/images/tapas-poulpe.png",
    signature: true,
    nouveaute: true,
  },
  {
    slug: "gambas-ail-espelette",
    name: "Gambas sautées à l'ail et piment d'Espelette",
    category: "tapas",
    tagline: "Décortiquées — prêtes à déguster.",
    description:
      "Gambas décortiquées par nos soins pour un plaisir immédiat sans se salir les doigts.",
    price: 16,
    unit: "/ plat (env. 4 pers.)",
    image: "/images/tapas-gambas.png",
  },
  {
    slug: "chipirons-lard-pyrenees",
    name: "Chipirons au lard poivré des Pyrénées",
    category: "tapas",
    tagline: "Tout tendre, à l'heure de l'apéritif.",
    description:
      "Ce petit calamar très tendre est un régal à l'heure de l'apéritif.",
    price: 16,
    unit: "/ plat (env. 4 pers.)",
    image: "/images/tapas-chipirons.png",
    signature: true,
  },

  // PLANCHES DÉGUSTATION — 1 planche / 8 personnes, servies avec piments guindillas
  {
    slug: "planche-decouverte",
    name: "Planche Découverte",
    category: "planches",
    tagline: "Fuet extra · Chorizo ibérique · Serrano Duroc 24 mois.",
    description:
      "Fuet extra, Chorizo ibérique, Jambon Serrano Duroc affinage 24 mois. Servie avec piments guindillas.",
    price: 21,
    unit: "/ planche 8 pers.",
    image: "/images/planche-decouverte.png",
  },
  {
    slug: "planche-pena",
    name: "Planche Peña",
    category: "planches",
    tagline: "Fuet extra · Chorizo ibérique · Serrano Duroc · Pata Negra 36 mois.",
    description:
      "Saucisson Fuet extra, Chorizo ibérique, Jambon Serrano Duroc, Jambon ibérique « Pata Negra » affinage 36 mois. Servie avec piments guindillas.",
    price: 25,
    unit: "/ planche 8 pers.",
    image: "/images/planche-pena.png",
  },
  {
    slug: "planche-iberique",
    name: "Planche Ibérique",
    category: "planches",
    tagline: "Fuet extra · Chorizo ibérique · Pata Negra 36 mois.",
    description:
      "Fuet extra, Chorizo ibérique, Jambon ibérique « Pata Negra » affinage 36 mois. Servie avec piments guindillas.",
    price: 29,
    unit: "/ planche 8 pers.",
    image: "/images/planche-iberique.png",
  },
  // PLANCHES PRODUIT UNIQUE — pour les amateurs d'un seul produit
  {
    slug: "planche-chorizo-bellota",
    name: "Planche Chorizo ibérique",
    category: "planches",
    tagline: "Planche d'un seul produit · Pata Negra.",
    description:
      "Laissez votre Chorizo Pata Negra à température ambiante 30 minutes avant dégustation pour optimiser le fondant du gras et révéler son goût exquis.",
    price: 22,
    unit: "/ planche 8 pers.",
    image: "/images/planche-chorizo.png",
  },
  {
    slug: "planche-serrano-duroc",
    name: "Planche Jambon Serrano Duroc",
    category: "planches",
    tagline: "Affinage 24 mois · race Duroc.",
    description:
      "La race Duroc est reconnue pour ses qualités gustatives, surtout après 24 mois d'affinage.",
    price: 22,
    unit: "/ planche 8 pers.",
    image: "/images/planche-serrano.png",
  },
  {
    slug: "planche-pata-negra",
    name: "Planche Pata Negra 36 mois",
    category: "planches",
    tagline: "Jambon ibérique · affinage 36 mois.",
    description:
      "Le meilleur jambon du monde. Le Pata Negra est le jambon des connaisseurs — 3 ans d'affinage pour ce produit d'exception.",
    price: 48,
    unit: "/ planche 8 pers.",
    image: "/images/planche-pata-negra.png",
  },

  // SANGRIAS — BIB
  {
    slug: "sangria-rouge",
    name: "Sangria rouge maison",
    category: "sangrias",
    tagline: "Préparée dans nos locaux · Bag-in-Box · pack fraîcheur 2 h.",
    description:
      "Sangria rouge maison préparée dans nos locaux. Disponible en BIB 3L (env. 18 verres) ou BIB 5L (env. 30 verres).",
    price: 27,
    unit: "/ BIB 3L",
    cartonPrice: 39,
    cartonUnit: "/ BIB 5L",
    image: "/images/sangria-rouge.png",
  },
  {
    slug: "sangria-blanche",
    name: "Sangria blanche maison",
    category: "sangrias",
    tagline: "Préparée dans nos locaux · Bag-in-Box · pack fraîcheur 2 h.",
    description:
      "Sangria blanche maison préparée dans nos locaux. Disponible en BIB 3L (env. 18 verres) ou BIB 5L (env. 30 verres).",
    price: 27,
    unit: "/ BIB 3L",
    cartonPrice: 39,
    cartonUnit: "/ BIB 5L",
    image: "/images/sangria-blanche.png",
  },

  // ROUGES
  {
    slug: "bodega-san-gregorio-las-martas-2021",
    name: "Bodega San Gregorio Rouge Las Martas 2021",
    category: "vins",
    tagline: "Rouge · DO Calatayud · 100% Grenache · 75cl.",
    description:
      "Équilibre parfait entre puissance et souplesse en bouche, un vin complexe sur le fruit 100% Grenache.",
    price: 13,
    unit: "/ btl 75cl",
    cartonPrice: 65,
    cartonUnit: "/ carton de 6",
    image: "/images/vin-rose.png",
  },
  {
    slug: "villa-del-camino-tinto-rioja-2022",
    name: "Villa del Camino Tinto Rioja 2022",
    category: "vins",
    tagline: "Rouge · DOC Rioja Espagne · Tempranillo · 75cl.",
    description:
      "Bodegas Navajas, Rioja Alta. Le Tempranillo cultivé entre 400 et 500 m d'altitude donne des vins fruités et souples, proche du modèle français.",
    price: 14,
    unit: "/ btl 75cl",
    cartonPrice: 70,
    cartonUnit: "/ carton de 6",
    image: "/images/vin-rouge-las-martas.png",
  },
  // BLANC
  {
    slug: "la-muela-cervera-las-martas-2022",
    name: "La Muela Cervera du Canada Las Martas 2022",
    category: "vins",
    tagline: "Blanc · DO Calatayud · 75cl.",
    description:
      "De la même maison que le Las Martas rouge, une valeur sûre.",
    price: 12,
    unit: "/ btl 75cl",
    cartonPrice: 60,
    cartonUnit: "/ carton de 6",
    image: "/images/vin-blanc.png",
  },
  // ROSÉ
  {
    slug: "chamboredon-belle-rose-2023",
    name: "Chamboredon Belle Rose 2023",
    category: "vins",
    tagline: "Rosé · IGP Coteaux de Béziers · 75cl.",
    description:
      "Rosé typique du Languedoc, Cinsault très digeste et rafraîchissant.",
    price: 13,
    unit: "/ btl 75cl",
    cartonPrice: 65,
    cartonUnit: "/ carton de 6",
    image: "/images/vin-rouge-rioja.png",
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
    slug: "eau-abatilles-plate",
    name: "Eau Abatilles plate 1,5L",
    category: "eaux",
    tagline: "Eau minérale naturelle · Bassin d'Arcachon.",
    description: "Eau minérale naturelle Abatilles, 1,5L.",
    price: 2.5,
    unit: "/ btl 1,5L",
    cartonPrice: 12,
    cartonUnit: "/ carton de 6",
    image: "/images/eau-plate-v3.png",
  },
  {
    slug: "eau-abatilles-petillante",
    name: "Eau Abatilles pétillante 1L",
    category: "eaux",
    tagline: "Eau minérale gazeuse · Bassin d'Arcachon.",
    description: "Eau minérale gazeuse Abatilles, 1L.",
    price: 3,
    unit: "/ btl 1L",
    cartonPrice: 15,
    cartonUnit: "/ carton de 6",
    image: "/images/eau-petillante-v2.png",
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
