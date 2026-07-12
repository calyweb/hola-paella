"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { menu, categoryMeta, type Category } from "@/data/menu";

const formuleOptions = [
  { id: "livraison", label: "Livraison à domicile", desc: "Dès 10 personnes · réservation 48h à l'avance" },
  { id: "chef-prive", label: "Chef privé chez vous", desc: "Dès 24 personnes · cuisson au feu de bois sur place" },
  { id: "indecis", label: "Je ne sais pas encore", desc: "Je vous aide à choisir selon votre événement" },
];

const eventOptions = [
  "Mariage",
  "Anniversaire",
  "Entreprise / Cocktail",
  "Soirée privée",
  "EVJF",
  "EVG",
  "Baptême",
  "Communion",
  "Départ retraite",
  "Cousinade",
  "Repas de chantier",
  "Club sportif",
  "Association",
  "Repas de famille",
  "Inauguration",
  "Autre",
];

export function DevisForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const [sendError, setSendError] = useState(false);
  const [data, setData] = useState({
    formule: "",
    event: "",
    guests: 25,
    date: "",
    location: "",
    items: [] as string[],
    bodegaChoices: {} as Record<string, boolean>,
    prenom: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Pre-fill formule from URL param e.g. /devis?formule=livraison
  useEffect(() => {
    const f = searchParams.get("formule");
    if (f && formuleOptions.some((o) => o.id === f)) {
      setData((d) => ({ ...d, formule: f }));
    }
  }, [searchParams]);

  const update = (k: keyof typeof data, v: unknown) =>
    setData((d) => ({ ...d, [k]: v }));

  const goToStep = (n: number) => {
    setStep(n);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const toggleItem = (slug: string) => {
    setData((d) => {
      const isChecked = d.items.includes(slug);
      const items = isChecked ? d.items.filter((s) => s !== slug) : [...d.items, slug];
      const bodegaChoices = { ...d.bodegaChoices };
      if (isChecked) delete bodegaChoices[slug];
      return { ...d, items, bodegaChoices };
    });
  };

  const setBodegaChoice = (slug: string, isBodega: boolean) =>
    setData((d) => ({ ...d, bodegaChoices: { ...d.bodegaChoices, [slug]: isBodega } }));

  const canNext1 = data.formule && data.event;
  const canNext2 = data.guests >= 10 && data.date && data.location;
  const fullName = `${data.prenom} ${data.name}`.trim();

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto card-warm p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-saffron/20 flex items-center justify-center mx-auto mb-6">
          <Sparkles size={32} className="text-saffron-dark" />
        </div>
        <h2 className="font-display text-4xl text-ink leading-tight">
          Merci, c&apos;est entre mes mains.
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Je reviens vers vous rapidement avec une proposition détaillée.
          En attendant, vous pouvez aussi m&apos;appeler directement au{" "}
          <a href="tel:+33646198234" className="text-terracotta font-medium">
            06 46 19 82 34
          </a>
          .
        </p>
      </div>
    );
  }

  const orderedCats: Category[] = ["paellas", "tapas", "planches", "sangrias", "vins"];

  return (
    <div className="max-w-3xl mx-auto" ref={topRef}>
      {/* Stepper */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  n === step
                    ? "bg-terracotta text-paper shadow-lg"
                    : n < step
                    ? "bg-olive text-paper"
                    : "bg-paper border border-ink/15 text-ink-soft"
                }`}
              >
                {n < step ? <Check size={15} /> : n}
              </div>
              {n === 3 && (
                <span className="text-[10px] text-ink-soft/60 leading-none">optionnelle</span>
              )}
            </div>
            {n < 4 && <div className={`w-10 h-0.5 ${n < step ? "bg-olive" : "bg-ink/10"}`} />}
          </div>
        ))}
      </div>

      <div className="card-warm p-7 sm:p-10">
        {step === 1 && (
          <div className="space-y-7 animate-fade-up">
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight">
                Quel type d&apos;événement&nbsp;?
              </h2>
              <p className="text-ink-soft mt-1">Pour que je calibre la proposition.</p>
            </div>

            <div>
              <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-3 block">
                L&apos;occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {eventOptions.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => update("event", e)}
                    className={`cursor-pointer px-4 py-2.5 rounded-full border-[1.5px] text-sm transition-all ${
                      data.event === e
                        ? "bg-terracotta text-paper border-terracotta"
                        : "bg-paper text-ink border-ink/12 hover:border-terracotta"
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-3 block">
                Le format
              </label>
              <div className="space-y-2.5">
                {formuleOptions.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => update("formule", f.id)}
                    className={`cursor-pointer w-full text-left p-4 rounded-2xl border-[1.5px] transition-all ${
                      data.formule === f.id
                        ? "border-terracotta bg-terracotta/5"
                        : "border-ink/10 bg-paper hover:border-terracotta/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                          data.formule === f.id ? "border-terracotta bg-terracotta" : "border-ink/30"
                        }`}
                      >
                        {data.formule === f.id && <div className="w-2 h-2 rounded-full bg-paper" />}
                      </div>
                      <div>
                        <div className="font-medium text-ink">{f.label}</div>
                        <div className="text-sm text-ink-soft">{f.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-7 animate-fade-up">
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight">
                Quand, où, combien&nbsp;?
              </h2>
              <p className="text-ink-soft mt-1">L&apos;essentiel pour bloquer la date.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Date prévue
                </label>
                <input
                  type="date"
                  value={data.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Nombre d&apos;invités
                </label>
                <input
                  type="number"
                  min={10}
                  value={data.guests}
                  onChange={(e) => update("guests", Number(e.target.value))}
                />
              </div>
            </div>

            <div>
              <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                Lieu de l&apos;événement
              </label>
              <input
                type="text"
                placeholder="Ville, code postal — Cap Ferret, Pyla, Bordeaux centre…"
                value={data.location}
                onChange={(e) => update("location", e.target.value)}
              />
            </div>

            <div className="bg-saffron/15 border border-saffron/30 rounded-2xl p-4 flex gap-3 text-sm">
              <Sparkles size={18} className="text-saffron-dark shrink-0 mt-0.5" />
              <p className="text-ink-soft">
                <span className="text-ink font-medium">Estimation rapide&nbsp;:</span> environ{" "}
                <span className="text-terracotta font-display text-lg">
                  {(data.guests * (data.formule === "chef-prive" ? 38 : 22)).toLocaleString("fr-FR")}€
                </span>{" "}
                pour {data.guests} pers. (hors options et boissons).
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-7 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-display text-3xl text-ink leading-tight">
                  Vos envies à la carte.
                </h2>
                <span className="pill text-xs">optionnelle</span>
              </div>
              <p className="text-ink-soft mt-1">
                Cochez ce qui vous fait plaisir, on affine ensemble — tout est modulable.
              </p>
            </div>

            <div className="space-y-7">
              {orderedCats.map((cat) => {
                const items = menu.filter((m) => m.category === cat);
                if (items.length === 0) return null;
                return (
                  <div key={cat}>
                    <div className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-3 flex items-center gap-2">
                      <span>{categoryMeta[cat].emoji}</span>
                      {categoryMeta[cat].label}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {items.map((it) => {
                        const checked = data.items.includes(it.slug);
                        const isBodega = data.bodegaChoices[it.slug] ?? false;
                        return (
                          <div
                            key={it.slug}
                            className={`rounded-xl border-[1.5px] transition-all ${
                              checked
                                ? "border-saffron bg-saffron/10"
                                : "border-ink/10 bg-paper hover:border-saffron/40"
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleItem(it.slug)}
                              className="cursor-pointer text-left px-4 py-3 flex items-start gap-3 w-full"
                            >
                              <div
                                className={`w-5 h-5 rounded-md border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                                  checked ? "border-saffron-dark bg-saffron" : "border-ink/25"
                                }`}
                              >
                                {checked && <Check size={12} className="text-ink" />}
                              </div>
                              <div>
                                <div className="font-medium text-ink text-sm">{it.name}</div>
                                <div className="text-xs text-ink-soft">
                                  {it.surDevis ? "Sur devis" : `${it.price}€ ${it.unit}`}
                                </div>
                              </div>
                            </button>
                            {checked && it.bodegaVersion && (
                              <div className="px-4 pb-3 flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => setBodegaChoice(it.slug, false)}
                                  className={`cursor-pointer text-xs px-3 py-1.5 rounded-full border transition-all ${
                                    !isBodega
                                      ? "border-terracotta bg-terracotta text-paper"
                                      : "border-ink/15 text-ink-soft bg-paper"
                                  }`}
                                >
                                  Classique
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setBodegaChoice(it.slug, true)}
                                  className={`cursor-pointer text-xs px-3 py-1.5 rounded-full border transition-all ${
                                    isBodega
                                      ? "border-terracotta bg-terracotta text-paper"
                                      : "border-ink/15 text-ink-soft bg-paper"
                                  }`}
                                >
                                  Bodéga (décortiquée)
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-fade-up">
            <div>
              <h2 className="font-display text-3xl text-ink leading-tight">
                Comment vous joindre&nbsp;?
              </h2>
              <p className="text-ink-soft mt-1">Je reviens vers vous sous 24h, parole de chef.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Prénom
                </label>
                <input type="text" required value={data.prenom} onChange={(e) => update("prenom", e.target.value)} />
              </div>
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Nom
                </label>
                <input type="text" required value={data.name} onChange={(e) => update("name", e.target.value)} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Téléphone
                </label>
                <input type="tel" required value={data.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div>
                <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                  Email
                </label>
                <input type="email" required value={data.email} onChange={(e) => update("email", e.target.value)} />
              </div>
            </div>

            <div>
              <label className="text-sm uppercase tracking-[0.16em] text-ink-soft mb-2 block">
                Précisions (allergies, ambiance, demandes spéciales…)
              </label>
              <textarea
                rows={4}
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>

            <div className="bg-cream rounded-2xl p-5 text-sm">
              <div className="text-ink font-medium mb-2">Récapitulatif</div>
              <ul className="text-ink-soft space-y-1">
                <li><span className="text-ink-soft/70">Nom·</span> {fullName || "—"}</li>
                <li><span className="text-ink-soft/70">Événement·</span> {data.event || "—"}</li>
                <li><span className="text-ink-soft/70">Format·</span> {data.formule === "chef-prive" ? "Chef privé à domicile" : data.formule === "livraison" ? "Livraison à domicile" : data.formule === "indecis" ? "À définir" : "—"}</li>
                <li><span className="text-ink-soft/70">Date·</span> {data.date ? new Date(data.date + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "—"} pour {data.guests} pers.</li>
                <li><span className="text-ink-soft/70">Lieu·</span> {data.location || "—"}</li>
                {data.items.length > 0 && (
                  <li>
                    <span className="text-ink-soft/70">Carte·</span>{" "}
                    {data.items
                      .map((slug) => {
                        const it = menu.find((m) => m.slug === slug);
                        if (!it) return slug;
                        return it.bodegaVersion
                          ? `${it.name} (${data.bodegaChoices[slug] ? "Bodéga" : "Classique"})`
                          : it.name;
                      })
                      .join(", ")}
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {sendError && (
          <p className="mt-4 text-sm text-red-600 text-center">
            Une erreur est survenue. Réessayez ou appelez le{" "}
            <a href="tel:+33646198234" className="font-medium underline">06 46 19 82 34</a>.
          </p>
        )}
        <div className="flex items-center justify-between gap-3 mt-9 pt-7 border-t border-ink/8">
          <button
            type="button"
            onClick={() => goToStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="cursor-pointer text-ink-soft hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed text-sm"
          >
            ← Retour
          </button>
          {step < 4 ? (
            <div className="flex items-center gap-3">
              {step === 3 && (
                <button
                  type="button"
                  onClick={() => goToStep(4)}
                  className="text-sm text-ink-soft hover:text-ink underline underline-offset-2"
                >
                  Passer cette étape
                </button>
              )}
              <button
                type="button"
                onClick={() => goToStep(step + 1)}
                disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2)}
                className="cursor-pointer btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Étape suivante <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={async () => {
                setSending(true);
                setSendError(false);
                try {
                  const res = await fetch("/api/devis", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });
                  if (res.ok) {
                    setSubmitted(true);
                    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                  } else {
                    setSendError(true);
                  }
                } catch {
                  setSendError(true);
                } finally {
                  setSending(false);
                }
              }}
              disabled={!data.prenom || !data.name || !data.email || !data.phone || sending}
              className="cursor-pointer btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Envoi en cours…" : "Envoyer ma demande"} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
