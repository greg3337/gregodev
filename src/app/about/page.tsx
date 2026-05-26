import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Grégoire, développeur freelance Bordeaux",
  description:
    "Je m'appelle Grégoire, j'ai 32 ans et je suis développeur freelance à Bordeaux. Parcours atypique, autodidacte, spécialisé Next.js, TypeScript et Tailwind CSS.",
  keywords: [
    "développeur freelance Bordeaux",
    "Grégoire Pelizzardi",
    "GregoDev",
    "parcours développeur autodidacte",
    "Next.js TypeScript Bordeaux",
  ],
  alternates: { canonical: "https://www.gregodev.com/about" },
  openGraph: {
    title: "À propos — Grégoire, développeur freelance Bordeaux",
    description:
      "Parcours atypique : préparateur auto, commercial, puis développeur freelance. Je construis des outils digitaux pour les freelances et TPE.",
    url: "https://www.gregodev.com/about",
    type: "profile",
    siteName: "GregoDev",
    images: [{ url: "https://www.gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
};

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Firebase",
  "Vercel",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              À propos
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-2 leading-tight">
              Qui suis-je ?
            </h1>
            <div className="flex items-center gap-2 mt-4 text-muted text-sm">
              <MapPin size={14} className="text-accent shrink-0" />
              Bordeaux, France · Freelance
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6 text-foreground/80 leading-[1.85] text-base">
            <p>
              Je m&apos;appelle Grégoire, j&apos;ai 32 ans et je suis développeur freelance basé à
              Bordeaux. Mon parcours n&apos;est pas celui d&apos;un ingénieur sorti d&apos;école —
              j&apos;ai été préparateur automobile, puis commercial, avant de tout plaquer pour
              apprendre à coder.
            </p>
            <p>
              C&apos;est en autodidacte que j&apos;ai découvert le développement web, complété par
              des formations pour structurer mes compétences. Ce que j&apos;aimais dans mes anciens
              métiers — le soin du détail en préparation auto, le contact client en commerce — je le
              retrouve aujourd&apos;hui dans mon travail de dev freelance.
            </p>
            <p>
              J&apos;ai créé GREGODEV pour accompagner les freelances et petites entreprises qui
              n&apos;ont pas les moyens d&apos;une agence mais méritent un outil digital qui
              travaille vraiment pour eux.
            </p>
          </div>

          {/* Stack */}
          <div className="mt-12">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/10 text-accent text-sm font-semibold px-3.5 py-1.5 rounded-full border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Projet perso */}
          <div className="mt-12">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              Projet perso
            </p>
            <a
              href="https://monfrigomalin.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02] flex items-start justify-between gap-4 block"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-foreground font-bold text-lg">Mon Frigo Malin</span>
                  <ExternalLink
                    size={15}
                    className="text-muted group-hover:text-accent transition-colors"
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  PWA anti-gaspi alimentaire propulsée par l&apos;IA. Scannez votre frigo,
                  obtenez des recettes personnalisées, réduisez le gaspillage.
                </p>
                <span className="inline-block mt-3 text-xs text-accent font-medium">
                  monfrigomalin.fr →
                </span>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">
              Un projet en tête ?
            </h2>
            <p className="text-muted mb-6 max-w-md mx-auto">
              Estimez votre projet en 2 minutes — je vous réponds sous 48h.
            </p>
            <a
              href="/devis"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
            >
              Demander un devis gratuit
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
