import { writeFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.GOOGLE_API_KEY;
const MODEL = "gemini-2.5-flash-image";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const SHARED =
  "Photographic, editorial food photography, warm afternoon golden hour light, shallow depth of field, soft shadows, linen tablecloth, terracotta and saffron palette, rustic-elegant Spanish atmosphere, no text, no watermark, no people. Cinematic, magazine quality.";

const items = [
  {
    file: "ambiance/livraison.jpg",
    prompt: `A black insulated catering box being set down on a wooden front porch, lid open revealing a steaming paella in a copper pan, evening warm light, family villa entrance with potted plants. ${SHARED}`,
  },
  {
    file: "ambiance/chef-prive.jpg",
    prompt: `A chef's hands stirring a giant paella in a copper pan over open wood fire flames, sparks flying, dramatic side light, evening garden party blurred in background. ${SHARED}`,
  },
  {
    file: "ambiance/table.jpg",
    prompt: `A long wooden outdoor dining table set for a summer dinner, copper paella in the center, glasses of red wine, terracotta plates, candles, linen napkins, sunset glow, vineyard background blurred. ${SHARED}`,
  },
  {
    file: "ambiance/ingredients.jpg",
    prompt: `Close-up flatlay of paella ingredients on a worn wooden surface: saffron threads, paprika in wooden spoon, raw whole prawns, mussels, lemon halves, garlic bulbs, fresh parsley, smoked paprika tin. Top-down. ${SHARED}`,
  },
  {
    file: "ambiance/copper.jpg",
    prompt: `Detail close-up of golden saffron rice with a perfect dark socarrat crust at the edge of a copper paella pan, lemon wedge, grilled langoustine antennae visible, steam rising. ${SHARED}`,
  },
  {
    file: "ambiance/sangria-pour.jpg",
    prompt: `Sangria being poured from a glass pitcher into a tumbler full of ice and orange slices, sunlight catching the red liquid, terracotta tablecloth, fresh fruit scattered around. ${SHARED}`,
  },
];

mkdirSync("public/images/ambiance", { recursive: true });

async function generate(item) {
  const out = join("public/images", item.file);
  if (existsSync(out)) {
    console.log(`✓ skip ${item.file}`);
    return;
  }
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: item.prompt }] }] }),
  });
  if (!res.ok) {
    console.error(`✗ ${item.file} ${res.status}`);
    return;
  }
  const data = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) {
    console.error(`✗ ${item.file} no image`);
    return;
  }
  await writeFile(out, Buffer.from(part.inlineData.data, "base64"));
  console.log(`✓ ${item.file}`);
}

for (const item of items) {
  await generate(item);
  await new Promise((r) => setTimeout(r, 1500));
}
