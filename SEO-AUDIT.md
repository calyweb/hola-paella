# Audit SEO Complet — hola-paella.fr

**Date :** 2026-05-21
**URL :** https://hola-paella.vercel.app (production : hola-paella.fr)
**Stack :** Next.js 16.2.5 / SSR + SSG / Vercel
**Type :** Local Service (traiteur paella)

---

## SEO Health Score : 72 / 100

| Categorie | Poids | Score | Pondere |
|-----------|-------|-------|---------|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality (E-E-A-T) | 23% | 68 | 15.6 |
| On-Page SEO | 20% | 70 | 14.0 |
| Schema / Structured Data | 10% | 75 | 7.5 |
| Performance (CWV) | 10% | 65 | 6.5 |
| AI Search Readiness (GEO) | 10% | 72 | 7.2 |
| Images | 5% | 60 | 3.0 |
| **TOTAL** | | | **71.8 -> 72** |

---

## CRITICAL (a corriger immediatement)

### 1. Le formulaire de devis ne fonctionne pas
`setSubmitted(true)` change l'UI mais n'envoie aucun email, webhook ou API call. Le formulaire est purement cosmetique.
- **Fichier :** `src/app/devis/DevisForm.tsx`
- **Impact :** Perte de 100% des conversions

### 2. Canonicals casses sur 5 pages (CORRIGE)
`/carte`, `/formules`, `/devis`, `/a-propos`, `/contact` pointaient tous vers la homepage via le canonical global du `layout.tsx`.
- **Statut :** Corrige dans cette session

### 3. Page /mentions-legales inexistante
Le footer pointe vers `/mentions-legales` mais la page n'existe pas -> 404.
- **Fichier a creer :** `src/app/mentions-legales/page.tsx`
- **Impact :** Obligation legale (CGV/mentions legales)

---

## HIGH (corriger dans la semaine)

### 4. LCP a 4.8s sur la homepage (seuil : 2.5s)
**Cause racine :** 13 images avec `priority` sur la homepage. Quand tout est prioritaire, rien ne l'est.
- **Fix :** Garder `priority` uniquement sur le Hero. Retirer des Formules, Signatures, Mood, CarteClient, Header logo.
- **Gain attendu :** LCP de 4.8s -> ~2.5-3.0s

### 5. Homepage : 4 balises H1 au lieu d'une seule
H1 actuels : "Une paella d'exception", "Deux facons de recevoir", "Les incontournables", "Votre traiteur espagnol".
- **Fix :** Garder le premier en H1, passer les autres en H2.

### 6. Schema WebSite manquant (CORRIGE)
Ajoute au layout global dans cette session.

### 7. Pages paella-city manquantes du sitemap (CORRIGE)
6 pages `/paella-arcachon` etc. ajoutees au sitemap.

### 8. Cannibalization livraison-paella vs paella-city
Deux sets de pages ciblent les memes villes avec du contenu similaire. `livraison-paella-arcachon` et `paella-arcachon` se font concurrence.
- **Options :** (a) Fusionner en un seul set plus riche, (b) Differencier clairement les contenus (logistique vs menu/commande).

---

## MEDIUM (corriger dans le mois)

### 9. Contenu trop template sur les pages ville (~35% unique)
Les pages ville sont identiques a part le nom de ville et 1-2 phrases d'intro.
- **Fix :** Ajouter 2-3 phrases uniques par ville (lieux typiques, anecdotes, partenaires locaux).

### 10. Pas de temoignages on-site
113 avis (73 TripAdvisor + 40 Google) mais zero texte de temoignage affiche sur le site.
- **Fix :** Ajouter 3-5 vrais avis avec attribution sur la homepage.

### 11. Schema Menu + MenuItem manquant sur /carte
20+ plats structures dans `menu.ts` mais aucun schema Menu.
- **Fix :** Generer le schema a partir des donnees existantes.

### 12. BreadcrumbList manquant sur 5 pages statiques
`/carte`, `/formules`, `/a-propos`, `/contact`, `/devis` n'ont pas de breadcrumbs.

### 13. Pas de CTA sur la page /carte
L'utilisateur qui parcourt le menu n'a aucun moyen de passer commande sans remonter au header.
- **Fix :** Ajouter un sticky bottom bar "Demander un devis".

