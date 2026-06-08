# Plan d'action SEO — Hola Paella
**Date :** 8 juin 2026 | Généré depuis l'audit complet

---

## 🔴 CRITIQUE — Appliquer immédiatement

| # | Action | Fichier | Impact | Effort |
|---|---|---|---|---|
| C1 | Corriger bug `url: undefined` dans `serviceJsonLd()` | `src/lib/seo.tsx` | Schema invalide sur toutes les pages | 15 min |
| C2 | Remplacer `@type: [FoodEstablishment, FoodService]` → `[LocalBusiness, FoodService]` | `src/lib/seo.tsx` | Type incorrect pour SAB traiteur | 5 min |
| C3 | Ajouter `AggregateRating` (4.8/5, 113 avis) dans localBusinessJsonLd | `src/lib/seo.tsx` | Étoiles SERP (+15-25% CTR) | 10 min |
| C4 | Corriger `offerCount: "4"` → `"5"` et prix `lowPrice: "15"`, `highPrice: "25"` | `src/lib/seo.tsx` | Cohérence schema/contenu | 5 min |
| C5 | Corriger foundingDate: meta a-propos "2017" → "2018" | `src/app/a-propos/page.tsx` | Trustworthiness E-E-A-T | 2 min |
| C6 | Ajouter `"Sunday"` dans `openingHoursSpecification` | `src/lib/seo.tsx` | Cohérence schema/FAQ baptême | 5 min |
| C7 | Format téléphone E.164 partout : `href="tel:+33646198234"` | Footer, Header, Contact, pages villes | NAP cohérent pour citations | 15 min |
| C8 | Corriger accents manquants dans pages villes (`à`, `dès`, `é`) | `src/app/paella-city/[city]/page.tsx` | Snippets Google, crédibilité | 20 min |
| C9 | Raccourcir titre homepage (79 chars → <65) | `src/app/layout.tsx` | Troncature SERP | 5 min |
| C10 | Passer `pageUrl` en paramètre à `serviceJsonLd()` dans chaque page | pages villes, events, livraison | Fix du bug url: undefined | 30 min |

---

## 🟠 HIGH — Dans les 7 jours

| # | Action | Fichier | Impact | Effort |
|---|---|---|---|---|
| H1 | Aligner les prix : FAQ et pages villes à mettre à jour pour refléter les vrais prix du menu (15-25€) OU mettre à jour menu.ts pour partir de 18€ | FAQ.tsx, layout.tsx, paella-city | Cohérence message = confiance | 30 min |
| H2 | Cross-linker `/livraison-paella-[ville]` ↔ `/paella-[ville]` | paella-city/page.tsx + livraison-paella/page.tsx | Maillage interne + anti-cannibalisation | 1h |
| H3 | Ajouter un bloc "Zones desservies" + "Pour quel événement" en corps de homepage (pas seulement footer) | `src/app/page.tsx` | PageRank → pages programmatiques | 1h |
| H4 | Corriger `offerCount` dynamiquement depuis `menu.ts` (filter paellas) | `src/lib/seo.tsx` | Maintenance long terme | 20 min |
| H5 | Ajouter téléphone tap-to-call visible sur mobile sans burger menu | `src/components/layout/Header.tsx` | Conversion mobile | 30 min |
| H6 | Pré-remplir la formule dans le devis via paramètre URL (`/devis?formule=livraison`) | `src/app/devis/DevisForm.tsx` + CTA formules | Réduction friction funnel | 1h |
| H7 | Marquer étape 3 du devis comme "(optionnelle)" | `src/app/devis/DevisForm.tsx` | Réduction abandon | 20 min |

---

## 🟡 MEDIUM — Dans les 30 jours

| # | Action | Impact | Effort |
|---|---|---|---|
| M1 | Câbler le formulaire de devis (Server Action ou webhook email) | TOUS les leads actuellement perdus | 2-4h backend |
| M2 | Ajouter une image différente par type d'événement (mariage, entreprise, anniversaire) | E-E-A-T + conversion | 1-2h (images à produire) |
| M3 | Déplacer/dupliquer les témoignages sur les pages événement | E-E-A-T sur pages conversion | 1h |
| M4 | Enrichir contenu des 8 pages "chef à domicile" non-delivery (Bordeaux, Cap Ferret...) | Anti-duplication Google | 4-8h rédaction |
| M5 | Ajouter section FAQ homepage en SSR (remplacer `useState` accordion par `<details>`) | GEO : toutes réponses visibles sans JS | 1h |
| M6 | Rendre CarteClient.tsx hybride SSR+client (menu visible dans HTML initial) | GEO : citabilité menu | 2-3h |
| M7 | Ajouter `AggregateRating` visible (widget ou composant) sur les pages villes/events | Confiance near-CTA | 1-2h |
| M8 | Ajouter `sameAs` au bloc `Person` (Instagram Nicolas Cubie) | E-E-A-T Person schema | 10 min |
| M9 | Corriger `itemListElement > item` format dans BreadcrumbList (`{ "@id": URL }`) | Compatibilité maximale Google | 15 min |
| M10 | Créer des citations sur Pages Jaunes, Yelp France, Mariages.net, Zankyou | SEO local, citations Tier 1 FR | 2h |

---

## 🟢 LOW — Backlog

| # | Action | Impact | Effort |
|---|---|---|---|
| L1 | Supprimer le tableau `keywords` dans layout.tsx (inutile depuis 2011) | Allégement HTML | 2 min |
| L2 | Créer une chaîne YouTube (3-4 vidéos cuisson paella) | Signal brand IA le plus fort (0,737) | 2-4 semaines |
| L3 | Demander une mention Wikipedia (article gastronomie Bassin d'Arcachon) | Autorité ChatGPT/Perplexity | Long terme |
| L4 | Ajouter `changeFrequency` dans le sitemap | Crawl budget | 5 min |
| L5 | Créer une page `/prix-paella` ou article "Combien coûte une paella pour X personnes" | Trafic informationnel + featured snippet | 2-3h rédaction |
| L6 | Ajouter un embed carte de zone (image SVG Bassin) | Signal local visuel | 1h |
| L7 | Mettre à jour le compteur d'avis dynamiquement (API Google Places ou widget) | Crédibilité temps réel | 2-4h |
| L8 | Vérifier que hola-paella.vercel.app redirige vers hola-paella.fr (pas indexable en doublon) | Éviter contenu dupliqué inter-domaine | 30 min |
| L9 | Stratégie avis : QR code post-prestation + email J+3 | Vélocité avis Google | Long terme |
| L10 | Diversifier images produits (tapas, planches, bières utilisent des placeholders) | Carte plus crédible | 1-2h (photos) |

---

## Estimation d'impact

| Corrections appliquées | Score estimé |
|---|---|
| État actuel | 64/100 |
| Après corrections Critiques (C1-C10) | ~72/100 |
| + corrections High (H1-H7) | ~78/100 |
| + corrections Medium (M1-M10) | ~84/100 |
| + corrections Low | ~88/100 |

---

## Fichiers à traiter en priorité

1. `src/lib/seo.tsx` — C1, C2, C3, C4, C6, C10
2. `src/app/paella-city/[city]/page.tsx` — C8, C10, H2
3. `src/app/a-propos/page.tsx` — C5
4. `src/app/layout.tsx` — C9
5. `src/components/layout/Footer.tsx` — C7
6. `src/components/layout/Header.tsx` — C7, H5
7. `src/app/contact/page.tsx` — C7
8. `src/app/devis/DevisForm.tsx` — H6, H7, M1
