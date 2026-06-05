import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabien — Multi-entrepreneur",
  description:
    "Fabien, multi-entrepreneur français. Fondateur de Maison Perla (champagne), Layonn (mode), Love Explorers (plateforme de lieux d'exception), Visionr Podcast et LS Consulting.",
  metadataBase: new URL("https://fabien.com"),
  openGraph: {
    title: "Fabien — Multi-entrepreneur",
    description:
      "L'univers d'un multi-entrepreneur : champagne, mode, romance, média et conseil.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="grain min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
