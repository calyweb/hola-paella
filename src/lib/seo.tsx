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
    "Gujan-Mestras",
    "Le Teich",
    "Pyla-sur-Mer",
    "Biganos",
    "Cap Ferret",
    "Lège-Cap-Ferret",
    "Audenge",
    "Andernos-les-Bains",
    "Le Porge",
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
  {
    slug: "arcachon",
    name: "Arcachon",
    h1: "Livraison de paella à Arcachon",
    intro:
      "Je livre ma paella, mes tapas et mes planches de charcuterie ibérique à domicile à Arcachon, dès 10 personnes, réservation 48h à l'avance. Pour les événements de 23 invités et plus, je me déplace à Arcachon et je cuisine sur place.",
    distance: "Zone principale · sans frais",
    quartiers: ["Centre-ville", "Ville d'Hiver", "L'Aiguillon", "Le Moulleau", "Pereire", "Abatilles"],
    geo: { lat: 44.6588, lng: -1.1681 },
  },
  {
    slug: "cap-ferret",
    name: "Cap Ferret",
    h1: "Traiteur paella au Cap Ferret",
    intro:
      "Je me déplace au Cap Ferret de septembre à juin pour cuisiner votre paella en direct, devant vos invités. Pour vos mariages, anniversaires et soirées privées dès 23 invités. La livraison en haute saison est possible sur étude.",
    distance: "Service chef privé · sept → juin",
    quartiers: ["Le Phare", "L'Herbe", "Piraillan", "Claouey", "Petit Piquey", "Grand Piquey", "Les Jacquets"],
    geo: { lat: 44.6342, lng: -1.2392 },
  },
  {
    slug: "pyla",
    name: "Pyla-sur-Mer",
    h1: "Livraison paella à Pyla-sur-Mer",
    intro:
      "Pour vos événements à Pyla-sur-Mer et au pied de la Dune du Pilat, je livre votre paella à domicile et je me déplace pour la cuisiner sur place. Paella sur mesure, tapas, planches de Pata Negra et sangria maison Bag-in-Box.",
    distance: "À 10 min d'Arcachon",
    quartiers: ["Pyla-sur-Mer", "Pilat-Plage", "La Teste centre", "Cazaux"],
    geo: { lat: 44.5828, lng: -1.2056 },
  },
  {
    slug: "le-teich",
    name: "Le Teich",
    h1: "Livraison paella au Teich",
    intro:
      "Le Teich est dans ma zone de livraison principale. Je vous livre votre paella chaude à domicile dès 10 personnes, réservation 48h à l'avance, règlement à la livraison.",
    distance: "Zone de livraison principale",
    quartiers: ["Le Teich centre", "Réserve ornithologique", "Audenge"],
    geo: { lat: 44.6342, lng: -1.0214 },
  },
  {
    slug: "biganos",
    name: "Biganos",
    h1: "Livraison paella à Biganos",
    intro:
      "Biganos est dans ma zone haute saison et reste ouverte toute l'année pour le chef à domicile. Paella Royale, Fruits de mer ou Del Pueblo livrée ou cuisinée sur place, dès 10 invités.",
    distance: "Zone haute saison · chef privé toute l'année",
    quartiers: ["Biganos centre", "Facture", "Marais"],
    geo: { lat: 44.6442, lng: -0.9758 },
  },
  {
    slug: "la-teste-de-buch",
    name: "La Teste-de-Buch",
    h1: "Livraison paella à La Teste-de-Buch",
    intro:
      "Basé à La Teste-de-Buch, je livre votre paella à domicile dès 10 personnes. C'est ma zone principale : pas de frais de déplacement, cuisson le jour même, livraison chaude chez vous.",
    distance: "Zone principale · sans frais",
    quartiers: ["La Teste centre", "Cazaux", "La Hume", "Les Prés salés"],
    geo: { lat: 44.6308, lng: -1.1428 },
  },
  {
    slug: "gujan-mestras",
    name: "Gujan-Mestras",
    h1: "Livraison paella à Gujan-Mestras",
    intro:
      "Je livre votre paella à Gujan-Mestras dès 10 personnes, réservation 48h à l'avance. Chef à domicile dès 23 invités. Zone de livraison principale, sans frais de déplacement.",
    distance: "Zone principale · sans frais",
    quartiers: ["Gujan centre", "Mestras", "Port de Larros", "La Hume"],
    geo: { lat: 44.6342, lng: -1.0681 },
  },
  {
    slug: "mios",
    name: "Mios",
    h1: "Livraison paella à Mios",
    intro:
      "Je livre votre paella à Mios et ses environs dès 10 personnes. Formule chef à domicile disponible dès 23 invités. Réservation 48h à l'avance pour la livraison.",
    distance: "Zone de livraison principale",
    quartiers: ["Mios centre", "Cassy", "Marcheprime"],
    geo: { lat: 44.6050, lng: -0.9350 },
  },
  {
    slug: "audenge",
    name: "Audenge",
    h1: "Livraison paella à Audenge",
    intro:
      "Audenge est dans ma zone de livraison principale. Paella livrée chaude à domicile dès 10 personnes, ou chef à domicile pour vos événements dès 23 invités.",
    distance: "Zone de livraison principale",
    quartiers: ["Audenge centre", "Le port", "Certes et Graveyron"],
    geo: { lat: 44.6833, lng: -1.0167 },
  },
  {
    slug: "lanton",
    name: "Lanton",
    h1: "Livraison paella à Lanton",
    intro:
      "Je livre votre paella à Lanton et Cassy dès 10 personnes. Chef à domicile disponible dès 23 invités pour vos événements en bord de Bassin.",
    distance: "Zone de livraison principale",
    quartiers: ["Lanton centre", "Cassy", "Taussat", "Blagon"],
    geo: { lat: 44.7000, lng: -1.0333 },
  },
  {
    slug: "andernos",
    name: "Andernos",
    h1: "Livraison paella à Andernos",
    intro:
      "Je livre votre paella à Andernos-les-Bains dès 10 personnes. Réservation 48h à l'avance. Chef à domicile disponible dès 23 invités pour vos mariages, anniversaires et soirées.",
    distance: "Zone de livraison principale",
    quartiers: ["Andernos centre", "Le Mauret", "Le Coulin", "Port ostréicole"],
    geo: { lat: 44.7444, lng: -1.1025 },
  },
  {
    slug: "lege",
    name: "Lège",
    h1: "Livraison paella à Lège",
    intro:
      "Je livre votre paella à Lège-Cap-Ferret dès 10 personnes. Chef à domicile disponible dès 23 invités. Toute la presqu'île est dans ma zone d'intervention.",
    distance: "Zone de livraison principale",
    quartiers: ["Lège centre", "Arès", "Le Canon", "Claouey"],
    geo: { lat: 44.7667, lng: -1.1500 },
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
      "Pour votre mariage sur le Bassin d'Arcachon ou au Cap Ferret, je propose un service traiteur sur mesure : je viens avec mon matériel et je cuisine la paella devant vos invités. Tapas, planches de Pata Negra, sangrias maison. Dès 23 invités.",
    badge: "Dès 23 invités",
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
      "Anniversaire en famille ou entre amis : je m'occupe de la cuisine, vous profitez de vos invités. Livraison à domicile dès 10 personnes ou chef à domicile pour les grands rassemblements (dès 23 invités).",
    badge: "10 à 80 invités",
  },
  {
    slug: "bapteme",
    name: "Paella baptême",
    h1: "Traiteur paella pour baptême",
    intro:
      "Pour le baptême de votre enfant, je prépare un repas convivial et généreux. Paella livrée chaude dès 10 personnes, ou chef à domicile dès 23 invités. Menu adaptable pour les enfants.",
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
];

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "€€",
    image: `${SITE.url}/logo.png`,
    logo: `${SITE.url}/logo.png`,
    foundingDate: SITE.founded,
    founder: { "@type": "Person", name: SITE.chefName, jobTitle: "Chef et gérant" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Teste-de-Buch",
      addressRegion: "Nouvelle-Aquitaine",
      postalCode: "33260",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 44.6258, longitude: -1.1453 },
    areaServed: SITE.serviceArea.map((c) => ({ "@type": "City", name: c })),
    servesCuisine: ["Spanish", "Mediterranean", "Paella"],
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.tripadvisor],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}

export function serviceJsonLd(name: string, description: string, areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE.url}#business` },
    areaServed: areaName ? { "@type": "City", name: areaName } : SITE.serviceArea.map((c) => ({ "@type": "City", name: c })),
    serviceType: "Paella catering",
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
