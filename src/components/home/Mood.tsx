import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const shots = [
  {
    src: "/images/mood-1.png",
    alt: "Repas convivial en terrasse autour d'une paella au coucher du soleil",
    span: "md:row-span-2",
    caption: "L'ambiance",
  },
  {
    src: "/images/mood-2.png",
    alt: "Planche de charcuterie ibérique avec sangria maison",
    span: "",
    caption: "L'apéro",
  },
  {
    src: "/images/mood-3.png",
    alt: "Chef Nicolas qui cuisine la paella devant les invités",
    span: "",
    caption: "La cuisson",
  },
  {
    src: "/images/mood-4.png",
    alt: "Tablée festive autour d'une paella au bord de l'eau",
    span: "md:col-span-2",
    caption: "Le repas",
  },
];

export function Mood() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="pill mb-5">L&apos;ambiance</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Tout le soin
              <br />
              <span className="italic font-light">est dans le détail.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-ink-soft leading-relaxed mb-6">
              Du grain de safran à la table dressée, chaque geste compte. Voilà à quoi
              ressemble un événement Hola Paella.
            </p>
            <Link href="/a-propos" className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-terracotta transition-colors group">
              Découvrir mon histoire
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4 md:h-[600px]">
          {shots.map((s) => (
            <figure
              key={s.src}
              className={`relative aspect-square md:aspect-auto rounded-2xl overflow-hidden group bg-ink/5 ${s.span}`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
