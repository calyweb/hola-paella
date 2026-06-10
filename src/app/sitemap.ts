import type { MetadataRoute } from "next";
import { SITE, cities, events } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Date statique de derniere mise a jour reelle (pas new Date())
  const lastUpdate = new Date("2026-06-08");
  const base = SITE.url;

  const main: MetadataRoute.Sitemap = [
    { url: base, lastModified: lastUpdate, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/carte`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/formules`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/devis`, lastModified: lastUpdate, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: lastUpdate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: lastUpdate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/mentions-legales`, lastModified: lastUpdate, changeFrequency: "yearly", priority: 0.3 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.filter((c) => c.delivery).map((c) => ({
    url: `${base}/livraison-paella-${c.slug}`,
    lastModified: lastUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Pages "Paella [ville]" pour toutes les villes
  const paellaCityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/paella-${c.slug}`,
    lastModified: lastUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${base}/paella-${e.slug}`,
    lastModified: lastUpdate,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...main, ...cityPages, ...paellaCityPages, ...eventPages];
}
