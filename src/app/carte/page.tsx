import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grégoire Pelizzardi — Développeur Web Freelance Bordeaux",
  description:
    "Carte de visite numérique — Grégoire Pelizzardi, développeur web freelance à Bordeaux. Sites vitrines, applications web, outils IA, Next.js.",
  robots: { index: false, follow: false },
};

const LINKS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.58 12 19.79 19.79 0 0 1 1.5 3.26 2 2 0 0 1 3.48 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "06 58 93 67 88",
    href: "tel:+33658936788",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "contact@gregodev.com",
    href: "mailto:contact@gregodev.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    label: "gregodev.com",
    href: "https://www.gregodev.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "Grégoire Pelizzardi",
    href: "https://www.linkedin.com/in/gregoire-pelizzardi/",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    label: "@gregodev_officiel",
    href: "https://www.instagram.com/gregodev_officiel/",
  },
];

const TAGS = ["Sites vitrines", "Applications web", "Outils IA", "Next.js"];

export default function CartePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 font-sans"
      style={{ background: "#080810" }}
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #00D2FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #7B2FF7 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Card */}
        <div
          className="rounded-3xl p-px"
          style={{
            background: "linear-gradient(135deg, #00D2FF33 0%, #7B2FF733 100%)",
          }}
        >
          <div
            className="rounded-3xl px-8 py-10 flex flex-col items-center gap-6"
            style={{ background: "#0d0d1a" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-1 select-none">
              <span
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #00D2FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                &lt;
              </span>
              <span
                className="text-3xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #00D2FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GregoDev
              </span>
              <span
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #00D2FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                /&gt;
              </span>
            </div>

            {/* Divider */}
            <div
              className="w-16 h-px rounded-full"
              style={{ background: "linear-gradient(90deg, #00D2FF, #7B2FF7)" }}
            />

            {/* Identity */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Grégoire Pelizzardi
              </h1>
              <p className="mt-1 text-sm font-medium" style={{ color: "#a0a0c0" }}>
                Développeur Web Freelance&nbsp;·&nbsp;Bordeaux
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #00D2FF18, #7B2FF718)",
                    border: "1px solid #00D2FF33",
                    color: "#a0d4ff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="w-full flex flex-col gap-3">
              {LINKS.map(({ icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 group"
                  style={{
                    background: "#ffffff08",
                    border: "1px solid #ffffff10",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#00D2FF12";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00D2FF44";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff08";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff10";
                  }}
                >
                  <span style={{ color: "#00D2FF" }}>{icon}</span>
                  <span className="text-sm font-medium text-white truncate">{label}</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.gregodev.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center rounded-xl py-3.5 text-sm font-bold text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #00D2FF, #7B2FF7)",
                boxShadow: "0 0 24px #7B2FF740",
              }}
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs" style={{ color: "#4a4a6a" }}>
          gregodev.com &mdash; Développeur freelance à Bordeaux
        </p>
      </div>
    </main>
  );
}
