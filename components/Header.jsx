/* eslint-disable */
// VEXTRA — Header (sticky)
// Backdrop-blur + 1px border-bottom when scrollY > 10. Mobile hamburger.

function Header({ onContact = () => {}, onOpenMenu = () => {} }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Inicio", "#top"],
    ["Portfolio", "#/portfolio"],
    ["Nosotros", "#/nosotros"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(13,13,13,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        transition: "background 220ms ease, border-color 220ms ease",
      }}
    >
      <div
        className="vx-header-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#top"
          aria-label="VEXTRA — Inicio"
          style={{ textDecoration: "none", display: "inline-flex" }}
        >
          <Wordmark size={17} />
        </a>

        <nav className="vx-nav-desktop" style={{ display: "flex", gap: 32 }}>
          {links.map(([l, href]) => (
            <a
              key={l}
              href={href}
              className="vx-nav-link"
              style={{
                color: "var(--fg-secondary)",
                fontSize: 14,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 150ms ease",
                position: "relative",
                padding: "4px 2px",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        <Button
          onClick={onContact}
          style={{
            padding: "10px 18px",
            fontSize: 14,
          }}
          className="vx-cta-desktop"
        >
          Solicitar asesoría
        </Button>

        <button
          className="vx-hamburger"
          aria-label="Abrir menú"
          onClick={onOpenMenu}
          style={{
            display: "none",
            background: "transparent",
            border: 0,
            color: "var(--fg-primary)",
            cursor: "pointer",
            padding: 6,
          }}
        >
          <Icon.Menu size={22} />
        </button>
      </div>
    </header>
  );
}

window.Header = Header;
