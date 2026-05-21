"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Projets", href: "#projets" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // resolvedTheme is always defined after mounting (unlike theme which can be undefined)
  const isDark = !mounted || resolvedTheme !== "light";
  const ThemeIcon = isDark ? Sun : Moon;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-black/10 dark:border-white/10"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-accent font-bold text-xl tracking-tight">
          GregoDev
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:0658936788"
            className="flex items-center gap-1.5 text-muted hover:text-foreground text-sm transition-colors duration-200 px-2 py-2"
            aria-label="Appeler GregoDev"
          >
            <Phone size={15} />
            <span>06 58 93 67 88</span>
          </a>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
            aria-label="Changer de thème"
          >
            {mounted ? (
              <ThemeIcon size={18} />
            ) : (
              <span className="block w-[18px] h-[18px]" />
            )}
          </button>
          <a
            href="/#contact"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-glow hover:bg-accent/90 transition-all duration-200"
          >
            Demander un devis
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-lg text-muted hover:text-foreground transition-all"
            aria-label="Changer de thème"
          >
            {mounted ? (
              <ThemeIcon size={18} />
            ) : (
              <span className="block w-[18px] h-[18px]" />
            )}
          </button>
          <button
            className="p-1 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md bg-background/95 border-t border-black/10 dark:border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-muted hover:text-foreground text-base transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0658936788"
            className="flex items-center justify-center gap-2 text-muted text-sm py-1 transition-colors"
          >
            <Phone size={15} />
            06 58 93 67 88
          </a>
          <a
            href="/#contact"
            className="bg-accent text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2"
          >
            Demander un devis
          </a>
        </div>
      )}
    </motion.nav>
  );
}
