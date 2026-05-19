/* eslint-disable */
// VEXTRA — Sections (Problema, Solución, Servicios, Enfoque, Proceso, CTAFinal)

function SectionHeader({ eyebrow, title, lead, action }) {
  return (
    <Reveal>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 24,
          marginBottom: 64,
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--fg-primary)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {title}
          </h2>
          {lead && (
            <p
              style={{
                fontSize: 19,
                color: "var(--fg-secondary)",
                marginTop: 18,
                lineHeight: 1.6,
                maxWidth: 640,
              }}
            >
              {lead}
            </p>
          )}
        </div>
        {action}
      </div>
    </Reveal>
  );
}

function PointCard({ icon: I, title, desc, idx = 0 }) {
  return (
    <Reveal delay={idx * 80}>
      <div className="vx-point">
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-elevated)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 22,
          }}
        >
          <I size={22} color="var(--accent-action)" />
        </div>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "var(--fg-primary)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            marginTop: 10,
            lineHeight: 1.6,
            maxWidth: 380,
          }}
        >
          {desc}
        </p>
      </div>
    </Reveal>
  );
}

function ServiceCard({ icon: I, title, desc, idx = 0 }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Reveal delay={idx * 70}>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{
          background: "var(--bg-elevated)",
          border: `1px solid ${hover ? "var(--border-default)" : "var(--border-subtle)"}`,
          borderRadius: "var(--radius-lg)",
          padding: 32,
          height: "100%",
          boxSizing: "border-box",
          transition:
            "border-color 200ms ease, background 200ms ease, transform 200ms ease",
          transform: hover ? "translateY(-2px)" : "translateY(0)",
          background: hover ? "var(--bg-overlay)" : "var(--bg-elevated)",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-base)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 22,
          }}
        >
          <I size={22} color="var(--accent-action)" />
        </div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 500,
            color: "var(--fg-primary)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "var(--fg-secondary)",
            marginTop: 10,
            lineHeight: 1.6,
          }}
        >
          {desc}
        </p>
      </div>
    </Reveal>
  );
}

const sectionWrap = (bg) => ({
  background: bg,
  padding: "120px 48px",
});
const container = { maxWidth: 1200, margin: "0 auto" };

