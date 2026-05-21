import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de gregodev.com — Grégoire Pelizzardi, développeur freelance à Bordeaux.",
  alternates: { canonical: "https://gregodev.com/confidentialite" },
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

export default function Confidentialite() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Politique de confidentialité
          </h1>
          <p className="text-muted text-sm mb-10">Dernière mise à jour : 20 mai 2026</p>

          <H2>Responsable du traitement</H2>
          <P>
            <strong>Grégoire Pelizzardi</strong> — Entrepreneur Individuel<br />
            Bordeaux, France<br />
            E-mail : <a href="mailto:contact@gregodev.com" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">contact@gregodev.com</a>
          </P>

          <H2>Données collectées</H2>
          <P>
            Nous collectons les données suivantes :
          </P>
          <ul className="space-y-2 mb-5 ml-1">
            <Li>
              <strong>Formulaire de contact</strong> : nom, adresse e-mail, sujet et message que vous saisissez librement. Ces données sont transmises uniquement à Grégoire Pelizzardi pour répondre à votre demande.
            </Li>
            <Li>
              <strong>Google Analytics (avec consentement uniquement)</strong> : données de navigation anonymisées — pages visitées, durée de session, provenance du trafic. L&apos;adresse IP est anonymisée avant traitement.
            </Li>
          </ul>

          <H2>Finalités du traitement</H2>
          <ul className="space-y-2 mb-5 ml-1">
            <Li>Répondre aux demandes envoyées via le formulaire de contact</Li>
            <Li>Mesurer l&apos;audience du site pour améliorer son contenu (Analytics)</Li>
          </ul>

          <H2>Base légale</H2>
          <P>
            Le traitement des données du formulaire de contact repose sur votre <strong>consentement</strong> (article 6.1.a du RGPD) exprimé lors de l&apos;envoi du message. Le traitement Analytics repose sur votre consentement explicite via le bandeau cookies.
          </P>

          <H2>Durée de conservation</H2>
          <ul className="space-y-2 mb-5 ml-1">
            <Li>Données de contact : conservées 3 ans à compter du dernier échange</Li>
            <Li>Données Google Analytics : 26 mois conformément aux recommandations de la CNIL</Li>
          </ul>

          <H2>Destinataires des données</H2>
          <P>
            Vos données ne sont pas vendues ni transmises à des tiers, à l&apos;exception des sous-traitants suivants :
          </P>
          <ul className="space-y-2 mb-5 ml-1">
            <Li><strong>Brevo (Sendinblue)</strong> — envoi des e-mails transactionnels (formulaire de contact)</Li>
            <Li><strong>Google LLC</strong> — mesure d&apos;audience via Google Analytics (uniquement avec consentement)</Li>
            <Li><strong>Vercel Inc.</strong> — hébergement du site et de l&apos;API</Li>
          </ul>
          <P>
            Brevo et Google peuvent être amenés à traiter des données hors de l&apos;Union Européenne, sous garanties contractuelles appropriées (clauses contractuelles types).
          </P>

          <H2>Cookies</H2>
          <P>
            Ce site utilise uniquement des cookies analytiques (Google Analytics), qui ne sont déposés qu&apos;avec votre accord explicite. Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé.
          </P>
          <P>
            Vous pouvez accepter ou refuser les cookies via le bandeau qui s&apos;affiche à votre première visite. Ce choix est mémorisé dans votre navigateur et peut être modifié en effaçant les données de votre navigateur.
          </P>

          <H2>Hébergement et transferts hors UE</H2>
          <P>
            Le site est hébergé par <strong>Vercel Inc.</strong> (San Francisco, CA, États-Unis). Les transferts de données vers les États-Unis sont encadrés par les clauses contractuelles types adoptées par la Commission Européenne.
          </P>

          <H2>Vos droits</H2>
          <P>
            Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits suivants sur vos données personnelles :
          </P>
          <ul className="space-y-2 mb-5 ml-1">
            <Li>Droit d&apos;accès à vos données</Li>
            <Li>Droit de rectification en cas d&apos;inexactitude</Li>
            <Li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</Li>
            <Li>Droit à la limitation du traitement</Li>
            <Li>Droit à la portabilité de vos données</Li>
            <Li>Droit d&apos;opposition au traitement</Li>
            <Li>Droit de retirer votre consentement à tout moment</Li>
          </ul>
          <P>
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@gregodev.com" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">
              contact@gregodev.com
            </a>
            . Vous disposez également du droit d&apos;introduire une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
            >
              CNIL
            </a>.
          </P>

          <H2>Contact</H2>
          <P>
            Pour toute question relative à cette politique ou à vos données personnelles :<br />
            <a href="mailto:contact@gregodev.com" className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors">
              contact@gregodev.com
            </a>
          </P>
        </div>
      </main>
      <Footer />
    </>
  );
}
