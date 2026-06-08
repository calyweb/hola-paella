# Audit SEO Complet — Hola Paella
**Date :** 8 juin 2026 | **URL :** https://hola-paella.fr | **Type :** SAB Traiteur local, Bassin d'Arcachon & Bordeaux

---

## Score Global : 64 / 100

| Dimension | Poids | Score | Score pondéré |
|---|---|---|---|
| Technique SEO | 22% | 68/100 | 15,0 |
| Contenu & E-E-A-T | 23% | 62/100 | 14,3 |
| On-Page SEO | 20% | 67/100 | 13,4 |
| Schema / Structured Data | 10% | 54/100 | 5,4 |
| Performance (CWV) | 10% | ~70/100 | 7,0 |
| AI Search Readiness (GEO) | 10% | 71/100 | 7,1 |
| Images | 5% | 42/100 | 2,1 |
| **TOTAL** | 100% | | **64,3** |

**Potentiel estimé après corrections :** 82–88 / 100

---

## Top 5 Problèmes Critiques

1. 🔴 **Formulaire de devis non fonctionnel** — `setSubmitted(true)` sans aucun appel réseau. 100% des leads perdus.
2. 🔴 **Bug `url: undefined` dans serviceJsonLd()** — `window.location` inexistant en SSR. Toutes les pages villes/events ont un schema Service invalide.
3. 🔴 **AggregateRating absent** — 4,8/5 Google (113 avis) non déclaré en JSON-LD. Étoiles absentes des SERP.
4. 🔴 **Incohérence des prix** — menu.ts affiche 15€/pers, les FAQ/pages-ville annoncent 18€. Perte de confiance.
5. 🔴 **Accents manquants** dans les textes générés (`a` au lieu de `à`, `des` au lieu de `dès`) — visibles dans les snippets Google.

## Top 5 Quick Wins

1. ✅ Ajouter `AggregateRating` dans le schema (30 min → étoiles dans les SERP)
2. ✅ Corriger `url: undefined` dans `serviceJsonLd()` (15 min)
3. ✅ Corriger `foundingDate` 2017 → 2018 dans a-propos metadata (5 min)
4. ✅ Corriger `offerCount` 4 → 5 et les prix AggregateOffer (10 min)
5. ✅ Format téléphone E.164 cohérent (`+33646198234`) partout (15 min)

---

## 1. SEO Technique

### Points forts
- SSR/SSG via Next.js App Router : HTML complet dans la réponse HTTP initiale ✓
- robots.txt exhaustif : tous les crawlers IA autorisés (GPTBot, ClaudeBot, PerplexityBot, Google-Extended...) ✓
- Sitemap XML généré programmatiquement avec toutes les pages (40 URLs) ✓
- Canonical tags sur toutes les pages ✓
- Headers de sécurité : X-Content-Type-Options, X-Frame-Options, Referrer-Policy ✓
- AVIF activé (next.config) ✓
- trailingSlash: false cohérent ✓
- Middleware URL rewrite propre (`/paella-city/arcachon` → `/paella-arcachon`) ✓
- Geo meta tags dans le head (geo.region, geo.placename, ICBM) ✓

### Problèmes identifiés

**CRITIQUE**
- `CarteClient.tsx` est un Client Component : le menu complet est invisible dans le HTML initial (SSR non effectué pour ce composant)
- `FAQ.tsx` homepage utilise `"use client"` et `useState` : seul l'item 0 est dans le HTML initial, les autres réponses nécessitent JavaScript

**HIGH**
- Domaine `hola-paella.vercel.app` potentiellement indexable en doublon — vérifier que Vercel redirige bien vers `hola-paella.fr`
- `changeFrequency` absent du sitemap

**MEDIUM**
- Titre homepage : 79 caractères (seuil : 65) → troncature Google garantie

---

## 2. Contenu & E-E-A-T (Score : 62/100)

### Points forts
- Auteur nommé (Nicolas Cubie) avec expérience vérifiable (20 ans restauration, lancé 2018) ✓
- Terminologie experte précise : riz bomba, safran de la Mancha, Pata Negra Bellota 36 mois ✓
- 113 avis clients (40 Google 4,8/5 + 73 TripAdvisor 5/5) ✓
- FAQ contextualisées par ville et par événement ✓
- llms.txt avec section "faits clés" ✓

