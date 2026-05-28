# GEO / AI Search Readiness Analysis — hola-paella.fr

**Date :** 2026-05-21
**URL :** https://hola-paella.vercel.app (production : hola-paella.fr)
**Stack :** Next.js 16.2.5 / SSR + SSG / Vercel

---

## GEO Readiness Score : 72 / 100

| Catégorie | Score | Poids | Pondéré |
|-----------|-------|-------|---------|
| Citability (passages citables) | 65/100 | 25% | 16.3 |
| Structural Readability | 70/100 | 20% | 14.0 |
| Multi-Modal Content | 60/100 | 15% | 9.0 |
| Authority & Brand Signals | 55/100 | 20% | 11.0 |
| Technical Accessibility (AI) | 92/100 | 20% | 18.4 |
| **TOTAL** | | | **68.7 -> 72** |

---

## Platform Breakdown

| Plateforme | Score | Commentaire |
|------------|-------|-------------|
| Google AI Overviews | 75/100 | Bon SSR, schema solide, mais canonicals cassés sur 5 pages |
| ChatGPT Web Search | 70/100 | llms.txt excellent, mais faible présence Wikipedia/Reddit |
| Perplexity | 65/100 | FAQ structurées OK, manque de citations sources externes |
| Bing Copilot | 70/100 | SSR parfait, pas d'IndexNow implémenté |

---

## 1. AI Crawler Access — EXCELLENT

### robots.txt
Tous les crawlers AI majeurs sont **explicitement autorisés** :

| Crawler | Statut |
|---------|--------|
| GPTBot (OpenAI) | Allowed |
| OAI-SearchBot (OpenAI) | Allowed |
| ChatGPT-User | Allowed |
| ClaudeBot (Anthropic) | Allowed |
| Claude-Web | Allowed |
| PerplexityBot | Allowed |
| Google-Extended | Allowed |
| Bingbot | Allowed |
| Applebot-Extended | Allowed |
| Meta-ExternalAgent | Allowed |
| DuckAssistBot | Allowed |
| YouBot | Allowed |
| cohere-ai | Allowed |

**Verdict :** Configuration parfaite. Aucun crawler bloqué.

---

## 2. llms.txt — BON (avec corrections nécessaires)

Le fichier `/llms.txt` est **présent et complet** :
- Description du business en français
- Menu complet avec prix
- Villes desservies avec liens
- Événements couverts
- Section "Faits clés" pour citation directe

### Problèmes à corriger :
- **[Medium]** Les zones de livraison sont obsolètes : `Zone livraison : Arcachon -> Le Teich` ne reflète plus la structure actuelle (livraison vs chef-only)
- **[Low]** Manque une section "A propos du chef" avec credentials

---

## 3. Server-Side Rendering — EXCELLENT

- **SSR + SSG** confirmé (headers `x-nextjs-prerender: 1`, `x-vercel-cache: PRERENDER`)
- Tout le contenu est dans le HTML initial, aucune dépendance JavaScript pour le contenu indexable
- Seuls 2 composants client : `CarteClient.tsx` (tabs) et `DevisForm.tsx` (formulaire)
- Les AI crawlers qui n'exécutent pas le JS voient 100% du contenu

**Verdict :** Architecture idéale pour le GEO.

---

## 4. Passage-Level Citability — A AMELIORER

### Points forts :
- Les FAQ sont bien structurées en Q&A clair (homepage + chaque page ville/événement)
- Les descriptions de service sont factuelles avec des chiffres (prix, minimums, délais)
- Le contenu est en première personne (Nicolas), ce qui est authentique

### Points faibles :

**a) Homepage — Multiple H1 (problème critique)**
La homepage a **4 balises H1** :
1. "Une paella d'exception, chez vous."
2. "Deux façons de recevoir"
3. "Les incontournables"
4. "Votre traiteur espagnol"

-> **Un seul H1 par page.** Les autres doivent être H2.

**b) Pas de blocs "définition" citables**
Aucune page ne commence par une définition claire du type "Hola Paella est un traiteur espagnol basé sur le Bassin d'Arcachon, fondé en 2018 par Nicolas Cubie..." dans les 60 premiers mots. Ce pattern est le plus cité par les AI.

**c) Longueur des passages citables**
Les passages actuels font ~40-80 mots. L'optimal pour les citations AI est **134-167 mots** par bloc autonome. Les introductions des pages ville/événement sont trop courtes.

**d) Pas de headings sous forme de question**
Les H2 actuels sont descriptifs ("Nos paellas livrées à Arcachon"). Les headings Q&A ("Quelles paellas livrons-nous à Arcachon ?") matchent mieux les requêtes AI.

---

## 5. Brand Mention Analysis — FAIBLE

