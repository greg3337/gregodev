import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevisSimulator from "@/components/DevisSimulator";

export const metadata: Metadata = {
  title: "Simulateur de devis — Développeur Freelance Bordeaux",
  description:
    "Estimez le budget de votre projet web en 4 étapes. Site vitrine à partir de 490€, application SaaS dès 1 500€. Devis personnalisé gratuit en 48h à Bordeaux.",
  keywords: [
    "simulateur devis site web",
    "devis site vitrine Bordeaux",
    "tarif développeur freelance Bordeaux",
    "prix site internet Bordeaux",
    "devis application web Bordeaux",
    "estimation projet web",
  ],
  alternates: { canonical: "https://gregodev.com/devis" },
};

export default function DevisPage() {
  return (
    <>
      <Navbar />
      <Suspense>
        <DevisSimulator />
      </Suspense>
      <Footer />
    </>
  );
}
