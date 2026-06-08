import type { Metadata } from "next";
import { Fraunces, Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, localBusinessJsonLd, SITE } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-nav",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Hola Paella — Traiteur paella Arcachon & Bordeaux",
    template: "%s · Hola Paella",
  },
  description:
    "Traiteur paella sur Bordeaux et le Bassin d'Arcachon. J'installe ma plancha géante chez vous et je cuisine votre paella en direct devant vos invités. Mariages, anniversaires, événements d'entreprise. Livraison dès 10 pers, chef à domicile dès 23 invités.",
  applicationName: "Hola Paella",
  keywords: [
    "livraison paella",
    "livraison paella à domicile",
    "traiteur paella",
    "traiteur paella Arcachon",
    "traiteur paella Bordeaux",
    "paella Cap Ferret",
    "paella Pyla",
    "paella mariage",
    "paella entreprise",
    "paella anniversaire",
    "chef privé paella",
    "paella feu de bois",
    "paella royale",
    "Pata Negra",
    "tapas",
    "Bassin d'Arcachon",
    "Bordeaux",
  ],
  authors: [{ name: "Nicolas Cubie", url: "https://hola-paella.fr/a-propos" }],
  creator: "Hola Paella",
  publisher: "Hola Paella",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Hola Paella",
    url: SITE.url,
    title:
      "Hola Paella — Paella cuisinée devant vos invités · Bordeaux & Bassin d'Arcachon",
    description:
      "Traiteur paella sur Bordeaux et le Bassin d'Arcachon. Plancha géante installée chez vous, paella en direct devant vos invités. Mariages, anniversaires, entreprises.",
    images: [
      {
        url: "/images/hero-paella.jpg",
        width: 1200,
        height: 630,
        alt: "Paella royale cuisinée au feu de bois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hola Paella — Livraison de paella sur le Bassin d'Arcachon & Bordeaux",
    description:
      "Traiteur paella · Livraison à domicile dès 10 pers · Chef privé jusqu'à 200 invités. Devis 24h.",
    images: ["/images/hero-paella.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Food & Drink",
  formatDetection: { telephone: true, address: true, email: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="geo.region" content="FR-NAQ" />
        <meta name="geo.placename" content="Arcachon, Bordeaux" />
        <meta name="geo.position" content="44.6588;-1.1681" />
        <meta name="ICBM" content="44.6588, -1.1681" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <JsonLd data={[localBusinessJsonLd(), {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE.url}#website`,
          name: SITE.name,
          url: SITE.url,
          publisher: { "@id": `${SITE.url}#business` },
          inLanguage: "fr-FR",
        }]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
