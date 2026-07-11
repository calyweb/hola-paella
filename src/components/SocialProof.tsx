import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SITE } from "@/lib/seo";

export function SocialProof({ testimonial }: { testimonial?: { name: string; source: "Google" | "TripAdvisor"; stars: number; text: string } }) {
  if (testimonial) {
    return (
      <div className="card-warm p-6 max-w-xl">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonial.stars)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-saffron fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
          ))}
        </div>
        <p className="text-ink-soft text-sm leading-relaxed mb-3">&ldquo;{testimonial.text}&rdquo;</p>
        <div className="text-xs text-ink-soft/70"><span className="font-medium text-ink">{testimonial.name}</span> · {testimonial.source}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="https://share.google/rLMCg3fYinvKaesXv"
        target="_blank"
        rel="noopener noreferrer"
        className="card-warm px-5 py-4 flex items-center gap-3 group"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Image src="/google.svg" alt="Google" width={32} height={32} />
        </div>
        <div className="text-left">
          <div className="text-xs text-ink-soft flex items-center gap-1">
            <span className="text-saffron-dark font-semibold">4,8/5</span>
            <span>· 40 avis Google</span>
            <ExternalLink size={10} />
          </div>
        </div>
      </a>
      <a
        href={SITE.social.tripadvisor}
        target="_blank"
        rel="noopener noreferrer"
        className="card-warm px-5 py-4 flex items-center gap-3 group"
      >
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Image src="/tripadvisor.svg" alt="TripAdvisor" width={32} height={32} />
        </div>
        <div className="text-left">
          <div className="text-xs text-ink-soft flex items-center gap-1">
            <span className="text-saffron-dark font-semibold">5/5</span>
            <span>· 73 avis TripAdvisor</span>
            <ExternalLink size={10} />
          </div>
        </div>
      </a>
    </div>
  );
}
