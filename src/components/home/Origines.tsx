import { Flame, Leaf, MapPin, Wine } from "lucide-react";

const piliers = [
  {
    icon: Flame,
    color: "text-terracotta",
    bg: "bg-terracotta/8",
    title: "Cuisinée devant vous",
    desc: "Je me déplace avec mon matériel complet et je cuisine sur place, devant vos invités. La paella se fait en direct chez vous, le jour J.",
  },
  {
    icon: Leaf,
    color: "text-olive",
    bg: "bg-olive/8",
    title: "Producteurs locaux",
    desc: "Chipirons et fruits de mer pêchés sur la Côte Basque, poulet bio, sangrias et plats préparés dans mes locaux.",
  },
  {
    icon: MapPin,
    color: "text-saffron-dark",
    bg: "bg-saffron/15",
    title: "Charcuterie ibérique",
    desc: "Pata Negra Bellota 36 mois, Serrano Duroc 24 mois, Chorizo Bellota. Tous tranchés et dressés sur planche, servis avec piments guindillas.",
  },
  {
    icon: Wine,
    color: "text-clay",
    bg: "bg-clay/10",
    title: "Vins & sangria maison",
    desc: "Rioja Tempranillo, Calatayud grenache, blanc DO Calatayud, rosé Languedoc. Sangria rouge ou blanche en Bag-in-Box, toujours fraîche.",
  },
];

export function Origines() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-paper">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="pill pill-olive mb-5">Votre traiteur espagnol</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Le bon produit,
              <br />
              <span className="brush">avant tout.</span>
            </h2>
            <p className="mt-7 text-ink-soft text-lg leading-relaxed">
              Je suis Nicolas, chef d&apos;<strong className="text-ink font-medium">Hola Paella, traiteur espagnol basé sur le Bassin d&apos;Arcachon</strong>. Après 20 ans en restauration, je livre à domicile et je viens cuisiner sur place, d&apos;Arcachon à Bordeaux.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {piliers.map((p, i) => (
              <div
                key={p.title}
                className="card-warm p-7"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl ${p.bg} flex items-center justify-center mb-5`}>
                  <p.icon className={p.color} size={22} />
                </div>
                <h3 className="font-display text-2xl text-ink leading-tight mb-2">{p.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
