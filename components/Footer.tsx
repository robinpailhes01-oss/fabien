export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#accueil" className="font-display text-2xl tracking-wide">
          Fabien<span className="text-gold">.</span>
        </a>
        <p className="max-w-md text-center text-xs font-light leading-relaxed tracking-wide text-muted sm:text-left">
          Fondateur de 5 marques d&apos;exception. Aujourd&apos;hui, je construis
          la vôtre. <span className="text-gold">· LS Consulting</span>
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          © {year} Fabien
        </p>
      </div>
    </footer>
  );
}
