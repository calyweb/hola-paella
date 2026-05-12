import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Le traiteur paella du Bassin d'Arcachon",
  description:
    "Hola Paella : traiteur paella indépendant fondé en 2017, basé à Arcachon. Sourcing en Espagne (riz bomba, safran de la Mancha, Pata Negra), cuisson au feu de bois.",
};

const values = [
  {
    n: "01",
    title: "Le produit avant tout",
    text: "Charcuterie ibérique, chipirons et fruits de mer pêchés sur la Côte Basque, fromages traditionnels espagnols, vins bio d'Espagne. Je choisis, je goûte, je tranche.",
  },
  {
    n: "02",
    title: "Cuisiné, pas réchauffé",
    text: "Je cuisine mes paellas le jour même. Pour la formule chef à domicile, j'arrive avec mon matériel et je cuis devant vos invités. C'est ça qui change tout.",
  },
  {
    n: "03",
    title: "Cool et sans chichi",
    text: "Je reste accessible, joignable, franc sur les délais et les prix. J'adapte le menu selon vos envies et votre budget — j'aime quand c'est simple.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="warm-bg pt-16 pb-14 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="pill mb-5">Nicolas Cubie · Chef depuis 2018</div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02]">
              Moi c&apos;est Nicolas,
              <br />
              <span className="italic font-light">votre traiteur espagnol</span>
              <br />
              <span className="brush">sur le Bassin.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 pt-24 pb-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-ink/5">
            <Image
              src="/images/about-team.jpg"
              alt="Nicolas Cubie, chef Hola Paella"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-ink-soft text-lg leading-[1.75]">
            <p>
              Après <strong className="text-ink font-medium">20 ans dans le monde de la restauration</strong>,
              j&apos;ai lancé Hola Paella en 2018&nbsp;: un concept pratique et convivial,
              pour des paellas, tapas et planches servis chez vous, sur le Bassin d&apos;Arcachon et jusqu&apos;à Bordeaux.
            </p>
            <p>
              L&apos;idée&nbsp;? Vous laisser profiter d&apos;une soirée ou d&apos;une journée sans le stress
              de l&apos;organisation. Je m&apos;occupe de tout&nbsp;: la préparation, le transport, et pour
              la formule chef à domicile, je cuisine directement chez vous devant vos invités.
            </p>
            <p>
              Je suis attaché à la qualité des produits avant tout. Charcuterie ibérique Pata Negra et Bellota,
              chipirons et fruits de mer pêchés sur la Côte Basque, poulet bio, vins espagnols sélectionnés.
              Mes sangrias sont préparées dans mes locaux et livrées en Bag-in-Box pour rester fraîches
              tout au long du repas.
            </p>
            <p>
              Ce qui me plaît dans ce métier, c&apos;est le moment où les invités s&apos;installent autour
              de la paella. Cette convivialité, ce partage autour d&apos;un plat généreux —
              c&apos;est exactement pour ça que j&apos;ai créé Hola Paella.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pt-14 pb-16 px-5 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-xl mb-12">
            <div className="pill pill-olive mb-5">Ma manière de faire</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
              Trois principes, <span className="italic font-light">tenus depuis le premier jour.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.n} className="card-warm p-8">
                <div className="font-display text-5xl text-saffron mb-4">{v.n}</div>
                <h3 className="font-display text-2xl text-ink mb-3 leading-tight">{v.title}</h3>
                <p className="text-ink-soft leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-24 px-5 sm:px-8 bg-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight">
            Une question, une date à bloquer&nbsp;?
          </h2>
          <Link href="/contact" className="btn-primary mt-7 group">
            Contactez-moi
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
