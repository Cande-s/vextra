/* eslint-disable */
// VEXTRA — Portfolio preview, Footer, Mobile menu, Contact form

function PortfolioPreview({ onAll }) {
  const projects = [
    {
      name: "FINA",
      cat: "Servicios profesionales",
      desc: "Identidad y plataforma web a medida.",
      year: "2026",
      tags: ["Identidad", "Web", "Contenido"],
      featured: true,
      url: "https://fina-bar-web.vercel.app/index.html",
      image: "uploads/fina-full.png"
    },
    {
      name: "Aro Studio",
      cat: "E-commerce",
      desc: "Migración a stack moderno + performance.",
      year: "2025",
      tags: ["Shopify", "Performance"],
    },
    {
      name: "Norte Legal",
      cat: "Estudio profesional",
      desc: "Sistema de contenido y autoridad de marca.",
      year: "2025",
      tags: ["CMS", "SEO"],
    },
  ];
  return (
    <section
      id="portfolio"
      style={{ background: "var(--bg-elevated)", padding: "120px 48px", position: "relative", overflow: "hidden" }}
    >
      <AmbientPattern variant="right" accentOpacity={0.05} lineOpacity={0.35} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <SectionHeader
          eyebrow="Portfolio"
          title="Casos de Estudio."
          lead="Una selección de proyectos recientes que reflejan nuestro enfoque técnico y metodológico."
          action={
            <a
              href="#portfolio-all"
              onClick={(e) => {
                e.preventDefault();
                onAll && onAll();
              }}
              className="vx-link-arrow"
              style={{
                color: "var(--fg-secondary)",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 150ms ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--accent-action)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--fg-secondary)")
              }
            >
              Ver todos →
            </a>
          }
        />

        {/* Featured first, two siblings beneath */}
        <Reveal>
          <ProjectCard {...projects[0]} large />
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          {projects.slice(1).map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Button variant="secondary" onClick={onAll}>
            Ver portfolio completo
            <Icon.ArrowRight size={16} style={{ marginLeft: 4 }} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ name, cat, desc, year, tags = [], featured, large, url, image }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={url || `#proyecto-${name}`}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        background: "var(--bg-base)",
        border: `1px solid ${hover ? "var(--accent-action)" : "var(--border-subtle)"}`,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        textDecoration: "none",
        display: "grid",
        gridTemplateColumns: large ? "1.4fr 1fr" : "1fr",
        transition:
          "border-color 200ms ease, transform 200ms ease, background 200ms ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
      }}
      className={large ? "vx-project-large" : "vx-project"}
    >
      {/* media slot — drop a video/screenshot here */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--bg-overlay)",
          aspectRatio: large ? undefined : "16/10",
          minHeight: large ? 420 : undefined,
        }}
      >
        {/* placeholder canvas with subtle pattern */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, var(--bg-overlay) 0%, var(--bg-elevated) 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 50% at 70% 30%, rgba(198,138,97,0.10) 0%, transparent 60%)",
          }}
        />
        <svg
          aria-hidden
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, opacity: 0.6 }}
        >
          <defs>
            <linearGradient id={`vx-pcl-${name}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="-10%" y1="100%" x2="110%" y2="0%" stroke={`url(#vx-pcl-${name})`} strokeWidth="1" />
          <line x1="-10%" y1="120%" x2="110%" y2="20%" stroke={`url(#vx-pcl-${name})`} strokeWidth="1" />
        </svg>
        {image ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "transform 300ms ease",
              transform: hover ? "scale(1.05)" : "scale(1)",
            }}
          >
            <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ) : featured ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                background: "rgba(13,13,13,0.6)",
                border: "1px solid var(--accent-action)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "transform 200ms ease, background 200ms ease",
                transform: hover ? "scale(1.06)" : "scale(1)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="var(--accent-action)"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : null}
        {/* large name placeholder, fades on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--fg-primary)",
            fontSize: large ? 56 : 36,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            opacity: (featured || image) ? 0 : 0.85,
            mixBlendMode: "difference",
          }}
        >
          {name}
        </div>
        {/* eyebrow tag */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            background: "rgba(13,13,13,0.7)",
            border: "1px solid var(--border-subtle)",
            padding: "5px 10px",
            borderRadius: 999,
            backdropFilter: "blur(8px)",
          }}
        >
          {featured ? (image ? "Destacado" : "Destacado · video") : "Proyecto"}
        </div>
      </div>

      <div
        style={{
          padding: large ? "40px 40px" : 28,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <span
              className="eyebrow"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              {cat}
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: 999,
                background: "var(--fg-muted)",
              }}
            />
            <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{year}</span>
          </div>
          <div
            style={{
              fontSize: large ? 36 : 22,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--fg-primary)",
              lineHeight: 1.1,
            }}
          >
            {name}
          </div>
          <p
            style={{
              fontSize: large ? 17 : 14,
              color: "var(--fg-secondary)",
              marginTop: large ? 14 : 8,
              lineHeight: 1.55,
            }}
          >
            {desc}
          </p>

          {tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 20,
              }}
            >
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    color: "var(--fg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 999,
                    padding: "4px 10px",
                    background: "var(--bg-elevated)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: hover ? "var(--accent-action)" : "var(--fg-secondary)",
            fontSize: 14,
            transition: "color 150ms ease, gap 200ms ease",
          }}
        >
          {url ? "Visitar sitio" : "Ver proyecto"}
          <Icon.ArrowRight
            size={16}
            style={{
              transform: hover ? "translateX(4px)" : "translateX(0)",
              transition: "transform 200ms ease",
            }}
          />
        </div>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "80px 48px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 48,
        }}
        className="vx-footer-grid"
      >
        <div>
          <Wordmark size={18} />
          <p
            style={{
              fontSize: 14,
              color: "var(--fg-secondary)",
              marginTop: 16,
              maxWidth: 280,
              lineHeight: 1.6,
            }}
          >
            Estudio de diseño y desarrollo web de alto rendimiento. Río Cuarto, Córdoba, Argentina.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Navegación
          </div>
          {[
            ["Inicio", "#top"],
            ["Portfolio", "#/portfolio"],
            ["Nosotros", "#/nosotros"],
            ["Contacto", "#contacto"],
          ].map(([l, href]) => (
            <a
              key={l}
              href={href}
              style={{
                display: "block",
                fontSize: 14,
                color: "var(--fg-secondary)",
                textDecoration: "none",
                padding: "5px 0",
                transition: "color 150ms ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--fg-primary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--fg-secondary)")
              }
            >
              {l}
            </a>
          ))}
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Contacto
          </div>
          <a
            href="mailto:vextrasystems@gmail.com"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 14,
              color: "var(--fg-secondary)",
              textDecoration: "none",
              padding: "5px 0",
            }}
          >
            <Icon.Mail size={15} /> vextrasystems@gmail.com
          </a>
          <a
            href="https://www.instagram.com/vextra_systems"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 14,
              color: "var(--fg-secondary)",
              textDecoration: "none",
              padding: "5px 0",
            }}
          >
            <Icon.Instagram size={15} /> @vextra_systems
          </a>

        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Estudio
          </div>
          <div style={{ fontSize: 14, color: "var(--fg-secondary)", padding: "5px 0" }}>
            Río Cuarto, Córdoba, AR
          </div>
          <div style={{ fontSize: 14, color: "var(--fg-secondary)", padding: "5px 0" }}>
            Lun–Vie · 10–19 hs
          </div>
          <div
            style={{
              marginTop: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "var(--accent-action)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "var(--accent-action)",
                boxShadow: "0 0 0 4px rgba(198,138,97,0.18)",
              }}
            />
            Tomando proyectos
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "64px auto 0",
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: 24,
          fontSize: 12,
          color: "var(--fg-muted)",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>© 2026 VEXTRA — Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