### Problèmes identifiés

**CRITIQUE**
- Pages `/paella-[ville]` chef-only (8 villes) : contenu >90% identique → duplication détectée par Google
- Incohérence foundingDate : metadata `/a-propos` dit "2017", corps de page et schema disent "2018"
- Accents manquants dans les textes générés des pages villes (visible dans snippets SERP)

**HIGH**
- Image hero identique (`hero-paella.jpg`) sur 100% des pages programmatiques (villes + événements)
- Témoignages uniquement sur la homepage — absents des pages de conversion (mariage, anniversaire, ville)
- Pages `/paella/[event]` : ~500-600 mots (seuil recommandé : 800 mots pour une service page)
- Titre homepage : "Hola Paella — Traiteur paella cuisinée devant vos invités · Bordeaux & Bassin d'Arcachon" (79 chars)

**MEDIUM**
- Aucun contenu différenciateur local sur les pages "chef à domicile" non-delivery (Biganos, Mios, Bordeaux...)
- Témoignages non filtrables par type d'événement sur les pages dédiées
- `openingHoursSpecification` exclut le dimanche malgré les baptêmes le week-end

---

## 3. On-Page SEO

### Balises Title
| Page | Titre | Chars | Statut |
|---|---|---|---|
| Homepage | Hola Paella — Traiteur paella cuisinée devant vos invités · Bordeaux & Bassin d'Arcachon | 79 | ⚠️ Trop long |
| /formules | Nos formules | 13 | ⚠️ Trop court |
| /carte | La carte | 9 | ⚠️ Trop court |
| /paella-city delivery | Paella [Ville] — Livraison & chef à domicile | ~45 | ✓ |
| /paella/[event] | [Event] — Traiteur paella sur le Bassin d'Arcachon & Bordeaux | ~68 | ⚠️ Limite |

### Meta descriptions
- Pages city : accents manquants ("a domicile" au lieu de "à domicile")
- Pages event : `e.intro.substring(0, 160)` — risque de coupure sans "..."
- Prix et zone absents de la meta de `/formules`

### Maillage interne
- Homepage → 0 lien vers pages villes/événements (uniquement via footer)
- `/livraison-paella-[ville]` et `/paella-[ville]` ne se cross-linkent pas
- Pages événement : liens vers seulement 4 villes avec livraison (slice 4)
- 5 dernières villes sous-représentées dans le maillage interne

---

## 4. Schema / Structured Data (Score : 54/100)

### Inventaire
| Type | Page | Statut |
|---|---|---|
| FoodEstablishment + FoodService | layout (global) | ⚠️ Double @type problématique |
| WebSite | layout (global) | ✓ |
| FAQPage | homepage + toutes pages programmatiques | ✓ (bénéfice GEO) |
| Menu + MenuSection + MenuItem | /carte | ✓ |
| Service + AggregateOffer | pages villes + events | 🔴 url: undefined |
| Person | /a-propos | ✓ |
| BreadcrumbList | toutes pages sauf homepage | ✓ |
| AggregateRating | aucune page | 🔴 Absent |

### Corrections critiques

**Bug #1 — `url: undefined` dans serviceJsonLd() [seo.tsx ligne ~332]**
```typescript
// AVANT (incorrect en SSR)
url: typeof window !== "undefined" ? window.location.href : undefined

// APRÈS
url: pageUrl, // paramètre à passer depuis chaque page
```

**Bug #2 — Double @type invalide**
```json
// AVANT
"@type": ["FoodEstablishment", "FoodService"]

// APRÈS (SAB traiteur)
"@type": ["LocalBusiness", "FoodService"]
```

**Bug #3 — AggregateRating manquant**
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "113",
  "bestRating": "5"
}
```

**Bug #4 — offerCount faux et prix incohérents**
```json
// AVANT
"lowPrice": "18", "highPrice": "21", "offerCount": "4"

