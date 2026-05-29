"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Mon Frigo Malin",
    href: "https://monfrigomalin.fr",
    tag: "PWA · IA · Anti-gaspi",
    description:
      "Application progressive qui utilise l'IA pour suggérer des recettes à partir de vos ingrédients disponibles. Réduit le gaspillage alimentaire et simplifie les courses.",
    tech: ["Next.js", "Gemini AI", "PWA", "Tailwind CSS"],
    flagship: true,
  },
  {
    title: "Boulangerie du Quartier",
    href: "https://boulangerie.gregodev.com",
    tag: "Site Vitrine · HTML/CSS",
    description:
      "Site vitrine pour une boulangerie locale. Catalogue produits, formulaire de contact, design chaleureux.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    flagship: false,
  },
  {
    title: "Nocturne Restaurant",
    href: "href: "https://nocturne-adu6.vercel.app",",
    tag: "Landing Page · Next.js",
    description:
      "Landing page premium pour un restaurant gastronomique. Design élégant, système de réservation intégré.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    flagship: false,
  },
  {
    title: "Lumea Beauty",
    href: "https://lumea-beauty-e-commerce.vercel.app",
    tag: "E-commerce · Next.js",
    description:
      "Boutique en ligne pour une marque de cosmétiques naturels. Catalogue produits, panier, comptes clients.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    flagship: false,
  },
  {
    title: "Électricité Moreau",
    href: "https://electricien-chi.vercel.app",
    tag: "Site Vitrine · Next.js",
    description: "Site vitrine pour un électricien indépendant certifié RGE à Bordeaux. Services, tarifs, avis clients et formulaire de contact.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    flagship: false,
  },
];

export default function Projets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Réalisations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Projets
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              Des projets concrets, livrés et en production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-8 flex flex-col ${
                  project.flagship ? "md:col-span-2" : ""
                } ${
                  project.flagship
                    ? "border border-accent/40 bg-accent/[0.04]"
                    : "card-border bg-black/[0.03] dark:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-foreground font-bold text-xl">
                      {project.title}
                    </h3>
                    <span className="text-accent text-sm font-medium">
                      {project.tag}
                    </span>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-light transition-colors shrink-0 mt-1"
                    aria-label={`Voir ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-muted text-xs px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
