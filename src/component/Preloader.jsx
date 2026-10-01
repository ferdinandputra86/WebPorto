import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { DaySprites, DaySun, skyBands } from "./DaySky";
import { useTheme } from "../lib/theme";

// Critical assets that must be loaded before showing the site
const CRITICAL_ASSETS = [
  "/assets/hq/sky.webp",
  "/assets/hq/cloud.webp",
  "/assets/hq/cloud2.webp",
  "/assets/hq/planets.webp",
  "/assets/coding.webp",
];

// Aset langit mode siang (hanya dimuat kalau tema aktif = siang)
const DAY_ASSETS = [
  "/assets/day/cloud-day.webp",
  "/assets/day/cloud2-day.webp",
  "/assets/sprites/plane.png",
  "/assets/sprites/balloon-orange.png",
  "/assets/sprites/balloon-green.png",
  "/assets/sprites/bird.png",
];

// Secondary assets - loaded in background but tracked for progress
const SECONDARY_ASSETS = [
  "/assets/projects/solace.webp",
  "/assets/projects/node.webp",
  "/assets/projects/laravel.webp",
  "/assets/projects/pasar.in.webp",
  "/assets/projects/diabetesense.webp",
  "/assets/projects/emotionclass.webp",
  "/assets/projects/heartlog.webp",
  "/assets/projects/rythm.webp",
  "/assets/socials/instagram.svg",
  "/assets/socials/linkedIn.svg",
  "/assets/arrow-right.svg",
  "/assets/arrow-up.svg",
  "/assets/close.svg",
  "/assets/menu.svg",
];

// CDN icons from Frameworks component
const CDN_ASSETS = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
];

function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ src, status: "loaded" });
    img.onerror = () => resolve({ src, status: "error" });
    img.src = src;
  });
}

// Preload font
function preloadFont() {
  return new Promise((resolve) => {
    const font = new FontFace("Pixelate", "url(/assets/fonts/Minecraft.ttf)");
    font
      .load()
      .then(() => {
        document.fonts.add(font);
        resolve();
      })
      .catch(() => resolve());
  });
}

const LOADING_TIPS = [
  "Loading world assets...",
  "Rendering parallax layers...",
  "Spawning shooting stars...",
  "Initializing quest log...",
  "Loading tech stack orbit...",
  "Buffering cloud textures...",
  "Compiling experience data...",
  "Preparing project showcase...",
];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDay = theme === "light";

  // Lock body scroll during preload
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Rotate tips
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % LOADING_TIPS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const startLoading = useCallback(async () => {
    const isDayTheme =
      document.documentElement.getAttribute("data-theme") === "light";
    const allAssets = [
      ...(isDayTheme ? DAY_ASSETS : []),
      ...CRITICAL_ASSETS,
      ...SECONDARY_ASSETS,
      ...CDN_ASSETS,
    ];
    const totalAssets = allAssets.length + 1; // +1 for font
    let loaded = 0;

    const updateProgress = () => {
      loaded++;
      const newProgress = Math.round((loaded / totalAssets) * 100);
      setProgress(newProgress);
    };

    // Load font first
    await preloadFont();
    updateProgress();

    // Load all assets concurrently - each updates progress on completion
    const promises = allAssets.map((src) =>
      preloadImage(src).then((result) => {
        updateProgress();
        return result;
      }),
    );

    await Promise.all(promises);

    // Small delay for smooth UX
    setTimeout(() => {
      setIsFinished(true);
    }, 400);
  }, []);

  useEffect(() => {
    startLoading();
  }, [startLoading]);

  const handleEnter = () => {
    setIsExiting(true);
    // Reset ke atas tanpa animasi scroll (body punya scroll-behavior: smooth)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setTimeout(() => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      onComplete();
    }, 800);
  };

  // Bar terisi per segmen (kelipatan 5%), bukan mulus
  const segmentProgress = Math.min(100, Math.floor(progress / 5) * 5);
  const layers = [
    "/assets/hq/sky.webp",
    "/assets/hq/cloud.webp",
    "/assets/hq/planets.webp",
    "/assets/hq/cloud2.webp",
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader-overlay"
          exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {isDay ? (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: skyBands }}
              />
              <DaySun variant="intro" />
              <div
                aria-hidden="true"
                className="preloader-layer"
                style={{ backgroundImage: "url(/assets/day/cloud-day.webp)" }}
              />
              <DaySprites variant="intro" />
              <div
                aria-hidden="true"
                className="preloader-layer"
                style={{ backgroundImage: "url(/assets/day/cloud2-day.webp)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 70%, #cfe8fb 100%)",
                }}
              />
            </>
          ) : (
            <>
              {layers.map((src) => (
                <div
                  key={src}
                  aria-hidden="true"
                  className="preloader-layer"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 45%, rgba(3,4,18,.6), rgba(3,4,18,0) 65%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, #030412 100%)",
                }}
              />
            </>
          )}

          <div className="absolute inset-x-0 top-[14vh] md:top-[18vh] px-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-[clamp(44px,7.8vw,112px)] leading-none font-normal tracking-[0.04em] [text-shadow:6px_6px_0_#1b1250] max-md:[text-shadow:3px_3px_0_#1b1250] light:[text-shadow:6px_6px_0_rgba(255,255,255,.85)] light:max-md:[text-shadow:3px_3px_0_rgba(255,255,255,.85)]">
                FERDINAND
              </h1>
              <p className="mt-3.5 text-[clamp(18px,2.8vw,40px)] tracking-[0.5em] text-[#d9ccff] light:text-[#10204f] [text-shadow:3px_3px_0_#1b1250] light:[text-shadow:3px_3px_0_rgba(255,255,255,.85)]">
                PORTFOLIO
              </p>
            </motion.div>

            <motion.div
              className="mx-auto mt-10 md:mt-14 w-full max-w-[520px] text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-between gap-4 mb-2 text-sm md:text-xl text-[#d9ccff] light:text-[#10204f] uppercase">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTip}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {LOADING_TIPS[currentTip]}
                  </motion.span>
                </AnimatePresence>
                <span>{progress}%</span>
              </div>
              <div
                className="preloader-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label="Loading"
              >
                <i style={{ width: `${segmentProgress}%` }} />
              </div>
            </motion.div>

            <div className="mt-10 md:mt-12 min-h-[120px]">
              {isFinished && (
                <>
                  <button
                    type="button"
                    className="px-btn"
                    onClick={handleEnter}
                    autoFocus
                  >
                    <span>▶ START</span>
                  </button>
                  <div
                    className="mt-5 text-base md:text-xl text-[#d9ccff] light:text-[#10204f] px-blink"
                    aria-hidden="true"
                  >
                    [ PRESS TO ENTER ]
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
