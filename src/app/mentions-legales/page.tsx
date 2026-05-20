import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales — GregoDev",
  description: "Mentions légales du site gregodev.com — Grégoire Pelizzardi, développeur freelance.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-foreground mt-10 mb-3 pb-2 border-b border-black/10 dark:border-white/10">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-foreground/80 leading-relaxed text-sm mb-3">{children}</p>;
}

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-muted hover:text-foreground text-sm mb-10 transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Accueil
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Mentions légales</h1>
          <p className="text-muted text-sm mb-10">Dernière mise à jour : 20 mai 2026</p>

          <H2>Éditeur du site</H2>
          <P>
            <strong>Grégoire Pelizzardi</strong><br />
            Entrepreneur Individuel (EI)<br />
            Bordeaux, France<br />
            E-mail : <a href="mailto:contact@gregodev.com" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">contact@gregodev.com</a>
          </P>
          <P>
            <strong>SIRET :</strong> 989 527 809 00010<br />
            <strong>SIREN :</strong> 989 527 809<br />
            <strong>N° TVA intracommunautaire :</strong> FR95989527809<br />
            <strong>Code APE / NAF :</strong> 6201Z — Programmation informatique
          </P>

          <H2>Directeur de la publication</H2>
          <P>Grégoire Pelizzardi</P>

          <H2>Hébergement</H2>
          <P>
            Le site gregodev.com est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 Pine Street Suite 701<br />
            San Francisco, CA 94104<br />
            États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">vercel.com</a>
          </P>

          <H2>Propriété intellectuelle</H2>
          <P>
            L&apos;ensemble des contenus présents sur ce site (textes, images, code source, design) sont la propriété exclusive de Grégoire Pelizzardi, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable écrite est interdite.
          </P>

          <H2>Données personnelles</H2>
          <P>
            Les informations recueillies via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Pour en savoir plus, consultez notre{" "}
            <Link href="/confidentialite" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">
              Politique de confidentialité
            </Link>.
          </P>

          <H2>Cookies</H2>
          <P>
            Ce site utilise Google Analytics pour mesurer l&apos;audience de façon anonymisée, uniquement avec votre consentement. Vous pouvez gérer vos préférences à tout moment via le bandeau qui s&apos;affiche à votre première visite.
          </P>

          <H2>Limitation de responsabilité</H2>
          <P>
            Grégoire Pelizzardi s&apos;efforce de maintenir des informations exactes et à jour sur ce site, mais ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations publiées. La responsabilité de l&apos;éditeur ne peut être engagée en cas d&apos;erreur ou d&apos;omission.
          </P>

          <H2>Droit applicable</H2>
          <P>
            Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l&apos;utilisation du site sera soumis aux tribunaux compétents de Bordeaux.
          </P>
        </div>
      </main>
      <Footer />
    </>
  );
}
