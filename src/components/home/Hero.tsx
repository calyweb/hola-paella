import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative warm-bg overflow-hidden">
      <div className="absolute top-20 -right-32 w-[420px] h-[420px] rounded-full bg-saffron/25 blur-[100px] animate-drift" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-terracotta/15 blur-[100px]" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 pt-12 lg:pt-20 pb-24 lg:pb-32 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 pill mb-7">
              <span className="text-saffron-dark">✦</span>
              Traiteur paella · Depuis 2018
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.4rem] leading-[1.03] text-ink tracking-[-0.02em]">
              Une paella <span className="italic font-light text-terracotta">d&apos;exception,</span>
              <br />
              <span className="brush">chez vous.</span>
            </h1>

            <p className="mt-7 text-lg text-ink-soft leading-relaxed">
              Je crée vos menus à domicile, avec des produits frais de qualité et des
              techniques de travail professionnelles. Mes produits sont sélectionnés avec
              soin chez des producteurs locaux et espagnols, et mes vins sauront accompagner
              avec goût vos plats et vos soirées tapas.{" "}
              <strong className="text-ink font-medium">
                Sur Bordeaux et le Bassin d&apos;Arcachon
              </strong>
              , dès 10 personnes en livraison, dès 23 pour la cuisson sur place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <Link href="/devis" className="btn-primary group">
                Demander un devis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/carte" className="btn-ghost">
                Découvrir la carte
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 whitespace-nowrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-saffron text-saffron" />
                ))}
                <span className="ml-2 text-sm text-ink-soft">
                  Travelers&apos; Choice <span className="text-ink-soft/50">·</span> TripAdvisor
                </span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-ink/15" />
              <div className="text-sm text-ink-soft">
                <span className="font-medium text-ink">Dès 10 personnes</span> · Livraison ou chef à domicile
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[4/5] lg:aspect-[5/6]">
              <svg
                viewBox="0 0 500 600"
                className="absolute inset-0 w-full h-full text-terracotta/15"
                fill="currentColor"
              >
                <path d="M 250 30 C 380 40 470 140 480 270 C 490 410 410 530 270 560 C 130 580 40 470 30 320 C 20 170 120 20 250 30 Z" />
              </svg>

              <div className="absolute inset-4 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-paella.jpg"
                  alt="Paella royale dans une paella en cuivre"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              <div className="absolute -left-3 top-12 bg-paper rounded-2xl shadow-xl px-5 py-4 animate-float border border-ink/5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft/70 mb-1">Produits</div>
                <div className="font-display text-lg text-ink leading-none">Sélectionnés</div>
              </div>

              <div className="absolute -bottom-4 right-6 w-24 h-24 rounded-full bg-saffron flex items-center justify-center shadow-lg animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
                  <defs>
                    <path id="circle" d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" />
                  </defs>
                  <text className="font-display text-[10px] tracking-[0.2em]" fill="currentColor">
                    <textPath href="#circle">
                      BORDEAUX · ARCACHON · DEPUIS 2018 ·
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
