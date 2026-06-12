"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    q: "Combien de temps pour livrer un site ?",
    a: "Starter : 7 jours. Vitrine Pro : 2 à 3 semaines. Sur-mesure : 4 à 8 semaines selon le périmètre défini ensemble.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30% d'acompte à la signature du devis, 70% solde à la livraison. Paiement en 2 ou 3 fois sans frais disponible sur demande.",
  },
  {
    q: "Vous travaillez hors Bordeaux ?",
    a: "Oui, 100% remote. Peu importe où vous êtes en France, on collabore facilement par visio et messagerie.",
  },
  {
    q: "Est-ce que je garde la propriété de mon site ?",
    a: "Absolument. Le code, le domaine et l'hébergement vous appartiennent entièrement. Vous n'êtes jamais dépendant de moi pour accéder à votre site.",
  },
  {
    q: "Quelle différence avec une agence web ?",
    a: "Interlocuteur unique du brief à la livraison, réactivité maximale, pas de frais de structure. Vous parlez directement au développeur qui code votre site, pas à un commercial.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">Questions fréquentes</h2>
            <p className="text-muted mt-4 text-lg">Tout ce que vous voulez savoir avant de se lancer.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div
                  className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                    openIndex === i
                      ? "border-accent/40 bg-accent/[0.04]"
                      : "card-border bg-black/[0.03] dark:bg-white/[0.02] hover:border-accent/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className={`font-semibold text-base leading-snug transition-colors ${openIndex === i ? "text-accent" : "text-foreground"}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className={openIndex === i ? "text-accent" : "text-muted"} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