function ProblemaSolucion() {
  const problemaItems = [
    [Icon.AlertTriangle, "Identidad invisible", "El sitio web luce igual que el de la competencia, perdiendo la oportunidad de destacar e impactar."],
    [Icon.TrendingUp, "Visitas sin retorno", "El tráfico ingresa a la página pero la abandona rápidamente sin concretar ventas ni consultas."],
    [Icon.Layers, "Tecnología obsoleta", "El código antiguo genera errores, ralentiza la carga y limita seriamente el avance comercial."],
  ];

  const solucionItems = [
    [Icon.Compass, "Estética funcional", "Cada elemento se diseña estratégicamente para guiar al usuario hacia la acción deseada."],
    [Icon.Zap, "Velocidad extrema", "Sistemas optimizados para cargar en milisegundos, mejorando la retención y el posicionamiento SEO."],
    [Icon.Target, "Bases sólidas", "Infraestructura moderna preparada para soportar picos de tráfico y la integración de nuevas funciones."],
  ];

  return (
    <section id="problema" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="left" accentOpacity={0.06} lineOpacity={0.35} />
      <div style={{ ...container, position: "relative" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64 }}>
          
          {/* El Problema */}
          <div>
            <SectionHeader eyebrow="El problema" title="Los obstáculos comunes de la presencia online." />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {problemaItems.map(([I, t, d], i) => (
                <PointCard key={t} icon={I} title={t} desc={d} idx={i} />
              ))}
            </div>
          </div>

          {/* La Solución */}
          <div id="solucion">
            <SectionHeader
              eyebrow="La solución"
              title="Desarrollo orientado íntegramente a resultados."
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {solucionItems.map(([I, t, d], i) => (
                <PointCard key={t} icon={I} title={t} desc={d} idx={i} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function Servicios() {
  const items = [
    { icon: Icon.Layout, title: "Sitios Corporativos", desc: "Presencia institucional sólida y escalable, conectada con sistemas de gestión de contenido (CMS) intuitivos." },
    { icon: Icon.Target, title: "Páginas de Conversión", desc: "Embudos de venta altamente persuasivos, ideales para lanzamientos de productos o campañas publicitarias." },
    { icon: Icon.RefreshCw, title: "Evolución Digital", desc: "Actualizamos interfaces heredadas a tecnologías de vanguardia sin perder el posicionamiento ganado en Google." },
    { icon: Icon.Wrench, title: "Soporte Activo", desc: "Mantenimiento, auditorías de seguridad y evolución periódica de la plataforma post-lanzamiento." },
  ];
  return (
    <section id="servicios" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="subtle" accentOpacity={0.07} lineOpacity={0.35} />
      <div style={{ ...container, position: "relative" }}>
        <SectionHeader eyebrow="Servicios" title="Nuestras áreas de especialidad." />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {items.map((it, i) => <ServiceCard key={it.title} {...it} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

function Enfoque() {
  const items = [
    [Icon.MessageSquare, "Inmersión Total", "Estudiamos a fondo tu industria y competidores antes de proponer la primera línea de código o cambio visual."],
    [Icon.CheckCircle, "Transparencia Absoluta", "Justificamos activamente cada decisión de diseño basándonos en datos empíricos y nuestra experiencia de usuario."],
    [Icon.Compass, "Ingeniería Propietaria", "No dependemos de constructores visuales lentos. Programamos de forma nativa para garantizar la máxima calidad técnica."],
  ];
  return (
    <section id="enfoque" style={{ ...sectionWrap("var(--bg-elevated)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="default" accentOpacity={0.05} lineOpacity={0.35} />
      <div style={{ ...container, position: "relative" }}>
        <Reveal>
          <div
            style={{
              background: "var(--bg-elevated)",
              borderRadius: "var(--radius-lg)",
              padding: "80px 64px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -120,
                right: -80,
                width: 320,
                height: 320,
                borderRadius: 999,
                background:
                  "radial-gradient(circle, rgba(198,138,97,0.15) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="eyebrow"
              style={{ marginBottom: 24, color: "var(--fg-secondary)" }}
            >
              Nuestra filosofía
            </div>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--fg-primary)",
                margin: 0,
                maxWidth: 720,
                textWrap: "balance",
              }}
            >
              Artesanía digital aplicada
              <br />
              <span style={{ color: "var(--fg-secondary)" }}>
                a cada pixel de tu nuevo ecosistema.
              </span>
            </h2>
          </div>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 48,
            marginTop: 72,
          }}
        >
          {items.map(([I, t, d], i) => (
            <PointCard key={t} icon={I} title={t} desc={d} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const steps = [
    ["01", "Descubrimiento", "Evaluamos tu modelo comercial, mapeamos a tu audiencia clave y establecemos los KPIs del proyecto."],
    ["02", "Estrategia", "Diseñamos la arquitectura de información, generamos los primeros wireframes y confirmamos el cronograma."],
    ["03", "Ejecución", "Programamos las interfaces de alta fidelidad con revisiones periódicas para asegurar el control de calidad."],
    ["04", "Despliegue", "Lanzamos la web al público, monitoreamos la estabilidad en vivo y capacitamos a tu equipo en el uso."],
  ];
  return (
    <section id="proceso" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="strong" accentOpacity={0.06} lineOpacity={0.4} />
      <div style={{ ...container, position: "relative" }}>
        <SectionHeader eyebrow="Metodología" title="De la primera idea al lanzamiento." />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            background: "var(--border-subtle)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {steps.map(([n, t, d], i) => (
            <div key={n} style={{ background: "var(--bg-base)", height: "100%" }}>
              <Reveal delay={i * 80} style={{ height: "100%", display: "flex" }}>
                <div
                  className="vx-step"
                  style={{
                    padding: 32,
                    height: "100%",
                    width: "100%",
                    boxSizing: "border-box",
                    transition: "background 200ms ease",
                  }}
                >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "var(--accent-action)",
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Consolas, monospace",
                  }}
                >
                  {n} —
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: "var(--fg-primary)",
                    marginTop: 18,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--fg-secondary)",
                    marginTop: 10,
                    lineHeight: 1.6,
                  }}
                >
                  {d}
                </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal({ onContact }) {
  return (
    <section id="contacto" style={{ background: "var(--bg-base)", padding: "40px 24px 80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div
            style={{
              background: "var(--bg-elevated)",
              borderRadius: "var(--radius-md)",
              padding: "40px 48px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              border: "2px solid var(--border-default)",
            }}
          >
            <div>
              <div
                className="eyebrow"
                style={{ color: "var(--fg-secondary)", marginBottom: 12 }}
              >
                Empezá
              </div>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--fg-primary)",
                  margin: 0,
                  maxWidth: 500,
                }}
              >
                Transformemos la presencia digital de tu marca hoy mismo.
              </h2>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Button onClick={onContact}>
                Solicitar asesoría
                <Icon.ArrowRight size={16} style={{ marginLeft: 4 }} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, {
  SectionHeader,
  PointCard,
  ServiceCard,
  ProblemaSolucion,
  Servicios,
  Enfoque,
  Proceso,
  CTAFinal,
});
