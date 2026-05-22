import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment un site web peut doubler vos demandes de contact",
  description:
    "Un site bien conçu ne se contente pas d'exister — il travaille pour vous 24h/24. Découvrez 5 leviers concrets pour transformer vos visiteurs en prospects qualifiés.",
  keywords: [
    "augmenter demandes de contact site web",
    "conversion site vitrine TPE",
    "SEO local Bordeaux",
    "optimisation formulaire contact",
    "call to action site web",
    "vitesse site web conversion",
    "développeur freelance Bordeaux",
  ],
  alternates: {
    canonical:
      "https://gregodev.com/blog/comment-un-site-web-peut-doubler-vos-demandes-de-contact",
  },
  openGraph: {
    title: "Comment un site web peut doubler vos demandes de contact",
    description:
      "Un site bien conçu ne se contente pas d'exister — il travaille pour vous 24h/24. 5 leviers concrets pour convertir vos visiteurs en prospects qualifiés.",
    url: "https://gregodev.com/blog/comment-un-site-web-peut-doubler-vos-demandes-de-contact",
    type: "article",
    siteName: "GregoDev",
    images: [{ url: "https://gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment un site web peut doubler vos demandes de contact",
    description:
      "Un site bien conçu ne se contente pas d'exister — il travaille pour vous 24h/24. 5 leviers concrets pour convertir vos visiteurs en prospects qualifiés.",
    images: ["https://gregodev.com/og-image.png"],
  },
};

const tags = ["Conseil", "Web", "Conversion"];

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

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl px-5 py-4 my-6">
      <p className="text-foreground/90 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function NumberedPoint({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <div className="flex items-start gap-4">
        <span className="shrink-0 w-9 h-9 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center mt-0.5">
          {number}
        </span>
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ArticleDoublerDemandes() {
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
          Comment un site web peut doubler vos demandes de contact
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mb-10 pb-8 border-b border-black/10 dark:border-white/10">
          <span>Grégoire · GregoDev</span>
          <span className="hidden sm:inline">·</span>
          <span>22 mai 2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            6 min de lecture
          </span>
        </div>

        {/* Body */}
        <P>
          La plupart des freelances et TPE ont un site web. Beaucoup moins ont un site web qui
          <em> génère activement des contacts</em>. La différence, ce n&apos;est pas le budget —
          c&apos;est la méthode.
        </P>
        <P>
          Un site bien conçu travaille pour vous 24h/24, 7j/7, sans jamais prendre de vacances. Il
          attire les bons visiteurs, les convainc que vous êtes la bonne personne, et les pousse à
          agir. Voici les 5 leviers qui font vraiment la différence.
        </P>

        <NumberedPoint number={1} title="Le SEO local : être trouvé avant même d'être lu">
          <P>
            Peu importe la qualité de votre site : s&apos;il n&apos;apparaît pas sur Google quand un
            client potentiel tape &ldquo;développeur web Bordeaux&rdquo; ou &ldquo;plombier
            urgence Lyon&rdquo;, vous n&apos;existez pas. Le référencement local est le premier
            levier, et souvent le plus négligé par les indépendants.
          </P>
          <P>
            Les bases sont accessibles à tous : une balise title qui contient votre métier et votre
            ville, une meta description qui donne envie de cliquer, des titres de page structurés
            (H1, H2), et un contenu qui répond aux vraies questions de vos clients — pas à celles
            que vous imaginez qu&apos;ils posent.
          </P>
          <Tip>
            <strong>Action immédiate :</strong> vérifiez votre fiche Google Business Profile. Une
            fiche bien renseignée — photos, horaires, description, avis — peut doubler votre
            visibilité locale en quelques semaines, sans toucher à votre site.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={2} title="Le design : convaincre en moins de 5 secondes">
          <P>
            Vous avez en moyenne 5 secondes pour que votre visiteur décide de rester ou de repartir.
            Ce n&apos;est pas le contenu qui le retient à ce stade — c&apos;est l&apos;impression
            générale. Un design daté, des couleurs criardes, une typographie illisible : le visiteur
            part avant même d&apos;avoir lu votre offre.
          </P>
          <P>
            Un design professionnel ne veut pas dire clinquant ou compliqué. Cela veut dire :
            cohérent, aéré, avec une hiérarchie visuelle claire. Votre visiteur doit comprendre en
            un coup d&apos;œil qui vous êtes, ce que vous faites, et pour qui.
          </P>
          <Tip>
            <strong>Test rapide :</strong> montrez votre page d&apos;accueil à quelqu&apos;un qui ne
            connaît pas votre activité. Après 5 secondes, demandez-lui ce que vous faites. Si la
            réponse est floue, votre design ne fait pas son travail.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={3} title="Les call-to-action : dire exactement quoi faire">
          <P>
            Un visiteur convaincu mais sans direction ne fait rien. Il repart avec une bonne
            impression... et ne revient jamais. Le rôle du call-to-action (CTA) est de transformer
            cette bonne impression en geste concret : appel, email, formulaire.
          </P>
          <P>
            L&apos;erreur classique : multiplier les boutons différents sur une même page —
            &ldquo;En savoir plus&rdquo;, &ldquo;Voir nos tarifs&rdquo;, &ldquo;Nous
            contacter&rdquo;, &ldquo;Télécharger notre brochure&rdquo;. Résultat : le visiteur ne
            sait pas quoi choisir et ne choisit rien.
          </P>
          <Tip>
            <strong>La règle d&apos;or :</strong> un CTA principal par page, formulé avec un verbe
            d&apos;action et un bénéfice clair. &ldquo;Obtenir un devis gratuit en 48h&rdquo; est
            100 fois plus efficace que &ldquo;Nous contacter&rdquo;. Répétez-le à chaque section
            sans vous en excuser.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={4} title="Le formulaire de contact : zéro friction">
          <P>
            Le formulaire de contact est souvent le dernier obstacle entre votre visiteur et vous.
            Et c&apos;est là que beaucoup de sites échouent : formulaires trop longs, captcha
            pénibles, page de confirmation vide, absence d&apos;email de confirmation. Chaque
            friction supplémentaire fait baisser votre taux de conversion.
          </P>
          <P>
            La règle : demandez le minimum nécessaire. Nom, email, message — c&apos;est souvent
            suffisant pour démarrer une conversation. Vous obtiendrez les détails lors de
            l&apos;échange. Ajoutez un message de confirmation rassurant (&ldquo;Je vous réponds
            sous 48h&rdquo;) et un email automatique pour que le client sache que sa demande a bien
            été reçue.
          </P>
          <Tip>
            <strong>Bonus :</strong> proposez une alternative au formulaire — un numéro de téléphone
            ou un lien de réservation Calendly. Certains clients préfèrent appeler directement.
            Leur retirer cette option, c&apos;est perdre des contacts sans même le savoir.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={5} title="La vitesse : votre argument silencieux">
          <P>
            Google l&apos;a prouvé : au-delà de 3 secondes de chargement, plus de la moitié des
            visiteurs partent. Et Google lui-même pénalise les sites lents dans ses résultats de
            recherche. La vitesse n&apos;est donc pas qu&apos;une question d&apos;expérience
            utilisateur — c&apos;est aussi un levier SEO direct.
          </P>
          <P>
            Les gains les plus rapides : compresser vos images (passez au format WebP), choisir un
            hébergement performant comme Vercel ou Netlify, et éviter les thèmes WordPress surchargés
            qui chargent des dizaines de scripts inutiles.
          </P>
          <Tip>
            <strong>Mesurez maintenant :</strong> testez votre site sur{" "}
            <a
              href="https://pagespeed.web.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              PageSpeed Insights
            </a>
            . Un score en dessous de 70 sur mobile est un signal d&apos;alarme. Visez 90+.
          </Tip>
        </NumberedPoint>

        <H2>Ce que ça change concrètement</H2>
        <P>
          Ces 5 leviers ne sont pas des astuces de croissance hacker réservées aux grandes
          entreprises. Ce sont les fondamentaux que tout site professionnel devrait avoir — et que
          la majorité des sites de freelances et TPE n&apos;a pas encore.
        </P>
        <P>
          Le bon côté : vous n&apos;avez pas à tout faire en même temps. Commencez par le SEO local
          et le formulaire de contact — ce sont les deux ajustements qui ont le meilleur retour sur
          investissement. Ensuite, travaillez le design et les CTA. La vitesse, elle, peut souvent
          être améliorée significativement en une demi-journée.
        </P>
        <P>
          Un site qui convertit bien, c&apos;est un site qui a été pensé pour son visiteur — pas
          pour impressionner son propriétaire.
        </P>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Votre site est prêt à générer plus de contacts ?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Je conçois des sites vitrine optimisés pour la conversion, avec SEO local, design
            professionnel et formulaire sans friction. Devis gratuit en 48h.
          </p>
          <a
            href="/devis"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Estimer mon projet
          </a>
        </div>
      </div>
    </article>
  );
}
