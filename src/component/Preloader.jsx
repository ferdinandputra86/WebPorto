import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// Critical assets that must be loaded before showing the site
const CRITICAL_ASSETS = [
  "/assets/sky.png",
  "/assets/cloud.png",
  "/assets/cloud2.png",
  "/assets/planets.png",
  "/assets/coding.png",
];

// Secondary assets - loaded in background but tracked for progress
const SECONDARY_ASSETS = [
  "/assets/projects/solace.jpg",
  "/assets/projects/node.jpg",
  "/assets/projects/laravel.jpg",
  "/assets/projects/pasar.in.jpg",
  "/assets/projects/diabetesense.jpg",
  "/assets/projects/emotionclass.jpg",
  "/assets/projects/heartlog.jpg",
  "/assets/projects/rythm.jpg",
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
    const font = new FontFace(
      "Pixelate",
      "url(/assets/fonts/Minecraft.ttf)"
    );
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

  // Lock body scroll during preload
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
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
    const allAssets = [...CRITICAL_ASSETS, ...SECONDARY_ASSETS, ...CDN_ASSETS];
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
      })
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
    // Scroll to top for clean first impression
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader-overlay"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated background particles */}
          <div className="preloader-particles">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="preloader-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                }}
              />
            ))}
          </div>

          {/* Scanline overlay */}
          <div className="preloader-scanlines" />

          {/* Main content */}
          <div className="preloader-content">
            {/* Logo / Title */}
            <motion.div
              className="preloader-title-container"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="preloader-title">FERDINAND</h1>
              <p className="preloader-subtitle">PORTFOLIO</p>
            </motion.div>

            {/* Pixel art divider */}
            <motion.div
              className="preloader-divider"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Progress section */}
            <motion.div
              className="preloader-progress-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Progress bar container */}
              <div className="preloader-bar-outer">
                <div className="preloader-bar-border">
                  <div className="preloader-bar-track">
                    <motion.div
                      className="preloader-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="preloader-bar-shine" />
                    </motion.div>
                    {/* Segmented blocks overlay */}
                    <div className="preloader-bar-segments">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="preloader-bar-segment" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress text */}
              <div className="preloader-progress-info">
                <span className="preloader-percentage">{progress}%</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTip}
                    className="preloader-tip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {LOADING_TIPS[currentTip]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enter button - shows when finished */}
            <AnimatePresence>
              {isFinished && (
                <motion.button
                  className="preloader-enter-btn"
                  onClick={handleEnter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <span className="preloader-enter-text">
                    ▶ START
                  </span>
                  <span className="preloader-enter-hint">
                    [ PRESS TO ENTER ]
                  </span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
