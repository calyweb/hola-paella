import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { events, cities, SITE, JsonLd, serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return events.map((e) => ({ event: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ event: string }>;
}): Promise<Metadata> {
  const { event } = await params;
  const e = events.find((x) => x.slug === event);
  if (!e) return {};
  const url = `${SITE.url}/paella-${e.slug}`;
  return {
    title: { absolute: `${e.name} · Traiteur Bassin d'Arcachon` },
    description: e.intro.substring(0, 160),
    alternates: { canonical: url },
    openGraph: { url, title: e.h1, description: e.intro, images: ["/images/hero-banner.png"] },
  };
}

const eventContent: Record<
  string,
  { hooks: { title: string; text: string }[]; faqs: { q: string; a: string }[] }
> = {
  mariage: {
    hooks: [
      { title: "Je cuisine sur place", text: "Je viens avec mon matériel et je cuisine votre paella devant vos invités. Spectacle dans l'assiette, photos sublimes, c'est ce que j'aime faire." },
      { title: "Un repas à votre image", text: "Tapas et planches de Pata Negra à l'apéritif, paella au plat principal, sangria maison Bag-in-Box. J'adapte à vos envies et votre budget." },
      { title: "Cool, mais carré sur les délais", text: "On reste accessibles, sans jargon. Carnets qui se remplissent vite en saison — on confirme votre date contre acompte." },
      { title: "Devis en ligne en 7 étapes", text: "Vous composez vous-même votre devis en ligne (non contractuel), on revient vers vous pour caler les détails." },
    ],
    faqs: [
      { q: "Quel budget pour un mariage avec paella ?", a: "Comptez de 18 à 21 €/pers pour la paella selon la version choisie (Fruits de mer & Poulet bio 18 €, Royale 21 €), à compléter avec tapas, planches, sangria et vins. Frais de déplacement calculés selon le lieu. Devis personnalisé via notre formulaire en ligne." },
      { q: "Combien d'invités pour un mariage paella ?", a: "J'interviens à partir de 24 invités pour la formule chef à domicile. Pour les très grands événements, appelez-moi, on adapte le matériel et l'équipe." },
      { q: "Combien de temps à l'avance réserver ?", a: "Idéalement plusieurs mois pour les samedis de juin à septembre, qui se remplissent vite. Préavis minimum 72 h pour le chef à domicile." },
      { q: "Vous déplacez-vous où pour un mariage ?", a: "Je me déplace de septembre à juin jusqu'au Cap Ferret. Toute l'année jusqu'à Biganos. Pour les autres communes (Bordeaux notamment), c'est sur étude." },
      { q: "Que se passe-t-il s'il pleut le jour J ?", a: "Je m'adapte : sous un chapiteau, une grange ou une salle couverte, la plancha se déplace sans problème. Prévoyez simplement un point d'installation à l'abri au moment de la réservation, on en discute ensemble en amont." },
      { q: "Peut-on goûter la paella avant de réserver ?", a: "Je n'organise pas de dégustation à l'aveugle, mais je réponds en détail à toutes vos questions sur les recettes et les produits. Beaucoup de mariés me font confiance sur la base des avis clients (110+ sur Google et TripAdvisor) et des photos d'événements précédents." },
    ],
  },
  entreprise: {
    hooks: [
      { title: "Paella Del Pueblo pour le cocktail", text: "La Paella Del Pueblo — travers de porc, poulet bio, jambon Serrano, gambas — est idéale pour le service debout en cocktail dînatoire." },
      { title: "Chef à domicile pour effet wow", text: "Pour vos lancements, séminaires, soirées clients — la paella cuisinée sur place devant vos invités fait parler de votre événement." },
      { title: "Facture entreprise", text: "Devis détaillé, facturation pro. On reste cool sur la forme mais carré sur le fond." },
      { title: "Tapas, planches, sangrias", text: "Carpaccio de poulpe, gambas Espelette, chipirons, planches de Pata Negra. Et la sangria maison en Bag-in-Box pour rester fraîche pendant toute la soirée." },
    ],
    faqs: [
      { q: "Quelle formule pour un cocktail entreprise ?", a: "La Paella Del Pueblo (travers de porc, poulet bio, jambon Serrano, gambas) accompagnée de tapas et planches de charcuterie ibérique. Service debout, format propre." },
      { q: "Vous gérez la vaisselle pour un événement entreprise ?", a: "Kit couverts bambou éco-responsable disponible en option à 1,50 €/pers. Pour la vaisselle complète, on étudie au cas par cas." },
      { q: "Quel délai pour réserver ?", a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. Pour vos événements stratégiques, prévoyez 2 à 4 semaines." },
      { q: "Vous livrez à Bordeaux pour un événement entreprise ?", a: "Sur étude. Notre zone principale est le Bassin d'Arcachon ; pour Bordeaux et la métropole, contactez-nous et on calcule les frais de déplacement." },
      { q: "Proposez-vous une offre pour un séminaire sur plusieurs jours ?", a: "Oui, je peux intervenir sur un ou plusieurs repas d'un séminaire (déjeuner, dîner de gala). Contactez-moi avec votre programme, on construit une offre adaptée à chaque temps fort." },
      { q: "Pouvez-vous adapter le menu pour des convives ayant des restrictions alimentaires ?", a: "Oui. La Paella Fruits de mer & Poulet bio convient à la plupart des régimes, et je peux prévoir des portions sans fruits de mer ou sans porc sur demande. Signalez-le simplement à la réservation." },
    ],
  },
  anniversaire: {
    hooks: [
      { title: "Livraison à domicile dès 10 personnes", text: "Pour vos anniversaires entre amis ou en famille, on livre la paella chaude chez vous, prête à servir. Vous restez maître de votre soirée." },
      { title: "Chef à domicile dès 24 invités", text: "Pour les grandes tablées, je viens cuisiner sur place. Zéro stress côté logistique, effet \"wahou\" côté invités." },
      { title: "Carte personnalisable", text: "Mes 4 paellas (Fruits de mer & Poulet Bodéga, Fruits de mer & Poisson Bodéga, Del Pueblo, Royale Bodéga), planches de charcuterie ibérique, sangria maison. J'adapte selon vos envies." },
      { title: "Tarif clair, sans surprise", text: "Paellas de 18 à 21 €/pers, planches de 21 à 29 €, sangria maison BIB 3 L à 27 €. Vous composez votre devis en ligne." },
    ],
    faqs: [
      { q: "Combien coûte une paella pour 30 personnes ?", a: "Entre 540 € (paella Fruits de mer & Poulet bio à 18 €/pers) et 630 € (paella Royale à 21 €/pers) pour la paella seule, à compléter selon votre carte." },
      { q: "Préavis pour un anniversaire ?", a: "48 h minimum pour la livraison, 72 h pour le chef à domicile. En haute saison, prévoyez plusieurs semaines à l'avance." },
      { q: "Vous gérez la vaisselle ?", a: "Option kit couverts bambou éco-responsable à 1,50 €/pers. Pour la vaisselle complète, sur étude." },
      { q: "Anniversaire enfant possible ?", a: "Bien sûr — la paella Fruits de mer & Poulet est douce et plaît aux enfants. J'adapte le menu selon vos invités." },
      { q: "Peut-on personnaliser le service autour du buffet paella ?", a: "Oui, dites-moi le thème ou l'ambiance recherchée, je m'adapte au format de service (buffet, plancha en direct) et à la mise en table selon vos envies." },
      { q: "Proposez-vous un dessert en complément ?", a: "Je me concentre sur la paella, les tapas et les planches, mais je peux vous recommander des partenaires locaux pour le dessert si besoin." },
    ],
  },
  bapteme: {
    hooks: [
      { title: "Un repas convivial et généreux", text: "La paella, c'est le plat familial par excellence. Tout le monde se sert, on partage, on profite — parfait pour un baptême." },
      { title: "Menu adaptable pour les enfants", text: "La paella Fruits de mer & Poulet bio plaît aux petits comme aux grands. J'adapte les quantités et le menu selon vos invités." },
      { title: "Livraison dès 10 personnes", text: "Paella livrée chaude chez vous, prête à servir. Vous vous occupez de la cérémonie, je m'occupe du repas." },
      { title: "Chef à domicile dès 24 invités", text: "Pour un baptême plus grand, je viens avec mon matériel et je cuisine devant vos invités. Moment convivial garanti." },
    ],
    faqs: [
      { q: "Quel budget pour un baptême avec paella ?", a: "De 18 à 21 €/pers pour la paella, à compléter avec tapas, planches et sangria selon vos envies. Devis sur mesure via le formulaire en ligne." },
      { q: "Peut-on adapter le menu pour les enfants ?", a: "Oui. La paella Fruits de mer & Poulet bio est douce et convient aux enfants. Je peux aussi prévoir des portions adaptées." },
      { q: "Quel délai pour réserver ?", a: "48 h pour la livraison, 72 h pour le chef à domicile. En saison, prévoyez quelques semaines à l'avance." },
      { q: "Vous déplacez-vous le dimanche ?", a: "Oui, je travaille le week-end. La plupart des baptêmes ont lieu le dimanche — c'est mon quotidien." },
      { q: "Le service inclut-il la vaisselle ?", a: "Un kit couverts bambou éco-responsable est disponible en option à 1,50 €/pers. Pour la vaisselle complète (assiettes, verres), on regarde ensemble selon votre lieu de réception." },
      { q: "Peut-on prévoir un menu allégé pour les personnes âgées présentes ?", a: "Oui, la Paella Fruits de mer & Poulet bio est douce et bien tolérée. N'hésitez pas à me signaler des besoins particuliers à la réservation." },
    ],
  },
  "soiree-privee": {
    hooks: [
      { title: "Zéro prise de tête", text: "Je livre la paella chaude chez vous, prête à servir. Vous ouvrez la porte, vous servez vos invités, c'est tout." },
      { title: "L'apéro complet", text: "Tapas (poulpe à la Galicienne, gambas, chipirons), planches de charcuterie ibérique (Pata Negra 36 mois, Chorizo ibérique, Serrano Duroc), sangria maison en Bag-in-Box. L'apéro est aussi bon que le plat." },
      { title: "Chef sur place pour les grandes soirées", text: "Dès 24 invités, je viens cuisiner chez vous. La paella se fait devant vos invités — ça lance toujours la soirée." },
      { title: "Devis en ligne en 5 minutes", text: "Vous composez votre menu, je vous envoie une proposition sous 24 h. Pas de mauvaise surprise à la facture." },
    ],
    faqs: [
      { q: "Combien de personnes minimum ?", a: "10 invités pour la livraison, 24 pour le chef à domicile. En dessous de 10, appelez-moi, on voit ensemble." },
      { q: "Jusqu'à quelle heure livrez-vous ?", a: "Je m'adapte à votre programme. Dites-moi l'heure du repas, je livre en conséquence." },
      { q: "Vous fournissez les couverts ?", a: "Kit couverts bambou éco-responsable en option à 1,50 €/pers. Compostable, élégant." },
      { q: "Peut-on commander uniquement des tapas et planches ?", a: "Oui, sans problème. Tapas, planches de charcuterie ibérique et sangria — un format apéritif dînatoire très demandé." },
      { q: "Peut-on commander pour une soirée improvisée ?", a: "Avec 48 h de préavis pour la livraison, c'est jouable même pour une soirée décidée sur le tard. Contactez-moi dès que vous avez une date, je vous dis rapidement si c'est possible." },
      { q: "Proposez-vous un format brunch ou déjeuner ?", a: "Oui, la paella se prête très bien à un déjeuner. Je m'adapte à l'horaire de votre soirée ou repas, livraison comme chef à domicile." },
    ],
  },
  evjf: {
    hooks: [
      { title: "Livraison sur le Bassin dès 10", text: "Je livre la paella chaude à domicile pour votre EVJF. Sangrias maison, tapas, planches — l'apéro et le plat réunis." },
      { title: "Chef à domicile pour l'effet spectacle", text: "Pour un EVJF inoubliable, je viens cuisiner sur place. La paella en direct, ça crée l'ambiance tout de suite." },
      { title: "Sangrias maison incluses", text: "Sangria rouge ou blanche préparée dans nos locaux, en Bag-in-Box 3 ou 5 litres. Le combo gagnant pour une soirée réussie." },
      { title: "Devis rapide sous 24 h", text: "Dites-moi la date, le lieu et le nombre de filles — je vous réponds avec une proposition claire sous 24 h." },
    ],
    faqs: [
      { q: "Vous livrez pour un EVJF sur le Bassin d'Arcachon ?", a: "Oui, je livre sur le sud Bassin d'Arcachon dès 10 personnes. Chef à domicile dès 24 invités, jusqu'à Bordeaux." },
      { q: "Quel menu pour un EVJF ?", a: "Paella + sangrias + tapas, c'est la formule EVJF idéale. Je m'adapte à votre nombre d'invitées et votre budget." },
      { q: "Combien de personnes minimum ?", a: "10 pour la livraison, 24 pour le chef à domicile." },
      { q: "Quel délai pour réserver ?", a: "Minimum 48 h, mais les week-ends de printemps-été partent vite. Prévenez dès que la date est fixée." },
      { q: "Peut-on associer une animation autour de la paella ?", a: "La cuisson en direct au feu de bois est déjà un vrai moment d'animation en soi. Si vous avez une idée précise (jeux, thème), dites-le-moi, je m'organise autour." },
      { q: "Le lieu doit-il être équipé d'une cuisine ?", a: "Non, pour le chef à domicile j'arrive avec tout mon matériel (plancha, gaz, ustensiles). Une prise électrique et un point d'eau à proximité suffisent." },
    ],
  },
  evg: {
    hooks: [
      { title: "Paella au feu de bois pour l'EVG", text: "La paella cuisinée en direct devant le groupe, c'est le format parfait pour un EVG — convivial, généreux, mémorable." },
      { title: "Livraison ou chef à domicile", text: "Livraison chaude dès 10 personnes sur le Bassin, chef sur place dès 24 invités jusqu'à Bordeaux." },
      { title: "Sangrias et planches pour l'apéro", text: "Sangria maison en BIB, planches de Pata Negra, tapas — l'apéro est aussi sérieux que la paella." },
      { title: "Devis sous 24 h", text: "Date, lieu, nombre — envoyez votre demande, je reviens sous 24 h avec une proposition sur mesure." },
    ],
    faqs: [
      { q: "Vous faites les EVG sur le Bassin d'Arcachon ?", a: "Oui, livraison sur le sud Bassin dès 10 personnes, chef à domicile dès 24 invités sur tout le Bassin et jusqu'à Bordeaux." },
      { q: "Quel menu pour un EVG ?", a: "Paella Royale ou Del Pueblo pour le plat, sangrias maison, tapas et planches de Pata Negra pour l'apéro. Je m'adapte." },
      { q: "Combien de personnes minimum ?", a: "10 pour la livraison, 24 pour le chef à domicile." },
      { q: "Vous livrez le dimanche ?", a: "Oui, je travaille 7 jours sur 7. Les EVG ont souvent lieu le week-end — c'est mon quotidien." },
      { q: "Peut-on cuisiner en extérieur dans une location de vacances ?", a: "Oui, je me déplace dans les gîtes, locations de vacances ou terrains privés du Bassin. Vérifiez juste qu'il y a un accès électrique et un point d'eau à proximité." },
      { q: "Les portions sont-elles copieuses ?", a: "Oui, les portions sont généreuses par nature avec la paella. Pour les EVG et les gros appétits, je peux ajuster les quantités par personne — dites-le-moi à la réservation." },
    ],
  },
  "repas-de-chantier": {
    hooks: [
      { title: "Livraison directe sur site", text: "Je livre la paella chaude directement sur votre chantier, prête à servir. Pas de logistique, pas de vaisselle compliquée." },
      { title: "Format pratique et généreux", text: "La paella, c'est le plat idéal pour nourrir une équipe : généreux, facile à servir, convivial. Dès 10 personnes." },
      { title: "Kit couverts inclus en option", text: "Kit couvert à usage unique disponible à 1,50 €/pers. Pratique sur chantier, sans corvée de vaisselle." },
      { title: "Devis rapide sous 24 h", text: "Date, lieu de livraison et nombre de personnes — je vous envoie un devis clair sous 24 h." },
    ],
    faqs: [
      { q: "Vous livrez sur les chantiers du Bassin d'Arcachon ?", a: "Oui, je livre sur le sud Bassin d'Arcachon dès 10 personnes. Donnez-moi l'adresse et l'heure, je m'organise." },
      { q: "Quelle paella pour un repas de chantier ?", a: "La Paella Fruits de mer & Poulet bio (18 €/pers) ou Del Pueblo (20 €/pers) sont les plus adaptées. Copieuses et faciles à servir." },
      { q: "Vous fournissez les couverts ?", a: "Oui, kit couvert à usage unique en option à 1,50 €/pers. Pratique et sans contrainte sur un chantier." },
      { q: "Quel délai pour commander ?", a: "Minimum 48 h à l'avance. Pour les grandes équipes, prévenez dès que possible." },
      { q: "Peut-on commander pour une équipe qui mange à des horaires décalés ?", a: "C'est une vraie question de chantier. Je livre à l'heure convenue et la paella reste chaude environ une heure dans son contenant. Si votre équipe tourne en deux équipes, prévenez-moi — on peut organiser deux créneaux ou je vous conseille un contenant isotherme. L'essentiel, c'est que tout le monde mange chaud." },
      { q: "La livraison est-elle possible sur des chantiers difficiles d'accès ?", a: "Oui, dans la grande majorité des cas. Donnez-moi l'adresse exacte et le meilleur accès au moment de la commande, je m'organise. J'ai l'habitude des zones industrielles et des entrées de chantier. Si l'accès est vraiment complexe, on définit ensemble un point de dépôt adapté." },
    ],
  },
  communion: {
    hooks: [
      { title: "Menu adapté à tous les âges", text: "La paella Fruits de mer & Poulet bio plaît aux petits comme aux grands. J'adapte les portions et le menu selon vos invités." },
      { title: "Livraison dès 10 personnes", text: "Paella livrée chaude chez vous, prête à servir. Vous profitez de la cérémonie, je m'occupe du repas." },
      { title: "Chef à domicile dès 24 invités", text: "Pour une communion avec plus d'invités, je viens cuisiner sur place. Ambiance conviviale garantie." },
      { title: "Carte à composer selon vos envies", text: "Tapas, planches de charcuterie ibérique, sangria maison — je compose le menu avec vous selon votre budget." },
    ],
    faqs: [
      { q: "Quel budget pour une communion avec paella ?", a: "De 18 à 21 €/pers pour la paella, à compléter avec tapas, planches et sangria. Devis sur mesure via le formulaire." },
      { q: "La paella convient-elle aux enfants ?", a: "Oui, la paella Fruits de mer & Poulet bio est douce et appréciée des enfants. Je peux adapter les portions." },
      { q: "Combien de personnes minimum ?", a: "10 pour la livraison, 24 pour le chef à domicile." },
      { q: "Quel délai pour réserver ?", a: "48 h minimum. Pour les communions du printemps, réservez dès que la date est connue, le carnet se remplit vite." },
      { q: "Peut-on prévoir un menu sans porc ?", a: "Oui, la Paella Fruits de mer & Poisson ou Fruits de mer & Poulet bio conviennent sans porc. Signalez-le à la réservation, je m'organise sur la composition." },
      { q: "La paella peut-elle être servie en extérieur si la cérémonie est en plein air ?", a: "Oui, livraison comme chef à domicile s'adaptent très bien à un repas en extérieur — jardin, salle des fêtes avec terrasse, etc." },
    ],
  },
  "depart-retraite": {
    hooks: [
      { title: "Un repas à la hauteur de l'événement", text: "Un départ à la retraite, ça se fête dignement. Paella au feu de bois, sangrias maison, planches de Pata Negra — le menu idéal." },
      { title: "Chef à domicile pour l'effet wow", text: "Je viens cuisiner sur place devant les collègues et amis. La paella en direct, c'est le moment fort de la soirée." },
      { title: "Livraison dès 10 personnes", text: "Pour un pot de départ plus intime, je livre la paella chaude à domicile ou au bureau. Simple et généreux." },
      { title: "Devis en ligne sous 24 h", text: "Composez votre menu en ligne et recevez un devis personnalisé sous 24 h." },
    ],
    faqs: [
      { q: "Vous livrez pour un départ en retraite à Bordeaux ?", a: "Je livre sur le sud Bassin d'Arcachon. Pour Bordeaux, je me déplace avec mon matériel pour cuisiner sur place dès 24 invités." },
      { q: "Quel format pour un pot de départ ?", a: "Livraison dès 10 personnes pour un pot convivial, chef à domicile dès 24 invités pour une soirée plus festive." },
      { q: "Vous gérez la facture pro ?", a: "Oui, je fournis un devis et une facture en bonne et due forme." },
      { q: "Quel délai pour réserver ?", a: "Minimum 48 h, idéalement 1 à 2 semaines à l'avance pour être sûr d'avoir votre date." },
      { q: "Peut-on organiser la surprise sans que le/la retraité(e) soit au courant ?", a: "Oui, c'est fréquent. Coordonnez-vous avec un collègue pour la logistique de livraison ou d'installation, je m'adapte à l'horaire et au lieu convenus en toute discrétion." },
      { q: "Intervenez-vous dans les locaux de l'entreprise ?", a: "Oui, livraison ou chef à domicile dans vos bureaux, salle de pause ou extérieur d'entreprise. Vérifiez juste l'accès pour le matériel si vous optez pour la cuisson sur place." },
    ],
  },
  cousinade: {
    hooks: [
      { title: "Le plat idéal pour les grands rassemblements", text: "La paella, c'est fait pour les retrouvailles en famille. Grand format, convivial, tout le monde se sert — l'esprit cousinade." },
      { title: "Chef à domicile pour l'ambiance", text: "Je viens cuisiner sur place devant toute la famille. La cuisson en direct au feu de bois, ça crée le rassemblement." },
      { title: "Livraison dès 10 personnes", text: "Pour les cousines et cousins plus proches, je livre la paella chaude directement chez vous." },
      { title: "Carte complète à composer", text: "Tapas, planches ibériques, sangria maison — je compose le menu avec vous pour que tout le monde se régale." },
    ],
    faqs: [
      { q: "Vous intervenez pour de grands groupes ?", a: "Oui, je m'adapte aux petits comme aux grands groupes. Pour plus de 80 personnes, contactez-moi pour qu'on dimensionne ensemble." },
      { q: "La paella convient-elle à tous les âges ?", a: "Absolument. La paella Fruits de mer & Poulet est appréciée de tous, des enfants aux grands-parents." },
      { q: "Vous vous déplacez loin pour une cousinade ?", a: "Je livre sur le sud Bassin d'Arcachon et me déplace jusqu'à Bordeaux et la Gironde pour le chef à domicile." },
      { q: "Quel délai pour réserver ?", a: "Minimum 48 h, mais pour les grandes réunions de famille, mieux vaut prévoir plusieurs semaines à l'avance." },
      { q: "Peut-on prévoir plusieurs paellas différentes pour varier les goûts ?", a: "Oui, je peux préparer plusieurs de mes 4 recettes en parallèle pour un grand rassemblement — pratique quand les goûts diffèrent d'une génération à l'autre." },
      { q: "Le lieu doit-il être équipé pour recevoir un chef à domicile ?", a: "Non, j'arrive avec tout mon matériel (plancha, gaz, ustensiles). Un accès électrique et un point d'eau à proximité suffisent, que ce soit un jardin familial ou une salle des fêtes." },
    ],
  },
  "club-sportif": {
    hooks: [
      { title: "Fin de saison, tournoi, gala", text: "La paella réunit tout le club autour d'un grand plat. Conviviale, généreuse, adaptée aux grands groupes." },
      { title: "Livraison sur site dès 10 personnes", text: "Je livre directement sur votre terrain ou salle des fêtes. Prêt à servir, sans contrainte logistique." },
      { title: "Chef à domicile pour l'effet spectacle", text: "Pour les grandes occasions, je viens cuisiner en direct devant les membres du club. Moment fort garanti." },
      { title: "Tarifs groupes adaptés", text: "Devis sur mesure selon vos besoins. Je m'adapte à votre budget et à votre format." },
    ],
    faqs: [
      { q: "Vous livrez sur les terrains de sport du Bassin ?", a: "Oui, je livre sur le sud Bassin d'Arcachon dès 10 personnes. Donnez-moi l'adresse, je m'adapte." },
      { q: "Vous proposez des tarifs pour les clubs sportifs ?", a: "Je fais des devis sur mesure selon le nombre de personnes. Contactez-moi pour qu'on adapte ensemble." },
      { q: "Vous fournissez les couverts ?", a: "Kit couvert à usage unique en option à 1,50 €/pers. Pratique pour les repas en extérieur." },
      { q: "Quel délai pour réserver ?", a: "Minimum 48 h pour la livraison, 72 h pour le chef sur place. Pour les grands événements sportifs, prévenez à l'avance." },
      { q: "Vous intervenez aussi pour les repas d'après-match en semaine ?", a: "Oui, je m'adapte à vos horaires — semaine comme week-end. La livraison après un match du vendredi soir, c'est quelque chose que je fais régulièrement. Dites-moi l'heure du coup de sifflet final et l'heure à laquelle vous voulez manger, je gère le timing côté cuisine." },
      { q: "Comment ça se passe concrètement le jour de la livraison pour un club ?", a: "Je livre directement dans votre vestiaire, salle des fêtes ou sur le terrain selon ce que vous avez prévu. La paella arrive prête à servir. Si vous n'avez pas de louche ni de plats de service, signalez-le en commande — je peux inclure le kit couvert à 1,50 €/pers. Comptez 10 minutes pour l'installation." },
    ],
  },
  associations: {
    hooks: [
      { title: "Repas annuel, AG, collecte de fonds", text: "La paella est le plat des rassemblements associatifs : généreux, simple à organiser, apprécié de tous." },
      { title: "Livraison sur site dès 10 personnes", text: "Je livre directement sur votre lieu d'événement. Pas de cuisine à gérer, vous vous concentrez sur votre association." },
      { title: "Chef à domicile pour animer la soirée", text: "Pour vos grandes soirées, je viens cuisiner sur place. La paella en direct crée toujours l'animation." },
      { title: "Devis adapté à votre budget", text: "Je m'adapte aux contraintes des associations. Contactez-moi pour qu'on trouve la formule qui vous convient." },
    ],
    faqs: [
      { q: "Vous proposez des tarifs pour les associations ?", a: "Je fais des devis sur mesure. Expliquez-moi votre projet et votre budget, on trouvera une solution." },
      { q: "Vous livrez pour des événements associatifs sur le Bassin ?", a: "Oui, je livre sur le sud Bassin d'Arcachon dès 10 personnes, chef à domicile sur tout le Bassin et jusqu'à Bordeaux." },
      { q: "Vous fournissez les couverts ?", a: "Kit couvert éco-responsable à usage unique en option à 1,50 €/pers." },
      { q: "Quel délai pour réserver ?", a: "Minimum 48 h, mais pour les grands repas annuels, réservez plusieurs semaines à l'avance." },
      { q: "Peut-on utiliser la paella pour une soirée de collecte de fonds ?", a: "C'est un format qui marche très bien pour les associations. Un grand plat convivial, un prix lisible par convive, et je peux cuisiner sur place si vous voulez créer un moment d'animation autour du repas. Plusieurs associations du Bassin m'ont déjà sollicité dans ce cadre — n'hésitez pas à m'appeler pour qu'on en parle." },
      { q: "Pouvez-vous fournir une facture adaptée à la comptabilité associative ?", a: "Oui, je fournis un devis et une facture en bonne et due forme, avec mention de la TVA et du détail des prestations. Si votre association a besoin d'un format particulier ou d'une commande en bon de commande, dites-le moi à la réservation, on s'adapte sans problème." },
    ],
  },
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ event: string }>;
}) {
  const { event } = await params;
  const e = events.find((x) => x.slug === event);
  if (!e) return notFound();
  const content = eventContent[e.slug];
  const url = `${SITE.url}/paella-${e.slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(e.h1, e.intro, undefined, url),
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Accueil", url: SITE.url },
            { name: e.name, url },
          ]),
        ]}
      />

      <section className="warm-bg pt-12 pb-20 px-5 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-xs uppercase tracking-[0.16em] text-ink-soft mb-6">
            <Link href="/" className="hover:text-terracotta">Accueil</Link>
            <span className="mx-2">/</span>
            <span>{e.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="pill pill-terracotta mb-5">{e.badge}</div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
                {e.h1.split(" pour ")[0]}
                <br />
                <span className="italic font-light text-terracotta">pour {e.h1.split(" pour ")[1] || e.name.toLowerCase()}.</span>
              </h1>
              <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
                {e.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link href="/devis" className="btn-primary group">
                  Devis {e.name.toLowerCase().replace("paella pour ", "paella ")} <ArrowRight size={18} />
                </Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost">
                  <Phone size={16} /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-banner.png"
                alt={e.h1}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-paper">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            Pourquoi choisir <span className="italic font-light">Hola Paella ?</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {content.hooks.map((b) => (
              <div key={b.title} className="card-warm p-7">
                <div className="w-10 h-10 rounded-2xl bg-saffron/15 flex items-center justify-center text-saffron-dark mb-4">
                  <Check size={18} />
                </div>
                <h3 className="font-display text-xl text-ink leading-tight mb-2">{b.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-8 bg-cream">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {content.faqs.map((f) => (
              <div key={f.q} className="bg-paper rounded-2xl p-6 border border-ink/8">
                <div className="font-display text-lg text-ink mb-2">{f.q}</div>
                <p className="text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-6 px-5 sm:px-8 bg-paper">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display text-3xl text-ink mb-6">
            Nos zones d&apos;intervention
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/paella-${c.slug}`}
                className="card-warm p-5 hover:bg-saffron/10 group"
              >
                <div className="font-display text-lg text-ink">Paella {c.name}</div>
                <div className="text-sm text-ink-soft mt-1 flex items-center gap-1">
                  Voir <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-5 sm:px-8 bg-paper text-center">
        <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight mx-auto">
          On en parle&nbsp;?
        </h2>
        <p className="mt-4 text-ink-soft">Réponse à votre demande sous 24 h.</p>
        <Link href="/devis" className="btn-primary mt-7 group">
          Demander un devis <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
