"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { posts } from "@/lib/blog";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Articles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Blog & Ressources
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              Conseils, retours d&apos;expérience et veille tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="card-border rounded-2xl overflow-hidden bg-black/[0.03] dark:bg-white/[0.02] flex flex-col"
              >
                <div
                  className={`h-36 bg-gradient-to-br ${post.gradient} relative overflow-hidden shrink-0`}
                >
                  <div className="absolute inset-0 bg-black/20" />
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
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-muted text-xs mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted/50 shrink-0" />
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime} de lecture
                    </span>
                  </div>

                  <h3 className="text-foreground font-semibold text-base leading-snug mb-3 flex-1">
                    {post.title}
                  </h3>

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
              </motion.article>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-black/10 dark:border-white/10 text-muted hover:text-foreground hover:border-accent/30 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Voir tous les articles
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
