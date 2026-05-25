@AGENTS.md

# Projet gregodev.com

Site vitrine + simulateur de devis pour GregoDev, développeur freelance à Bordeaux.

## Stack

- **Framework** : Next.js 16.2.6, App Router, TypeScript
- **Style** : Tailwind CSS v4 (`@custom-variant dark` pour le dark mode)
- **Animations** : Framer Motion 12 — `fadeInUp`, `staggerContainer`, `scaleIn` dans `src/lib/animations.ts`
- **Font** : Space Grotesk via `next/font/google`
- **Thème** : next-themes (`resolvedTheme`, `suppressHydrationWarning` sur `<html>`)

## Repo & déploiement

- **GitHub** : `greg3337/gregodev`
- **Déployé sur** : Vercel (branche `main`)
- **Variable d'environnement requise** : `BREVO_API_KEY` (à configurer dans les settings Vercel)

## Emails transactionnels

- **Fournisseur** : Brevo REST API (`POST https://api.brevo.com/v3/smtp/email`)
- **Route** : `/api/contact` — `src/app/api/contact/route.ts`
- **Expéditeur** : `contact@gregodev.com` (nom : GregoDev)
- **Comportement** : envoie deux emails en parallèle — récapitulatif à `contact@gregodev.com` + confirmation au client
- Ne jamais remplacer cette route par Formspree ou un autre service tiers

## Pages

| Route | Fichier | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage one-page (Hero, Services, Tarifs, Projets, Blog, Contact) |
| `/devis` | `src/app/devis/page.tsx` | Simulateur de devis 2 étapes (pack + délai) |
| `/blog` | `src/app/blog/page.tsx` | Liste des articles |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Article individuel |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | Mentions légales |
| `/confidentialite` | `src/app/confidentialite/page.tsx` | Politique de confidentialité |
| `/cgv` | `src/app/cgv/page.tsx` | CGV |

## Architecture fichiers clés

```
src/
├── app/
│   ├── layout.tsx          # Metadata globale, PageTransition, Providers
│   ├── page.tsx            # Homepage — assemble tous les composants sections
│   ├── globals.css         # Tailwind v4, .dot-grid, .glow-text, .card-border
│   └── api/contact/route.ts # Brevo — double email (récap + confirmation client)
├── components/
│   ├── Navbar.tsx          # Sticky, backdrop-blur, dark mode toggle
│   ├── Hero.tsx            # Badge, H1, CTAs → /devis, stats avec CountUp animé
│   ├── Services.tsx        # 4 cards grille 2×2
│   ├── Tarifs.tsx          # 3 plans, CTAs → /devis?pack=starter|vitrine-pro|sur-mesure
│   ├── Projets.tsx         # Cards projets
│   ├── Blog.tsx            # Preview 3 derniers articles
│   ├── Contact.tsx         # Formulaire → /api/contact, consentement RGPD obligatoire
│   ├── DevisSimulator.tsx  # Simulateur 2 étapes + formulaire résultat → /api/contact
│   ├── PageTransition.tsx  # AnimatePresence fade-in 0.2s entre routes (client)
│   ├── Footer.tsx          # Liens légaux, réseaux sociaux
│   └── Providers.tsx       # ThemeProvider next-themes
└── lib/
    ├── animations.ts       # fadeInUp, staggerContainer, scaleIn (Variants Framer Motion)
    └── blog.ts             # Type BlogPost + tableau posts (source of truth du blog)
```

## Système de blog

- Articles stockés comme pages Next.js : `src/app/blog/[slug]/page.tsx`
- Métadonnées centralisées dans `src/lib/blog.ts` (tableau `posts`)
- Pour ajouter un article : créer le dossier + `page.tsx`, puis ajouter l'entrée dans `posts` en tête de tableau
- Composants réutilisables dans chaque article : `P`, `H2`, `H3`, `Tip`, `NumberedPoint`

## Conventions importantes

- **Formulaires** : toujours inclure une checkbox consentement RGPD obligatoire avec lien `/confidentialite`
- **CTAs "Demander un devis"** : pointent vers `/devis` (jamais vers `#contact`)
- **Tarifs** : Starter 490€ · Vitrine Pro 1 500€ · Sur-mesure à partir de 2 000€
- **Paiement** : 30% à la signature, 70% à la livraison (mention dans Tarifs + DevisSimulator)
- **Animations** : utiliser `fadeInUp` + `staggerContainer` + `useInView({ once: true })` pour les sections ; `whileHover={{ y: -4 }}` sur les cards ; `whileTap={{ scale: 0.97 }}` sur les boutons primaires
- **Dark mode** : tester en mode clair ET sombre — utiliser `resolvedTheme` (pas `theme`)
- **CSP** (`next.config.ts`) : les appels Brevo sont server-side, pas besoin d'entrée CSP côté browser
