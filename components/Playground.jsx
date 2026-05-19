/* eslint-disable */
// VEXTRA — Laboratorio de Identidad (Playground)

function Playground() {
  const [typography, setTypography] = React.useState('sans');
  const [palette, setPalette] = React.useState('elegante');
  const [shape, setShape] = React.useState('rounded');
  const [style, setStyle] = React.useState('soft');
  const [alignment, setAlignment] = React.useState('left');
  const [tone, setTone] = React.useState('pro');

  const typographies = {
    serif: { name: "Clásico (Serif)", font: "'Playfair Display', 'Georgia', serif" },
    sans: { name: "Moderno (Sans)", font: "system-ui, -apple-system, sans-serif" },
    mono: { name: "Técnico (Mono)", font: "'Courier New', 'Fira Code', monospace" }
  };

  const palettes = {
    elegante: { name: "Elegante", bg: "#111111", fg: "#f4f4f5", accent: "#c68a61", cardBg: "#1a1a1a", btnFg: "#111" },
    tech: { name: "Cyber", bg: "#050510", fg: "#00ffcc", accent: "#7000ff", cardBg: "#0a0a1a", btnFg: "#fff" },
    minimal: { name: "Minimalista", bg: "#fdfbf7", fg: "#2d3748", accent: "#48bb78", cardBg: "#ffffff", btnFg: "#fff" },
    vibrant: { name: "Vibrante", bg: "#4338ca", fg: "#ffffff", accent: "#f43f5e", cardBg: "#3730a3", btnFg: "#fff" }
  };

  const shapes = {
    sharp: { name: "Recto", radius: "0px" },
    rounded: { name: "Redondeado", radius: "12px" },
    pill: { name: "Píldora", radius: "24px" }
  };

  const styles = {
    flat: { name: "Plano", shadow: "none", border: "1px solid transparent", btnBorder: "none", titleWeight: 500 },
    soft: { name: "Sombras", shadow: "0 20px 40px rgba(0,0,0,0.12)", border: "1px solid transparent", btnBorder: "none", titleWeight: 600 },
    outline: { name: "Bordes", shadow: "none", border: "1px solid var(--border-color)", btnBorder: "1px solid var(--border-color)", titleWeight: 400 },
    brutalist: { name: "Brutalista", shadow: "6px 6px 0px var(--accent-color)", border: "2px solid var(--fg-color)", btnBorder: "2px solid var(--fg-color)", titleWeight: 800 }
  };

  const alignments = {
    left: { name: "Izquierda", align: "flex-start", textAlign: "left" },
    center: { name: "Centrado", align: "center", textAlign: "center" },
    right: { name: "Derecha", align: "flex-end", textAlign: "right" }
  };

  const tones = {
    pro: { name: "Profesional", title: "Identidad Modular", text: "Diseñamos sistemas que se adaptan y escalan. La personalización extrema permite a las marcas destacarse en un mar de plantillas idénticas." },
    direct: { name: "Directo", title: "Marcas con Impacto", text: "Deja las plantillas genéricas para los demás. Construimos una identidad visual única que transmite exactamente lo que tu empresa representa." },
    creative: { name: "Creativo", title: "Magia Visual", text: "Tu ADN plasmado en cada pixel. Rompemos las reglas tradicionales para crear experiencias visuales inolvidables y llenas de personalidad." }
  };

  const t = typographies[typography];
  const p = palettes[palette];
  const sh = shapes[shape];
  const st = styles[style];
  const a = alignments[alignment];
  const tn = tones[tone];

  // Derive final values
  const isOutline = style === 'outline';
  const isBrutalist = style === 'brutalist';
  
  const cardBorder = isOutline ? `1px solid ${p.fg}33` : (isBrutalist ? `2px solid ${p.fg}` : st.border);
  const cardShadow = isBrutalist ? `6px 6px 0px ${p.accent}` : st.shadow;
  
  const btnBg = (isOutline || isBrutalist) ? "transparent" : p.accent;
  const btnColor = isOutline ? p.accent : (isBrutalist ? p.fg : p.btnFg);
  const btnBorder = isOutline ? `1px solid ${p.accent}` : (isBrutalist ? `2px solid ${p.fg}` : st.btnBorder);
  const btnShadow = isBrutalist ? `4px 4px 0px ${p.accent}` : "none";
  const btnTransform = style === 'outline' ? 'uppercase' : 'none';

  const OptionGroup = ({ title, options, current, onChange }) => (
    <div style={{ marginBottom: 32 }}>
      <h4 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--fg-secondary)", marginBottom: 16 }}>{title}</h4>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.entries(options).map(([key, opt]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            style={{
              padding: "8px 16px",
              background: current === key ? "var(--fg-primary)" : "transparent",
              color: current === key ? "var(--bg-base)" : "var(--fg-secondary)",
              border: `1px solid ${current === key ? "var(--fg-primary)" : "var(--border-subtle)"}`,
              borderRadius: "100px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
            onMouseOver={(e) => {
              if(current !== key) {
                e.currentTarget.style.borderColor = "var(--fg-primary)";
                e.currentTarget.style.color = "var(--fg-primary)";
              }
            }}
            onMouseOut={(e) => {
              if(current !== key) {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--fg-secondary)";
              }
            }}
          >
            {opt.name}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section style={{ padding: "120px 48px", background: "var(--bg-base)", borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Laboratorio de Identidad</div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24, color: "var(--fg-primary)" }}>
            Explora las <span style={{ color: "var(--accent-action)" }}>infinitas posibilidades.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 650, marginBottom: 64 }}>
            Prueba en tiempo real cómo cambia la percepción de una marca al ajustar individualmente su tipografía, colores, formas, estilo, alineación y tono. Cada variable cuenta una historia distinta.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 64, alignItems: "start" }}>
          
          {/* Controls */}
          <Reveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <OptionGroup title="Tipografía" options={typographies} current={typography} onChange={setTypography} />
              <OptionGroup title="Paleta de Colores" options={palettes} current={palette} onChange={setPalette} />
              <OptionGroup title="Formas" options={shapes} current={shape} onChange={setShape} />
              <OptionGroup title="Estilo Visual" options={styles} current={style} onChange={setStyle} />
              <OptionGroup title="Alineación" options={alignments} current={alignment} onChange={setAlignment} />
              <OptionGroup title="Tono del Mensaje" options={tones} current={tone} onChange={setTone} />
            </div>
          </Reveal>

          {/* Interactive Canvas */}
          <Reveal delay={400}>
            <div
              style={{
                background: p.bg,
                padding: "64px 32px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
                transition: "background 500ms ease, color 500ms ease",
                fontFamily: t.font,
                color: p.fg,
                minHeight: 480,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                '--border-color': `${p.fg}40`,
                '--accent-color': p.accent,
                '--fg-color': p.fg
              }}
            >
              {/* Fake UI Element inside canvas */}
              <div
                style={{
                  background: isOutline || isBrutalist ? "transparent" : p.cardBg,
                  padding: 48,
                  borderRadius: sh.radius,
                  boxShadow: cardShadow,
                  border: cardBorder,
                  transition: "all 500ms ease",
                  maxWidth: 400,
                  margin: "0 auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: a.align,
                  textAlign: a.textAlign
                }}
              >
                <div style={{ 
                  width: 56, 
                  height: 56, 
                  borderRadius: sh.radius, 
                  background: p.accent,
                  border: isBrutalist ? `2px solid ${p.fg}` : "none",
                  boxShadow: isBrutalist ? `4px 4px 0px ${p.fg}` : "none",
                  marginBottom: 32, 
                  transition: "all 500ms ease" 
                }} />
                
                <h3 style={{ 
                  color: p.fg,
                  fontSize: 32, 
                  margin: "0 0 16px 0", 
                  fontWeight: st.titleWeight, 
                  letterSpacing: typography === 'mono' ? '-0.02em' : 'normal', 
                  transition: "all 500ms ease" 
                }}>
                  {tn.title}
                </h3>
                
                <p style={{ 
                  color: p.fg,
                  opacity: 0.8, 
                  fontSize: 16, 
                  lineHeight: 1.6, 
                  marginBottom: 40, 
                  transition: "all 500ms ease" 
                }}>
                  {tn.text}
                </p>
                
                <button
                  style={{
                    background: btnBg,
                    color: btnColor,
                    border: btnBorder,
                    padding: "16px 32px",
                    borderRadius: sh.radius,
                    fontFamily: "inherit",
                    fontSize: 15,
                    textTransform: btnTransform,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 500ms ease",
                    boxShadow: btnShadow,
                    width: "100%"
                  }}
                >
                  Explorar Caso
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

window.Playground = Playground;
