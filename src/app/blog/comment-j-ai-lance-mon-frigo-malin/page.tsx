import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment j'ai lancé Mon Frigo Malin",
  description:
    "Retour d'expérience complet sur la création d'une PWA anti-gaspillage avec IA : stack technique, défis rencontrés et leçons apprises en production.",
  keywords: [
    "SaaS Bordeaux",
    "PWA Next.js",
    "intégration IA",
    "développeur freelance Bordeaux",
    "Gemini AI",
    "lancer une app web",
    "retour expérience SaaS",
  ],
  alternates: {
    canonical: "https://gregodev.com/blog/comment-j-ai-lance-mon-frigo-malin",
  },
  openGraph: {
    title: "Comment j'ai lancé Mon Frigo Malin",
    description:
      "Retour d'expérience complet sur la création d'une PWA anti-gaspillage avec IA : stack technique, défis rencontrés et leçons apprises en production.",
    url: "https://gregodev.com/blog/comment-j-ai-lance-mon-frigo-malin",
    type: "article",
    siteName: "GregoDev",
    images: [{ url: "https://gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment j'ai lancé Mon Frigo Malin",
    description:
      "Retour d'expérience complet sur la création d'une PWA anti-gaspillage avec IA : stack technique, défis rencontrés et leçons apprises en production.",
    images: ["https://gregodev.com/og-image.png"],
  },
};

const tags = ["SaaS", "IA", "Retour d'expérience"];

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-foreground/80 leading-[1.85] text-base mb-5">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-bold text-foreground mt-10 mb-4 pb-2 border-b border-black/10 dark:border-white/10">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-foreground mt-7 mb-3">{children}</h3>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl px-5 py-4 my-6">
      <p className="text-foreground/90 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground/80 text-xs px-3 py-1.5 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}

export default function Article2() {
  return (
    <article className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-muted hover:text-foreground text-sm mb-10 transition-colors group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
          Comment j&apos;ai lancé Mon Frigo Malin : de l&apos;idée à l&apos;app IA en production
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mb-10 pb-8 border-b border-black/10 dark:border-white/10">
          <span>Grégoire · GregoDev</span>
          <span className="hidden sm:inline">·</span>
          <span>15 mai 2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            7 min de lecture
          </span>
        </div>

        {/* Body */}
        <P>
          En 2025, j&apos;avais un problème simple : je jetais trop de nourriture. J&apos;ouvrais
          mon frigo, je voyais des légumes qui commençaient à faner, et je n&apos;avais aucune idée
          de quoi en faire. J&apos;aurais pu télécharger une app existante. J&apos;ai préféré en
          construire une.
        </P>
        <P>
          Voici le retour d&apos;expérience complet — sans filtre — sur comment{" "}
          <a
            href="https://monfrigomalin.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
          >
            Mon Frigo Malin
          </a>{" "}
          est passé d&apos;une idée à une vraie app en production.
        </P>

        <H2>La stack technique</H2>
        <P>
          Je voulais une app rapide à lancer, qui fonctionne comme une vraie app mobile (hors ligne,
          installable) et avec de l&apos;IA pour la partie magique — reconnaître des aliments et
          générer des recettes contextuelles.
        </P>
        <div className="mb-6">
          <TechBadge>Next.js 14 (App Router)</TechBadge>
          <TechBadge>Lovable (prototypage initial)</TechBadge>
          <TechBadge>OpenAI GPT-4o</TechBadge>
          <TechBadge>PWA (Service Worker)</TechBadge>
          <TechBadge>Brevo (emails transactionnels)</TechBadge>
          <TechBadge>Vercel</TechBadge>
        </div>
        <P>
          Le choix de Lovable pour démarrer était délibéré : je voulais valider l&apos;idée
          visuellement en quelques heures avant d&apos;investir du temps en code. Ça m&apos;a permis
          d&apos;avoir une maquette cliquable le jour même.
        </P>

        <H2>Les défis principaux</H2>

        <H3>1. La reconnaissance IA des aliments</H3>
        <P>
          C&apos;est le cœur de l&apos;app : l&apos;utilisateur prend une photo de son frigo ou tape
          ses ingrédients, et l&apos;IA génère des recettes adaptées.
        </P>
        <P>
          En pratique, j&apos;ai testé trois approches différentes : vision directe via GPT-4o,
          extraction de texte puis raisonnement, et une classification d&apos;ingrédients
          intermédiaire. L&apos;approche vision s&apos;est avérée la meilleure en termes de qualité —
          mais aussi la plus coûteuse.
        </P>
        <Callout>
          Leçon apprise : l&apos;IA n&apos;est pas magique. Elle a besoin d&apos;être guidée par des
          prompts précis, des exemples de sortie attendus, et des garde-fous pour éviter les
          hallucinations. J&apos;ai passé plus de temps à affiner les prompts qu&apos;à coder les
          fonctionnalités.
        </Callout>

        <H3>2. Le modèle freemium</H3>
        <P>
          5 scans gratuits, puis Plan Malin (abonnement mensuel). Simple sur le papier. En pratique,
          il fallait gérer : l&apos;état des scans côté serveur, la logique de quota, la
          récupération après expiration, et la page de paiement sans friction.
        </P>
        <P>
          J&apos;ai choisi de ne pas intégrer Stripe dès le début — le premier mois, les
          conversions Premium se faisaient manuellement via email. Ça m&apos;a évité 2 semaines de
          dev pour une fonctionnalité que 3% des utilisateurs utiliseraient au départ.
        </P>

        <H3>3. La gestion des emails avec Brevo</H3>
        <P>
          Confirmation d&apos;inscription, récupération de mot de passe, notification hebdomadaire des
          nouvelles recettes sauvegardées — Brevo couvre tout ça avec une API simple et un plan
          gratuit généreux. Intégration en moins d&apos;une journée.
        </P>

        <H2>Ce que j&apos;ai appris</H2>

        <div className="space-y-4 my-6">
          {[
            {
              title: "Lancez tôt, améliorez après",
              desc: "La version 1 de Mon Frigo Malin était imparfaite. Beaucoup de choses ne fonctionnaient pas comme prévu. Mais elle était en ligne, et les retours d'utilisateurs réels valent 10x plus que toutes les spécifications imaginaires.",
            },
            {
              title: "L'IA n'est pas magique, elle est guidée",
              desc: "Les meilleurs résultats viennent des prompts les plus précis. Traitez l'IA comme un collaborateur junior très capable mais qui a besoin de contexte clair et d'exemples concrets.",
            },
            {
              title: "Le design compte autant que le code",
              desc: "J'ai refait l'interface 3 fois. Chaque refonte a augmenté le temps moyen passé sur l'app de façon mesurable. Le code peut être parfait — si l'expérience utilisateur est confuse, les gens partent.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/8 dark:border-white/8"
            >
              <span className="text-accent font-bold text-lg shrink-0 mt-0.5">→</span>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <H2>Où en est le projet aujourd&apos;hui ?</H2>
        <P>
          Mon Frigo Malin est en ligne sur{" "}
          <a
            href="https://monfrigomalin.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
          >
            monfrigomalin.fr
          </a>
          . C&apos;est mon premier vrai produit SaaS — pas le dernier. Les leçons apprises ici ont
          directement amélioré la façon dont je construis des applications pour mes clients.
        </P>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Vous avez une idée d&apos;app ?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            De l&apos;idée au MVP en quelques semaines. Je transforme votre concept en produit
            fonctionnel — avec ou sans IA.
          </p>
          <a
            href="mailto:contact@gregodev.com"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </article>
  );
}
