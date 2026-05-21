"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronRight, ChevronLeft, Check, Zap, Clock, Calendar,
  Globe, Monitor, Server, Sparkles, RefreshCw, ArrowRight,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const packOptions = [
  {
    id: "starter",
    icon: Globe,
    label: "Pack Starter",
    sublabel: "Site vitrine 1 à 3 pages",
    price: "490€",
  },
  {
    id: "vitrine-pro",
    icon: Monitor,
    label: "Pack Vitrine Pro",
    sublabel: "Site vitrine 5 à 8 pages",
    price: "1 200€",
  },
  {
    id: "sur-mesure",
    icon: Server,
    label: "Sur-mesure",
    sublabel: "Application web, SaaS ou outil interne",
    price: "À partir de 1 500€",
  },
];

const timelines = [
  { id: "urgent", icon: Zap, label: "Urgent", desc: "Livraison en moins de 2 semaines" },
  { id: "standard", icon: Clock, label: "Standard", desc: "2 à 4 semaines" },
  { id: "flexible", icon: Calendar, label: "Flexible", desc: "Plus d'un mois" },
];

const STEPS = ["Pack", "Délai"];

// ─── Pack features ───────────────────────────────────────────────────────────

const packFeatures = {
  starter: [
    "Site 1 – 3 pages",
    "Design responsive mobile-first",
    "SEO de base",
    "Formulaire de contact",
    "Déploiement inclus",
  ],
  "vitrine-pro": [
    "Site 5 – 8 pages",
    "Animations Framer Motion",
    "SEO avancé",
    "Blog / Articles",
    "Formulaire de contact avancé",
    "Déploiement inclus",
  ],
  "sur-mesure": [
    "Application web sur mesure",
    "Authentification utilisateurs",
    "Paiement en ligne",
    "Intégrations IA",
    "Dashboard admin",
    "Support 3 mois",
  ],
} as const;

type Plan = keyof typeof packFeatures;

