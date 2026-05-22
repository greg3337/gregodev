import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "GregoDev — Développeur Freelance Bordeaux",
    template: "%s · GregoDev",
  },
  description:
    "Grégoire, développeur freelance à Bordeaux. Création de sites vitrines, applications SaaS et outils internes pour freelances et TPE. Devis gratuit en 48h.",
  keywords: [
    "développeur freelance Bordeaux",
    "création site web Bordeaux",
    "site vitrine Bordeaux",
    "développeur web Bordeaux",
    "freelance web Bordeaux",
    "application web Bordeaux",
    "développeur Next.js Bordeaux",
    "SaaS Bordeaux",
    "GregoDev",
  ],
  authors: [{ name: "Grégoire Pelizzardi", url: "https://gregodev.com" }],
  creator: "Grégoire Pelizzardi",
  metadataBase: new URL("https://gregodev.com"),
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "GregoDev — Développeur Freelance Bordeaux",
    description:
      "Grégoire, développeur freelance à Bordeaux. Création de sites vitrines, applications SaaS et outils internes pour freelances et TPE. Devis gratuit en 48h.",
    url: "https://gregodev.com",
    siteName: "GregoDev",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GregoDev - Développeur Freelance Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GregoDev — Développeur Freelance Bordeaux",
    description:
      "Grégoire, développeur freelance à Bordeaux. Création de sites vitrines, applications SaaS et outils internes pour freelances et TPE. Devis gratuit en 48h.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground antialiased">
        <Providers>
          <PageTransition>{children}</PageTransition>
          <ScrollToTop />
          <CookieBanner />
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
