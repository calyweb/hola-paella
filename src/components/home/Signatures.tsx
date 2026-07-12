import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getMenuByCategory } from "@/data/menu";

export function Signatures() {
  const items = getMenuByCategory("paellas").filter((item) => item.image);

  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="pill mb-5">Nos paellas</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Nos paellas
              <br />
              <span className="italic font-light">les plus commandées.</span>
            </h2>
          </div>
          <Link href="/carte" className="btn-saffron group">
            Voir toute la carte
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((item, idx) => (
            <article
              key={item.slug}
              className="card-warm overflow-hidden group"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-saffron/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {item.signature && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-saffron text-ink text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1 rounded-full border border-saffron-dark shadow-lg">
                    ✦ Signature
                  </div>
                )}
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-ink leading-tight">{item.name}</h3>
                <p className="mt-1 italic text-terracotta text-sm">{item.tagline}</p>
                <div className="mt-4 pt-4 border-t border-ink/8">
                  <span className="font-display text-xl text-ink">
                    {item.price}€
                    <span className="text-xs font-body text-ink-soft font-normal ml-1">{item.unit}</span>
                  </span>
                </div>
                {item.bodegaVersion && (
                  <div className="mt-3 text-[11px] text-ink-soft bg-saffron/20 border border-saffron/40 font-medium rounded-lg px-2.5 py-1.5 leading-snug">
                    {item.bodegaNote}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
