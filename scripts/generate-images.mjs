import { writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const API_KEY = process.env.GOOGLE_API_KEY;
if (!API_KEY) {
  console.error("Missing GOOGLE_API_KEY env var");
  process.exit(1);
}

const MODEL = "gemini-2.5-flash-image";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const SHARED =
  "Photographic, editorial food photography style, warm afternoon golden hour light, shallow depth of field, soft shadows, linen tablecloth, terracotta and saffron colour palette, rustic-elegant Spanish maison de famille atmosphere, no text, no watermark, no people. Cinematic, magazine quality.";

const items = [
  {
    file: "hero-paella.jpg",
    prompt: `A traditional large copper paella pan filled with a luxurious paella royale: saffron rice, whole prawns, langoustines, mussels, monkfish, lemon wedges. Cooked over open wood fire embers visible at the edges. Shot from above-three-quarter angle. ${SHARED}`,
  },
  {
    file: "products/paella-royale.jpg",
    prompt: `Close-up of paella royale in copper pan: golden saffron rice, whole tiger prawns, langoustines, monkfish chunks, paprika, fresh lemon. Top-down 45-degree angle, dark wood background. ${SHARED}`,
  },
  {
    file: "products/paella-bodega.jpg",
    prompt: `Paella bodega-style served on small plates, fork-friendly portions, peeled prawns, chorizo slices, peppers, saffron rice, on a linen-set wooden table with small terracotta cups of sangria. ${SHARED}`,
  },
  {
    file: "products/paella-poulet.jpg",
    prompt: `Classic chicken and chorizo paella in a black steel paella pan, golden rice, free-range chicken pieces, sliced chorizo, red bell peppers, fresh peas, smoked paprika dusted on top. ${SHARED}`,
  },
  {
    file: "products/paella-mer.jpg",
    prompt: `Seafood paella overflowing with mussels, clams, prawns, calamari rings, whole squid, on saffron-yellow rice. Steam rising. Dark moody background with linen napkin. ${SHARED}`,
  },
  {
    file: "products/paella-verde.jpg",
    prompt: `Vegetarian paella verde with violet artichokes, fava beans, green asparagus tips, confit red peppers, heirloom tomatoes, on bright saffron rice in a copper pan. Garden-fresh herbs scattered. ${SHARED}`,
  },
  {
    file: "products/poulpe.jpg",
    prompt: `Galician octopus carpaccio: thin slices of poached octopus arranged on a round wooden board, dusted with smoked paprika de la Vera, drizzled with arbequina olive oil, sea salt flakes. ${SHARED}`,
  },
  {
    file: "products/gambas.jpg",
    prompt: `A small terracotta pan with sizzling whole prawns, garlic cloves, Espelette pepper flakes, fresh parsley. Steam, golden oil bubbling. Dark wood background. ${SHARED}`,
  },
  {
    file: "products/chipirons.jpg",
    prompt: `Small grilled baby squid (chipirons) with crisp Pyrenees peppered lard chunks, garlic, on a slate plate. Charred edges, glossy finish. ${SHARED}`,
  },
  {
    file: "products/tortilla.jpg",
    prompt: `Spanish tortilla de patatas truffled, sliced open showing creamy interior, summer truffle shavings on top, on a small ceramic plate, served at room temperature. ${SHARED}`,
  },
  {
    file: "products/pata-negra.jpg",
    prompt: `Premium Pata Negra Bellota Iberian ham hand-sliced, fanned out on a long wooden board, fine marbling visible, deep red colour with white fat veins, alongside a knife and a glass of sherry. ${SHARED}`,
  },
  {
    file: "products/planche-iberique.jpg",
    prompt: `Spanish charcuterie board: serrano ham, chorizo bellota, lomo, salchichón, manchego cheese wedges aged 12 months, gordal olives, pan con tomate slices, on a large dark wooden board. ${SHARED}`,
  },
  {
    file: "products/planche-decouverte.jpg",
    prompt: `A smaller tasting board: serrano ham, mild chorizo slices, semi-aged manchego, marcona almonds, sun-dried tomatoes, olives, on a round wooden board with small bowls. ${SHARED}`,
  },
  {
    file: "products/sangria-rouge.jpg",
    prompt: `Tall glass pitcher of red sangria with floating orange and lemon slices, cinnamon stick, star anise, ice cubes, condensation on glass. Late afternoon golden light, blurred summer terrace background. ${SHARED}`,
  },
  {
    file: "products/sangria-blanche.jpg",
    prompt: `White sangria pitcher with white peach slices, fresh verbena leaves, ice cubes. Pale golden colour, glass condensation, soft outdoor light. ${SHARED}`,
  },
  {
    file: "products/rioja.jpg",
    prompt: `A bottle of Spanish Rioja Reserva red wine standing on a wooden barrel, glass of red wine beside it, soft warm light, dark cellar background. Generic unbranded label. ${SHARED}`,
  },
  {
    file: "products/albarino.jpg",
    prompt: `A frosted bottle of Albariño white wine and a tall glass with golden white wine, oysters and lemon on the side, by a window. Generic unbranded label. ${SHARED}`,
  },
  {
    file: "products/couverts.jpg",
    prompt: `Eco-responsible tableware kit: pressed palm leaf plates, bamboo cutlery, linen napkin folded with twine, wildflower sprig, on a wooden table. Minimal, refined. ${SHARED}`,
  },
  {
    file: "about-team.jpg",
    prompt: `Wide shot of a large copper paella pan cooking over a wood fire on a sunny terrace, embers glowing, smoke rising, vineyards in soft blurred background, late afternoon golden light. No people visible, only the cookware and ambiance. ${SHARED}`,
  },
];

async function generate(item) {
  const out = join("public/images", item.file);
  if (existsSync(out)) {
    console.log(`✓ skip ${item.file}`);
    return;
  }

  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: item.prompt }] }],
    }),
  });

  if (!res.ok) {
    console.error(`✗ ${item.file} — ${res.status} ${await res.text()}`);
    return;
  }

  const data = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
  if (!part) {
    console.error(`✗ ${item.file} — no image in response`);
    return;
  }
  await writeFile(out, Buffer.from(part.inlineData.data, "base64"));
  console.log(`✓ ${item.file}`);
}

for (const item of items) {
  await generate(item);
  await new Promise((r) => setTimeout(r, 1500));
}
