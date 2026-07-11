export const testimonials = [
  {
    name: "Sophie L.",
    source: "Google" as const,
    stars: 5,
    text: "Nicolas est venu cuisiner pour notre mariage au Cap Ferret, 65 invités. Paella Royale incroyable, service impeccable. Nos invités en parlent encore !",
    citySlug: "cap-ferret",
    eventSlug: "mariage",
  },
  {
    name: "Marc D.",
    source: "TripAdvisor" as const,
    stars: 5,
    text: "Livraison pour un anniversaire à Arcachon, 25 personnes. Paella Del Pueblo généreuse et savoureuse. Les planches de Pata Negra étaient exceptionnelles.",
    citySlug: "arcachon",
    eventSlug: "anniversaire",
  },
  {
    name: "Caroline B.",
    source: "Google" as const,
    stars: 5,
    text: "Troisième fois qu'on fait appel à Hola Paella pour nos soirées d'entreprise à Bordeaux. Toujours au top, produits frais, sangria maison délicieuse.",
    citySlug: "bordeaux",
    eventSlug: "entreprise",
  },
];

export function testimonialForCity(slug: string) {
  return testimonials.find((t) => t.citySlug === slug);
}

export function testimonialForEvent(slug: string) {
  return testimonials.find((t) => t.eventSlug === slug);
}