### 14. Security headers manquants
Pas de `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`, `Referrer-Policy`.

### 15. AVIF non active
Next.js sert du WebP mais pas d'AVIF (-20-50% poids en plus).
- **Fix :** Ajouter `images: { formats: ['image/avif', 'image/webp'] }` dans `next.config.ts`.

### 16. llms.txt zones obsoletes (CORRIGE)
Mis a jour avec la structure livraison+chef vs chef-only.

---

## LOW (backlog)

### 17. Pas de page bio chef (E-E-A-T)
Nicolas Cubie n'a pas de page credentials (parcours, formations, certifications HACCP).

### 18. Pas de photos uniques par evenement/ville
La meme image `hero-paella.jpg` est reutilisee sur 19+ pages.

### 19. Pages evenement trop courtes (400-500 mots, min recommande : 600-800)

### 20. Pas de cross-links evenements <-> villes

### 21. lastModified dynamique dans le sitemap
`new Date()` a chaque requete = Google voit les pages comme modifiees en permanence.

### 22. Pas d'IndexNow pour Bing/Yandex

### 23. Type schema FoodEstablishment -> FoodService (plus precis pour un traiteur)

### 24. Padding trop important sur le formulaire devis (pt-24, repousse le form sous le fold mobile)

### 25. Presence brand quasi-inexistante (YouTube, Reddit, LinkedIn, Wikipedia)

---

## Scores detailles par categorie

### Technical SEO : 82/100
| | Statut |
|---|---|
| SSR/SSG | EXCELLENT |
| HTTPS + HSTS | EXCELLENT |
| robots.txt | EXCELLENT |
| Sitemap | BON (corrige) |
| Canonicals | BON (corrige) |
| URL structure | BON |
| Mobile viewport | PASS |
| lang="fr" | PASS |
| Security headers | MANQUANT |

### E-E-A-T : 68/100
| | Score |
|---|---|
| Experience | 65 |
| Expertise | 72 |
| Authoritativeness | 58 |
| Trustworthiness | 75 |

### Performance (CWV) : 65/100
| Metrique | Homepage | /carte | /livraison-arcachon | Seuil |
|----------|----------|--------|---------------------|-------|
| LCP | 4.8s | 4.0s | 3.1s | < 2.5s |
| CLS | 0 | 0 | 0 | < 0.1 |
| INP (TBT) | 20ms | 0ms | 10ms | < 200ms |
| Lighthouse | 78 | 87 | 93 | > 90 |

### GEO / AI Readiness : 72/100
| | Statut |
|---|---|
| AI crawlers | TOUS AUTORISES |
| llms.txt | COMPLET |
| SSR (pas de JS requis) | EXCELLENT |
| FAQ structurees | BON |
| Blocs citables 134-167 mots | A AMELIORER |
| Brand mentions | FAIBLE |

### Schema : 75/100
| Schema | Statut |
|---|---|
| FoodEstablishment | PRESENT |
| WebSite | AJOUTE |
| FAQPage | PRESENT |
| Service | PRESENT |
| BreadcrumbList | PARTIEL (pages dynamiques only) |
| Menu/MenuItem | MANQUANT |
| AggregateRating | MANQUANT |
| Person | MANQUANT |

---

## Plan d'action prioritise

### Cette semaine
1. Brancher le formulaire de devis sur un vrai backend (email/webhook)
2. Creer la page /mentions-legales
3. Retirer `priority` des images non-LCP (Formules, Signatures, Mood, CarteClient)
4. Ajouter AVIF dans next.config.ts
5. Fixer les H1 multiples sur la homepage

### Ce mois
6. Ajouter 3-5 vrais temoignages on-site
7. Ajouter le schema Menu sur /carte
8. Ajouter un CTA sticky sur /carte
9. Differencier ou fusionner les pages livraison-paella et paella-city
10. Enrichir les intros des pages ville (contenu unique)

### Trimestre
11. Creer une page bio chef avec credentials
12. Ajouter des photos uniques par type d'evenement
13. Developper la presence brand (YouTube, LinkedIn)
14. Ajouter un blog "Nos evenements" avec recaps reels
15. Cross-linker evenements <-> villes
