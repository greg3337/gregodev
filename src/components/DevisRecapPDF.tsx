// This module is ONLY ever imported dynamically inside event handlers.
// It must never be imported at module level to avoid SSR issues.

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

export interface DevisRecapProps {
  name: string;
  email: string;
  packLabel: string;
  packPrice: string;
  timeline: string;
  withMaintenance: boolean;
  date: string;
}

const C = {
  accent: "#00D2FF",
  accentDim: "rgba(0,210,255,0.12)",
  accentBorder: "rgba(0,210,255,0.35)",
  dark: "#0F0F1A",
  medium: "#334155",
  muted: "#64748B",
  light: "#94A3B8",
  border: "#E2E8F0",
  surface: "#F8FAFC",
  white: "#FFFFFF",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    fontFamily: "Helvetica",
    paddingBottom: 68,
  },
  // Top cyan bar
  topBar: {
    height: 6,
    backgroundColor: C.accent,
  },
  // Header row
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 40,
    paddingTop: 26,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  logoLine: {
    flexDirection: "row",
  },
  logoBase: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
  },
  logoAccent: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
  },
  logoSub: {
    fontSize: 9,
    color: C.muted,
    marginTop: 3,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  headerLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 1.2,
    marginBottom: 3,
  },
  headerDate: {
    fontSize: 10,
    color: C.dark,
  },
  // Body
  body: {
    paddingHorizontal: 40,
    paddingTop: 26,
  },
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 1.8,
    marginBottom: 14,
  },
  // Cards
  card: {
    backgroundColor: C.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  rowLast: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowKey: {
    fontSize: 10,
    color: C.muted,
  },
  rowVal: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
  },
  rowValAccent: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
  },
  // Maintenance chip
  chip: {
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: C.accentDim,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: C.accentBorder,
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginTop: 8,
  },
  chipText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
  },
  // Total card (dark)
  totalCard: {
    backgroundColor: C.dark,
    borderRadius: 8,
    padding: 20,
    marginBottom: 14,
  },
  totalLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.light,
    letterSpacing: 1.8,
    marginBottom: 12,
  },
  totalMain: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: C.white,
  },
  totalPlus: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
    marginLeft: 8,
    marginRight: 2,
  },
  totalSub: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
  },
  totalNote: {
    fontSize: 8,
    color: C.light,
    marginTop: 8,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: C.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft: {
    fontSize: 8,
    color: C.light,
  },
  footerRight: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.accent,
  },
});

export function DevisRecapPDF({
  name,
  email,
  packLabel,
  packPrice,
  timeline,
  withMaintenance,
  date,
}: DevisRecapProps) {
  const isMaintenance = packLabel.includes("Sérénité") && !withMaintenance;
  const hasAddon = withMaintenance && !packLabel.includes("Sérénité");

  return (
    <Document
      title={`Devis GregoDev — ${name}`}
      author="GregoDev"
      subject="Récapitulatif de devis indicatif"
    >
      <Page size="A4" style={s.page}>
        {/* Cyan bar */}
        <View style={s.topBar} />

        {/* Header */}
        <View style={s.header}>
          <View>
            <View style={s.logoLine}>
              <Text style={s.logoBase}>Grego</Text>
              <Text style={s.logoAccent}>Dev</Text>
            </View>
            <Text style={s.logoSub}>Développeur freelance · Bordeaux</Text>
          </View>
          <View style={s.headerRight}>
            <Text style={s.headerLabel}>DEVIS INDICATIF</Text>
            <Text style={s.headerDate}>{date}</Text>
          </View>
        </View>

        {/* Body */}
        <View style={s.body}>
          <Text style={s.sectionTitle}>RÉCAPITULATIF DE VOTRE DEMANDE</Text>

          {/* Client */}
          <View style={s.card}>
            <Text style={s.cardTitle}>INFORMATIONS CLIENT</Text>
            <View style={s.row}>
              <Text style={s.rowKey}>Nom</Text>
              <Text style={s.rowVal}>{name}</Text>
            </View>
            <View style={s.rowLast}>
              <Text style={s.rowKey}>Email</Text>
              <Text style={s.rowVal}>{email}</Text>
            </View>
          </View>

          {/* Offer */}
          <View style={s.card}>
            <Text style={s.cardTitle}>OFFRE CHOISIE</Text>
            <View style={s.row}>
              <Text style={s.rowKey}>Pack</Text>
              <Text style={s.rowVal}>{packLabel}</Text>
            </View>
            <View style={timeline && !isMaintenance ? s.row : s.rowLast}>
              <Text style={s.rowKey}>Prix estimé</Text>
              <Text style={s.rowVal}>{packPrice}</Text>
            </View>
            {isMaintenance && (
              <View style={s.rowLast}>
                <Text style={s.rowKey}>Type</Text>
                <Text style={s.rowVal}>Abonnement mensuel</Text>
              </View>
            )}
            {!isMaintenance && timeline ? (
              <View style={s.rowLast}>
                <Text style={s.rowKey}>Délai souhaité</Text>
                <Text style={s.rowVal}>{timeline}</Text>
              </View>
            ) : null}
          </View>

          {/* Options — only for non-maintenance packs */}
          {!isMaintenance && (
            <View style={s.card}>
              <Text style={s.cardTitle}>OPTIONS</Text>
              <View style={hasAddon ? s.row : s.rowLast}>
                <Text style={s.rowKey}>Maintenance Sérénité</Text>
                <Text style={hasAddon ? s.rowValAccent : s.rowVal}>
                  {hasAddon ? "Oui · +59€/mois" : "Non"}
                </Text>
              </View>
              {hasAddon && (
                <View style={s.chip}>
                  <Text style={s.chipText}>
                    Hébergement · Sécurité · Sauvegardes · 1h de modifications/mois · Sans engagement
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Total */}
          <View style={s.totalCard}>
            <Text style={s.totalLabel}>INVESTISSEMENT TOTAL ESTIMÉ</Text>
            {hasAddon ? (
              <View style={s.totalRow}>
                <Text style={s.totalMain}>{packPrice}</Text>
                <Text style={s.totalPlus}> +</Text>
                <Text style={s.totalSub}> 59€/mois</Text>
              </View>
            ) : (
              <Text style={s.totalMain}>{packPrice}</Text>
            )}
            <Text style={s.totalNote}>
              {isMaintenance
                ? "Abonnement mensuel · Résiliation à tout moment"
                : hasAddon
                  ? "Paiement unique + abonnement mensuel dès la livraison · 30% à la signature, 70% à la livraison"
                  : "30% à la signature du devis · 70% solde à la livraison"}
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerLeft}>
            Devis indicatif, valable 30 jours · contact@gregodev.com
          </Text>
          <Text style={s.footerRight}>gregodev.com</Text>
        </View>
      </Page>
    </Document>
  );
}
