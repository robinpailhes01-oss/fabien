export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#accueil" className="font-display text-2xl tracking-wide">
          Fabien<span className="text-gold">.</span>
        </a>
        <p className="text-xs uppercase tracking-[0.2em] text-cream-dim">
          © {year} Fabien — Tous droits réservés
        </p>
        <p className="text-xs tracking-wide text-cream-dim">
          Conçu avec <span className="text-gold">élégance</span>
        </p>
      </div>
    </footer>
  );
}
