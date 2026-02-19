import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Frameworks } from "../component/Frameworks";

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 60,
    x: index % 2 === 0 ? -70 : 70,
    rotate: index % 2 === 0 ? -3 : 3,
    scale: 0.96,
    filter: "blur(4px)",
  }),
  visible: (index) => ({
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: index * 0.12,
    },
  }),
};

const getCardMotionProps = (index) => ({
  variants: cardVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.25 },
  custom: index,
});

const About = () => {
  const [isStatVisible, setIsStatVisible] = useState(false);
  const statRef = useRef(null);

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ferdinandputra86@gmail.com");
    setHasCopied(true);

    // Kembalikan ke teks awal setelah 2 detik
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Baris ini yang diubah:
        // Akan otomatis jadi 'true' saat masuk layar, dan 'false' saat keluar layar
        setIsStatVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }, // Diubah ke 0.2 agar animasinya mulai sedikit lebih cepat saat di-scroll
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <motion.div
          {...getCardMotionProps(0)}
          className="flex items-end grid-special-color grid-1 relative overflow-hidden"
        >
          <img
            src="/assets/coding.png"
            className="absolute scale-[2] -right-[5rem] -top-[2rem] md:scale-[4] md:left-10 md:inset-y-3 lg:scale-[2.4]"
            alt="coding"
          />

          {/* overlay gelap */}
          <div className="absolute inset-0 bg-black/50" />

          {/* gradient bawah */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          <div className="relative z-10 text-white">
            <p className="headtext">Hi, Rio here</p>
            <p className="subtext text-gray-200">
              A growth oriented developer with a strong passion for programming,
              experienced in building and deploying payment gateway backend
              services with clean APIs and reliable performance under hundreds
              of daily requests.
            </p>
          </div>
        </motion.div>

        {/* grid 2 */}
        <motion.div
          {...getCardMotionProps(1)}
          ref={statRef}
          className="grid-default-color grid-2 relative overflow-hidden p-0 border-0"
        >
          {/* Container UI Game */}
          <div className="absolute inset-0 w-full h-full bg-[#2d1b4e] border-[6px] border-[#6d28d9] flex flex-col justify-center p-3 md:p-4 z-10 rounded-[inherit]">
            {/* Header / Title */}
            <div className="text-white text-base mb-2 md:mb-3 uppercase tracking-widest border-b-2 border-[#8b5cf6] pb-1 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              <span className="text-[#c4b5fd] mr-2">►</span>
              Stats
            </div>

            {/* Container Progress Bars */}
            <div className="flex flex-col gap-2 w-full">
              {/* Skill 1: Frontend */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between text-base text-purple-100 uppercase drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                  <span>Frontend</span>
                  <span>83%</span>
                </div>
                <div className="w-full h-3 md:h-4 bg-[#1e1136] border-2 border-[#4c1d95] p-[1px] shadow-[2px_2px_0_0_#000]">
                  <div
                    className="h-full bg-[#9333ea] relative transition-all duration-[1500ms] ease-out"
                    style={{ width: isStatVisible ? "83%" : "0%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c084fc]"></div>
                  </div>
                </div>
              </div>

              {/* Skill 2: Backend */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between text-base text-purple-100 uppercase drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                  <span>Backend</span>
                  <span>96%</span>
                </div>
                <div className="w-full h-3 md:h-4 bg-[#1e1136] border-2 border-[#4c1d95] p-[1px] shadow-[2px_2px_0_0_#000]">
                  <div
                    className="h-full bg-[#7e22ce] relative transition-all duration-[1500ms] ease-out delay-100"
                    style={{ width: isStatVisible ? "96%" : "0%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#a855f7]"></div>
                  </div>
                </div>
              </div>

              {/* Skill 3: Database */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between text-base text-purple-100 uppercase drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                  <span>Database</span>
                  <span>89%</span>
                </div>
                <div className="w-full h-3 md:h-4 bg-[#1e1136] border-2 border-[#4c1d95] p-[1px] shadow-[2px_2px_0_0_#000]">
                  <div
                    className="h-full bg-[#a21caf] relative transition-all duration-[1500ms] ease-out delay-200"
                    style={{ width: isStatVisible ? "89%" : "0%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e879f9]"></div>
                  </div>
                </div>
              </div>

              {/* Skill 4: Teamwork */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between text-base text-purple-100 uppercase drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                  <span>Teamwork</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-3 md:h-4 bg-[#1e1136] border-2 border-[#4c1d95] p-[1px] shadow-[2px_2px_0_0_#000]">
                  <div
                    className="h-full bg-[#8b5cf6] relative transition-all duration-[1500ms] ease-out delay-300"
                    style={{ width: isStatVisible ? "100%" : "0%" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4b5fd]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* grid 3 */}
        <motion.div
          {...getCardMotionProps(2)}
          className="grid-black-color grid-3 relative overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Container Animasi Orbiting Circles */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center md:scale-125 z-10 opacity-90">
            <Frameworks />
          </div>
        </motion.div>

        {/* grid 4 */}
        <motion.div
          {...getCardMotionProps(3)}
          className="grid-special-color grid-4 relative overflow-hidden p-0 border-0 group"
        >
          {/* Container UI Game: Quest Log Panel */}
          <div className="absolute inset-0 w-full h-full bg-[#0f172a] border-[6px] border-[#06b6d4] flex flex-col p-4 md:p-5 z-10 rounded-[inherit] shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]">
            {/* Header: Judul Menu */}
            <div className="flex justify-between items-end border-b-2 border-[#22d3ee] pb-2 mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-[#67e8f9] font-bold uppercase tracking-widest mb-1 drop-shadow-[1px_1px_0_#000]">
                  Currently Learning
                </span>
                <h3 className="text-white text-base md:text-lg font-bold uppercase tracking-widest drop-shadow-[2px_2px_0_#000] flex items-center">
                  <span className="text-[#22d3ee] mr-2 text-xl">🎮</span>
                  Now Grinding
                </h3>
              </div>
              <span className="text-xs text-[#22d3ee] animate-pulse font-bold uppercase drop-shadow-[1px_1px_0_#000] hidden sm:block">
                In Progress...
              </span>
            </div>

            {/* List Misi / Skills */}
            <div className="flex flex-col gap-3 flex-grow justify-center">
              {/* Quest 1 */}
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#164e63] border-2 border-[#22d3ee] mr-3 md:mr-4 shadow-[2px_2px_0_0_#000] flex items-center justify-center flex-shrink-0">
                  {/* Kotak berkedip penanda misi aktif */}
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#67e8f9] animate-pulse"></div>
                </div>
                <span className="text-blue-50 text-sm md:text-base uppercase tracking-wide drop-shadow-[1px_1px_0_#000] transition-colors hover:text-[#67e8f9] cursor-default">
                  System Design
                </span>
              </div>

              {/* Quest 2 */}
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#164e63] border-2 border-[#22d3ee] mr-3 md:mr-4 shadow-[2px_2px_0_0_#000] flex items-center justify-center flex-shrink-0">
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#67e8f9] animate-pulse"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                </div>
                <span className="text-blue-50 text-sm md:text-base uppercase tracking-wide drop-shadow-[1px_1px_0_#000] transition-colors hover:text-[#67e8f9] cursor-default">
                  Secure API
                </span>
              </div>

              {/* Quest 3 */}
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#164e63] border-2 border-[#22d3ee] mr-3 md:mr-4 shadow-[2px_2px_0_0_#000] flex items-center justify-center flex-shrink-0">
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#67e8f9] animate-pulse"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                </div>
                <span className="text-blue-50 text-sm md:text-base uppercase tracking-wide drop-shadow-[1px_1px_0_#000] transition-colors hover:text-[#67e8f9] cursor-default">
                  Cloud Infra
                </span>
              </div>

              {/* Quest 4 */}
              <div className="flex items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#164e63] border-2 border-[#22d3ee] mr-3 md:mr-4 shadow-[2px_2px_0_0_#000] flex items-center justify-center flex-shrink-0">
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#67e8f9] animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
                <span className="text-blue-50 text-sm md:text-base uppercase tracking-wide drop-shadow-[1px_1px_0_#000] transition-colors hover:text-[#67e8f9] cursor-default">
                  Performance Opt.
                </span>
              </div>
            </div>

            {/* Dekorasi Bawah ala Game */}
            <div className="mt-auto pt-3 flex justify-end border-t border-[#06b6d4]/30">
              <span className="text-[10px] text-[#22d3ee]/70 uppercase tracking-widest font-bold">
                + EXP Gaining
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...getCardMotionProps(4)}
          onClick={handleCopy}
          className="grid-default-color grid-5 relative overflow-hidden p-0 border-0 cursor-pointer group"
        >
          <div
            className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 z-10 rounded-[inherit] transition-all duration-300 active:scale-[0.97] border-[6px] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] ${
              hasCopied
                ? "bg-[#14532d] border-[#22c55e] shadow-[inset_0_0_30px_rgba(34,197,94,0.4)]"
                : "bg-[#450a0a] border-[#ef4444] group-hover:bg-[#7f1d1d] group-hover:border-[#f87171]"
            }`}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3 drop-shadow-[2px_2px_0_#000] animate-bounce">
              {hasCopied ? "📨" : "✉️"}
            </div>
            <h3
              className={`text-base md:text-lg font-bold uppercase tracking-widest drop-shadow-[2px_2px_0_#000] text-center mb-1 ${
                hasCopied ? "text-[#86efac]" : "text-[#fca5a5]"
              }`}
            >
              {hasCopied ? "Email Copied!" : "Invite to Party"}
            </h3>
            <p className="text-white/80 text-[10px] md:text-xs font-mono drop-shadow-[1px_1px_0_#000]">
              ferdinandputra86@gmail.com
            </p>
            {!hasCopied && (
              <span className="absolute bottom-2 md:bottom-3 text-[8px] md:text-[10px] text-white/50 uppercase tracking-widest font-bold group-hover:animate-pulse">
                [ Click to Copy ]
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
