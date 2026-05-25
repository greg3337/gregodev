import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pourquoi votre site vitrine vous fait perdre des clients",
  description:
    "5 erreurs fréquentes sur les sites de freelances et TPE à Bordeaux, et comment les corriger pour convertir vos visiteurs en clients. Audit gratuit disponible.",
  keywords: [
    "site vitrine Bordeaux",
    "erreurs site web",
    "conversion site vitrine",
    "audit site web Bordeaux",
    "développeur freelance Bordeaux",
    "optimisation site vitrine",
  ],
  alternates: {
    canonical:
      "https://www.gregodev.com/blog/pourquoi-votre-site-vitrine-vous-fait-perdre-des-clients",
  },
  openGraph: {
    title: "Pourquoi votre site vitrine vous fait perdre des clients",
    description:
      "5 erreurs fréquentes sur les sites de freelances et TPE à Bordeaux, et comment les corriger pour convertir vos visiteurs en clients.",
    url: "https://www.gregodev.com/blog/pourquoi-votre-site-vitrine-vous-fait-perdre-des-clients",
    type: "article",
    siteName: "GregoDev",
    images: [{ url: "https://www.gregodev.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pourquoi votre site vitrine vous fait perdre des clients",
    description:
      "5 erreurs fréquentes sur les sites de freelances et TPE à Bordeaux, et comment les corriger pour convertir vos visiteurs en clients.",
    images: ["https://www.gregodev.com/og-image.png"],
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

export default function Article1() {
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
          Pourquoi votre site vitrine vous fait perdre des clients (et comment y remédier)
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mb-10 pb-8 border-b border-black/10 dark:border-white/10">
          <span>Grégoire · GregoDev</span>
          <span className="hidden sm:inline">·</span>
          <span>20 mai 2026</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            5 min de lecture
          </span>
        </div>

        {/* Body */}
        <P>
          En 2026, avoir un site ne suffit plus. Vos concurrents en ont un aussi. Pourtant c&apos;est
          eux qui reçoivent les appels. Pourquoi ?
        </P>
        <P>
          Après avoir audité des dizaines de sites de freelances et petites entreprises à Bordeaux,
          j&apos;ai identifié 5 erreurs qui reviennent systématiquement. Voici comment les corriger.
        </P>

        <NumberedPoint number={1} title="Votre site parle de vous, pas de votre client">
          <P>
            &ldquo;Bienvenue sur notre site.&rdquo; &ldquo;Nous sommes spécialisés dans&hellip;&rdquo; Stop.
          </P>
          <P>
            Votre visiteur veut savoir ce que vous pouvez faire <strong>pour lui</strong>. Dès la
            première ligne, répondez à sa vraie question : <em>&ldquo;Est-ce que ce prestataire peut
            résoudre mon problème ?&rdquo;</em>
          </P>
          <Tip>
            <strong>Ce qu&apos;il faut faire :</strong> votre accroche doit parler du bénéfice client.
            Pas &ldquo;Développeur web à Bordeaux&rdquo; mais &ldquo;Je construis des sites qui
            transforment vos visiteurs en clients.&rdquo; La nuance est énorme.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={2} title="Votre site met plus de 3 secondes à charger">
          <P>
            53% des visiteurs quittent une page si elle met plus de 3 secondes à charger. Testez
            votre site sur{" "}
            <a
              href="https://pagespeed.web.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              PageSpeed Insights
            </a>{" "}
            et visez un score de 90+.
          </P>
          <Tip>
            <strong>Ce qu&apos;il faut faire :</strong> hébergez sur Vercel, compressez vos images en
            WebP, utilisez Next.js pour le Server-Side Rendering et la mise en cache automatique.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={3} title="On ne sait pas quoi faire après vous avoir lu">
          <P>
            Un visiteur qui ne sait pas quoi faire ne fait rien. Il ferme l&apos;onglet. C&apos;est
            brutal, mais c&apos;est la réalité.
          </P>
          <Tip>
            <strong>Ce qu&apos;il faut faire :</strong> un seul CTA principal, visible, répété à chaque
            section. &ldquo;Demander un devis gratuit&rdquo;, &ldquo;Prendre rendez-vous&rdquo;, &ldquo;Appeler maintenant&rdquo; —
            choisissez-en un et assumez-le. Pas quatre boutons différents qui se diluent mutuellement.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={4} title="Votre site est illisible sur mobile">
          <P>
            60% du trafic web vient des smartphones. Si votre site n&apos;est pas conçu en mobile-first,
            vous perdez la moitié de vos visiteurs avant même qu&apos;ils aient lu votre offre.
          </P>
          <Tip>
            <strong>Ce qu&apos;il faut faire :</strong> testez sur votre téléphone maintenant. Pas dans
            les DevTools du navigateur — sur un vrai smartphone. Si vous devez pincher pour lire,
            c&apos;est déjà un problème.
          </Tip>
        </NumberedPoint>

        <NumberedPoint number={5} title="Vous n'avez pas de preuve sociale">
          <P>
            Pourquoi un inconnu vous ferait confiance ? Vous êtes peut-être excellent dans votre
            domaine, mais il n&apos;a aucun moyen de le savoir sans preuve.
          </P>
          <Tip>
            <strong>Ce qu&apos;il faut faire :</strong> ajoutez 2-3 témoignages clients avec prénom et
            photo, montrez des projets réalisés avec des chiffres concrets (temps de développement,
            résultats obtenus, technologies utilisées). Les chiffres rassurent.
          </Tip>
        </NumberedPoint>

        <H2>Pour résumer</H2>
        <P>
          Un bon site vitrine n&apos;est pas un catalogue de vos compétences. C&apos;est un argumentaire de
          vente silencieux qui répond aux objections de votre client, lui montre que vous comprenez
          son problème, et lui dit clairement quoi faire ensuite.
        </P>
        <P>
          Ces 5 erreurs sont simples à corriger — et la plupart ne coûtent pas cher à régler si vous
          avez les bonnes bases techniques.
        </P>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-accent/5 border border-accent/20 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Vous voulez savoir ce qui cloche sur votre site ?
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto">
            Je propose un audit gratuit de 30 minutes. On regarde votre site ensemble et je vous
            donne 3 actions concrètes à faire cette semaine.
          </p>
          <a
            href="mailto:contact@gregodev.com"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Demander un audit gratuit
          </a>
        </div>
      </div>
    </article>
  );
}
