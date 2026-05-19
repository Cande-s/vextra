/* eslint-disable */
// VEXTRA — Hero
// Big slogan, dual CTA, a quiet motion accent that nods to the V-arrow logo.

function Hero({ onContact, onPortfolio }) {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        background: "var(--bg-base)",
        padding: "140px 48px 120px",
        overflow: "hidden",
      }}
    >
      {/* Ambient pattern — soft glow + drifting diagonals */}
      <AmbientPattern variant="default" accentOpacity={0.12} />

      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div
            className="eyebrow"
            style={{
              marginBottom: 28,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "var(--accent-action)",
                boxShadow: "0 0 0 4px rgba(198,138,97,0.18)",
                animation: "vx-pulse 2.4s ease-in-out infinite",
              }}
            />
            Estudio digital — Río Cuarto, Córdoba
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            style={{
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1.05,
              color: "var(--fg-primary)",
              maxWidth: 900,
            }}
          >
            TU MARCA,
            <br />
            EN LA <span style={{ color: "var(--accent-action)" }}>DIRECCIÓN CORRECTA.</span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--fg-secondary)",
              marginTop: 28,
              maxWidth: 620,
            }}
          >
            Creamos experiencias web de alto nivel, diseñadas con precisión
            para impulsar el crecimiento comercial de tu marca.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 44,
              flexWrap: "wrap",
            }}
          >
            <Button onClick={onContact}>
              Solicitar asesoría
              <Icon.ArrowRight size={16} style={{ marginLeft: 4 }} />
            </Button>
            <Button variant="secondary" onClick={onPortfolio}>
              Ver portfolio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div
            style={{
              marginTop: 80,
              display: "flex",
              gap: 48,
              flexWrap: "wrap",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: 32,
            }}
          >
            {[
              ["8 semanas", "tiempo medio de entrega"],
              ["100%", "código y diseño propio"],
              ["24 hs", "respondemos consultas"],
            ].map(([n, l]) => (
              <div key={l} style={{ minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--fg-primary)",
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--fg-muted)",
                    marginTop: 4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Reusable Button — primary / secondary / ghost
function Button({ children, variant = "primary", onClick, type = "button", style }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      background: hover 
        ? "linear-gradient(135deg, var(--accent-hover) 0%, var(--accent-action) 100%)" 
        : "linear-gradient(135deg, var(--accent-action) 0%, var(--accent-hover) 100%)",
      color: "var(--bg-base)",
      border: "1px solid transparent",
      boxShadow: hover 
        ? "0 8px 24px rgba(198, 138, 97, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) inset" 
        : "0 4px 12px rgba(198, 138, 97, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
      textShadow: "0 1px 2px rgba(0,0,0,0.15)"
    },
    secondary: {
      background: "transparent",
      color: hover ? "var(--accent-action)" : "var(--fg-primary)",
      border: `1px solid ${hover ? "var(--accent-action)" : "var(--border-default)"}`,
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--fg-primary)" : "var(--fg-secondary)",
      border: "1px solid transparent",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        ...variants[variant],
        fontFamily: "inherit",
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: "0.01em",
        padding: "13px 26px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        transition:
          "all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        transform: hover && variant === "primary" ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

window.Hero = Hero;
window.Button = Button;
