import { motion } from "motion/react";

// Posisi bintang deterministik (tanpa Math.random) supaya stabil antar render.
const stars = Array.from({ length: 44 }, (_, i) => {
  const r = (n) => (((Math.sin(i * 127.1 + n * 311.7) * 43758.5453) % 1) + 1) % 1;
  return {
    left: `${(r(1) * 100).toFixed(1)}%`,
    top: `${(r(2) * 100).toFixed(1)}%`,
    size: r(3) > 0.8 ? 6 : 4,
    color: r(4) > 0.7 ? "#ffe27a" : "#c9b8ff",
    delay: `-${(r(5) * 2.4).toFixed(2)}s`,
  };
});

// Bintang pixel berkedip (steps) di latar. `opacity` boleh berupa MotionValue (scroll).
const PixelStars = ({ opacity = 1 }) => (
  <motion.div
    aria-hidden="true"
    className="absolute inset-0 pointer-events-none"
    style={{ opacity }}
  >
    {stars.map((s, i) => (
      <span
        key={i}
        className="px-star"
        style={{
          left: s.left,
          top: s.top,
          width: s.size,
          height: s.size,
          background: s.color,
          animationDelay: s.delay,
        }}
      />
    ))}
  </motion.div>
);

export default PixelStars;
