"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronRight, ChevronLeft, Check, Zap, Clock, Calendar,
  Globe, Server, Wrench, Mail, BookOpen, Lock, CreditCard,
  Brain, LayoutDashboard, Sparkles, RefreshCw, ArrowRight,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const projectTypes = [
  { id: "vitrine", icon: Globe, label: "Site vitrine", desc: "Présence professionnelle en ligne" },
  { id: "saas", icon: Server, label: "Application SaaS", desc: "Produit web multi-utilisateurs" },
  { id: "outil", icon: Wrench, label: "Outil interne", desc: "Automatisation & productivité" },
];

const pageRanges = {
  vitrine: [
    { id: "1-3", label: "1 – 3 pages", desc: "Landing, À propos, Contact" },
    { id: "4-8", label: "4 – 8 pages", desc: "Site complet avec plusieurs sections" },
    { id: "9-15", label: "9 – 15 pages", desc: "Site riche, blog, galerie" },
    { id: "15+", label: "15+ pages", desc: "Catalogue ou plateforme étendue" },
  ],
  default: [
    { id: "1-3", label: "MVP simple", desc: "Fonctionnalités essentielles" },
    { id: "4-8", label: "Application standard", desc: "Couverture complète du besoin" },
    { id: "9-15", label: "Application complexe", desc: "Plusieurs modules interconnectés" },
    { id: "15+", label: "Plateforme complète", desc: "Écosystème multi-fonctions" },
  ],
};

const featuresList = [
  { id: "contact", icon: Mail, label: "Formulaire de contact", price: 0 },
  { id: "blog", icon: BookOpen, label: "Blog / Articles", price: 300 },
  { id: "auth", icon: Lock, label: "Authentification", price: 600 },
  { id: "paiement", icon: CreditCard, label: "Paiement en ligne", price: 900 },
  { id: "ia", icon: Brain, label: "Intégration IA", price: 1200 },
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard admin", price: 800 },
];

const timelines = [
  { id: "urgent", icon: Zap, label: "Urgent", desc: "Livraison en moins de 2 semaines", badge: "+20%", badgeColor: "bg-orange-500/10 text-orange-400" },
  { id: "standard", icon: Clock, label: "Standard", desc: "2 à 4 semaines", badge: null, badgeColor: "" },
  { id: "flexible", icon: Calendar, label: "Flexible", desc: "Plus d'un mois", badge: "-5%", badgeColor: "bg-green-500/10 text-green-400" },
];

const STEPS = ["Projet", "Volume", "Options", "Délai"];

// ─── Price logic ─────────────────────────────────────────────────────────────

const featureCosts: Record<string, number> = {
  contact: 0, blog: 300, auth: 600, paiement: 900, ia: 1200, dashboard: 800,
};

function calcEstimate(type: string, pages: string, features: string[], timeline: string) {
  let base = 0;
  if (type === "vitrine") {
    base = pages === "1-3" ? 490 : pages === "4-8" ? 1200 : pages === "9-15" ? 1800 : 2500;
  } else if (type === "saas") {
    base = pages === "1-3" ? 1500 : pages === "4-8" ? 2500 : pages === "9-15" ? 3500 : 5000;
  } else {
    base = pages === "1-3" ? 1200 : pages === "4-8" ? 1800 : pages === "9-15" ? 2500 : 3500;
  }
  const extras = features.reduce((s, f) => s + (featureCosts[f] ?? 0), 0);
  const mult = timeline === "urgent" ? 1.2 : timeline === "flexible" ? 0.95 : 1;
  const total = Math.round(((base + extras) * mult) / 100) * 100;
  const plan = total <= 600 ? "Starter" : total <= 1400 ? "Vitrine Pro" : "Sur-mesure";
  return { total, base, extras, plan };
}

// ─── Animation ───────────────────────────────────────────────────────────────

