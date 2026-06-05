# Fabien — Site personal brand

Landing page one-page haut de gamme pour **Fabien, multi-entrepreneur**.
Univers : luxe minimaliste, noir / crème / or champagne, animé avec un hero 3D.

## ✦ Les 5 projets présentés

| # | Marque | Univers |
|---|--------|---------|
| 01 | **Maison Perla** | Champagne de prestige — [maisonperla.com](https://maisonperla.com/) |
| 02 | **Layonn** | Mode éco-responsable — [layonnstyle.com](https://layonnstyle.com/) |
| 03 | **Love Explorers** | Plateforme de lieux d'exception (romance) — [lovexplorers.com](https://www.lovexplorers.com/) |
| 04 | **Visionr Podcast** | Studio & média |
| 05 | **LS Consulting** | Conseil aux entrepreneurs (stratégie, acquisition, digital) |

## 🛠 Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **React Three Fiber** + **drei** + **Three.js** — hero 3D (la « perle » dorée)
- **GSAP**, **Framer Motion** — animations & micro-interactions
- **Lenis** — smooth scroll
- **Tailwind CSS v4** — design system

## 🚀 Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## 🎨 Design system

Défini dans `app/globals.css` :

- `--noir #0a0a0a` · `--cream #f5f2ec` · `--gold #c9a86a`
- Titres : *Cormorant Garamond* (serif) — Texte : *Inter*
- Helpers : `.eyebrow`, `.text-gradient-gold`, `.reveal`, `.grain`, `.link-gold`

## 📁 Structure

```
app/
  layout.tsx        # fonts, métadonnées, smooth scroll
  page.tsx          # assemblage des sections
  globals.css       # design system
components/
  Hero.tsx          # hero + overlay texte animé
  Hero3D.tsx        # scène WebGL (perle dorée + poussière)
  Navbar.tsx        # nav fixe + menu mobile
  About.tsx         # à propos + stats
  Projects.tsx      # « Mes projets » (data: projects-data.ts)
  VSL.tsx           # emplacement vidéo (à remplacer)
  Contact.tsx       # CTA contact
  Marquee / Footer / Reveal / SmoothScroll
```

## 🎬 Ajouter la VSL

Remplacer le bloc `data-vsl-placeholder` dans `components/VSL.tsx` par
l'embed réel (YouTube / Vimeo / Mux).

## 🗺 Roadmap (prochaines étapes)

- [ ] Intégrer la VSL définitive
- [ ] Visuels HD par marque (photos champagne, lookbook Layonn, lieux Love Explorers)
- [ ] Pages projets dédiées (extension multi-pages)
- [ ] Formulaire de contact connecté + vrais réseaux sociaux
- [ ] Post-processing 3D (bloom) + variante mobile allégée de la perle
- [ ] SEO/OG images, favicon sur-mesure, déploiement Vercel
