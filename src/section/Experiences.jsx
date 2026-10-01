import React from "react";
import { useTransform } from "motion/react";
import { Timeline } from "../component/Timeline";
import PixelStars from "../component/PixelStars";
import { experiences } from "../constants";
import { useTheme } from "../lib/theme";

const skyBand = {
  backgroundImage: "var(--journey-img)",
  opacity: "var(--journey-op)",
  WebkitMaskImage:
    "linear-gradient(transparent, #000 25%, #000 75%, transparent)",
  maskImage: "linear-gradient(transparent, #000 25%, #000 75%, transparent)",
};

// `progress` = scrollYProgress dari pembungkus Journey (Experience -> kota).
const Experiences = ({ progress }) => {
  // Bintang memudar di 60% pertama perjalanan turun ke kota.
  const starOpacity = useTransform(progress, [0, 0.6], [1, 0]);
  const { theme } = useTheme();
  return (
    <section
      id="experience"
      className="relative w-full bg-[var(--page-2)] scroll-mt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={skyBand}
      />
      {theme === "dark" && <PixelStars opacity={starOpacity} />}
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
