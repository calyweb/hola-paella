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
          Les vrais retours de mes clients sont sur TripAdvisor, Yelp et Facebook. Si vous
          avez goûté mes paellas et mes planches, j&apos;adorerais y lire votre histoire.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
