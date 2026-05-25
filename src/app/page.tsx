import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Projets from "@/components/Projets";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.gregodev.com" },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Tarifs />
      <Projets />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
