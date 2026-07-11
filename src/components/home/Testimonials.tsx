import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SITE } from "@/lib/seo";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-cream-warm">
      <div className="max-w-5xl mx-auto text-center">
        <div className="pill mb-5">Vos retours</div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
          On préfère
          <br />
          <span className="italic font-light">vous laisser le dire.</span>
        </h2>
        <p className="mt-6 text-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
          4,8/5 sur Google (40 avis) et 5/5 sur TripAdvisor (73 avis). Voilà ce qu&apos;en disent nos clients.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto mb-12">
          {[
            { name: "Sophie L.", source: "Google", stars: 5, text: "Nicolas est venu cuisiner pour notre mariage au Cap Ferret, 65 invités. Paella Royale incroyable, service impeccable. Nos invités en parlent encore !" },
            { name: "Marc D.", source: "TripAdvisor", stars: 5, text: "Livraison pour un anniversaire à Arcachon, 25 personnes. Paella Del Pueblo généreuse et savoureuse. Les planches de Pata Negra étaient exceptionnelles." },
            { name: "Caroline B.", source: "Google", stars: 5, text: "Troisième fois qu'on fait appel à Hola Paella pour nos soirées d'entreprise à Bordeaux. Toujours au top, produits frais, sangria maison délicieuse." },
          ].map((t) => (
            <div key={t.name} className="card-warm p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-saffron fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
              <div className="text-xs text-ink-soft/70"><span className="font-medium text-ink">{t.name}</span> · {t.source}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://share.google/rLMCg3fYinvKaesXv"
            target="_blank"
            rel="noopener noreferrer"
            className="card-warm px-6 py-5 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/google.svg" alt="Google" width={40} height={40} />
            </div>
            <div className="text-left">
              <div className="font-display text-lg text-ink leading-tight">Google</div>
              <div className="text-xs text-ink-soft mt-0.5 flex items-center gap-1">
                <span className="text-saffron-dark font-semibold">4,8/5</span>
                <span>· 40 avis</span>
                <ExternalLink size={11} />
              </div>
            </div>
          </a>

          <a
            href={SITE.social.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="card-warm px-6 py-5 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/tripadvisor.svg" alt="TripAdvisor" width={40} height={40} />
            </div>
            <div className="text-left">
              <div className="font-display text-lg text-ink leading-tight">TripAdvisor</div>
              <div className="text-xs text-ink-soft mt-0.5 flex items-center gap-1">
                <span className="text-saffron-dark font-semibold">5/5</span>
                <span>· 73 avis</span>
                <ExternalLink size={11} />
              </div>
            </div>
          </a>

          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="card-warm px-6 py-5 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
            </div>
            <div className="text-left">
              <div className="font-display text-lg text-ink leading-tight">Instagram</div>
              <div className="text-xs text-ink-soft mt-0.5 flex items-center gap-1">
                Nous suivre <ExternalLink size={11} />
              </div>
            </div>
          </a>

          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="card-warm px-6 py-5 flex items-center gap-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <Image src="/facebook.svg" alt="Facebook" width={40} height={40} />
            </div>
            <div className="text-left">
              <div className="font-display text-lg text-ink leading-tight">Facebook</div>
              <div className="text-xs text-ink-soft mt-0.5 flex items-center gap-1">
                Nous suivre <ExternalLink size={11} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
