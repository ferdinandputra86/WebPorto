// Palet kartu "stage" (Projects + Journey).
// Malam: border + latar gelap senada + aksen terang.
// Siang (HANDOFF 9.2): latar = border dicampur putih 86%, teks chip = border dicampur hitam 50%.
const base = [
  { border: "#6d28d9", bg: "#2d1b4e", accent: "#c4b5fd" },
  { border: "#06b6d4", bg: "#0f172a", accent: "#67e8f9" },
  { border: "#ef4444", bg: "#450a0a", accent: "#fca5a5" },
  { border: "#22c55e", bg: "#052e16", accent: "#86efac" },
  { border: "#f59e0b", bg: "#451a03", accent: "#fcd34d" },
  { border: "#d946ef", bg: "#3b0a45", accent: "#f0abfc" },
  { border: "#3b82f6", bg: "#0b1b3d", accent: "#93c5fd" },
  { border: "#f97316", bg: "#431407", accent: "#fdba74" },
];

const mix = (hex, target, t) => {
  const n = (h, i) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  const c = [0, 1, 2].map((i) =>
    Math.round(n(hex, i) * (1 - t) + n(target, i) * t)
      .toString(16)
      .padStart(2, "0"),
  );
  return `#${c.join("")}`;
};

export const stageThemes = base.map((t) => ({
  ...t,
  bgLight: mix(t.border, "#ffffff", 0.86),
  accentLight: mix(t.border, "#000000", 0.5),
}));

export const getStageTheme = (index) =>
  stageThemes[index % stageThemes.length];

// Variabel CSS yang dibaca .stage-card / .stage-chip di index.css
export const stageVars = (theme) => ({
  "--sb": theme.border,
  "--sbg": theme.bg,
  "--sbg-l": theme.bgLight,
  "--chip": theme.accent,
  "--chip-l": theme.accentLight,
});
