/* eslint-disable */
// VEXTRA — About Page (Nosotros)

function AboutPage({ onContact }) {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section
        style={{
          padding: "160px 48px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AmbientPattern variant="left" accentOpacity={0.08} lineOpacity={0.3} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Nuestra Filosofía
            </div>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.05,
                color: "var(--fg-primary)",
                maxWidth: 900,
                textWrap: "balance",
              }}
            >
              LA BASE DE TODO ES <span style={{ color: "var(--accent-action)" }}>LA DIRECCIÓN.</span>
            </h1>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, marginTop: 80 }}>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 500, color: "var(--fg-primary)", marginBottom: 16 }}>¿Qué es Vextra?</h3>
                <p style={{ fontSize: 18, color: "var(--fg-secondary)", lineHeight: 1.6 }}>
                  Vextra no es una agencia tradicional. Somos un estudio digital especializado en la construcción de plataformas sólidas, veloces y enfocadas en el rendimiento. No utilizamos plantillas prefabricadas; diseñamos y desarrollamos cada pieza de código con un propósito claro, asegurando que tu negocio digital funcione tan bien como tu negocio real.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 500, color: "var(--fg-primary)", marginBottom: 16 }}>¿Por qué Vextra?</h3>
                <p style={{ fontSize: 18, color: "var(--fg-secondary)", lineHeight: 1.6 }}>
                  Nuestro nombre nace del concepto matemático de <strong style={{ color: "var(--fg-primary)", fontWeight: 500 }}>Vector</strong>. Un vector no solo tiene magnitud, tiene una <em>dirección</em>. 
                  <br /><br />
                  En Vextra, creemos firmemente que las marcas que colaboran con nosotros necesitan exactamente eso: un norte claro. La tecnología sin un objetivo es solo código; la tecnología orientada al éxito es el diferencial que buscamos aportar a cada cliente.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        style={{
          padding: "80px 48px 160px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AmbientPattern variant="right" accentOpacity={0.05} lineOpacity={0.3} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <div className="eyebrow" style={{ marginBottom: 20 }}>El Equipo</div>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "var(--fg-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                ¿Quién está detrás de 
                <img 
                  src="vextra logo completo.png" 
                  alt="VEXTRA" 
                  style={{ height: 40, width: "auto", display: "inline-block", transform: "translateY(4px)" }} 
                />
                ?
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              
              {/* Candela */}
              <div
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: 48,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 28, fontWeight: 500, color: "var(--fg-primary)", margin: "0 0 8px 0" }}>Candela Sangroniz</h3>
                  <div style={{ fontSize: 16, color: "var(--accent-action)", fontWeight: 500, fontFamily: "ui-monospace, monospace" }}>
                    Frontend Engineer
                  </div>
                </div>
                <p style={{ fontSize: 16, color: "var(--fg-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
                  Especialista en la capa visible de la tecnología. Candela se enfoca en traducir conceptos de negocio en interfaces fluidas, rápidas y estéticamente impecables. Su filosofía de desarrollo se basa en el "pixel-perfect" y la experiencia del usuario (UX).
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["React", "Animaciones Web", "Arquitectura UI", "Performance"].map(t => (
                    <span key={t} style={{ padding: "4px 12px", background: "var(--bg-base)", border: "1px solid var(--border-subtle)", borderRadius: 999, fontSize: 13, color: "var(--fg-muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Agustin */}
              <div
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: 48,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 28, fontWeight: 500, color: "var(--fg-primary)", margin: "0 0 8px 0" }}>Agustin Ezequiel</h3>
                  <div style={{ fontSize: 16, color: "var(--accent-action)", fontWeight: 500, fontFamily: "ui-monospace, monospace" }}>
                    Backend Engineer
                  </div>
                </div>
                <p style={{ fontSize: 16, color: "var(--fg-secondary)", lineHeight: 1.6, marginBottom: 24 }}>
                  El motor detrás de la plataforma. Agustin se especializa en diseñar infraestructuras robustas, bases de datos eficientes y APIs seguras. Su enfoque garantiza que cada solución no solo se vea bien, sino que escale y soporte las demandas del mundo real de manera impecable.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Arquitectura de Servidores", "APIs", "Bases de Datos", "Seguridad"].map(t => (
                    <span key={t} style={{ padding: "4px 12px", background: "var(--bg-base)", border: "1px solid var(--border-subtle)", borderRadius: 999, fontSize: 13, color: "var(--fg-muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal onContact={onContact} />
    </main>
  );
}

window.AboutPage = AboutPage;
