// Imported ONLY via dynamic import() inside event handlers — never at module level.

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DevisRecapProps {
  quoteNumber: string;
  emissionDate: string;
  validityDate: string;
  name: string;
  email: string;
  address: string;
  packId: string;
  packLabel: string;
  packPrice: string;
  timeline: string;
  withMaintenance: boolean;
}

// ─── Static provider data ─────────────────────────────────────────────────────

const PROVIDER = {
  name: "Grégoire Pelizzardi",
  brand: "GregoDev",
  status: "Entrepreneur Individuel",
  address: "108 B Cours Saint Louis, Bâtiment G1",
  city: "33000 Bordeaux",
  siret: "989 527 809 00010",
  tva: "Non applicable, art. 293 B du CGI",
  email: "contact@gregodev.com",
  web: "gregodev.com",
};

// ─── Pack service catalogue ───────────────────────────────────────────────────

const PACK_DATA: Record<string, {
  title: string;
  features: string[];
  price: number | null;
  display: string;
  unit: string;
  delay: string;
}> = {
  starter: {
    title: "Développement site vitrine — Pack Starter",
    features: [
      "Conception et intégration d'un site vitrine (1 à 3 pages)",
      "Design responsive mobile-first",
      "Optimisation SEO de base (balises, métadonnées)",
      "Formulaire de contact",
      "Déploiement et mise en ligne inclus (Vercel)",
    ],
    price: 490,
    display: "490,00",
    unit: "€ HT",
    delay: "7 jours ouvrés à compter de la signature du devis",
  },
  "vitrine-pro": {
    title: "Développement site vitrine — Pack Vitrine Pro",
    features: [
      "Conception et intégration d'un site vitrine (5 à 8 pages)",
      "Design responsive avec animations (Framer Motion)",
      "Optimisation SEO avancée (sitemap XML, Core Web Vitals)",
      "Formulaire de contact avancé",
      "Intégration Google Analytics",
      "Déploiement et mise en ligne inclus (Vercel)",
    ],
    price: 1500,
    display: "1 500,00",
    unit: "€ HT",
    delay: "2 à 3 semaines à compter de la signature du devis",
  },
  "sur-mesure": {
    title: "Développement sur mesure — Application web",
    features: [
      "Développement d'une application web (périmètre à cadrer ensemble)",
      "Authentification et gestion des utilisateurs",
      "Base de données et API back-end",
      "Intégrations IA selon cahier des charges",
      "Dashboard d'administration",
      "Support technique 3 mois post-livraison inclus",
    ],
    price: null,
    display: "À partir de 2 000,00",
    unit: "€ HT",
    delay: "4 à 8 semaines à compter de la signature du devis (selon périmètre)",
  },
  maintenance: {
    title: 'Abonnement maintenance "Sérénité"',
    features: [
      "Hébergement haute disponibilité (Vercel Pro)",
      "Mises à jour de sécurité mensuelles",
      "Sauvegardes automatiques quotidiennes",
      "1 heure de modifications par mois incluse",
      "Support prioritaire — réponse sous 48h ouvrées",
      "Rapport mensuel d'activité",
    ],
    price: 59,
    display: "59,00",
    unit: "€ HT / mois",
    delay: "Abonnement mensuel — sans délai de livraison, sans engagement",
  },
};

const MAINTENANCE_ADDON = {
  title: 'Abonnement maintenance "Sérénité" (mensuel)',
  features: [
    "Hébergement haute disponibilité (Vercel Pro)",
    "Mises à jour de sécurité mensuelles",
    "Sauvegardes automatiques quotidiennes",
    "1 heure de modifications par mois incluse",
    "Support prioritaire — réponse sous 48h ouvrées",
  ],
  price: 59,
  display: "59,00",
  unit: "€ HT / mois",
};

// ─── Colors ───────────────────────────────────────────────────────────────────

