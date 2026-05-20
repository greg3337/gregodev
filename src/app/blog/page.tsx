import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Ressources — GregoDev",
  description:
    "Conseils, retours d'expérience et veille tech par GregoDev, développeur freelance à Bordeaux.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Articles
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-foreground">
            Blog & Ressources
          </h1>
          <p className="text-muted mt-4 max-w-xl mx-auto text-lg">
            Conseils, retours d&apos;expérience et veille tech.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-border rounded-2xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.02] flex flex-col hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Cover */}
              <Link
                href={`/blog/${post.slug}`}
                className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden shrink-0 block`}
              >
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/30 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-muted text-xs mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted/50 shrink-0" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime} de lecture
                  </span>
                </div>

                <h2 className="text-foreground font-semibold text-base leading-snug mb-3 flex-1">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light text-sm font-semibold transition-colors group"
                >
                  Lire l&apos;article
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center mt-14">
          <Link
            href="/#blog"
            className="text-muted hover:text-foreground text-sm transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