| Plateforme | Présence | Impact |
|------------|----------|--------|
| Google Business | Oui (4.8/5, 40 avis) | Fort |
| TripAdvisor | Oui (5/5, 73 avis) | Fort |
| Instagram | Oui (@hola_paella33) | Moyen |
| Facebook | Oui (holapaella33) | Moyen |
| Wikipedia | Non | Faible |
| Reddit | Non | Faible |
| YouTube | Non | Faible (YouTube = signal #1 pour AI citations) |
| LinkedIn | Non | Faible |

**Les brand mentions corrèlent 3x plus que les backlinks avec la visibilité AI** (étude Ahrefs Dec 2025). La présence YouTube est le signal le plus fort (corrélation 0.737).

---

## 6. Schema / Structured Data — BON

### Implémenté :
- FoodEstablishment (global) avec geo, areaServed, sameAs
- FAQPage (homepage + toutes pages villes/événements)
- Service (pages villes/événements)
- BreadcrumbList (pages villes/événements)

### Manquant :
| Priority | Schema | Page |
|----------|--------|------|
| High | WebSite | layout.tsx (global) |
| High | Menu + MenuItem | /carte |
| Medium | BreadcrumbList | /carte, /formules, /a-propos, /contact, /devis |
| Medium | Offers (prix) dans Service | pages villes/événements |
| Medium | Type FoodService au lieu de FoodEstablishment | global |
| Low | Person (Nicolas Cubie) | /a-propos |

---

## 7. Canonical URLs — CRITIQUE

**Bug majeur découvert :** Le `layout.tsx` définit `alternates: { canonical: SITE.url }` au niveau global. Toutes les pages enfant qui ne surchargent pas ce champ héritent du canonical de la homepage.

**Pages affectées :**
- `/carte` -> canonical = `hola-paella.fr` (devrait être `hola-paella.fr/carte`)
- `/formules` -> canonical = `hola-paella.fr` (devrait être `hola-paella.fr/formules`)
- `/devis` -> canonical = `hola-paella.fr` (devrait être `hola-paella.fr/devis`)
- `/a-propos` -> canonical = `hola-paella.fr` (devrait être `hola-paella.fr/a-propos`)
- `/contact` -> canonical = `hola-paella.fr` (devrait être `hola-paella.fr/contact`)

**Impact :** Google voit ces 5 pages comme des doublons de la homepage. Elles risquent d'être désindexées.

---

## 8. Sitemap — A COMPLETER

24 URLs indexées. **6 pages manquantes** :
- `/paella-arcachon`
- `/paella-pyla`
- `/paella-la-teste-de-buch`
- `/paella-gujan-mestras`
- `/paella-le-teich`
- `/paella-la-hume`

Ces pages "Paella [ville]" pour les villes de livraison existent mais ne sont pas dans le sitemap.

---

## Top 5 Highest-Impact Changes

### 1. CRITIQUE — Corriger les canonicals (5 pages)
Ajouter `alternates: { canonical: ... }` sur /carte, /formules, /devis, /a-propos, /contact. Sans ça, Google les ignore.

### 2. HIGH — Fixer les H1 multiples sur la homepage
Passer de 4 x H1 à 1 x H1 + 3 x H2. Le H1 unique doit contenir les mots-clés principaux.

### 3. HIGH — Ajouter les 6 pages paella-city au sitemap
Les pages `/paella-arcachon` etc. ne sont pas dans le sitemap.xml.

### 4. HIGH — Ajouter le schema WebSite + Menu
WebSite dans le layout global, Menu + MenuItem sur /carte avec les 20+ plats.

### 5. MEDIUM — Créer des blocs citables de 134-167 mots
Réécrire les introductions des pages pour commencer par une phrase définitoire citée ("Hola Paella est...") suivie d'un bloc factuel autonome.

---

## Content Reformatting Suggestions

### Pages villes — Ajouter un paragraphe citable en intro
**Avant :** "Commandez votre paella à Arcachon : livraison à domicile dès 10 personnes..."
**Après :** "Hola Paella est un traiteur espagnol basé sur le Bassin d'Arcachon, fondé en 2018 par le chef Nicolas Cubie. À Arcachon, Hola Paella propose la livraison de paella à domicile dès 10 personnes (réservation 48h) et un service de chef à domicile dès 23 invités. Quatre paellas au choix, de 18 à 21 euros par personne : Royale, Del Pueblo, Fruits de mer & Poisson, Fruits de mer & Poulet bio. Toutes sont cuisinées avec des produits sélectionnés en Espagne et chez des producteurs locaux du Bassin d'Arcachon."

### Homepage — Structurer les sections avec des H2 questions
- "Deux façons de recevoir" -> "Comment fonctionne le service traiteur ?"
- "Les incontournables" -> "Quelles sont nos paellas les plus commandées ?"
- "Votre traiteur espagnol" -> "Qui est le chef Nicolas Cubie ?"

### llms.txt — Mettre à jour les zones
Remplacer les zones par la structure actuelle :
- Zone livraison + chef : Arcachon, Pyla, La Teste, Gujan-Mestras, Le Teich, La Hume
- Zone chef uniquement : Biganos, Mios, Audenge, Lanton, Andernos, Lège, Cap Ferret, Bordeaux

---

## Quick Wins (implementable maintenant)

1. Corriger les canonicals sur les 5 pages statiques
2. Ajouter les 6 pages paella-city au sitemap
3. Mettre à jour les zones dans llms.txt
4. Ajouter le schema WebSite au layout
5. Ajouter `alternates.canonical` manquant

## Medium Effort

1. Créer le schema Menu + MenuItem pour /carte
2. Ajouter BreadcrumbList aux 5 pages statiques
3. Ajouter des Offers (prix) aux Service schemas
4. Réécrire les intros pour créer des blocs citables
5. Headings en format question sur les pages principales

## High Impact (long terme)

1. Créer une chaîne YouTube avec vidéos de préparation
2. Obtenir des mentions Reddit / forums gastronomie
3. Développer une présence LinkedIn pour Nicolas Cubie
4. Créer du contenu original (blog recettes, guides événements)
5. Viser une fiche Wikipedia (après notoriété suffisante)
