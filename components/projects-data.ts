export type Project = {
  index: string;
  name: string;
  category: string;
  href: string | null;
  image: string;
  year: string;
};

// Fabien's brand universes — proof he builds, not just advises.
export const projects: Project[] = [
  {
    index: "01",
    name: "Perla",
    category: "Champagne de prestige",
    href: "https://maisonperla.com/",
    image: "/images/champagne.jpg",
    year: "2020",
  },
  {
    index: "02",
    name: "Layonn",
    category: "Mode éco-responsable",
    href: "https://layonnstyle.com/",
    image: "/images/mode.jpg",
    year: "2022",
  },
  {
    index: "03",
    name: "Dream Studio",
    category: "Studio créatif & production",
    href: null,
    image: "/images/studio.jpg",
    year: "2023",
  },
  {
    index: "04",
    name: "Lovexplorers",
    category: "Plateforme — Romance",
    href: "https://www.lovexplorers.com/",
    image: "/images/romance.jpg",
    year: "2023",
  },
  {
    index: "05",
    name: "Infinité Agency",
    category: "Agence — Croissance digitale",
    href: null,
    image: "/images/consulting.jpg",
    year: "2024",
  },
  {
    index: "06",
    name: "Vision'R Media",
    category: "Média & podcast",
    href: null,
    image: "/images/podcast.jpg",
    year: "2024",
  },
];
