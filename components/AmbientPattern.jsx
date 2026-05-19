/* eslint-disable */
// VEXTRA — Ambient pattern: soft radial glow + slow-drifting diagonal lines.
// Reusable across sections. Animation is very slow (40-60s) so it reads as
// "alive" without distracting. Respects prefers-reduced-motion.

function AmbientPattern({
  variant = "default", // "default" | "subtle" | "strong" | "right" | "left"
  accentOpacity = 0.08,
  lineOpacity = 0.5,
}) {
  // Pre-baked positions per variant so different sections feel non-repeating.
  const variants = {
    default: { glowAt: "80% 10%", glow2At: "5% 90%", lines: [0, 1, 2] },
    subtle:  { glowAt: "90% 100%", glow2At: "10% 0%", lines: [1, 2] },
    strong:  { glowAt: "70% 30%", glow2At: "20% 80%", lines: [0, 1, 2, 3] },
    right:   { glowAt: "95% 50%", glow2At: "0% 100%", lines: [0, 2] },
    left:    { glowAt: "5% 30%", glow2At: "100% 90%", lines: [1, 2] },
  };
  const v = variants[variant] || variants.default;

  // unique id so multiple instances don't share gradient defs
  const uid = React.useMemo(
    () => `vx-amb-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Two soft accent glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at ${v.glowAt}, rgba(198,138,97,${accentOpacity}) 0%, transparent 60%)`,
          animation: "vx-glow-drift-a 28s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 50% 40% at ${v.glow2At}, rgba(198,138,97,${accentOpacity * 0.6}) 0%, transparent 65%)`,
          animation: "vx-glow-drift-b 36s ease-in-out infinite",
        }}
      />

      {/* Slow-drifting diagonal lines — one accent, others near-white */}
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          opacity: lineOpacity,
          animation: "vx-lines-drift 60s linear infinite",
        }}
      >
        <defs>
          <linearGradient id={`${uid}-accent`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(198,138,97,0.42)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id={`${uid}-white`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {v.lines.includes(0) && (
          <line x1="-10%" y1="100%" x2="110%" y2="0%" stroke={`url(#${uid}-accent)`} strokeWidth="1" />
        )}
        {v.lines.includes(1) && (
          <line x1="-10%" y1="115%" x2="110%" y2="15%" stroke={`url(#${uid}-white)`} strokeWidth="1" />
        )}
        {v.lines.includes(2) && (
          <line x1="-10%" y1="85%" x2="110%" y2="-15%" stroke={`url(#${uid}-white)`} strokeWidth="1" />
        )}
        {v.lines.includes(3) && (
          <line x1="-10%" y1="130%" x2="110%" y2="30%" stroke={`url(#${uid}-white)`} strokeWidth="1" />
        )}
      </svg>
    </div>
  );
}

window.AmbientPattern = AmbientPattern;
