import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gregodev.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/blog/pourquoi-votre-site-vitrine-vous-fait-perdre-des-clients`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/comment-j-ai-lance-mon-frigo-malin`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/claude-code-cursor-v0-quel-outil-choisir`,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/confidentialite`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/cgv`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
