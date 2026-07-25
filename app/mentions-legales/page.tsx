import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — LS Consulting",
  description:
    "Mentions légales, politique de confidentialité et cookies du site LS Consulting.",
  robots: { index: false },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-display text-2xl leading-tight">{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm font-light leading-relaxed text-muted">
      {children}
    </p>
  );
}

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-32">
      <Link
        href="/"
        className="link-gold text-[0.7rem] font-medium uppercase tracking-[0.24em]"
      >
        ← Retour au site
      </Link>

      <h1 className="mt-8 font-display text-4xl leading-tight sm:text-5xl">
        Mentions légales
      </h1>

      <H2>Éditeur du site</H2>
      <P>
        Le présent site est édité par la société SARL Layonn Style Holding
        (LS Consulting), dont le siège social est situé au 11 rue Alexandre
        Cabanel, 34000 Montpellier, France — immatriculée sous le numéro SIRET
        880 325 949.
      </P>
      <P>
        Directeur de la publication : Fabien Quetel. Contact :
        fabienquetel@lionstyle.com · 06 50 71 03 65.
      </P>

      <H2>Hébergement</H2>
      <P>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis — vercel.com.
      </P>

      <H2>Propriété intellectuelle</H2>
      <P>
        L&apos;ensemble des contenus de ce site (textes, visuels, logos,
        marques) est protégé par le droit de la propriété intellectuelle et
        demeure la propriété exclusive de LS Consulting ou de leurs titulaires
        respectifs. Toute reproduction sans autorisation préalable est
        interdite.
      </P>

      <H2>Politique de confidentialité</H2>
      <P>
        Les informations que vous transmettez via les formulaires de contact,
        la prise de rendez-vous (Calendly) ou par e-mail sont utilisées
        uniquement pour répondre à votre demande et assurer le suivi de la
        relation commerciale. Elles ne sont ni vendues ni cédées à des tiers.
      </P>
      <P>
        Conformément au Règlement général sur la protection des données (RGPD)
        et à la loi Informatique et Libertés, vous disposez d&apos;un droit
        d&apos;accès, de rectification, d&apos;opposition et de suppression de
        vos données. Pour l&apos;exercer, écrivez à fabienquetel@lionstyle.com.
      </P>

      <H2>Cookies</H2>
      <P>
        Ce site utilise uniquement des cookies techniques nécessaires à son bon
        fonctionnement (préférence de thème clair/sombre). Les services tiers
        intégrés (YouTube pour la vidéo, Calendly pour la prise de rendez-vous)
        peuvent déposer leurs propres cookies lorsque vous interagissez avec
        eux ; leur utilisation est régie par leurs politiques respectives. Vous
        pouvez configurer votre navigateur pour refuser les cookies.
      </P>

      <H2>Responsabilité</H2>
      <P>
        LS Consulting s&apos;efforce d&apos;assurer l&apos;exactitude des
        informations publiées sur ce site mais ne saurait être tenue
        responsable des erreurs, omissions ou de l&apos;indisponibilité
        temporaire du service. Les liens externes proposés ne sauraient engager
        la responsabilité de l&apos;éditeur.
      </P>

      <H2>Droit applicable</H2>
      <P>
        Le présent site est soumis au droit français. Tout litige relatif à son
        utilisation relève des tribunaux compétents de Montpellier.
      </P>
    </main>
  );
}
