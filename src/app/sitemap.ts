import type { MetadataRoute } from "next";
import { SITE, cities, events } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const main: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/carte`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/formules`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/devis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/livraison-paella-${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${base}/paella-${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...main, ...cityPages, ...eventPages];
}
