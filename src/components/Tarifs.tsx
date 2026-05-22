"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const MotionLink = motion(Link);

const plans = [
  {
    name: "Starter",
    price: "490€",
    description: "Idéal pour lancer votre présence en ligne",
    badge: null,
    features: [
      "Landing page ou site 3 pages",
      "Design responsive mobile-first",
      "SEO de base",
      "Formulaire de contact",
      "Déploiement inclus",
    ],
    cta: "Choisir Starter",
    href: "/devis?pack=starter",
    highlighted: false,
  },
  {
    name: "Vitrine Pro",
    price: "1 500€",
    description: "Le site qui convertit vos visiteurs en clients",
    badge: "Le plus populaire",
    features: [
      "Site 5 à 8 pages",
      "Animations modernes Framer Motion",
      "SEO optimisé",
      "Formulaire de contact avancé",
      "Google Analytics inclus",
      "Déploiement inclus",
    ],
    cta: "Choisir Vitrine Pro",
    href: "/devis?pack=vitrine-pro",
    highlighted: true,
  },
  {
    name: "Sur-mesure",
    price: "À partir de 2 000€",
    description: "Applications web, SaaS et outils internes",
    badge: null,
    features: [
      "Application web complète",
      "Authentification utilisateurs",
      "Base de données",
      "Intégrations IA",
      "Support 3 mois",
    ],
    cta: "Demander un devis",
    href: "/devis?pack=sur-mesure",
    highlighted: false,
  },
];

export default function Tarifs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="tarifs" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Tarifs transparents
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Investissement
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              Des prix clairs, sans mauvaises surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "border border-accent/50 shadow-glow bg-accent/5 scale-[1.02]"
                    : "card-border bg-black/[0.03] dark:bg-white/[0.02]"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-foreground font-bold text-xl">{plan.name}</h3>
                  <div className="text-3xl font-bold text-foreground mt-2">
                    {plan.price}
                  </div>
                  <p className="text-xs text-muted/60 mt-1">Paiement en 2 ou 3 fois sans frais disponible</p>
                  <p className="text-muted text-sm mt-2 leading-snug">{plan.description}</p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted">
                      <Check size={16} className="text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MotionLink
                  href={plan.href}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-6 rounded-xl text-sm font-semibold text-center transition-all duration-200 block ${
                    plan.highlighted
                      ? "bg-accent text-white shadow-glow hover:bg-accent/90"
                      : "border border-accent/30 text-accent hover:bg-accent/10"
                  }`}
                >
                  {plan.cta}
                </MotionLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