function MobileMenu({ open, onClose, onContact }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-base)",
        zIndex: 100,
        overflow: "hidden",
        transform: open ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 250ms ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <Wordmark size={17} />
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          style={{
            background: "transparent",
            border: 0,
            color: "var(--fg-primary)",
            cursor: "pointer",
            padding: 6,
          }}
        >
          <Icon.X size={22} />
        </button>
      </div>
      <nav
        style={{
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          flex: 1,
        }}
      >
        {[
          ["Portfolio", "#/portfolio"],
          ["Nosotros", "#/nosotros"],
          ["Contacto", "#contacto"]
        ].map(([l, href], i) => (
          <a
            key={l}
            href={href}
            onClick={onClose}
            style={{
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--fg-primary)",
              textDecoration: "none",
              padding: "12px 0",
              borderBottom: "1px solid var(--border-subtle)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 300ms ease ${i * 60 + 100}ms, transform 300ms ease ${i * 60 + 100}ms`,
            }}
          >
            {l}
          </a>
        ))}
      </nav>
      <div style={{ padding: 24 }}>
        <Button
          onClick={() => {
            onClose();
            setTimeout(() => onContact && onContact(), 260);
          }}
        >
          Solicitar asesoría
        </Button>
      </div>
    </div>
  );
}


function ContactModal({ open, onClose }) {
  const [state, setState] = React.useState("idle"); // "idle", "success"
  const [mode, setMode] = React.useState("simple"); // "simple", "briefing"

  const [form, setForm] = React.useState({
    nombre: "",
    negocio: "",
    email: "",
    mensaje: "",
  });

  const [briefing, setBriefing] = React.useState({
    empresa: "", dedica: "", objetivo: "", publico: "",
    identidad: "", personalidad: "", colores: "", referencias: "", noQuieren: "",
    secciones: "",
    funcEcommerce: false, funcReservas: false, funcFormularios: false, funcRegistro: false, funcBuscador: false, funcChat: false, funcPagos: false,
    integraciones: "", idiomas: "",
    textos: "", fotos: "", blog: "",
    hosting: "", tecnologia: "", seo: "", mantenimiento: "",
    presupuesto: "", fecha: ""
  });

  React.useEffect(() => {
    if (open) {
      setState("idle");
      setMode("simple");
      // Reseteamos los forms al abrir
      setForm({ nombre: "", negocio: "", email: "", mensaje: "" });
      setBriefing({
        empresa: "", dedica: "", objetivo: "", publico: "",
        identidad: "", personalidad: "", colores: "", referencias: "", noQuieren: "",
        secciones: "",
        funcEcommerce: false, funcReservas: false, funcFormularios: false, funcRegistro: false, funcBuscador: false, funcChat: false, funcPagos: false,
        integraciones: "", idiomas: "",
        textos: "", fotos: "", blog: "",
        hosting: "", tecnologia: "", seo: "", mantenimiento: "",
        presupuesto: "", fecha: ""
      });
    }
  }, [open]);

  if (!open) return null;

  const submitSimple = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo proyecto de ${form.nombre} — VEXTRA`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\n` +
      `Email: ${form.email}\n` +
      `Negocio/Marca: ${form.negocio || "No especificado"}\n\n` +
      `Mensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:vextrasystems@gmail.com?subject=${subject}&body=${body}`;
    setState("success");
  };

  const submitBriefing = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Briefing Completo: ${briefing.empresa} — VEXTRA`);
    
    const funcs = [];
    if(briefing.funcEcommerce) funcs.push("E-commerce");
    if(briefing.funcReservas) funcs.push("Reservas");
    if(briefing.funcFormularios) funcs.push("Formularios complejos");
    if(briefing.funcRegistro) funcs.push("Registro de usuarios");
    if(briefing.funcBuscador) funcs.push("Buscador interno");
    if(briefing.funcChat) funcs.push("Chat/WhatsApp");
    if(briefing.funcPagos) funcs.push("Pasarelas de pago");

    const body = encodeURIComponent(
      `--- 1. Información General y Objetivos ---\n` +
      `Empresa: ${briefing.empresa}\n` +
      `A qué se dedica y problema: ${briefing.dedica}\n` +
      `Objetivo principal: ${briefing.objetivo}\n` +
      `Público objetivo: ${briefing.publico}\n\n` +
      
      `--- 2. Identidad de Marca y Estética ---\n` +
      `Identidad visual actual: ${briefing.identidad}\n` +
      `Personalidad (3 palabras): ${briefing.personalidad}\n` +
      `Paleta de colores: ${briefing.colores}\n` +
      `Sitios de referencia: ${briefing.referencias}\n` +
      `Qué NO quieren ver: ${briefing.noQuieren}\n\n` +
      
      `--- 3. Funcionalidad y Herramientas ---\n` +
      `Secciones básicas: ${briefing.secciones}\n` +
      `Funcionalidades requeridas: ${funcs.length > 0 ? funcs.join(', ') : 'Ninguna específica'}\n` +
      `Integraciones externas: ${briefing.integraciones}\n` +
      `Idiomas: ${briefing.idiomas}\n\n` +
      
      `--- 4. Contenido y Materiales ---\n` +
      `Textos/Copywriting: ${briefing.textos}\n` +
      `Fotografías y videos: ${briefing.fotos}\n` +
      `Blog/Noticias: ${briefing.blog}\n\n` +
      
      `--- 5. Aspectos Técnicos y Logística ---\n` +
      `Dominio y Hosting: ${briefing.hosting}\n` +
      `Tecnología preferida: ${briefing.tecnologia}\n` +
      `Importancia SEO: ${briefing.seo}\n` +
      `Mantenimiento: ${briefing.mantenimiento}\n\n` +
      
      `--- 6. Presupuesto y Tiempos ---\n` +
      `Presupuesto estimado: ${briefing.presupuesto}\n` +
      `Fecha de lanzamiento: ${briefing.fecha}`
    );
    
    window.location.href = `mailto:vextrasystems@gmail.com?subject=${subject}&body=${body}`;
    setState("success");
  };

  // Prevenir cierre accidental si están llenando el briefing largo
  const handleBackgroundClick = () => {
    if (mode === "briefing") {
      if (window.confirm("¿Seguro que quieres cerrar? Perderás los datos ingresados en el briefing.")) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  const updateB = (key, val) => setBriefing(prev => ({ ...prev, [key]: val }));

  return (
    <div
      onClick={handleBackgroundClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: mode === "briefing" ? "flex-start" : "center",
        justifyContent: "center",
        padding: mode === "briefing" ? "40px 24px" : 24,
        zIndex: 200,
        overflowY: mode === "briefing" ? "auto" : "hidden",
        animation: "vx-fade-in 200ms ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: mode === "briefing" ? 800 : 540,
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: mode === "briefing" ? 48 : 36,
          position: "relative",
          animation: "vx-modal-in 240ms cubic-bezier(.2,.7,.2,1)",
          boxSizing: "border-box",
        }}
      >
        <button
          onClick={handleBackgroundClick}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "transparent",
            border: 0,
            color: "var(--fg-muted)",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <Icon.X size={18} />
        </button>

        {state === "success" ? (
          <div style={{ paddingTop: 8 }}>
            <Icon.CheckCircle size={36} color="var(--accent-action)" />
            <h3 style={{ fontSize: 24, fontWeight: 600, marginTop: 18, letterSpacing: "-0.01em" }}>
              Abrimos tu aplicación de mail.
            </h3>
            <p style={{ fontSize: 15, color: "var(--fg-secondary)", marginTop: 10, lineHeight: 1.6 }}>
              Ya preparamos el mensaje con tus datos. Solo tenés que darle a "Enviar" en tu aplicación de mail para que nos llegue.
            </p>
            <div style={{ marginTop: 28 }}>
              <Button variant="secondary" onClick={onClose}>
                Entendido
              </Button>
            </div>
          </div>
        ) : mode === "simple" ? (
          <form onSubmit={submitSimple}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Contacto</div>
            <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>
              Contanos sobre tu proyecto.
            </h3>
            <p style={{ fontSize: 14, color: "var(--fg-secondary)", marginTop: 8, lineHeight: 1.6 }}>
              Sin compromiso. Te respondemos en menos de 24 hs hábiles.
            </p>
            
            <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
              <Field label="Tu nombre" required value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} />
              <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="¿En qué podemos ayudarte?" textarea required value={form.mensaje} onChange={(v) => setForm({ ...form, mensaje: v })} />
            </div>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <Button type="submit" style={{ width: "100%", justifyContent: "center" }}>
                Enviar mensaje rápido
                <Icon.ArrowRight size={16} style={{ marginLeft: 4 }} />
              </Button>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
                <span style={{ fontSize: 12, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>O SI PREFIERES</span>
                <div style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
              </div>
              <Button variant="secondary" onClick={() => setMode("briefing")} style={{ width: "100%", justifyContent: "center" }}>
                Completar Briefing Detallado
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={submitBriefing}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Briefing Completo</div>
            <h3 style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em", margin: 0 }}>
              Cuestionario de Proyecto Web
            </h3>
            <p style={{ fontSize: 15, color: "var(--fg-secondary)", marginTop: 8, lineHeight: 1.6, marginBottom: 32 }}>
              Al completar esta información nos ayudas a entender perfectamente lo que necesitas para poder darte una cotización y propuesta exacta.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              
              {/* Sección 1 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>1. Información General y Objetivos</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="Nombre de la empresa/proyecto" required value={briefing.empresa} onChange={(v) => updateB("empresa", v)} />
                  <Field label="¿A qué se dedica y qué problema busca resolver la web?" textarea required value={briefing.dedica} onChange={(v) => updateB("dedica", v)} />
                  <Field label="¿Cuál es el objetivo principal? (Vender, leads, informar, comunidad...)" textarea required value={briefing.objetivo} onChange={(v) => updateB("objetivo", v)} />
                  <Field label="¿Quién es el público objetivo? (Edad, intereses, ubicación)" textarea required value={briefing.publico} onChange={(v) => updateB("publico", v)} />
                </div>
              </div>

              {/* Sección 2 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>2. Identidad de Marca y Estética</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="¿Cuentan con identidad visual (logo, manual, tipografías)?" value={briefing.identidad} onChange={(v) => updateB("identidad", v)} />
                  <Field label="Si tuvieras que describir la web en 3 palabras, ¿cuáles serían?" value={briefing.personalidad} onChange={(v) => updateB("personalidad", v)} />
                  <Field label="¿Qué paleta de colores tienen en mente?" value={briefing.colores} onChange={(v) => updateB("colores", v)} />
                  <Field label="¿Sitios web de referencia que les gusten? (Indica por qué)" textarea value={briefing.referencias} onChange={(v) => updateB("referencias", v)} />
                  <Field label="¿Hay algo que definitivamente NO quieran ver en el diseño?" textarea value={briefing.noQuieren} onChange={(v) => updateB("noQuieren", v)} />
                </div>
              </div>

              {/* Sección 3 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>3. Funcionalidad y Herramientas</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="¿Qué secciones básicas necesita? (Ej: Inicio, Servicios, Blog...)" textarea required value={briefing.secciones} onChange={(v) => updateB("secciones", v)} />
                  
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--fg-primary)", display: "block", marginBottom: 12 }}>¿Necesita funcionalidades específicas?</span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                      <Checkbox label="Carrito / E-commerce" checked={briefing.funcEcommerce} onChange={(c) => updateB("funcEcommerce", c)} />
                      <Checkbox label="Sistema de reservas" checked={briefing.funcReservas} onChange={(c) => updateB("funcReservas", c)} />
                      <Checkbox label="Formularios complejos" checked={briefing.funcFormularios} onChange={(c) => updateB("funcFormularios", c)} />
                      <Checkbox label="Registro de usuarios" checked={briefing.funcRegistro} onChange={(c) => updateB("funcRegistro", c)} />
                      <Checkbox label="Buscador interno" checked={briefing.funcBuscador} onChange={(c) => updateB("funcBuscador", c)} />
                      <Checkbox label="Chat / WhatsApp" checked={briefing.funcChat} onChange={(c) => updateB("funcChat", c)} />
                      <Checkbox label="Pasarelas de pago" checked={briefing.funcPagos} onChange={(c) => updateB("funcPagos", c)} />
                    </div>
                  </div>

                  <Field label="¿Integración con herramientas externas? (CRM, Analytics, Pixel...)" value={briefing.integraciones} onChange={(v) => updateB("integraciones", v)} />
                  <Field label="¿En cuántos idiomas debe estar disponible?" value={briefing.idiomas} onChange={(v) => updateB("idiomas", v)} />
                </div>
              </div>

              {/* Sección 4 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>4. Contenido y Materiales</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="¿Quién se encargará de los textos (copywriting)?" value={briefing.textos} onChange={(v) => updateB("textos", v)} />
                  <Field label="¿Cuentan con fotos/videos o usaremos imágenes de stock?" value={briefing.fotos} onChange={(v) => updateB("fotos", v)} />
                  <Field label="¿Necesitan un blog o sección de noticias autogestionable?" value={briefing.blog} onChange={(v) => updateB("blog", v)} />
                </div>
              </div>

              {/* Sección 5 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>5. Aspectos Técnicos y Logística</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="¿Ya tienen dominio y hosting? (Indicar proveedor si aplica)" value={briefing.hosting} onChange={(v) => updateB("hosting", v)} />
                  <Field label="¿Preferencia tecnológica? (Desarrollo a medida, React, WP...)" value={briefing.tecnologia} onChange={(v) => updateB("tecnologia", v)} />
                  <Field label="¿Qué tan importante es el posicionamiento SEO para el lanzamiento?" value={briefing.seo} onChange={(v) => updateB("seo", v)} />
                  <Field label="¿Quién se encargará del mantenimiento técnico una vez lanzada?" value={briefing.mantenimiento} onChange={(v) => updateB("mantenimiento", v)} />
                </div>
              </div>

              {/* Sección 6 */}
              <div>
                <h4 style={{ fontSize: 18, color: "var(--accent-action)", margin: "0 0 16px 0", fontWeight: 500 }}>6. Presupuesto y Tiempos</h4>
                <div style={{ display: "grid", gap: 16 }}>
                  <Field label="¿Cuál es el presupuesto estimado? (Ayuda a priorizar)" required value={briefing.presupuesto} onChange={(v) => updateB("presupuesto", v)} />
                  <Field label="¿Tienen una fecha de lanzamiento deseada?" required value={briefing.fecha} onChange={(v) => updateB("fecha", v)} />
                </div>
              </div>

            </div>

            <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button type="button" onClick={() => setMode("simple")} style={{ background: "transparent", border: "none", color: "var(--fg-secondary)", cursor: "pointer", fontSize: 14 }}>
                Volver atrás
              </button>
              <Button type="submit">
                Enviar Briefing Completo
                <Icon.ArrowRight size={16} style={{ marginLeft: 4 }} />
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
        style={{ width: 16, height: 16, accentColor: "var(--accent-action)", cursor: "pointer" }}
      />
      <span style={{ fontSize: 14, color: "var(--fg-secondary)" }}>{label}</span>
    </label>
  );
}

function Field({ label, required, type = "text", textarea, value, onChange, placeholder }) {
  const [focus, setFocus] = React.useState(false);
  const common = {
    fontFamily: "inherit",
    fontSize: 15,
    background: "var(--bg-base)",
    border: `1px solid ${focus ? "var(--accent-action)" : "var(--border-default)"}`,
    boxShadow: focus ? "0 0 0 3px rgba(34,197,94,0.18)" : "none",
    color: "var(--fg-primary)",
    borderRadius: "var(--radius-sm)",
    padding: "12px 14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: "var(--fg-primary)" }}>
        {label}
        {required && <span style={{ color: "var(--accent-action)" }}> *</span>}
      </span>
      {textarea ? (
        <textarea
          rows={4}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...common, resize: "vertical" }}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={common}
        />
      )}
    </label>
  );
}

Object.assign(window, {
  PortfolioPreview,
  ProjectCard,
  Footer,
  MobileMenu,
  ContactModal,
  Field,
});