const C = {
  accent: "#00D2FF",
  accentBg: "rgba(0,210,255,0.08)",
  accentBorder: "rgba(0,210,255,0.30)",
  dark: "#0F0F1A",
  medium: "#334155",
  muted: "#64748B",
  light: "#94A3B8",
  lighter: "#CBD5E1",
  border: "#E2E8F0",
  surface: "#F8FAFC",
  tableHead: "#1E293B",
  white: "#FFFFFF",
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    fontFamily: "Helvetica",
    paddingBottom: 62,
    fontSize: 9,
  },

  // ── Structure
  topBar: { height: 5, backgroundColor: C.accent },

  header: {
    flexDirection: "row",
    paddingHorizontal: 36,
    paddingTop: 22,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    gap: 20,
  },
  headerHalf: { flex: 1 },

  // Provider block
  providerBrand: { fontSize: 18, fontFamily: "Helvetica-Bold", color: C.dark },
  providerAccent: { fontSize: 18, fontFamily: "Helvetica-Bold", color: C.accent },
  providerLine: { fontSize: 8, color: C.muted, marginTop: 2 },
  providerBold: { fontFamily: "Helvetica-Bold", color: C.medium },

  // Client block
  clientLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  clientName: { fontSize: 10, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 2 },
  clientLine: { fontSize: 8, color: C.muted, marginBottom: 1 },

  // ── Quote metadata bar
  metaBar: {
    flexDirection: "row",
    backgroundColor: C.surface,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingHorizontal: 36,
    paddingVertical: 9,
    gap: 32,
  },
  metaItem: {},
  metaKey: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.muted, letterSpacing: 1.2, marginBottom: 2 },
  metaVal: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.dark },

  // ── Body
  body: { paddingHorizontal: 36, paddingTop: 18 },

  // ── Table
  tableHeader: {
    flexDirection: "row",
    backgroundColor: C.tableHead,
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  tableHeaderDesig: { flex: 1, fontSize: 7, fontFamily: "Helvetica-Bold", color: C.lighter, letterSpacing: 1 },
  tableHeaderPrice: { width: 90, textAlign: "right", fontSize: 7, fontFamily: "Helvetica-Bold", color: C.lighter, letterSpacing: 1 },

  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
  tableRowAlt: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingVertical: 9,
    paddingHorizontal: 10,
    backgroundColor: C.surface,
  },
  tableDesig: { flex: 1 },
  tableTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.dark, marginBottom: 4 },
  tableFeature: { fontSize: 7.5, color: C.muted, marginBottom: 2, paddingLeft: 8 },
  tablePrice: {
    width: 90,
    textAlign: "right",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    paddingTop: 1,
  },
  tablePriceUnit: { fontSize: 7, color: C.muted, marginTop: 3, textAlign: "right" },

  // ── Totals
  totals: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 6,
    overflow: "hidden",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  totalRowLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  totalKey: { fontSize: 8.5, color: C.muted },
  totalVal: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.dark },
  tvaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    backgroundColor: C.surface,
  },
  tvaKey: { fontSize: 8, color: C.muted, fontFamily: "Helvetica-Oblique" },
  tvaVal: { fontSize: 8, color: C.muted, fontFamily: "Helvetica-Oblique" },
  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: C.dark,
  },
  grandTotalKey: { fontSize: 9, fontFamily: "Helvetica-Bold", color: C.white },
  grandTotalVal: { fontSize: 14, fontFamily: "Helvetica-Bold", color: C.accent },

  // ── Conditions
  conditions: {
    marginTop: 12,
    flexDirection: "row",
    gap: 10,
  },
  conditionBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 6,
    padding: 10,
  },
  conditionTitle: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  conditionText: { fontSize: 8, color: C.medium, lineHeight: 1.5 },

  // ── Bon pour accord
  bonPourAccord: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: C.accentBorder,
    borderRadius: 6,
    backgroundColor: C.accentBg,
    padding: 14,
  },
  bpaTitle: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  bpaCols: { flexDirection: "row", gap: 20 },
  bpaCol: { flex: 1 },
  bpaLabel: { fontSize: 7.5, color: C.muted, marginBottom: 16 },
  bpaLine: { borderBottomWidth: 1, borderBottomColor: C.lighter, marginBottom: 4 },
  bpaLineSub: { fontSize: 7, color: C.light },

  // ── Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: C.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: C.white,
  },
  footerLeft: { fontSize: 7, color: C.light },
  footerRight: { fontSize: 7, fontFamily: "Helvetica-Bold", color: C.accent },
});

// ─── Component ────────────────────────────────────────────────────────────────

