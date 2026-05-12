const steps = [
  {
    n: "01",
    title: "On en parle",
    text: "Date, nombre d'invités, ambiance. Vous décrivez l'événement, on dessine le menu.",
    accent: "bg-saffron text-ink",
  },
  {
    n: "02",
    title: "On compose",
    text: "Devis détaillé sous 24h. Choix des paellas, tapas, planches, sangria. Aucune surprise.",
    accent: "bg-terracotta text-paper",
  },
  {
    n: "03",
    title: "On cuisine",
    text: "Le jour J, livraison chaude prête à servir, ou j'arrive chez vous avec mon matériel pour cuisiner devant vos invités.",
    accent: "bg-olive text-paper",
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 bg-ink text-cream relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-terracotta/15 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-saffron/10 blur-[120px]" />

      <div className="max-w-[1440px] mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block pill bg-saffron/15 border-saffron/30 text-saffron mb-5">
            Comment ça marche
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-paper leading-[1.05]">
            Trois étapes,
            <br />
            <span className="italic font-light text-saffron">zéro friction.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative bg-cream/5 backdrop-blur border border-cream/10 rounded-3xl p-8 lg:p-9"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.accent} flex items-center justify-center font-display text-xl mb-6 shadow-lg`}>
                {s.n}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-paper leading-tight mb-3">
                {s.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 -right-5 text-saffron/50 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
