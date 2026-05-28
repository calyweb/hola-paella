import type { MetadataRoute } from "next";
import { SITE, cities, events } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Date statique de derniere mise a jour reelle (pas new Date())
  const lastUpdate = new Date("2026-05-21");
  const base = SITE.url;

  const main: MetadataRoute.Sitemap = [
    { url: base, lastModified: lastUpdate, priority: 1 },
    { url: `${base}/carte`, lastModified: lastUpdate, priority: 0.9 },
    { url: `${base}/formules`, lastModified: lastUpdate, priority: 0.9 },
    { url: `${base}/devis`, lastModified: lastUpdate, priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: lastUpdate, priority: 0.6 },
    { url: `${base}/contact`, lastModified: lastUpdate, priority: 0.6 },
    { url: `${base}/mentions-legales`, lastModified: lastUpdate, priority: 0.3 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/livraison-paella-${c.slug}`,
    lastModified: lastUpdate,
    priority: 0.85,
  }));

  // Pages "Paella [ville]" pour toutes les villes
  const paellaCityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/paella-${c.slug}`,
    lastModified: lastUpdate,
    priority: 0.8,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${base}/paella-${e.slug}`,
    lastModified: lastUpdate,
    priority: 0.8,
  }));

  return [...main, ...cityPages, ...paellaCityPages, ...eventPages];
}
