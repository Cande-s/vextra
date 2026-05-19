/* eslint-disable */
// VEXTRA — Portfolio Page (Adapted from Vextra Legacy)

const CASE_STUDIES = [
  {
    id: "fina", title: "FINA Bar", tag: "Web", year: "2026", duration: "4 semanas",
    color: "#18181B", accent: "#E5E7EB",
    sector: "Gastronomía",
    intro: "Identidad y plataforma web a medida para FINA.",
    problem: "FINA requería una presencia digital que estuviera a la altura de su identidad visual y servicio. Necesitaban una plataforma que no solo funcionara como carta o menú, sino que transmitiera la experiencia del lugar, permitiera ver las cartas detalladas y contactar fácilmente para reservas.",
    solution: "Desarrollamos una landing page inmersiva de alto rendimiento. Implementamos un diseño oscuro y elegante que refleja la ambientación del local, con interacciones fluidas, visualización de menú integrada y llamados a la acción claros para reservas.",
    results: [
      { num: "100%", label: "diseño a medida" },
      { num: "< 1s", label: "tiempo de carga" },
      { num: "1 click", label: "acceso a reservas" },
    ],
    quote: "La web refleja exactamente lo que somos y lo que queremos transmitir a nuestros clientes.",
    quoteBy: "Equipo FINA",
    link: "https://fina-bar-web.vercel.app/index.html",
    image: "uploads/fina-full.png"
  },
  {
    id: "marble", title: "Estudio Marble", tag: "Editorial", year: "2025", duration: "10 semanas",
    color: "#0E1B1B", accent: "#FFB38C",
    sector: "Joyería contemporánea",
    intro: "Joyería contemporánea con un sitio editorial que respira.",
    problem: "Marble llegó con una tienda en Shopify que se sentía como cualquier otra: foto cuadrada, precio, botón comprar. Pero sus piezas son objetos casi escultóricos, hechas a mano una a una. La tienda les hacía competir por precio en lugar de por historia, y la tasa de conversión en piezas sobre los $400 USD había caído tres trimestres seguidos.",
    solution: "Reconstruimos el sitio como una revista digital. Cada colección abre con un ensayo corto sobre el material, el proceso y la artesana detrás de la pieza. Los productos se ven en escala humana — fotos en mano, en cuello, en luz natural — antes de mostrar el detalle del objeto. El checkout queda al final del relato, no al principio. Migramos de Shopify a Next.js + Sanity para que el equipo editorial publicara sin pasar por desarrollo.",
    results: [
      { num: "+148%", label: "conversión en piezas premium" },
      { num: "3.4 min", label: "tiempo medio en página" },
      { num: "—42%", label: "rebote en colección nueva" },
    ],
    quote: "Nos devolvió la voz que habíamos perdido detrás de la grilla de productos.",
    quoteBy: "Lucía Marble · Fundadora",
  },
  {
    id: "raiz", title: "Raíz Café", tag: "E-commerce", year: "2025", duration: "8 semanas",
    color: "#3B2A1F", accent: "#FFB38C",
    sector: "Café de especialidad",
    intro: "Suscripción de café de origen con un checkout sin fricción.",
    problem: "Raíz tostaba café espectacular pero perdía clientes en el carrito. El flujo pedía elegir grano, molido, frecuencia y método de pago en cuatro pantallas distintas, y el 71% de los visitantes que llegaban a 'Suscríbete' no terminaban. El equipo asumía que era el precio; los datos decían que era la fricción.",
    solution: "Diseñamos un checkout de una sola pantalla que se adapta según las respuestas: si elegís 'no sé qué grano', te ofrecemos un cuestionario de tres preguntas; si ya sabés, vas directo. La frecuencia se eligió con un slider, no un dropdown. Y todo el flujo vive sobre una sola URL — refrescar no te devuelve al inicio. Construimos sobre Astro + Stripe, con el carrito en estado local y persistencia en localStorage.",
    results: [
      { num: "+62%", label: "conversión en suscripciones" },
      { num: "1:48", label: "tiempo medio de checkout" },
      { num: "+$8.4k", label: "MRR sumado en 90 días" },
    ],
    quote: "Pasamos de discutir precios a discutir cuántos sacos pedir el mes que viene.",
    quoteBy: "Andrés Vélez · CEO",
  },
  {
    id: "norte", title: "Norte Arquitectura", tag: "Portfolio", year: "2024", duration: "6 semanas",
    color: "#2A2D2E", accent: "#82CFFD",
    sector: "Estudio de arquitectura",
    intro: "Estudio de arquitectura. Galería full-bleed, navegación silenciosa.",
    problem: "Norte había ganado tres premios internacionales en 2023 pero su sitio era un Wordpress con 200 fotos en grilla pequeña. Los clientes potenciales — desarrolladores, alcaldías, fundaciones — entraban y se iban en menos de 40 segundos sin abrir un solo proyecto. La presentación importaba tanto como la obra y no se notaba.",
    solution: "Apostamos por el silencio. Una galería full-bleed con un proyecto a la vez, sin texto en la primera vista — sólo la imagen y un cursor que indica 'desplaza para seguir'. Los textos llegan cuando el usuario los pide. La navegación se reduce a tres palabras y un menú que aparece sólo al pasar arriba. Se siente como un libro de fotografía, no un sitio web.",
    results: [
      { num: "4:12", label: "tiempo medio en sitio" },
      { num: "+220%", label: "consultas de clientes nuevos" },
      { num: "11", label: "publicaciones de prensa que lo citaron" },
    ],
    quote: "Es la primera vez que un sitio web hace justicia a lo que construimos.",
    quoteBy: "Mariana Solís · Socia fundadora",
  },
  {
    id: "florencia", title: "Florencia Méndez", tag: "Personal", year: "2024", duration: "4 semanas",
    color: "#7A2E1A", accent: "#FFB38C",
    sector: "Ilustradora editorial",
    intro: "Sitio personal de una ilustradora — color, juego, jerarquía.",
    problem: "Florencia trabaja para The New Yorker, Gatopardo y revistas en cuatro idiomas, pero su sitio se veía como cualquier otro Squarespace. Los directores de arte le pedían 'mándame un PDF' porque navegar el sitio era más lento que ver un PDF. Y el portafolio mezclaba trabajo editorial con experimentos personales sin distinción — confundía más de lo que vendía.",
    solution: "Un sitio que se siente como abrir un cuaderno suyo: tipografía grande, color intencional, ilustraciones que respiran. Separamos 'trabajo' y 'jardín' (sus experimentos) en dos rutas claras. Cada pieza editorial muestra el medio, el director de arte y el brief en una línea — la información que un cliente necesita en tres segundos. Construido en HTML estático puro: carga en menos de 400ms en 3G.",
    results: [
      { num: "+5", label: "encargos editoriales nuevos en 60 días" },
      { num: "0.38s", label: "tiempo de carga (3G simulado)" },
      { num: "100/100", label: "Lighthouse Performance" },
    ],
    quote: "Ahora los directores de arte me dicen 'vi tu sitio' antes de hablar del brief.",
    quoteBy: "Florencia Méndez · Ilustradora",
  },
  {
    id: "monte", title: "Monte Capital", tag: "Landing", year: "2024", duration: "5 semanas",
    color: "#1A2A2A", accent: "#82CFFD",
    sector: "Boutique de inversión",
    intro: "Landing institucional para una boutique de inversión.",
    problem: "Monte gestiona patrimonios de más de $25M USD pero su landing parecía un fintech B2C — gradientes, íconos animados y promesas de 'rendimientos extraordinarios'. Sus clientes objetivo (familias de tercera generación, fundaciones) lo leían como ruido y pedían referencias por LinkedIn en lugar de entrar al sitio.",
    solution: "Diseño austero. Tipografía serif, paleta de dos colores, cero animaciones gratuitas. La página principal es un manifiesto de filosofía de inversión, no una lista de productos. Los datos de desempeño viven en un PDF descargable con autenticación por correo — para que el equipo sepa quién los leyó y pueda hacer el seguimiento manualmente, como siempre lo han hecho.",
    results: [
      { num: "+38%", label: "leads cualificados por trimestre" },
      { num: "9:1", label: "ratio lead-a-cliente" },
      { num: "0", label: "promesas de rendimiento publicadas" },
    ],
    quote: "Por fin el sitio se parece a cómo trabajamos, no a cómo Internet cree que se trabaja.",
    quoteBy: "Tomás Restrepo · Managing Partner",
  },
  {
    id: "tela", title: "Tela & Hilo", tag: "E-commerce", year: "2023", duration: "12 semanas",
    color: "#5A3A2A", accent: "#FFB38C",
    sector: "Textiles artesanales",
    intro: "Tienda de textiles artesanales — checkout en 3 pasos.",
    problem: "Tela & Hilo trabaja con 14 cooperativas de tejedoras en cinco regiones. Cada pieza es única, las cantidades son pequeñas, y antes del rediseño el sitio listaba todo en una grilla infinita sin contexto. Los clientes no entendían por qué un mantel costaba $180 ni quién lo había hecho. La tasa de devolución 'no era lo que esperaba' rondaba el 18%.",
    solution: "Reorganizamos el catálogo por región y por tejedora. Cada pieza muestra a quién pertenece la mano, cuántas horas tomó y qué tradición textil sigue, antes del precio. El checkout pasó de 5 pasos a 3, con dirección de envío auto-completada por código postal y pago en una sola pantalla. Las devoluciones cayeron porque la expectativa quedó clara.",
    results: [
      { num: "—74%", label: "devoluciones por 'expectativa'" },
      { num: "+91%", label: "valor medio de carrito" },
      { num: "14", label: "cooperativas con perfil propio" },
    ],
    quote: "Los clientes ya no preguntan por qué cuesta lo que cuesta.",
    quoteBy: "Camila Ortega · Directora",
  },
  {
    id: "panal", title: "Panal Lab", tag: "Landing", year: "2023", duration: "7 semanas",
    color: "#3D2A0A", accent: "#FFB38C",
    sector: "SaaS para apicultores",
    intro: "Producto SaaS para apicultores. Dashboard + onboarding.",
    problem: "Panal vende sensores que monitorean colmenas en tiempo real. Su público — apicultores de entre 50 y 70 años — no terminaba el onboarding: había que pegar tres códigos en cuatro pantallas distintas y la app móvil pedía permisos que nadie entendía. Sólo el 22% de los kits comprados llegaba a estar activo a la semana.",
    solution: "Reescribimos el onboarding como una conversación. El usuario escanea un QR de la caja, la app le hace tres preguntas (¿cuántas colmenas? ¿región? ¿WiFi o 4G?) y el resto se configura solo. El dashboard usa lenguaje de apicultor, no de ingeniero — 'la colmena 3 está nerviosa' en lugar de 'aceleración en eje Y > 0.4g'. Construimos sobre Remix + Supabase con PWA para campo sin señal.",
    results: [
      { num: "+86%", label: "kits activos a 7 días" },
      { num: "8 min", label: "onboarding promedio (antes 41)" },
      { num: "4.8★", label: "rating en App Store" },
    ],
    quote: "Mi papá lo configuró solo. Eso nunca había pasado con ninguna app que les hayamos vendido.",
    quoteBy: "Juliana Páez · Co-fundadora",
  },
];

