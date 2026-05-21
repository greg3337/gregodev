import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "CGV",
  description:
    "Conditions Générales de Vente de GregoDev — Grégoire Pelizzardi, développeur freelance à Bordeaux. Tarifs, acompte, délais et médiation.",
  alternates: { canonical: "https://gregodev.com/cgv" },
  robots: { index: false, follow: false },
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

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-foreground/80 text-sm leading-relaxed flex gap-2">
      <span className="text-accent mt-0.5 shrink-0">→</span>
      <span>{children}</span>
    </li>
  );
}

export default function CGV() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            Conditions Générales de Vente
          </h1>
          <p className="text-muted text-sm mb-1">GregoDev — Grégoire Pelizzardi</p>
          <p className="text-muted text-sm mb-10">Dernière mise à jour : 20 mai 2026</p>

          <H2>1. Objet</H2>
          <P>
            Les présentes CGV régissent l&apos;ensemble des prestations proposées par GregoDev —
            Grégoire Pelizzardi à ses clients. Toute commande implique l&apos;acceptation pleine et
            entière des présentes CGV.
          </P>

          <H2>2. Identification du Prestataire</H2>
          <ul className="space-y-2 mb-5 ml-1">
            <Li>GregoDev — Grégoire Pelizzardi</Li>
            <Li>Statut : Entreprise Individuelle (EI)</Li>
            <Li>SIRET : 989 527 809 00010</Li>
            <Li>Adresse : Bordeaux, France</Li>
            <Li>
              Email :{" "}
              <a
                href="mailto:contact@gregodev.com"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                contact@gregodev.com
              </a>
            </Li>
          </ul>

          <H2>3. Prestations proposées</H2>
          <ul className="space-y-2 mb-4 ml-1">
            <Li>
              <strong>Starter</strong> : page unique ou site 3 pages — à partir de 490&nbsp;€
            </Li>
            <Li>
              <strong>Vitrine Pro</strong> : site 5 à 8 pages — à partir de 1&nbsp;200&nbsp;€
            </Li>
            <Li>
              <strong>Sur-mesure</strong> : application web, SaaS, outils internes — à partir de
              1&nbsp;500&nbsp;€
            </Li>
          </ul>
          <P>
            Prix en euros HT. GregoDev est en franchise de TVA (art. 293 B CGI).
          </P>

          <H2>4. Devis et commande</H2>
          <P>
            Devis gratuit et personnalisé. Valable 30 jours. Commande confirmée par devis signé +
            versement de l&apos;acompte.
          </P>

          <H2>5. Conditions de paiement</H2>
          <ul className="space-y-2 mb-4 ml-1">
            <Li>Acompte de 30&nbsp;% à la signature du devis</Li>
            <Li>Solde de 70&nbsp;% à la livraison avant mise en ligne</Li>
          </ul>
          <P>
            Paiement par virement bancaire ou Stripe. Retard de paiement : pénalités au taux légal
            + indemnité forfaitaire de 40&nbsp;€ (art. L441-10 Code de commerce).
          </P>

          <H2>6. Délais de réalisation</H2>
          <ul className="space-y-2 mb-4 ml-1">
            <Li>Starter : environ 1 semaine</Li>
            <Li>Vitrine Pro : 2 à 3 semaines</Li>
            <Li>Sur-mesure : 4 à 12 semaines selon complexité</Li>
          </ul>
          <P>
            Les délais courent à compter de la réception de l&apos;acompte et des éléments fournis
            par le Client.
          </P>

          <H2>7. Révisions et corrections</H2>
          <P>
            2 tours de révisions inclus par prestation. Les révisions sont transmises par email dans
            un délai de 7 jours ouvrés suivant chaque livraison. Passé ce délai, la livraison est
            réputée validée.
          </P>

          <H2>8. Obligations du Client</H2>
          <P>
            Le Client s&apos;engage à fournir les éléments nécessaires (textes, images, logos,
            accès), désigner un interlocuteur unique, répondre aux demandes de validation dans les
            délais convenus, et s&apos;assurer que les éléments fournis ne portent pas atteinte aux
            droits de tiers.
          </P>

          <H2>9. Livraison et mise en ligne</H2>
          <P>La mise en ligne est effectuée après réception du solde intégral.</P>

          <H2>10. Propriété intellectuelle</H2>
          <P>
            Jusqu&apos;au paiement intégral, le Prestataire conserve la pleine propriété des
            créations réalisées. Après paiement complet, le Client acquiert les droits
            d&apos;utilisation sur les livrables. Le Prestataire se réserve le droit de mentionner
            la réalisation dans son portfolio, sauf demande contraire expresse du Client.
          </P>

          <H2>11. Garantie et maintenance</H2>
          <P>
            Garantie de bon fonctionnement de 30 jours après la mise en ligne. Des contrats de
            maintenance sont disponibles sur devis au-delà de cette période.
          </P>

          <H2>12. Résiliation</H2>
          <P>
            En cas d&apos;annulation après signature du devis, l&apos;acompte versé reste
            définitivement acquis au Prestataire. En cas d&apos;annulation en cours de prestation,
            les travaux réalisés sont facturés au prorata de l&apos;avancement.
          </P>

          <H2>13. Responsabilité</H2>
          <P>
            La responsabilité du Prestataire est limitée au montant de la prestation commandée. Le
            Prestataire ne saurait être tenu responsable des dommages indirects, pertes
            d&apos;exploitation ou manques à gagner subis par le Client.
          </P>

          <H2>14. Médiation</H2>
          <P>
            En cas de litige, le Client peut recourir gratuitement au service de médiation :
          </P>
          <ul className="space-y-2 mb-4 ml-1">
            <Li>
              <strong>MEDICYS</strong> — Centre de Médiation et de Règlement amiable des litiges du
              Numérique :{" "}
              <a
                href="https://www.medicys.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                www.medicys.fr
              </a>
            </Li>
            <Li>
              Plateforme européenne de règlement en ligne des litiges :{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
            </Li>
          </ul>

          <H2>15. Droit applicable</H2>
          <P>
            Les présentes CGV sont soumises au droit français. En cas de litige non résolu par
            médiation, les tribunaux de Bordeaux sont seuls compétents.
          </P>

          <H2>16. Contact</H2>
          <P>
            <a
              href="mailto:contact@gregodev.com"
              className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              contact@gregodev.com
            </a>
          </P>
        </div>
      </main>
      <Footer />
    </>
  );
}
