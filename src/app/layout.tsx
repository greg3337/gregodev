import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Providers from "@/components/Providers";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "GregoDev — Développeur Freelance Bordeaux",
  description:
    "Sites vitrines, applications SaaS et outils internes pour freelances et petites entreprises à Bordeaux.",
  metadataBase: new URL("https://gregodev.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "GregoDev — Développeur Freelance Bordeaux",
    description:
      "Sites vitrines, applications SaaS et outils internes pour freelances et petites entreprises à Bordeaux.",
    url: "https://gregodev.com",
    siteName: "GregoDev",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://gregodev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "GregoDev — Développeur Freelance Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GregoDev — Développeur Freelance Bordeaux",
    description:
      "Sites vitrines, applications SaaS et outils internes pour freelances et petites entreprises à Bordeaux.",
    images: ["https://gregodev.com/og-image.png"],
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
          {children}
          <ScrollToTop />
          <CookieBanner />
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
