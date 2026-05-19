/* eslint-disable */
// VEXTRA — Lucide-style icon set, stroke 1.5px, sized via prop.
// Mirrors the icons used in the landing per 03-ESTRUCTURA-WB / 04-CONTENIDO.

const _Svg = ({ size = 20, color = "currentColor", children, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, ...style }}
  >
    {children}
  </svg>
);

const Icon = {
  Check: (p) => <_Svg {...p}><path d="M20 6 9 17l-5-5" /></_Svg>,
  CheckCircle: (p) => <_Svg {...p}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></_Svg>,
  ArrowRight: (p) => <_Svg {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></_Svg>,
  Menu: (p) => <_Svg {...p}><path d="M4 6h16M4 12h16M4 18h16" /></_Svg>,
  X: (p) => <_Svg {...p}><path d="M18 6 6 18M6 6l12 12" /></_Svg>,
  Layers: (p) => <_Svg {...p}><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></_Svg>,
  Zap: (p) => <_Svg {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></_Svg>,
  TrendingUp: (p) => <_Svg {...p}><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></_Svg>,
  AlertTriangle: (p) => <_Svg {...p}><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><path d="M12 9v4M12 17h.01" /></_Svg>,
  Compass: (p) => <_Svg {...p}><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z" /></_Svg>,
  Target: (p) => <_Svg {...p}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></_Svg>,
  Layout: (p) => <_Svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></_Svg>,
  RefreshCw: (p) => <_Svg {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></_Svg>,
  Wrench: (p) => <_Svg {...p}><path d="M14.7 6.3a4 4 0 0 0 5 5l-3-3 1-3-3 1z" /><path d="m14 7-8 8a2.8 2.8 0 1 0 4 4l8-8" /></_Svg>,
  MessageSquare: (p) => <_Svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></_Svg>,
  Mail: (p) => <_Svg {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></_Svg>,
  Instagram: (p) => <_Svg {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01" /></_Svg>,
  Linkedin: (p) => <_Svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></_Svg>,
  Loader: (p) => <_Svg {...p}><path d="M21 12a9 9 0 1 1-6.2-8.5" /></_Svg>,
};

window.Icon = Icon;