const slide: Variants = {
  enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.28, ease: "easeOut" } },
  exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.18, ease: "easeIn" } }),
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function OptionCard({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
        selected
          ? "border-accent bg-accent/10 shadow-glow"
          : "border-black/10 dark:border-white/10 hover:border-accent/40 bg-black/[0.03] dark:bg-white/[0.02]"
      }`}
    >
      {children}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DevisSimulator() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [projectType, setProjectType] = useState("");
  const [pages, setPages] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");

  const canContinue = [projectType !== "", pages !== "", true, timeline !== ""];
  const isDone = step === 4;

  function next() { setDir(1); setStep((s) => s + 1); }
  function prev() { setDir(-1); setStep((s) => s - 1); }
  function restart() {
    setDir(-1); setStep(0);
    setProjectType(""); setPages(""); setFeatures([]); setTimeline("");
  }
  function toggleFeature(id: string) {
    setFeatures((f) => f.includes(id) ? f.filter((x) => x !== id) : [...f, id]);
  }

  const ranges = projectType === "vitrine" ? pageRanges.vitrine : pageRanges.default;
  const estimate = isDone ? calcEstimate(projectType, pages, features, timeline) : null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Simulateur</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Estimez votre projet</h1>
          <p className="text-muted mt-3 text-base">4 questions pour une estimation personnalisée.</p>
        </div>

        {/* Progress bar */}
        {!isDone && (
          <div className="flex items-center gap-1 mb-10">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center gap-1 flex-1 last:flex-none">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 transition-all duration-300 ${
                  i < step ? "bg-accent text-white" :
                  i === step ? "bg-accent text-white ring-4 ring-accent/20" :
                  "bg-black/5 dark:bg-white/5 text-muted"
                }`}>
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:block transition-colors ${i === step ? "text-foreground" : "text-muted"}`}>
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mx-2 transition-all duration-500 ${i < step ? "bg-accent" : "bg-black/10 dark:bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step content */}
        <AnimatePresence mode="wait" custom={dir}>
          {!isDone && (
            <motion.div key={step} custom={dir} variants={slide} initial="enter" animate="center" exit="exit">

              {/* Step 1 — Type de projet */}
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Quel type de projet ?</h2>
                  {projectTypes.map(({ id, icon: Icon, label, desc }) => (
                    <OptionCard key={id} selected={projectType === id} onClick={() => setProjectType(id)}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl shrink-0 ${projectType === id ? "bg-accent/20" : "bg-black/5 dark:bg-white/5"}`}>
                          <Icon size={22} className={projectType === id ? "text-accent" : "text-muted"} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-muted text-sm">{desc}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          projectType === id ? "bg-accent border-accent" : "border-black/20 dark:border-white/20"
                        }`}>
                          {projectType === id && <Check size={13} className="text-white" />}
                        </div>
                      </div>
                    </OptionCard>
                  ))}
                </div>
              )}

              {/* Step 2 — Volume */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    {projectType === "vitrine" ? "Nombre de pages ?" : "Complexité estimée ?"}
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {ranges.map(({ id, label, desc }) => (
                      <OptionCard key={id} selected={pages === id} onClick={() => setPages(id)}>
                        <p className={`font-bold text-lg ${pages === id ? "text-accent" : "text-foreground"}`}>{label}</p>
                        <p className="text-muted text-sm mt-1">{desc}</p>
                      </OptionCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — Fonctionnalités */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-1">Fonctionnalités souhaitées</h2>
                  <p className="text-muted text-sm mb-6">Multi-sélection possible.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuresList.map(({ id, icon: Icon, label, price }) => {
                      const sel = features.includes(id);
                      return (
                        <button
                          key={id}
                          onClick={() => toggleFeature(id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            sel
                              ? "border-accent bg-accent/10"
                              : "border-black/10 dark:border-white/10 hover:border-accent/40 bg-black/[0.03] dark:bg-white/[0.02]"
                          }`}
                        >
                          <Icon size={17} className={sel ? "text-accent shrink-0" : "text-muted shrink-0"} />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{label}</p>
                            <p className="text-xs text-muted">{price === 0 ? "Inclus" : `+${price} €`}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                            sel ? "bg-accent border-accent" : "border-black/20 dark:border-white/20"
                          }`}>
                            {sel && <Check size={11} className="text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4 — Délai */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Délai souhaité ?</h2>
                  {timelines.map(({ id, icon: Icon, label, desc, badge, badgeColor }) => (
                    <OptionCard key={id} selected={timeline === id} onClick={() => setTimeline(id)}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl shrink-0 ${timeline === id ? "bg-accent/20" : "bg-black/5 dark:bg-white/5"}`}>
                          <Icon size={20} className={timeline === id ? "text-accent" : "text-muted"} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-muted text-sm">{desc}</p>
                        </div>
                        {badge && (
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${badgeColor}`}>{badge}</span>
                        )}
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          timeline === id ? "bg-accent border-accent" : "border-black/20 dark:border-white/20"
                        }`}>
                          {timeline === id && <Check size={13} className="text-white" />}
                        </div>
                      </div>
                    </OptionCard>
                  ))}
                </div>
              )}

            </motion.div>
          )}

          {/* Result */}
          {isDone && estimate && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Sparkles size={30} className="text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Votre estimation</h2>
                <p className="text-muted text-sm mt-2">Indicatif — un devis précis sera établi après échange.</p>
              </div>

              {/* Price */}
              <div className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-8 text-center">
                <div className="text-6xl font-bold text-foreground mb-1">{estimate.total.toLocaleString("fr-FR")} €</div>
                <div className="text-accent font-semibold text-sm mt-2">Plan recommandé : {estimate.plan}</div>
              </div>

              {/* Breakdown */}
              <div className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02] space-y-3">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Détail</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Base ({projectTypes.find((p) => p.id === projectType)?.label})</span>
                  <span className="text-foreground font-medium">{estimate.base.toLocaleString("fr-FR")} €</span>
                </div>
                {estimate.extras > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Fonctionnalités</span>
                    <span className="text-foreground font-medium">+{estimate.extras.toLocaleString("fr-FR")} €</span>
                  </div>
                )}
                {timeline !== "standard" && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Délai ({timelines.find((t) => t.id === timeline)?.label})</span>
                    <span className={`font-medium ${timeline === "urgent" ? "text-orange-400" : "text-green-400"}`}>
                      {timeline === "urgent" ? "+20%" : "-5%"}
                    </span>
                  </div>
                )}
                <div className="border-t border-black/10 dark:border-white/10 pt-3 flex justify-between text-sm font-bold">
                  <span className="text-foreground">Total estimé</span>
                  <span className="text-accent">{estimate.total.toLocaleString("fr-FR")} €</span>
                </div>
              </div>

              {/* CTAs */}
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 w-full bg-accent text-white font-semibold py-4 px-6 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
              >
                Démarrer ce projet
                <ArrowRight size={18} />
              </a>

              <button
                onClick={restart}
                className="flex items-center justify-center gap-2 w-full text-muted hover:text-foreground text-sm transition-colors py-2"
              >
                <RefreshCw size={15} />
                Recommencer la simulation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {!isDone && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={17} />
              Retour
            </button>
            <button
              onClick={next}
              disabled={!canContinue[step]}
              className="flex items-center gap-1.5 bg-accent text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-glow hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              {step === 3 ? "Voir l'estimation" : "Continuer"}
              <ChevronRight size={17} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
