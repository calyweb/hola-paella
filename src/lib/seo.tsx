export const SITE = {
  name: "Hola Paella",
  tagline: "Traiteur espagnol sur le Bassin d'Arcachon",
  url: "https://hola-paella.fr",
  phone: "+33646198234",
  phoneDisplay: "06 46 19 82 34",
  email: "contact@hola-paella.fr",
  founded: "2018",
  chefName: "Nicolas Cubie",
  serviceArea: [
    "Arcachon",
    "La Teste-de-Buch",
    "Pyla-sur-Mer",
    "Cazaux",
    "La Hume",
    "Gujan-Mestras",
    "Le Teich",
    "Biganos",
    "Mios",
    "Audenge",
    "Lanton",
    "Andernos-les-Bains",
    "Lège-Cap-Ferret",
    "Cap Ferret",
    "Bordeaux",
  ],
  social: {
    facebook: "https://www.facebook.com/holapaella33/",
    instagram: "https://www.instagram.com/hola_paella33/",
    tripadvisor:
      "https://www.tripadvisor.fr/Restaurant_Review-g1079336-d14095693-Reviews-Hola_Paella-La_Teste_de_Buch_Gironde_Nouvelle_Aquitaine.html",
  },
};

export const cities = [
  // ── LIVRAISON + CHEF À DOMICILE ──
  {
    slug: "pyla",
    name: "Pyla-sur-Mer",
    delivery: true,
    h1: "Livraison paella à Pyla-sur-Mer",
    intro:
      "Je livre votre paella à Pyla-sur-Mer et au pied de la Dune du Pilat dès 10 personnes. Pour les grands événements (dès 24 invités), je viens cuisiner sur place avec mon matériel.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["Pyla-sur-Mer", "Pilat-Plage"],
    geo: { lat: 44.5828, lng: -1.2056 },
  },
  {
    slug: "arcachon",
    name: "Arcachon",
    delivery: true,
    h1: "Livraison paella à Arcachon",
    intro:
      "Je livre ma paella à domicile à Arcachon dès 10 personnes, réservation 48h à l'avance. Pour les événements de 24 invités et plus, je me déplace avec mon matériel et je cuisine sur place, devant vos invités.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["Centre-ville", "Ville d'Hiver", "L'Aiguillon", "Le Moulleau", "Pereire", "Abatilles"],
    geo: { lat: 44.6588, lng: -1.1681 },
  },
  {
    slug: "la-teste-de-buch",
    name: "La Teste-de-Buch",
    delivery: true,
    h1: "Livraison paella à La Teste-de-Buch",
    intro:
      "Basé à La Teste-de-Buch, c'est ma zone principale. Je livre votre paella à domicile dès 10 personnes, et je me déplace aussi pour cuisiner sur place dès 24 invités. Cazaux inclus.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["La Teste centre", "Cazaux", "La Hume", "Les Prés salés"],
    geo: { lat: 44.6308, lng: -1.1428 },
  },
  {
    slug: "cazaux",
    name: "Cazaux",
    delivery: true,
    h1: "Livraison paella à Cazaux",
    intro:
      "Je livre votre paella à Cazaux dès 10 personnes, réservation 48h à l'avance. Chef à domicile également disponible dès 24 invités. Cazaux fait partie de ma zone de livraison principale.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["Cazaux centre", "Lac de Cazaux"],
    geo: { lat: 44.5833, lng: -1.1333 },
  },
  {
    slug: "la-hume",
    name: "La Hume",
    delivery: true,
    h1: "Livraison paella à La Hume",
    intro:
      "Je livre votre paella à La Hume dès 10 personnes, réservation 48h à l'avance. Chef à domicile également disponible dès 24 invités. Zone de livraison principale.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["La Hume", "Port de La Hume"],
    geo: { lat: 44.6400, lng: -1.0900 },
  },
  {
    slug: "gujan-mestras",
    name: "Gujan-Mestras",
    delivery: true,
    h1: "Livraison paella à Gujan-Mestras",
    intro:
      "Je livre votre paella à Gujan-Mestras dès 10 personnes, réservation 48h à l'avance. Chef à domicile également disponible dès 24 invités. Zone de livraison principale.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["Gujan centre", "Mestras", "Port de Larros"],
    geo: { lat: 44.6342, lng: -1.0681 },
  },
  {
    slug: "le-teich",
    name: "Le Teich",
    delivery: true,
    h1: "Livraison paella au Teich",
    intro:
      "Le Teich est dans ma zone de livraison. Paella livrée chaude à domicile dès 10 personnes, réservation 48h à l'avance. Chef à domicile aussi disponible dès 24 invités.",
    distance: "Zone de livraison · sans frais",
    quartiers: ["Le Teich centre", "Réserve ornithologique"],
    geo: { lat: 44.6342, lng: -1.0214 },
  },

  // ── CHEF À DOMICILE UNIQUEMENT ──
  {
    slug: "biganos",
    name: "Biganos",
    delivery: false,
    h1: "Chef paella à domicile à Biganos",
    intro:
      "Je me déplace à Biganos avec mon matériel pour cuisiner votre paella sur place, devant vos invités. Dès 24 personnes. Tapas, planches ibériques et sangria maison au programme.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Biganos centre", "Facture", "Marais"],
    geo: { lat: 44.6442, lng: -0.9758 },
  },
  {
    slug: "mios",
    name: "Mios",
    delivery: false,
    h1: "Chef paella à domicile à Mios",
    intro:
      "Je me déplace à Mios pour cuisiner votre paella sur place dès 24 invités. J'arrive avec tout mon matériel, je cuisine devant vos invités.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Mios centre", "Marcheprime"],
    geo: { lat: 44.6050, lng: -0.9350 },
  },
  {
    slug: "audenge",
    name: "Audenge",
    delivery: false,
    h1: "Chef paella à domicile à Audenge",
    intro:
      "Je me déplace à Audenge avec mon matériel pour cuisiner votre paella devant vos invités, dès 24 personnes. Réservation 72h à l'avance.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Audenge centre", "Le port", "Certes et Graveyron"],
    geo: { lat: 44.6833, lng: -1.0167 },
  },
  {
    slug: "lanton",
    name: "Lanton",
    delivery: false,
    h1: "Chef paella à domicile à Lanton",
    intro:
      "Je me déplace à Lanton et ses environs pour cuisiner votre paella sur place dès 24 invités. Cuisson en direct devant vos invités.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Lanton centre", "Cassy", "Taussat", "Blagon"],
    geo: { lat: 44.7000, lng: -1.0333 },
  },
  {
    slug: "andernos",
    name: "Andernos",
    delivery: false,
    h1: "Chef paella à domicile à Andernos",
    intro:
      "Je me déplace à Andernos-les-Bains pour cuisiner votre paella sur place dès 24 invités. Mariages, anniversaires, soirées privées. Réservation 72h à l'avance.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Andernos centre", "Le Mauret", "Le Coulin", "Port ostréicole"],
    geo: { lat: 44.7444, lng: -1.1025 },
  },
  {
    slug: "lege",
    name: "Lège",
    delivery: false,
    h1: "Chef paella à domicile à Lège",
    intro:
      "Je me déplace à Lège-Cap-Ferret pour cuisiner votre paella sur place dès 24 invités. Toute la presqu'île est dans ma zone d'intervention.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Lège centre", "Arès", "Le Canon", "Claouey"],
    geo: { lat: 44.7667, lng: -1.1500 },
  },
  {
    slug: "cap-ferret",
    name: "Cap Ferret",
    delivery: false,
    h1: "Chef paella à domicile au Cap Ferret",
    intro:
      "Je me déplace au Cap Ferret avec mon matériel pour cuisiner votre paella en direct, devant vos invités. Dès 24 invités. Mariages, anniversaires, soirées privées.",
    distance: "Chef à domicile · Bassin d'Arcachon",
    quartiers: ["Le Phare", "L'Herbe", "Piraillan", "Claouey", "Petit Piquey", "Grand Piquey", "Les Jacquets"],
    geo: { lat: 44.6342, lng: -1.2392 },
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    h1: "Traiteur paella à Bordeaux",
    intro:
      "Pour vos événements à Bordeaux et dans la métropole, je me déplace sur étude. Cocktail dînatoire, mariage, soirée d'entreprise — je cuisine vos paellas sur place, avec sangria maison et planches de Pata Negra.",
    distance: "Sur devis · frais de déplacement calculés",
    quartiers: ["Chartrons", "Saint-Pierre", "Bastide", "Caudéran", "Mérignac", "Pessac", "Bègles", "Talence"],
    geo: { lat: 44.8378, lng: -0.5792 },
  },
];

