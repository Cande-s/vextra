function VMark({ size = 32 }) {
  return (
    <img
      src="vextra logo completo.png"
      alt="VEXTRA"
      style={{ height: size * 0.5, width: "auto", display: "block", flexShrink: 0 }}
    />
  );
}

function CustomE() { return null; }

function Wordmark({ size = 20, showTagline = false }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
        <VMark size={size * 4.5} />
      </div>
      {(showTagline || true) && ( // Mostramos el eslogan por defecto o lo ocultamos si es muy pequeño
        <div
          style={{
            fontSize: Math.max(9, size * 0.45),
            color: "var(--fg-secondary, #ccc)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: size < 14 ? 0 : 1, // Ocultar si es demasiado pequeño para leer
            transition: "opacity 200ms ease"
          }}
        >
          <div style={{ width: size * 0.8, height: 1, background: "var(--accent-action, #c68a61)" }} />
          <span>
            Tu marca, en la <span style={{ color: "var(--accent-action, #c68a61)", fontWeight: 600 }}>dirección correcta</span>
          </span>
          <div style={{ width: size * 0.8, height: 1, background: "var(--accent-action, #c68a61)" }} />
        </div>
      )}
    </div>
  );
}

window.VMark = VMark;
window.CustomE = CustomE;
window.Wordmark = Wordmark;
