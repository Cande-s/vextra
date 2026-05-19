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
    [Icon.AlertTriangle, "Identidad genérica", "Plantillas prefabricadas que no diferencian a la marca de su competencia."],
    [Icon.TrendingUp, "Baja conversión", "Tráfico que ingresa al sitio pero lo abandona sin generar oportunidades de negocio."],
    [Icon.Layers, "Falta de escalabilidad", "A medida que la empresa crece, la plataforma digital queda obsoleta y limita el avance."],
  ];

  const solucionItems = [
    [Icon.Compass, "Diseño con propósito", "Cada elemento visual responde a una decisión estratégica, no a una tendencia pasajera."],
    [Icon.Zap, "Alto rendimiento", "Plataformas optimizadas, veloces y eficientes en cualquier tipo de dispositivo."],
    [Icon.Target, "Arquitectura escalable", "Infraestructura robusta diseñada para crecer a la par del negocio sin requerir rediseños constantes."],
  ];

  return (
    <section id="problema" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="left" accentOpacity={0.06} lineOpacity={0.35} />
      <div style={{ ...container, position: "relative" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 64 }}>
          
          {/* El Problema */}
          <div>
            <SectionHeader eyebrow="El problema" title="Su plataforma actual no rinde lo suficiente." />
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
              title="Soluciones digitales hechas a medida."
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
    { icon: Icon.Layout, title: "Desarrollo Web", desc: "Plataformas institucionales o de servicios con arquitectura, identidad y contenido a medida." },
    { icon: Icon.Target, title: "Landing Pages", desc: "Páginas de alta conversión optimizadas para la comercialización de productos, servicios o eventos." },
    { icon: Icon.RefreshCw, title: "Migración y Rediseño", desc: "Modernización de sitios heredados hacia tecnologías actuales, preservando y mejorando el posicionamiento SEO." },
    { icon: Icon.Wrench, title: "Mejora Continua", desc: "Monitoreo post-lanzamiento y optimización progresiva basada en el análisis de datos de uso real." },
  ];
  return (
    <section id="servicios" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="subtle" accentOpacity={0.07} lineOpacity={0.35} />
      <div style={{ ...container, position: "relative" }}>
        <SectionHeader eyebrow="Servicios" title="Qué hacemos." />
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
    [Icon.MessageSquare, "Análisis Estratégico", "Comprender el modelo de negocio es el primer paso. Sin esta base, el diseño carece de un propósito real."],
    [Icon.CheckCircle, "Decisiones Fundamentadas", "Cada elección técnica y visual responde a un objetivo medible, el cual transparentamos en cada etapa."],
    [Icon.Compass, "Desarrollo a Medida", "Prescindimos de plantillas prefabricadas. Cada plataforma se diseña y desarrolla desde cero."],
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
              Enfoque
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
              No desarrollamos sitios genéricos.
              <br />
              <span style={{ color: "var(--fg-secondary)" }}>
                Construimos plataformas adaptadas a cada negocio.
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
    ["01", "Análisis Inicial", "Sesión de evaluación para comprender el modelo de negocio, la audiencia y los objetivos comerciales."],
    ["02", "Propuesta", "Presentación detallada del plan de acción, alcance técnico, plazos de ejecución y presupuesto."],
    ["03", "Desarrollo", "Fase de diseño y programación con instancias de revisión estructuradas en cada etapa clave."],
    ["04", "Lanzamiento", "Despliegue de la plataforma, análisis de métricas iniciales y ajustes de optimización continua."],
  ];
  return (
    <section id="proceso" style={{ ...sectionWrap("var(--bg-base)"), position: "relative", overflow: "hidden" }}>
      <AmbientPattern variant="strong" accentOpacity={0.06} lineOpacity={0.4} />
      <div style={{ ...container, position: "relative" }}>
        <SectionHeader eyebrow="Proceso" title="Cómo trabajamos." />
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
                Su próximo proyecto digital comienza con una reunión estratégica.
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
