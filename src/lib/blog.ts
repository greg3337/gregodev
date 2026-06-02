export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  readTime: string;
  gradient: string;
};

export const posts: BlogPost[] = [
  {
    slug: "de-lidee-au-deploiement-en-48h",
    title: "De l'idée au déploiement en 48h — mon process de travail",
    excerpt:
      "Comment je livre un site vitrine en 48h : de la compréhension du besoin au déploiement sur Vercel. Mon process détaillé, étape par étape.",
    tags: ["Process", "Dev", "Freelance"],
    date: "2 juin 2026",
    readTime: "6 min",
    gradient: "from-violet-600 to-pink-500",
  },
  {
    slug: "comment-un-site-web-peut-doubler-vos-demandes-de-contact",
    title: "Comment un site web peut doubler vos demandes de contact",
    excerpt:
      "Un site bien conçu ne se contente pas d'exister — il travaille pour vous 24h/24. Voici 5 leviers concrets pour transformer vos visiteurs en prospects qualifiés.",
    tags: ["Conseil", "Web", "Conversion"],
    date: "22 mai 2026",
    readTime: "6 min",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    slug: "pourquoi-votre-site-vitrine-vous-fait-perdre-des-clients",
    title:
      "Pourquoi votre site vitrine vous fait perdre des clients (et comment y remédier)",
    excerpt:
      "Après avoir audité des dizaines de sites de freelances et TPE à Bordeaux, j'ai identifié 5 erreurs qui reviennent systématiquement — et font fuir vos clients potentiels.",
    tags: ["Conseil", "Web", "Conversion"],
    date: "20 mai 2026",
    readTime: "5 min",
    gradient: "from-blue-600 to-violet-600",
  },
  {
    slug: "comment-j-ai-lance-mon-frigo-malin",
    title:
      "Comment j'ai lancé Mon Frigo Malin : de l'idée à l'app IA en production",
    excerpt:
      "J'avais un problème simple : je jetais trop de nourriture. Voici comment j'ai transformé cette frustration en une vraie PWA propulsée par l'IA.",
    tags: ["SaaS", "IA", "Retour d'expérience"],
    date: "15 mai 2026",
    readTime: "7 min",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    slug: "claude-code-cursor-v0-quel-outil-choisir",
    title:
      "Claude Code, Cursor, v0 : quel outil IA choisir pour développer son projet web en 2026 ?",
    excerpt:
      "En 2026, coder sans IA c'est comme naviguer sans GPS. Mais lequel choisir ? Comparatif honnête des 4 outils que j'utilise au quotidien.",
    tags: ["IA", "Outils", "Dev"],
    date: "10 mai 2026",
    readTime: "6 min",
    gradient: "from-rose-500 to-orange-500",
  },
];
