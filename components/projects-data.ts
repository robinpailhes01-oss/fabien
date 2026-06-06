export type Project = {
  index: string;
  name: string;
  category: string;
  /** What this venture proves about Fabien's capabilities. */
  proof: string;
  href: string | null;
  image: string;
  year: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Maison Perla",
    category: "Champagne de prestige",
    proof:
      "Créer une marque désirable et défendre un positionnement premium.",
    href: "https://maisonperla.com/",
    image: "/images/champagne.jpg",
    year: "2020",
  },
  {
    index: "02",
    name: "Layonn",
    category: "Mode éco-responsable",
    proof:
      "Bâtir une marque à valeurs forte et une fabrication maîtrisée de bout en bout.",
    href: "https://layonnstyle.com/",
    image: "/images/mode.jpg",
    year: "2022",
  },
  {
    index: "03",
    name: "Love Explorers",
    category: "Plateforme — Romance",
    proof:
      "Lancer une marketplace et orchestrer offre, demande et acquisition.",
    href: "https://www.lovexplorers.com/",
    image: "/images/romance.jpg",
    year: "2023",
  },
  {
    index: "04",
    name: "Visionr Podcast",
    category: "Studio & Média",
    proof: "Construire une audience et une marque média qui rayonne.",
    href: null,
    image: "/images/podcast.jpg",
    year: "2024",
  },
  {
    index: "05",
    name: "LS Consulting",
    category: "Accompagnement d'entrepreneurs",
    proof:
      "La synthèse : toute cette expérience, mise au service de votre croissance.",
    href: "#offre",
    image: "/images/consulting.jpg",
    year: "2025",
  },
];