export const events = [
  {
    slug: "mariage",
    name: "Paella pour mariage",
    h1: "Traiteur paella pour mariage",
    intro:
      "Pour votre mariage sur le Bassin d'Arcachon ou au Cap Ferret, je propose un service traiteur sur mesure : je viens avec mon matériel et je cuisine la paella devant vos invités. Tapas, planches de Pata Negra, sangrias maison. Dès 24 invités.",
    badge: "Dès 24 invités",
  },
  {
    slug: "entreprise",
    name: "Paella pour entreprise",
    h1: "Traiteur paella pour cocktails et événements d'entreprise",
    intro:
      "Cocktail dînatoire, séminaire, soirée d'inauguration : je livre ou j'anime votre événement professionnel sur le Bassin et à Bordeaux. Version Bodega (fruits de mer décortiqués) idéale pour le service debout, ou chef sur place pour un effet wow.",
    badge: "Dès 10 invités",
  },
  {
    slug: "anniversaire",
    name: "Paella anniversaire",
    h1: "Traiteur paella pour anniversaire",
    intro:
      "Anniversaire en famille ou entre amis : je m'occupe de la cuisine, vous profitez de vos invités. Livraison à domicile dès 10 personnes ou chef à domicile pour les grands rassemblements (dès 24 invités).",
    badge: "10 à 80 invités",
  },
  {
    slug: "bapteme",
    name: "Paella baptême",
    h1: "Traiteur paella pour baptême",
    intro:
      "Pour le baptême de votre enfant, je prépare un repas convivial et généreux. Paella livrée chaude dès 10 personnes, ou chef à domicile dès 24 invités. Menu adaptable pour les enfants.",
    badge: "Dès 10 invités",
  },
  {
    slug: "soiree-privee",
    name: "Paella soirée privée",
    h1: "Traiteur paella pour soirée privée",
    intro:
      "Crémaillère, retrouvailles, soirée entre amis — je livre votre paella à domicile ou je viens cuisiner sur place. Tapas, planches ibériques, sangria maison. Du Bassin d'Arcachon à Bordeaux.",
    badge: "Dès 10 invités",
  },
  {
    slug: "evjf",
    name: "Paella EVJF",
    h1: "Traiteur paella pour EVJF",
    intro:
      "Enterrement de vie de jeune fille sur le Bassin d'Arcachon ? Je livre la paella à domicile dès 10 personnes ou je viens cuisiner sur place pour une ambiance festive garantie. Sangrias maison, tapas, planches ibériques.",
    badge: "Dès 10 invités",
  },
  {
    slug: "evg",
    name: "Paella EVG",
    h1: "Traiteur paella pour EVG",
    intro:
      "Enterrement de vie de garçon sur le Bassin d'Arcachon ou à Bordeaux ? La paella au feu de bois cuisinée devant vous, c'est le format idéal. Livraison dès 10 personnes ou chef à domicile pour l'effet spectacle.",
    badge: "Dès 10 invités",
  },
  {
    slug: "repas-de-chantier",
    name: "Paella repas de chantier",
    h1: "Traiteur paella pour repas de chantier",
    intro:
      "Repas d'équipe sur chantier, livraison directe sur site. Paella chaude prête à servir dès 10 personnes, sans prise de tête. Format pratique, généreux et convivial.",
    badge: "Dès 10 personnes",
  },
  {
    slug: "communion",
    name: "Paella communion",
    h1: "Traiteur paella pour communion",
    intro:
      "Pour la communion de votre enfant, je prépare un repas festif adapté à tous les âges. Paella livrée chaude dès 10 personnes ou chef à domicile dès 24 invités. Menu personnalisable selon vos invités.",
    badge: "Dès 10 invités",
  },
  {
    slug: "depart-retraite",
    name: "Paella départ retraite",
    h1: "Traiteur paella pour départ à la retraite",
    intro:
      "Fêtez un départ à la retraite comme il se doit : paella au feu de bois, sangrias maison et planches de Pata Negra. Livraison sur le Bassin d'Arcachon dès 10 personnes, chef à domicile jusqu'à Bordeaux.",
    badge: "Dès 10 invités",
  },
  {
    slug: "cousinade",
    name: "Paella cousinade",
    h1: "Traiteur paella pour cousinade",
    intro:
      "La cousinade, c'est fait pour se retrouver autour d'un grand plat. La paella, c'est exactement ça : généreux, convivial, adapté aux grands groupes. Livraison dès 10 personnes ou chef à domicile.",
    badge: "10 à 200 invités",
  },
  {
    slug: "club-sportif",
    name: "Paella club sportif",
    h1: "Traiteur paella pour club sportif",
    intro:
      "Fin de saison, tournoi, gala sportif — la paella est le plat idéal pour réunir votre club. Livraison sur site ou chef à domicile. Tarifs adaptés aux groupes, devis sur mesure.",
    badge: "Dès 10 personnes",
  },
  {
    slug: "associations",
    name: "Paella associations",
    h1: "Traiteur paella pour associations",
    intro:
      "Assemblée générale, repas annuel, collecte de fonds — je propose des tarifs adaptés aux associations sur le Bassin d'Arcachon et à Bordeaux. Livraison dès 10 personnes ou animation sur place.",
    badge: "Dès 10 personnes",
  },
];

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment", "CateringService"],
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "€€",
    image: `${SITE.url}/images/hero-paella.jpg`,
    logo: `${SITE.url}/logo.png`,
    foundingDate: SITE.founded,
    founder: { "@id": `${SITE.url}/a-propos#nicolas-cubie` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Rue Béranger",
      addressLocality: "La Teste-de-Buch",
      addressRegion: "Nouvelle-Aquitaine",
      postalCode: "33260",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 44.62580, longitude: -1.14530 },
    areaServed: SITE.serviceArea.map((c) => ({ "@type": "City", name: c })),
    servesCuisine: ["Spanish", "Mediterranean", "Paella"],
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.tripadvisor],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "40",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    hasMenu: { "@id": `${SITE.url}/carte#menu` },
  };
}

