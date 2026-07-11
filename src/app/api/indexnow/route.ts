import { SITE, cities, events } from "@/lib/seo";

const INDEXNOW_KEY = "15682451-a6c8-4376-9434-676bc3f1c319";

function allUrls(): string[] {
  const base = SITE.url;
  const main = [
    base,
    `${base}/carte`,
    `${base}/formules`,
    `${base}/devis`,
    `${base}/a-propos`,
    `${base}/contact`,
    `${base}/mentions-legales`,
    `${base}/cgv`,
    `${base}/politique-de-confidentialite`,
  ];
  const cityUrls = cities.map((c) => `${base}/paella-${c.slug}`);
  const eventUrls = events.map((e) => `${base}/paella-${e.slug}`);
  return [...main, ...cityUrls, ...eventUrls];
}

export async function GET() {
  const host = new URL(SITE.url).host;
  const urlList = allUrls();

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return Response.json({
    submitted: urlList.length,
    status: res.status,
    ok: res.ok,
  });
}
