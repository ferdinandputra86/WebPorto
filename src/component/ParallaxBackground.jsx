import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ShootingStars } from "./shooting-stars";
import { DaySprites, DaySun, skyBands } from "./DaySky";
import { useTheme } from "../lib/theme";

// Mobile: geser fokus ke 62% (Mobile.html) supaya planet/awan tetap terlihat.
const layerPos = "bg-cover bg-[position:62%_100%] md:bg-[position:50%_100%]";

const ParallaxBackground = () => {
  const { theme } = useTheme();
  const isDay = theme === "light";
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const cloud2y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const cloud1y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  const planety = useTransform(x, [0, 0.5], ["0%", "-100%"]);

  const cloud = isDay ? "/assets/day/cloud-day.webp" : "/assets/hq/cloud.webp";
  const cloud2 = isDay
    ? "/assets/day/cloud2-day.webp"
    : "/assets/hq/cloud2.webp";

  return (
    <section className="absolute inset-0">
      <div
        ref={ref}
        data-paused={!inView}
        className=" relative h-screen overflow-hidden"
      >
        {isDay ? (
          <>
            {/* Langit: 7 pita biru */}
            <div
              aria-hidden="true"
              className="absolute inset-0 w-full h-screen -z-50"
              style={{ background: skyBands }}
            />
            <div className="absolute inset-0 -z-[45]">
              <DaySun variant="hero" />
            </div>
          </>
        ) : (
          <>
            {!reduceMotion && <ShootingStars />}
            {/* Sky */}
            <div
              className={`absolute inset-0 w-full h-screen -z-50 ${layerPos}`}
              style={{ backgroundImage: "url(/assets/hq/sky.webp)" }}
            />
          </>
        )}
        {/* Cloud */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{ y: cloud2y }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-y-0 -inset-x-5 ${layerPos} ${isDay ? "px-drift" : ""}`}
            style={{ backgroundImage: `url(${cloud})` }}
          />
        </motion.div>
        {/* Planet (malam) / pesawat, balon, burung (siang) */}
        <motion.div
          className={`absolute inset-0 -z-30 ${isDay ? "" : layerPos}`}
          style={{
            backgroundImage: isDay ? undefined : "url(/assets/hq/planets.webp)",
            y: planety,
          }}
        >
          {isDay && <DaySprites variant="hero" />}
        </motion.div>
        <motion.div
          className="absolute inset-0 -z-40"
          style={{ y: cloud1y }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-y-0 -inset-x-5 ${layerPos} ${isDay ? "px-drift-rev" : ""}`}
            style={{ backgroundImage: `url(${cloud2})` }}
          />
        </motion.div>
        {/* Vignette gelap (pengganti overlay bg-black/40): kiri di desktop, atas di mobile. Hanya malam. */}
        {!isDay && (
          <>
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(3,4,18,.55) 0%, rgba(3,4,18,.15) 45%, transparent 65%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(rgba(3,4,18,.5), rgba(3,4,18,0) 60%)",
              }}
            />
          </>
        )}
        <div
          className="absolute inset-0"
          style={{
            background: isDay
              ? "linear-gradient(to bottom, transparent 62%, #cfe8fb 100%)"
              : "linear-gradient(to bottom, transparent 60%, var(--color-primary) 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
