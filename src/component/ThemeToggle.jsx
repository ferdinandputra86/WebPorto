import { useRef } from "react";
import { useTheme } from "../lib/theme";

// Gambar tombol diambil dari mockup (Main.html = malam, MainDay.html = siang).
// Format: [x, y, w, h, fill]
const NIGHT = [
  [4, 0, 84, 44, "#7a57db"],
  [0, 4, 92, 36, "#7a57db"],
  [8, 4, 76, 36, "#0a0824"],
  [4, 8, 84, 28, "#0a0824"],
  [16, 12, 4, 4, "#c9b8ff"],
  [28, 28, 4, 4, "#fff"],
  [36, 14, 4, 4, "#9a7bff"],
  [52, 8, 28, 28, "#dcd6ff"],
  ...[
    [64, 12], [68, 12], [72, 12], [76, 12],
    [60, 16], [64, 16], [68, 16],
    [56, 20], [60, 20], [64, 20],
    [56, 24], [60, 24], [64, 24],
    [56, 28], [60, 28], [64, 28],
    [60, 32], [64, 32], [68, 32],
    [64, 36], [68, 36], [72, 36], [76, 36],
  ].map(([x, y]) => [x, y, 4, 4, "#5c33cc"]),
];

const DAY = [
  [4, 0, 84, 44, "#14204a"],
  [0, 4, 92, 36, "#14204a"],
  [8, 4, 76, 36, "#8fd0f6"],
  [4, 8, 84, 28, "#8fd0f6"],
  [56, 12, 20, 4, "#fff"],
  [60, 8, 12, 4, "#fff"],
  [64, 28, 16, 4, "#fff"],
  [12, 8, 28, 28, "#ffe27a"],
  ...[
    [28, 12], [20, 16], [28, 16], [36, 16],
    [24, 20], [28, 20], [32, 20],
    [16, 24], [20, 24], [24, 24], [28, 24], [32, 24], [36, 24], [40, 24],
    [24, 28], [28, 28], [32, 28],
    [20, 32], [28, 32], [36, 32],
    [28, 36],
  ].map(([x, y]) => [x, y, 4, 4, "#e07a00"]),
];

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggle } = useTheme();
  const ref = useRef(null);
  const isDark = theme === "dark";
  const rects = isDark ? NIGHT : DAY;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => toggle(ref.current)}
      aria-label={isDark ? "Ganti ke mode siang" : "Ganti ke mode malam"}
      aria-pressed={isDark}
      className={`block shrink-0 cursor-pointer border-0 bg-transparent p-0 leading-none ${className}`}
    >
      <svg
        viewBox="0 0 92 44"
        shapeRendering="crispEdges"
        aria-hidden="true"
        className="block h-[35px] w-[73px] sm:h-[44px] sm:w-[92px]"
      >
        {rects.map(([x, y, w, h, fill], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
        ))}
      </svg>
    </button>
  );
};

export default ThemeToggle;
