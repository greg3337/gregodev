import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DevisSimulator from "@/components/DevisSimulator";

export const metadata: Metadata = {
  title: "Simulateur de devis — GregoDev",
  description:
    "Estimez le coût de votre projet web en 4 étapes : type de projet, volume, fonctionnalités et délai.",
};

export default function DevisPage() {
  return (
    <>
      <Navbar />
      <DevisSimulator />
      <Footer />
    </>
  );
}