export function menuJsonLd(items: { name: string; description: string; price: number; category: string }[]) {
  const sections: Record<string, typeof items> = {};
  for (const item of items) {
    if (!sections[item.category]) sections[item.category] = [];
    sections[item.category].push(item);
  }
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE.url}/carte#menu`,
    name: "Carte Hola Paella",
    url: `${SITE.url}/carte`,
    hasMenuSection: Object.entries(sections).map(([cat, menuItems]) => ({
      "@type": "MenuSection",
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      hasMenuItem: menuItems.map((m) => ({
        "@type": "MenuItem",
        name: m.name,
        description: m.description,
        offers: {
          "@type": "Offer",
          price: String(m.price),
          priceCurrency: "EUR",
        },
      })),
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/a-propos#nicolas-cubie`,
    name: SITE.chefName,
    jobTitle: "Chef traiteur",
    description: "Nicolas Cubie est chef traiteur espagnol indépendant, fondateur d'Hola Paella en 2018 après 20 ans en restauration. Basé à La Teste-de-Buch, il propose la livraison de paella et le service chef à domicile sur le Bassin d'Arcachon et jusqu'à Bordeaux.",
    worksFor: { "@id": `${SITE.url}#business` },
    knowsAbout: ["Paella", "Spanish cuisine", "Catering", "Tapas", "Charcuterie ibérique"],
    image: `${SITE.url}/images/nicolas-chef-paysage.png`,
    url: `${SITE.url}/a-propos`,
    sameAs: [SITE.social.instagram, SITE.social.facebook],
  };
}

export function serviceJsonLd(name: string, description: string, areaName?: string, pageUrl?: string, idSuffix = "service") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": pageUrl ? `${pageUrl}#${idSuffix}` : undefined,
    name,
    description,
    url: pageUrl,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: areaName ? { "@type": "City", name: areaName } : SITE.serviceArea.map((c) => ({ "@type": "City", name: c })),
    serviceType: "Paella catering",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "18",
      highPrice: "21",
      priceCurrency: "EUR",
      offerCount: "4",
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <>
      {arr.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
