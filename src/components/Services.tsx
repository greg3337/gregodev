"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Layers, Cpu, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Monitor,
    title: "Sites Vitrines",
    tagline: "Un site qui convertit, pas juste qui informe",
    description:
      "Design sur-mesure, SEO optimisé, performances maximales. Un site qui reflète votre image et transforme les visiteurs en clients.",
  },
  {
    icon: Layers,
    title: "Applications SaaS",
    tagline: "De l'idée au produit en production",
    description:
      "Architecture solide, authentification, base de données, tableau de bord — tout ce qu'il faut pour lancer votre produit.",
  },
  {
    icon: Cpu,
    title: "Outils Internes",
    tagline: "Automatisez ce qui vous fait perdre du temps",
    description:
      "CRM, tableau de bord, outil de gestion spécifique à votre métier. Développé pour s'intégrer à votre flux de travail existant.",
  },
  {
    icon: Sparkles,
    title: "Automations IA",
    tagline: "Faites travailler l'IA pour votre business",
    description:
      "Chatbots, traitement de documents, génération de contenu, analyse de données — l'IA au service de votre productivité.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Ce que je fais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Services
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              Des solutions numériques sur-mesure pour faire grandir votre activité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-accent/10 p-3 shrink-0">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-lg">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm mt-0.5 italic">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mt-4 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