function getQuote(plan: string): { plan: Plan; price: string; planLabel: string } {
  if (plan === "starter") return { plan: "starter", price: "490€", planLabel: "Starter" };
  if (plan === "vitrine-pro") return { plan: "vitrine-pro", price: "1 200€", planLabel: "Vitrine Pro" };
  return { plan: "sur-mesure", price: "À partir de 1 500€", planLabel: "Sur-mesure" };
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
  const searchParams = useSearchParams();
  const packParam = searchParams.get("pack");

  const [step, setStep] = useState(() => {
    if (packParam === "starter" || packParam === "vitrine-pro" || packParam === "sur-mesure") return 1;
    return 0;
  });
  const [dir, setDir] = useState(1);
  const [selectedPack, setSelectedPack] = useState(() => {
    if (packParam === "starter") return "starter";
    if (packParam === "vitrine-pro") return "vitrine-pro";
    if (packParam === "sur-mesure") return "sur-mesure";
    return "";
  });
  const [timeline, setTimeline] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const canContinue = [selectedPack !== "", timeline !== ""];
  const isDone = step === 2;

  useEffect(() => {
    if (!isDone) return;
    const q = getQuote(selectedPack);
    const timelineLabel = timelines.find((t) => t.id === timeline)?.label ?? "";
    setFormData((f) => ({
      ...f,
      message: `Pack : ${q.planLabel} (${q.price})\nDélai souhaité : ${timelineLabel}\n\nBonjour, je souhaite recevoir un devis détaillé pour ce projet.`,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDone]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mqeykljd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setFormStatus(res.ok ? "success" : "error");
    } catch {
      setFormStatus("error");
    }
  }

  function next() { setDir(1); setStep((s) => s + 1); }
  function prev() { setDir(-1); setStep((s) => s - 1); }
  function restart() {
    setDir(-1); setStep(0);
    setSelectedPack(""); setTimeline("");
    setFormData({ name: "", email: "", message: "" });
    setFormStatus("idle");
  }

  const quote = isDone ? getQuote(selectedPack) : null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Simulateur</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Estimez votre projet</h1>
          <p className="text-muted mt-3 text-base">2 questions pour une estimation personnalisée.</p>
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

              {/* Step 1 — Choix du pack */}
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Quel pack vous correspond ?</h2>
                  {packOptions.map(({ id, icon: Icon, label, sublabel, price }) => (
                    <OptionCard key={id} selected={selectedPack === id} onClick={() => setSelectedPack(id)}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl shrink-0 ${selectedPack === id ? "bg-accent/20" : "bg-black/5 dark:bg-white/5"}`}>
                          <Icon size={22} className={selectedPack === id ? "text-accent" : "text-muted"} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-muted text-sm">{sublabel}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className={`text-sm font-bold ${selectedPack === id ? "text-accent" : "text-muted"}`}>{price}</p>
                        </div>
                      </div>
                    </OptionCard>
                  ))}
                </div>
              )}

              {/* Step 2 — Délai */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Délai souhaité ?</h2>
                  {timelines.map(({ id, icon: Icon, label, desc }) => (
                    <OptionCard key={id} selected={timeline === id} onClick={() => setTimeline(id)}>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl shrink-0 ${timeline === id ? "bg-accent/20" : "bg-black/5 dark:bg-white/5"}`}>
                          <Icon size={20} className={timeline === id ? "text-accent" : "text-muted"} />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-muted text-sm">{desc}</p>
                        </div>
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
          {isDone && quote && (
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
              <div className={`rounded-2xl border p-8 text-center ${
                quote.plan !== "sur-mesure"
                  ? "border-accent/50 bg-accent/[0.06] shadow-glow"
                  : "border-accent/30 bg-accent/[0.04]"
              }`}>
                <div className={`font-bold text-foreground mb-2 ${
                  quote.plan === "sur-mesure" ? "text-4xl" : "text-6xl"
                }`}>
                  {quote.price}
                </div>
                <div className="text-accent font-semibold text-sm mt-2">Pack {quote.planLabel}</div>
                <div className="text-muted text-xs mt-1.5">
                  Délai : {timelines.find((t) => t.id === timeline)?.label}
                </div>
              </div>

              {/* Included features */}
              <div className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02]">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Ce qui est inclus</p>
                <ul className="space-y-2.5">
                  {packFeatures[quote.plan].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <Check size={15} className="text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Récapitulatif */}
              <div className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02] space-y-3">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Récapitulatif</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Pack</span>
                  <span className="text-foreground font-medium">Pack {quote.planLabel}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Prix</span>
                  <span className="text-foreground font-medium">{quote.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Délai</span>
                  <span className="text-foreground font-medium">
                    {timelines.find((t) => t.id === timeline)?.label}
                  </span>
                </div>
              </div>

              {/* Modalités de paiement */}
              <div className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02] space-y-3">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Modalités de paiement</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">À la signature du devis</span>
                  <span className="text-foreground font-medium">30% d&apos;acompte</span>
                </div>
                <div className="border-t border-black/[0.06] dark:border-white/[0.06] pt-3 flex justify-between text-sm">
                  <span className="text-muted">À la livraison</span>
                  <span className="text-foreground font-medium">70% solde</span>
                </div>
              </div>

              {/* Contact form */}
              <div className="card-border rounded-2xl p-6 bg-black/[0.03] dark:bg-white/[0.02]">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-6">Démarrer ce projet</p>

                {formStatus === "success" ? (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <Check size={22} className="text-accent" />
                    </div>
                    <p className="text-foreground font-semibold">Message envoyé !</p>
                    <p className="text-muted text-sm mt-1">Je vous réponds sous 48h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Votre email"
                      value={formData.email}
                      onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-transparent text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    />
                    {formStatus === "error" && (
                      <p className="text-red-400 text-xs">
                        Une erreur est survenue. Réessayez ou écrivez à{" "}
                        <a href="mailto:contact@gregodev.com" className="underline">contact@gregodev.com</a>.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="flex items-center justify-center gap-2 w-full bg-accent text-white font-semibold py-3.5 px-6 rounded-xl shadow-glow hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {formStatus === "loading" ? "Envoi en cours…" : (
                        <>Envoyer ma demande <ArrowRight size={17} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>

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
              {step === 1 ? "Voir l'estimation" : "Continuer"}
              <ChevronRight size={17} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
