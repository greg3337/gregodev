"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "100%", label: "Remote-friendly" },
  { value: "48h", label: "Réponse" },
];

function parseStat(value: string): { to: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { to: parseInt(match[1]), suffix: match[2] } : { to: 0, suffix: value };
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const duration = 1400;
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * to));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent-light text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponible pour de nouveaux projets
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="glow-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
        >
          Je construis des outils digitaux{" "}
          <span className="text-accent">qui travaillent pour vous</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Sites vitrines, applications SaaS et outils internes pour freelances
          et petites entreprises à Bordeaux
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="/devis"
            whileTap={{ scale: 0.97 }}
            className="bg-accent text-white px-8 py-4 rounded-xl font-semibold shadow-glow hover:bg-accent/90 transition-all duration-200 text-base"
          >
            Demander un devis gratuit
          </motion.a>
          <motion.a
            href="#projets"
            whileTap={{ scale: 0.97 }}
            className="text-muted hover:text-foreground px-8 py-4 rounded-xl font-semibold border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-200 text-base"
          >
            Voir mes projets →
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-black/10 dark:divide-white/10"
        >
          {stats.map((stat) => {
            const { to, suffix } = parseStat(stat.value);
            return (
              <div key={stat.label} className="px-8 py-3 text-center">
                <div className="text-2xl font-bold text-foreground">
                  <CountUp to={to} suffix={suffix} />
                </div>
                <div className="text-sm text-muted mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
