import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Claude Code vs Cursor vs v0 : quel outil IA choisir ?",
  description:
    "Comparatif honnête de Claude Code, Cursor, v0 et Lovable pour développer en 2026. Pour qui, pour quoi, et lequel choisir selon votre projet web.",
  keywords: [
    "Claude Code",
    "Cursor IA",
    "v0 Vercel",
    "outils IA développeur",
    "développeur freelance Bordeaux",
    "comparatif IA 2026",
    "Lovable no-code",
  ],
  alternates: {
    canonical: "https://www.gregodev.com/blog/claude-code-cursor-v0-quel-outil-choisir",
  },
  openGraph: {
    title: "Claude Code vs Cursor vs v0 : quel outil IA choisir ?",
    description:
      "Comparatif honnête de Claude Code, Cursor, v0 et Lovable pour développer en 2026. Pour qui, pour quoi, et lequel choisir selon votre projet web.",
    url: "https://www.gregodev.com/blog/claude-code-cursor-v0-quel-outil-choisir",
    type: "article",
    siteName: "GregoDev",
    images: [{ url: "https://www.gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code vs Cursor vs v0 : quel outil IA choisir ?",
    description:
      "Comparatif honnête de Claude Code, Cursor, v0 et Lovable pour développer en 2026. Pour qui, pour quoi, et lequel choisir selon votre projet web.",
    images: ["https://www.gregodev.com/og-image.png"],
  },
};

const tags = ["IA", "Outils", "Dev"];

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

function ToolCard({
  name,
  tag,
  gradient,
  forWho,
  strength,
  limit,
  children,
}: {
  name: string;
  tag: string;
  gradient: string;
  forWho: string;
  strength: string;
  limit: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-border rounded-2xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.02] mb-6">
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        </div>
        <div className="text-foreground/80 text-sm leading-relaxed mb-4">{children}</div>
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/5 dark:border-white/5">
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Point fort</p>
            <p className="text-sm text-foreground font-medium">{strength}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wide mb-1">Limite</p>
            <p className="text-sm text-foreground font-medium">{limit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Article3() {
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
          Claude Code, Cursor, v0 : quel outil IA choisir pour développer son projet web en 2026 ?
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mb-10 pb-8 border-b border-black/10 dark:border-white/10">
          <span>Grégoire · GregoDev</span>
          <span className="hidden sm:inline">·</span>
          <span>10 mai 2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            6 min de lecture
          </span>
        </div>

        {/* Body */}
        <P>
          En 2026, coder sans IA c&apos;est comme naviguer sans GPS. Vous pouvez le faire — mais
          pourquoi ? La question n&apos;est plus de savoir si vous devez utiliser des outils IA, mais
          lesquels, et pour quoi.
        </P>
        <P>
          J&apos;utilise quotidiennement ces quatre outils dans mes projets client et mes projets
          personnels. Voici mon avis honnête, sans affiliation.
        </P>

        <H2>Les 4 outils en détail</H2>

        <ToolCard
          name="v0 by Vercel"
          tag="UI rapide"
          gradient="from-black to-zinc-600"
          forWho="Designer / Débutant"
          strength="Interfaces instantanées"
          limit="Logique métier complexe"
        >
          <P>
            v0 excelle pour une chose : générer des interfaces visuelles de qualité en quelques
            prompts. Vous décrivez ce que vous voulez, vous obtenez du code React + Tailwind
            propre, immédiatement utilisable.
          </P>
          <P>
            C&apos;est l&apos;outil parfait pour prototyper rapidement, tester une idée d&apos;UI ou
            générer une base de composants. Là où ça coince : dès que vous avez besoin de logique
            d&apos;état complexe, d&apos;intégrations API ou de gestion d&apos;erreurs avancée, v0
            montre ses limites.
          </P>
        </ToolCard>

        <ToolCard
          name="Cursor"
          tag="Productivité"
          gradient="from-violet-600 to-blue-600"
          forWho="Développeur"
          strength="Productivité quotidienne"
          limit="Courbe d'apprentissage"
        >
          <P>
            Cursor, c&apos;est VSCode avec un copilote IA qui comprend toute votre codebase.
            Contrairement à GitHub Copilot qui fait de l&apos;autocomplétion, Cursor peut lire et
            modifier plusieurs fichiers simultanément, refactoriser intelligemment, et répondre à
            des questions contextuelles sur votre code.
          </P>
          <P>
            Je l&apos;utilise pour les tâches répétitives (migration de composants, ajout de tests,
            documentation), où il me fait gagner un temps considérable. Ma productivité sur les
            tâches courantes a augmenté d&apos;environ 2x.
          </P>
        </ToolCard>

        <ToolCard
          name="Claude Code"
          tag="Autonomie"
          gradient="from-orange-500 to-amber-400"
          forWho="Tous niveaux"
          strength="Agent multi-fichiers"
          limit="Crédits"
        >
          <P>
            Claude Code est l&apos;outil que j&apos;utilise pour les tâches les plus ambitieuses. C&apos;est
            un vrai agent : il planifie, décide, code, vérifie, et corrige — de façon autonome sur
            des projets complexes multi-fichiers.
          </P>
          <P>
            Son mode Plan est particulièrement utile : avant de toucher au code, il vous présente
            son approche et vous la soumet pour validation. J&apos;ai construit ce site avec Claude
            Code. La différence avec les autres outils : il gère la cohérence du projet globalement,
            pas ligne par ligne.
          </P>
        </ToolCard>

        <ToolCard
          name="Lovable"
          tag="Sans code"
          gradient="from-pink-500 to-rose-500"
          forWho="Non-développeur"
          strength="App complète sans code"
          limit="Flexibilité technique"
        >
          <P>
            Lovable est dans une catégorie à part : il génère des applications complètes (frontend +
            backend + base de données) à partir d&apos;une description en langage naturel. Pas de
            code à écrire.
          </P>
          <P>
            C&apos;est l&apos;outil que j&apos;ai utilisé pour démarrer Mon Frigo Malin — en quelques
            heures, j&apos;avais une app fonctionnelle. La limite est réelle dès que vous avez besoin de
            personnalisations avancées ou d&apos;intégrations spécifiques, mais pour valider une idée,
            c&apos;est imbattable.
          </P>
        </ToolCard>

        <H2>Tableau comparatif</H2>

        <div className="overflow-x-auto my-6 rounded-xl border border-black/10 dark:border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black/[0.03] dark:bg-white/[0.03]">
                <th className="text-left px-4 py-3 text-foreground font-semibold border-b border-black/10 dark:border-white/10">
                  Outil
                </th>
                <th className="text-left px-4 py-3 text-foreground font-semibold border-b border-black/10 dark:border-white/10">
                  Pour qui
                </th>
                <th className="text-left px-4 py-3 text-foreground font-semibold border-b border-black/10 dark:border-white/10 hidden sm:table-cell">
                  Point fort
                </th>
                <th className="text-left px-4 py-3 text-foreground font-semibold border-b border-black/10 dark:border-white/10 hidden md:table-cell">
                  Limite
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  tool: "v0",
                  who: "Débutant / Designer",
                  strength: "UI rapide",
                  limit: "Logique complexe",
                },
                {
                  tool: "Cursor",
                  who: "Développeur",
                  strength: "Productivité",
                  limit: "Courbe d'apprentissage",
                },
                {
                  tool: "Claude Code",
                  who: "Tous niveaux",
                  strength: "Autonomie",
                  limit: "Crédits",
                },
                {
                  tool: "Lovable",
                  who: "Non-développeur",
                  strength: "Sans code",
                  limit: "Flexibilité",
                },
              ].map((row, i, arr) => (
                <tr
                  key={row.tool}
                  className={i < arr.length - 1 ? "border-b border-black/5 dark:border-white/5" : ""}
                >
                  <td className="px-4 py-3 font-semibold text-accent">{row.tool}</td>
                  <td className="px-4 py-3 text-muted">{row.who}</td>
                  <td className="px-4 py-3 text-muted hidden sm:table-cell">{row.strength}</td>
                  <td className="px-4 py-3 text-muted hidden md:table-cell">{row.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Quelle est la vraie compétence à développer ?</H2>
        <P>
          Ces outils ne remplacent pas la compréhension du code. Ils l&apos;amplifient. Un développeur
          qui maîtrise ses outils IA code 3x plus vite et produit un code de qualité équivalente ou
          supérieure.
        </P>
        <P>
          La vraie compétence en 2026, c&apos;est savoir <strong>diriger l&apos;IA vers le bon
          résultat</strong> : formuler des prompts précis, valider les sorties, détecter les
          erreurs subtiles, et décider quand prendre la main soi-même.
        </P>
        <P>
          C&apos;est exactement ce que je fais chez GregoDev — utiliser ces outils de façon
          stratégique pour livrer des projets web de qualité dans des délais que le développement
          traditionnel ne permettrait pas.
        </P>

        <ShareButtons title="Claude Code, Cursor, v0 : quel outil IA choisir pour développer son projet web en 2026 ?" />

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Vous voulez qu&apos;on construise quelque chose ensemble ?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            J&apos;utilise les meilleurs outils disponibles pour livrer votre projet plus vite, sans
            compromettre la qualité. Site vitrine, app SaaS ou outil interne — parlons-en.
          </p>
          <a
            href="mailto:contact@gregodev.com"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </article>
  );
}
