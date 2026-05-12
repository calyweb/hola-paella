import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { formules } from "@/data/formules";

export function Formules() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 linen-bg">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="pill pill-terracotta mb-5">Deux façons de recevoir</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Une cuisine <span className="italic font-light">généreuse,</span>
            <br />
            servie <span className="brush brush-terracotta">à votre manière.</span>
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Que vous receviez 10 amis ou 80 invités, j&apos;adapte le geste sans rien céder
            sur la qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {formules.map((f) => (
            <Link
              key={f.slug}
              href="/formules"
              className={`group relative card-warm overflow-hidden block ${
                f.highlight ? "ring-2 ring-saffron" : ""
              }`}
            >
              {f.highlight && (
                <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-1 bg-saffron text-ink text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1.5 rounded-full border border-saffron-dark shadow-lg">
                  <span>✦</span> Notre signature
                </div>
              )}

              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent" />
                <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-paper/95 flex items-center justify-center group-hover:bg-terracotta group-hover:text-paper transition-all shadow-lg">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block bg-saffron text-ink text-[11px] uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full mb-3">
                    {f.badge}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight text-paper drop-shadow-lg">
                    {f.name}
                  </h3>
                </div>
              </div>

              <div className="p-7 lg:p-8">
                <p className="text-terracotta italic mb-3">{f.tagline}</p>

                <p className="text-ink-soft leading-relaxed mb-6">{f.description}</p>

                <ul className="space-y-2.5 mb-7">
                  {f.includes.slice(0, 4).map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check size={16} className="mt-0.5 text-olive shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-6 border-t border-ink/8">
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-ink-soft/70">À partir de</div>
                    <div className="font-display text-3xl text-ink mt-1">
                      {f.startingPrice}€<span className="text-sm text-ink-soft font-body font-normal"> / pers.</span>
                    </div>
                  </div>
                  <div className="text-sm text-ink-soft text-right">
                    Réservation <span className="text-ink font-medium">{f.notice}</span>
                    <br />
                    <span className="text-xs">{f.zone}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