// APRÈS
"lowPrice": "15", "highPrice": "25", "offerCount": "5"
```

**Bug #5 — openingHoursSpecification sans dimanche**
Ajouter `"Sunday"` dans les jours — le chef travaille le week-end (confirmé FAQ baptême).

---

## 5. GEO / AI Search Readiness (Score : 71/100)

### Points forts
- robots.txt : accès explicite à tous les crawlers IA majeurs ✓
- llms.txt fonctionnel avec section "faits clés" ✓
- SSR/SSG : HTML complet dès la réponse HTTP ✓
- Entités nommées consistantes (Nicolas Cubie, Bassin d'Arcachon, Pata Negra, DO Calatayud) ✓
- FAQ structurées avec réponses directes extractables ✓
- Schéma FAQPage sur toutes les pages programmatiques ✓

### Problèmes
- FAQ homepage (`FAQ.tsx`) en `"use client"` → seule réponse 0 visible sans JS
- CarteClient.tsx : contenu du menu invisible sans JS
- Incohérence de date de fondation (2017 dans meta a-propos)
- **Absence de YouTube** (signal le plus fort pour citations IA : corrélation ~0,737)
- Absence sur Reddit et Wikipedia
- AggregateRating absent du LocalBusiness
- Blocs texte trop courts (30-90 mots vs optimal 134-167 mots)

### Scores par plateforme IA
| Plateforme | Score | Facteur limitant |
|---|---|---|
| Google AI Overviews | 68/100 | FAQ client-side, AggregateRating absent |
| ChatGPT | 72/100 | llms.txt présent, bonne citabilité FAQ |
| Perplexity | 75/100 | SSR fort, FAQ structurées |
| Bing Copilot | 65/100 | URL vercel vs domaine canonique |
| Claude | 74/100 | llms.txt bien formé, entités précises |

---

## 6. SEO Local (Score : 61/100)

### Points forts
- 113 avis (40 Google 4,8/5 + 73 TripAdvisor 5/5) ✓
- NAP cohérent entre seo.tsx, Footer, Contact ✓
- Schema geo.region FR-NAQ, coordonnées GPS, PostalAddress ✓
- Architecture programmatique 27 pages (15 villes + 5 events + 7 livraison) ✓
- FAQ localisée par ville et par type d'événement ✓

### Problèmes critiques
- AggregateRating absent du schema (étoiles SERP)
- Format téléphone incohérent : E.164 dans schema (`+33646198234`) vs local dans HTML (`0646198234`)
- @type FoodEstablishment incorrect pour un SAB → LocalBusiness + FoodService
- openingHoursSpecification sans dimanche
- Aucun embed Google Maps / carte de zone de service
- Pages livraison non présentes dans le footer (moins de link equity)
- Aucune citation Tier 1 FR hors TripAdvisor : Pages Jaunes, Yelp, Mariages.net manquants

---

## 7. SXO — Parcours de conversion (Score : 71/100)

### Bug fatal
**Le formulaire de devis ne transmet aucune donnée.** `onClick={() => setSubmitted(true)}` sans aucun appel réseau. Toutes les demandes sont perdues.

### Friction map
```
[SERP] → [Homepage] → [Formules] → [Devis] → [Confirmation]
              ↑             ↑           ↑           ↑
         Prix hors     H1 poétique  Étape 3    DONNÉES
         viewport      pas de tel   perturbe   PERDUES
         mobile        mobile       l'abandon
```

### Scores persona
| Persona | Score | Blocage principal |
|---|---|---|
| Particulier livraison (10-20 pers) | 62/100 | Prix non visible mobile |
| Mariage (60+ pers, haute saison) | 57/100 | Bug formulaire + aucune photo mariage |
| Entreprise / séminaire | 52/100 | Aucun logo client, pas de devis pro |
| Anniversaire (30-50 pers, mobile) | 62/100 | Tel caché derrière burger menu |

---

## 8. Images (Score : 42/100)

- `hero-paella.jpg` : même image sur **toutes** les pages programmatiques (villes + events)
- Plusieurs produits (tapas, planches, bières, extras) partagent la même image placeholder
- Aucune image différenciant mariage / entreprise / anniversaire
- Alt text localisé (`alt="Paella à Arcachon"`) : bon point ✓
- AVIF activé : bon point ✓

---

## Limitations de l'audit

- Pas d'accès au Google Business Profile réel (catégorie, statut vérification, configuration SAB)
- Pas de données Google Search Console (positions réelles, impressions, couverture index)
- Core Web Vitals terrain (CrUX) non mesurés
- Backlink profile non vérifié (pas d'accès Ahrefs/Moz)
- Formulaire devis : le code source indique un bug — une Server Action Next.js dans un fichier non trouvé reste possible