const TAGS = ["Todos", "Editorial", "E-commerce", "Portfolio", "Landing", "Personal"];

function CaseVisual({ p }) {
  return (
    <div className="case-visual" style={{ background: p.color, color: "#fff" }}>
      <div style={{ padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{p.title}</div>
        <div style={{ fontFamily: "monospace", fontSize: 12, opacity: 0.6, letterSpacing: "0.1em" }}>{p.year}</div>
      </div>
      <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16, flex: 1, position: "relative" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: p.accent, letterSpacing: "0.14em", textTransform: "uppercase", position: "relative", zIndex: 2 }}>● {p.sector}</div>
        <div style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", position: "relative", zIndex: 2 }}>
          {p.intro}
        </div>
        
        {p.image ? (
          <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}>
            <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ) : (
          <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            <div style={{ background: p.accent, aspectRatio: "1/1", borderRadius: 4, opacity: 0.85 }}/>
            <div style={{ background: "rgba(255,255,255,0.08)", aspectRatio: "1/1", borderRadius: 4, border: `1px solid ${p.accent}`, display: "grid", placeItems: "center" }}>
              <div style={{ width: "30%", height: "30%", background: p.accent, borderRadius: "50%" }}/>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", aspectRatio: "2/1", borderRadius: 4, gridColumn: "span 2", display: "flex", padding: 12, gap: 8, alignItems: "center" }}>
              <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }}/>
              <div style={{ flex: 0.6, height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }}/>
              <div style={{ width: 36, height: 14, background: p.accent, borderRadius: 2 }}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CaseStudy({ p, index }) {
  const reverse = index % 2 === 1;
  return (
    <article id={p.id} className="case">
      <div className="case-inner" style={{ direction: reverse ? "rtl" : "ltr" }}>
        <div style={{ direction: "ltr" }}>
          <div className="case-meta">
            <span><strong>{String(index + 1).padStart(2, "0")}</strong></span>
            <span>{p.year}</span>
            <span>{p.duration}</span>
            <span>{p.sector}</span>
          </div>
          <h2 className="case-title">{p.title}</h2>
          <span className="case-tag">{p.tag}</span>

          <div className="case-section">
            <h3>El problema</h3>
            <p>{p.problem}</p>
          </div>
          <div className="case-section">
            <h3>La solución</h3>
            <p>{p.solution}</p>
          </div>

          <div className="results">
            {p.results.map((r, i) => (
              <div key={i}>
                <div className="result-num">{r.num}</div>
                <div className="result-label">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="quote">
            «{p.quote}»
            <span className="quote-attr">— {p.quoteBy}</span>
          </div>

          {p.link && (
            <div style={{ marginTop: 40 }}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  background: "var(--accent-action)",
                  color: "var(--bg-base)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  borderRadius: "var(--radius-md)",
                  transition: "opacity 150ms ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
              >
                Visitar sitio web ↗
              </a>
            </div>
          )}
        </div>
        <div style={{ direction: "ltr" }}>
          <CaseVisual p={p}/>
        </div>
      </div>
    </article>
  );
}

function PortfolioPage({ onContact }) {
  const [filter, setFilter] = React.useState("Todos");
  const filtered = React.useMemo(
    () => filter === "Todos" ? CASE_STUDIES : CASE_STUDIES.filter(p => p.tag === filter),
    [filter]
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <style>{`
        .filter-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .filter {
          padding: 8px 18px; border-radius: 999px;
          font-family: inherit; font-size: 14px;
          border: 1px solid var(--border-default);
          background: transparent; color: var(--fg-secondary);
          cursor: pointer; transition: all 150ms ease;
        }
        .filter:hover { border-color: var(--fg-primary); color: var(--fg-primary); }
        .filter.active { border-color: var(--accent-action); color: var(--accent-action); border-width: 2px; padding: 7px 17px; font-weight: 500; }

        .case {
          padding: 120px 48px;
          border-top: 1px solid var(--border-subtle);
        }
        .case:nth-child(odd) { background: var(--bg-base); }
        .case:nth-child(even) { background: var(--bg-elevated); }
        .case-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        
        .case-meta { display: flex; gap: 24px; font-family: monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--fg-muted); margin-bottom: 20px; }
        .case-meta strong { color: var(--accent-action); font-weight: 600; }
        
        .case-title { font-size: clamp(40px, 5vw, 56px); font-weight: 600; line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 16px 0; color: var(--fg-primary); }
        .case-tag { display: inline-block; font-family: monospace; font-size: 12px; padding: 4px 12px; border: 1px solid var(--border-default); border-radius: 999px; color: var(--fg-secondary); margin-bottom: 32px; }

        .case-section { margin-bottom: 32px; }
        .case-section h3 {
          font-family: monospace; font-size: 12px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--accent-action);
          margin: 0 0 12px 0; display: flex; align-items: center; gap: 10px;
        }
        .case-section h3::before { content: ""; width: 24px; height: 1px; background: var(--accent-action); }
        .case-section p { font-size: 16px; line-height: 1.7; color: var(--fg-secondary); margin: 0; }
        .case-section p strong { color: var(--fg-primary); font-weight: 500; }

        .results { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding-top: 32px; border-top: 1px solid var(--border-subtle); }
        .result-num { font-size: 40px; font-weight: 600; line-height: 1; color: var(--accent-action); letter-spacing: -0.02em; margin-bottom: 8px; }
        .result-label { font-size: 14px; color: var(--fg-secondary); line-height: 1.5; }

        .case-visual {
          position: sticky; top: 120px;
          aspect-ratio: 4/5; border-radius: 12px;
          overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.12);
          display: flex; flex-direction: column;
        }

        .quote {
          margin-top: 40px; padding: 24px 32px;
          border-left: 2px solid var(--accent-action);
          font-size: 18px; line-height: 1.6;
          color: var(--fg-primary); font-style: italic;
          background: var(--bg-elevated);
        }
        .case:nth-child(even) .quote { background: var(--bg-base); }
        .quote-attr { display: block; font-style: normal; font-size: 12px; font-family: monospace; color: var(--fg-muted); margin-top: 12px; letter-spacing: 0.05em; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .case-inner { grid-template-columns: 1fr; gap: 48px; }
          .case-visual { position: static; aspect-ratio: 1/1; }
        }

        @media (max-width: 768px) {
          .case { padding: 64px 24px; }
          .case-inner { gap: 32px; }
          .case-meta { gap: 12px; font-size: 11px; flex-wrap: wrap; }
          .case-title { font-size: 36px; }
          .results { grid-template-columns: 1fr; gap: 24px; }
          .result-num { font-size: 36px; }
          .quote { padding: 20px; font-size: 16px; margin-top: 32px; }
        }
      `}</style>
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
              Portfolio
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
              }}
            >
              CADA PROYECTO, <span style={{ color: "var(--accent-action)" }}>SU PROPIA HISTORIA.</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--fg-secondary)",
                marginTop: 24,
                marginBottom: 48,
                maxWidth: 660,
                lineHeight: 1.6,
              }}
            >
              Cada caso de estudio detalla el desafío inicial de la marca, la solución tecnológica implementada y el impacto comercial medido tras el lanzamiento. Explore los proyectos por categoría.
            </p>
            <div className="filter-row">
              {TAGS.map(t => (
                <button key={t} className={`filter ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>{t}</button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--fg-muted)", padding: 96 }}>Sin proyectos con ese filtro — todavía.</p>
      ) : (
        filtered.map((p, i) => <CaseStudy key={p.id} p={p} index={i}/>)
      )}

      <CTAFinal onContact={onContact} />
    </main>
  );
}

window.PortfolioPage = PortfolioPage;