export function DevisRecapPDF({
  quoteNumber,
  emissionDate,
  validityDate,
  name,
  email,
  address,
  packId,
  withMaintenance,
  timeline,
}: DevisRecapProps) {
  const pack = PACK_DATA[packId] ?? PACK_DATA["sur-mesure"];
  const isMaintenance = packId === "maintenance";
  const hasAddon = withMaintenance && !isMaintenance;

  // Total HT computation
  let totalHT = "";
  let totalTTC = "";
  if (isMaintenance) {
    totalHT = "59,00 € HT / mois";
    totalTTC = "59,00 € TTC / mois";
  } else if (packId === "sur-mesure") {
    totalHT = hasAddon ? "À partir de 2 000,00 € HT + 59,00 € HT/mois" : "À partir de 2 000,00 € HT";
    totalTTC = totalHT.replace("HT", "TTC");
  } else {
    const base = pack.price ?? 0;
    const baseDisplay = base.toLocaleString("fr-FR", { minimumFractionDigits: 2 });
    if (hasAddon) {
      totalHT = `${baseDisplay} € HT + 59,00 € HT/mois`;
      totalTTC = `${baseDisplay} € TTC + 59,00 € TTC/mois`;
    } else {
      totalHT = `${baseDisplay} € HT`;
      totalTTC = `${baseDisplay} € TTC`;
    }
  }

  const paymentConditions = isMaintenance
    ? "Facturation mensuelle à terme échu.\nRésiliation possible à tout moment sans frais."
    : "Acompte de 30 % à la signature du devis.\nSolde de 70 % à la livraison du projet.\nPaiement par virement bancaire ou chèque.";

  return (
    <Document
      title={`${quoteNumber} — Devis GregoDev pour ${name}`}
      author={PROVIDER.name}
      subject="Devis de prestation de services informatiques"
    >
      <Page size="A4" style={s.page}>

        {/* ── Top bar */}
        <View style={s.topBar} />

        {/* ── Header: prestataire + client */}
        <View style={s.header}>
          {/* Prestataire */}
          <View style={s.headerHalf}>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <Text style={s.providerBrand}>Grego</Text>
              <Text style={s.providerAccent}>Dev</Text>
            </View>
            <Text style={s.providerLine}><Text style={s.providerBold}>{PROVIDER.name}</Text> — {PROVIDER.status}</Text>
            <Text style={s.providerLine}>{PROVIDER.address}</Text>
            <Text style={s.providerLine}>{PROVIDER.city}</Text>
            <Text style={[s.providerLine, { marginTop: 5 }]}>SIRET : <Text style={s.providerBold}>{PROVIDER.siret}</Text></Text>
            <Text style={s.providerLine}>TVA : {PROVIDER.tva}</Text>
            <Text style={[s.providerLine, { marginTop: 5 }]}>{PROVIDER.email} · {PROVIDER.web}</Text>
          </View>

          {/* Client */}
          <View style={s.headerHalf}>
            <Text style={s.clientLabel}>DEVIS ADRESSÉ À</Text>
            <Text style={s.clientName}>{name}</Text>
            <Text style={s.clientLine}>{email}</Text>
            {address ? (
              <Text style={[s.clientLine, { marginTop: 4 }]}>{address}</Text>
            ) : null}
          </View>
        </View>

        {/* ── Metadata bar */}
        <View style={s.metaBar}>
          <View style={s.metaItem}>
            <Text style={s.metaKey}>N° DEVIS</Text>
            <Text style={s.metaVal}>{quoteNumber}</Text>
          </View>
          <View style={s.metaItem}>
            <Text style={s.metaKey}>DATE D'ÉMISSION</Text>
            <Text style={s.metaVal}>{emissionDate}</Text>
          </View>
          <View style={s.metaItem}>
            <Text style={s.metaKey}>VALABLE JUSQU'AU</Text>
            <Text style={s.metaVal}>{validityDate}</Text>
          </View>
          {timeline ? (
            <View style={s.metaItem}>
              <Text style={s.metaKey}>DÉLAI SOUHAITÉ</Text>
              <Text style={s.metaVal}>{timeline}</Text>
            </View>
          ) : null}
        </View>

        {/* ── Body */}
        <View style={s.body}>

          {/* Table */}
          <View style={s.tableHeader}>
            <Text style={s.tableHeaderDesig}>DÉSIGNATION DE LA PRESTATION</Text>
            <Text style={s.tableHeaderPrice}>MONTANT HT</Text>
          </View>

          {/* Main pack row */}
          <View style={s.tableRow}>
            <View style={s.tableDesig}>
              <Text style={s.tableTitle}>{pack.title}</Text>
              {pack.features.map((f, i) => (
                <Text key={i} style={s.tableFeature}>• {f}</Text>
              ))}
            </View>
            <View>
              <Text style={s.tablePrice}>{pack.display}</Text>
              <Text style={s.tablePriceUnit}>{pack.unit}</Text>
            </View>
          </View>

          {/* Maintenance addon row */}
          {hasAddon && (
            <View style={s.tableRowAlt}>
              <View style={s.tableDesig}>
                <Text style={s.tableTitle}>{MAINTENANCE_ADDON.title}</Text>
                {MAINTENANCE_ADDON.features.map((f, i) => (
                  <Text key={i} style={s.tableFeature}>• {f}</Text>
                ))}
                <Text style={[s.tableFeature, { marginTop: 3, fontFamily: "Helvetica-Oblique" }]}>
                  Abonnement démarrant à la livraison du projet — résiliable à tout moment
                </Text>
              </View>
              <View>
                <Text style={s.tablePrice}>{MAINTENANCE_ADDON.display}</Text>
                <Text style={s.tablePriceUnit}>{MAINTENANCE_ADDON.unit}</Text>
              </View>
            </View>
          )}

          {/* Totals */}
          <View style={s.totals}>
            <View style={s.totalRow}>
              <Text style={s.totalKey}>Total HT</Text>
              <Text style={s.totalVal}>{totalHT}</Text>
            </View>
            <View style={s.tvaRow}>
              <Text style={s.tvaKey}>TVA non applicable — art. 293 B du CGI</Text>
              <Text style={s.tvaVal}>0,00 €</Text>
            </View>
            <View style={s.grandTotalRow}>
              <Text style={s.grandTotalKey}>TOTAL TTC</Text>
              <Text style={s.grandTotalVal}>{totalTTC}</Text>
            </View>
          </View>

          {/* Conditions */}
          <View style={s.conditions}>
            <View style={s.conditionBox}>
              <Text style={s.conditionTitle}>CONDITIONS DE PAIEMENT</Text>
              <Text style={s.conditionText}>{paymentConditions}</Text>
            </View>
            <View style={s.conditionBox}>
              <Text style={s.conditionTitle}>DÉLAI DE RÉALISATION ESTIMÉ</Text>
              <Text style={s.conditionText}>{pack.delay}</Text>
              {packId === "sur-mesure" && (
                <Text style={[s.conditionText, { marginTop: 4, fontFamily: "Helvetica-Oblique", color: C.light }]}>
                  Le délai définitif sera fixé lors du cadrage du projet.
                </Text>
              )}
            </View>
          </View>

          {/* Bon pour accord */}
          <View style={s.bonPourAccord}>
            <Text style={s.bpaTitle}>BON POUR ACCORD — ACCEPTATION DU DEVIS</Text>
            <View style={s.bpaCols}>
              <View style={s.bpaCol}>
                <Text style={s.bpaLabel}>Le client soussigné accepte le présent devis :</Text>
                <View style={s.bpaLine} />
                <Text style={s.bpaLineSub}>Date</Text>
                <View style={[s.bpaLine, { marginTop: 14 }]} />
                <Text style={s.bpaLineSub}>Signature précédée de la mention « Bon pour accord »</Text>
              </View>
              <View style={s.bpaCol}>
                <Text style={s.bpaLabel}>Pour le prestataire :</Text>
                <Text style={[s.conditionText, { marginBottom: 6 }]}>{PROVIDER.name} ({PROVIDER.brand})</Text>
                <View style={s.bpaLine} />
                <Text style={s.bpaLineSub}>Date : {emissionDate}</Text>
              </View>
            </View>
          </View>

        </View>

        {/* ── Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerLeft}>
            {PROVIDER.name} — {PROVIDER.status} — SIRET {PROVIDER.siret} — Devis indicatif valable 30 jours
          </Text>
          <Text style={s.footerRight}>{PROVIDER.web}</Text>
        </View>

      </Page>
    </Document>
  );
}
