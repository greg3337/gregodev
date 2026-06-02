import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "De l'idée au déploiement en 48h — mon process de travail",
  description:
    "Comment je livre un site vitrine en 48h : de la compréhension du besoin au déploiement sur Vercel. Mon process détaillé, étape par étape.",
  keywords: [
    "développeur freelance Bordeaux",
    "process de travail développeur",
    "site vitrine rapide",
    "déploiement Vercel",
    "Next.js freelance",
    "création site web 48h",
  ],
  alternates: {
    canonical: "https://www.gregodev.com/blog/de-lidee-au-deploiement-en-48h",
  },
  openGraph: {
    title: "De l'idée au déploiement en 48h — mon process de travail",
    description:
      "Comment je livre un site vitrine en 48h : de la compréhension du besoin au déploiement sur Vercel. Mon process détaillé, étape par étape.",
    url: "https://www.gregodev.com/blog/de-lidee-au-deploiement-en-48h",
    type: "article",
    siteName: "GregoDev",
    images: [{ url: "https://www.gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "De l'idée au déploiement en 48h — mon process de travail",
    description:
      "Comment je livre un site vitrine en 48h : de la compréhension du besoin au déploiement sur Vercel. Mon process détaillé, étape par étape.",
    images: ["https://www.gregodev.com/og-image.png"],
  },
};

const tags = ["Process", "Dev", "Freelance"];

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

export default function ArticleProcess48h() {
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
          De l&apos;idée au déploiement en 48h — mon process de travail
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mb-10 pb-8 border-b border-black/10 dark:border-white/10">
          <span>Grégoire · GregoDev</span>
          <span className="hidden sm:inline">·</span>
          <span>2 juin 2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            6 min de lecture
          </span>
        </div>

        {/* Body */}
        <P>
          Quand un client me contacte pour un site vitrine, la première question qu&apos;il pose
          c&apos;est souvent : &quot;Combien de temps ça prend ?&quot; Ma réponse les surprend
          toujours : pour un site vitrine propre et fonctionnel, je vise 48h.
        </P>
        <P>
          Pas 48h de travail non-stop. 48h entre le brief et la mise en ligne. Voici comment.
        </P>

        <H2>1. L&apos;idée — comprendre avant de coder</H2>
        <P>
          Tout commence par une conversation. Pas un formulaire de 40 questions, une vraie
          discussion. Je veux comprendre trois choses : à qui s&apos;adresse le site, quel message
          principal il doit faire passer, et quelle action on veut que le visiteur fasse en
          arrivant dessus.
        </P>
        <P>
          Un électricien à Bordeaux et un restaurant gastronomique parisien n&apos;ont pas les
          mêmes besoins. L&apos;un veut inspirer confiance en 3 secondes et décrocher un appel.
          L&apos;autre veut créer une ambiance et convertir en réservation. C&apos;est cette
          compréhension qui fait la différence entre un site générique et un site qui travaille
          vraiment pour son propriétaire.
        </P>

        <H2>2. Le choix de la stack — des outils au service du résultat</H2>
        <P>
          Je travaille avec Next.js, Tailwind CSS et Framer Motion. Ce trio me permet de livrer
          vite sans sacrifier la qualité.
        </P>
        <P>
          Next.js pour les performances et le SEO natif. Tailwind pour aller vite sur le design
          sans écrire du CSS from scratch. Framer Motion pour les animations qui donnent vie au
          site sans alourdir le code.
        </P>
        <P>
          Le déploiement se fait sur Vercel — quelques clics et le site est en ligne, avec HTTPS
          et CDN mondial inclus. Pas de serveur à configurer, pas de surprise.
        </P>

        <H2>3. Le développement — une section à la fois</H2>
        <P>
          Je construis le site section par section, dans l&apos;ordre de lecture : Hero, Services,
          Réalisations, Contact. Chaque section a un seul objectif. Je ne passe pas à la suivante
          tant que la précédente ne fait pas exactement ce qu&apos;elle doit faire.
        </P>
        <P>
          Cette approche me permet aussi de montrer l&apos;avancement au client en temps réel.
          Pas de grande révélation finale — le client voit le site prendre forme, peut réagir tôt,
          et les ajustements coûtent moins cher en temps.
        </P>

        <H2>4. Le déploiement — Vercel en 5 minutes</H2>
        <P>
          Une fois le développement terminé, le déploiement sur Vercel prend littéralement 5
          minutes. Je connecte le repo GitHub, je configure le domaine, et c&apos;est en ligne.
        </P>
        <P>
          Ce qui prend plus de temps c&apos;est les vérifications : test sur mobile, test sur
          différents navigateurs, vérification des performances avec Lighthouse, et configuration
          des balises meta pour le SEO.
        </P>

        <H2>5. Et après — le suivi</H2>
        <P>
          Livrer le site c&apos;est pas la fin. Je reste disponible pour les retouches dans les
          jours qui suivent — un texte à modifier, une photo à remplacer, un bug qui apparaît sur
          un appareil spécifique.
        </P>
        <P>
          C&apos;est cette disponibilité après livraison qui fait qu&apos;un client recommande à
          ses contacts. Le site c&apos;est le produit, mais la relation c&apos;est ce qui dure.
        </P>

        <ShareButtons title="De l'idée au déploiement en 48h — mon process de travail" />

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">Vous avez un projet ?</h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            De l&apos;idée à la mise en ligne en 48h. Je suis disponible pour discuter de votre
            projet sans engagement.
          </p>
          <a
            href="/devis"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </article>
  );
}
