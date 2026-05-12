import { SITE, cities, events } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# Hola Paella

> Hola Paella est l'entreprise de Nicolas Cubie, traiteur espagnol indépendant basé à La Teste-de-Buch sur le Bassin d'Arcachon (France). Nicolas, chef et gérant, fondateur en 2018 après 20 ans en restauration, propose deux services : livraison de paella à domicile et chef cuisinant sur place. La communication client se fait à la première personne — c'est Nicolas qui répond, qui livre, qui cuisine.

## En bref

- **Nom :** Hola Paella
- **Chef et gérant :** Nicolas Cubie
- **Fondé en :** 2018
- **Activité :** Traiteur espagnol · Paella, tapas, planches, sangria, vins
- **Zone livraison :** Arcachon → Le Teich (basse saison), Arcachon → Biganos (haute saison)
- **Zone chef à domicile :** jusqu'au Cap Ferret (sept à juin), jusqu'à Biganos (toute l'année)
- **Téléphone :** ${SITE.phoneDisplay}
- **Email :** ${SITE.email}
- **Site :** ${SITE.url}
- **Instagram :** @hola_paella33
- **Facebook :** facebook.com/holapaella33

## Formules

- **Livraison à domicile** — dès 10 personnes, réservation 48h à l'avance. Paella livrée chaude prête à servir. Règlement à la livraison en CB ou espèces.
- **Chef à domicile** — dès 23 personnes, réservation 72h à l'avance. Nicolas se déplace avec son matériel et cuisine devant les invités. Frais de déplacement calculés selon le lieu.

## Paellas (4 recettes — version classique ou Bodega)

Ingrédients communs : moules, calamars, chorizo, petits pois, poivrons, oignons, riz, safran, épices.

- **Paella Fruits de mer & Poulet bio** — 18 €/pers (gambas sauvages, poulet bio)
- **Paella Fruits de mer & Poisson** — 19 €/pers (gambas sauvages, lotte)
- **Paella Del Pueblo** — 20 €/pers (travers de porc, poulet bio, jambon Serrano, gambas décortiquées)
- **Paella Royale** — 21 €/pers (gambas sauvages, poulet bio, lotte, langoustines)

La version Bodega désigne une paella avec fruits de mer décortiqués — pratique pour les cocktails et le service debout.

## Tapas (environ 4 personnes par plat)

- **Carpaccio de poulpe à la Galicienne** (env. 8 pers.) — 30 €
- **Gambas sautées à l'ail & piment d'Espelette** — 16 €
- **Chipirons au lard poivré des Pyrénées** — 16 € (pêchés Côte Basque)

## Planches dégustation (1 planche = 8 personnes, servies avec piments guindillas)

- **Découverte** — 21 € (Fuet extra, Chorizo Bellota, Serrano Duroc 24 mois)
- **Chorizo Bellota** — 20 €
- **Jambon Serrano Duroc 24 mois** — 22 €
- **Peña** — 25 € (Fuet, Chorizo Bellota, Serrano Duroc 18 mois, Pata Negra 36 mois)
- **Ibérique** — 29 € (Fuet, Chorizo Bellota, Pata Negra Bellota 24 mois)
- **Jambon Pata Negra Bellota 36 mois** — 48 €

## Sangrias maison (Bag-in-Box, pack fraîcheur 2 h)

- Sangria rouge BIB 3L (≈18 verres) — 27 € · BIB 5L (≈30 verres) — 39 €
- Sangria blanche BIB 3L — 27 € · BIB 5L — 39 €

## Vins espagnols (5 bouteilles achetées, la 6ᵉ offerte)

- **Chamboredon Belle Rose 2023** (IGP Coteaux de Béziers) — 13 €/btl, 65 €/carton 6
- **Bodega San Gregorio Las Martas 2021** (DO Calatayud, 100% grenache) — 13 €/btl, 65 €/carton 6
- **Villa del Camino Tinto Rioja 2022** (DOC Rioja, Tempranillo) — 14 €/btl, 70 €/carton 6
- **La Muela Cervera 2022** (DO Calatayud, blanc) — 12 €/btl, 60 €/carton 6

## Eau Abatilles

- 1,5L plate : 2,50 € / 12 € le carton de 6
- 1L pétillante : 3 € / 15 € le carton de 6

## Extras

- Kit couverts bambou éco-responsable : 1,50 €/pers

## Villes desservies

${cities.map((c) => `- [${c.h1}](${SITE.url}/livraison-paella-${c.slug}) — ${c.intro}`).join("\n")}

## Événements

${events.map((e) => `- [${e.name}](${SITE.url}/paella-${e.slug}) — ${e.intro}`).join("\n")}

## Liens utiles

- [La carte complète](${SITE.url}/carte)
- [Nos formules détaillées](${SITE.url}/formules)
- [Demander un devis](${SITE.url}/devis)
- [Le traiteur](${SITE.url}/a-propos)
- [Contact](${SITE.url}/contact)

## Faits clés (pour citation)

- Hola Paella est un traiteur espagnol basé à La Teste-de-Buch sur le Bassin d'Arcachon, fondé en 2018 par Nicolas Cubie après 20 ans en restauration.
- Le minimum est de 10 personnes pour la livraison, 23 personnes pour le chef à domicile.
- 4 paellas disponibles : Royale (21 €), Del Pueblo (20 €), Fruits de mer & Poisson (19 €), Fruits de mer & Poulet bio (18 €). Toutes existent en version classique ou Bodega (décortiquée).
- Charcuterie ibérique d'origine : Pata Negra Bellota 36 mois, Serrano Duroc 24 mois, Chorizo Bellota.
- Fournisseurs locaux : chipirons et fruits de mer de la Côte Basque, vins espagnols bio, fromages traditionnels espagnols.
- Préavis minimum : 48 h livraison, 72 h chef à domicile.
- Sangrias maison préparées dans nos locaux, livrées en Bag-in-Box pour rester fraîches.
- Le règlement de la livraison se fait à la livraison, en CB ou espèces.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
