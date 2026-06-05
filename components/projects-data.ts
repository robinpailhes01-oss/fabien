export type Project = {
  index: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  href: string | null;
  year: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Maison Perla",
    category: "Champagne",
    description:
      "Une maison de champagne de prestige née d'un savoir-faire familial. L'authenticité du goût, l'élégance sans ostentation.",
    tags: ["Luxe", "Savoir-faire", "HVE"],
    href: "https://maisonperla.com/",
    year: "2020",
  },
  {
    index: "02",
    name: "Layonn",
    category: "Mode éco-responsable",
    description:
      "Une marque de vêtements française et durable. Des pièces intemporelles, des matières saines : vous avez une seule mission, rayonner.",
    tags: ["Mode", "Éco-responsable", "Montpellier"],
    href: "https://layonnstyle.com/",
    year: "2022",
  },
  {
    index: "03",
    name: "Love Explorers",
    category: "Plateforme — Romance",
    description:
      "Le Airbnb des lieux d'exception pour les demandes en mariage et escapades romantiques. La technologie au service des plus belles histoires.",
    tags: ["Plateforme", "Romance", "Expérience"],
    href: "https://www.lovexplorers.com/",
    year: "2023",
  },
  {
    index: "04",
    name: "Visionr Podcast",
    category: "Studio & Média",
    description:
      "Un studio de podcast et un média qui capture les visions d'entrepreneurs et de créateurs. Donner la parole à ceux qui construisent.",
    tags: ["Média", "Podcast", "Studio"],
    href: null,
    year: "2024",
  },
  {
    index: "05",
    name: "LS Consulting",
    category: "Conseil aux entrepreneurs",
    description:
      "Accompagnement d'entrepreneurs : stratégie business, acquisition client et développement digital. De la vision à la croissance.",
    tags: ["Stratégie", "Acquisition", "Digital"],
    href: null,
    year: "2025",
  },
];
