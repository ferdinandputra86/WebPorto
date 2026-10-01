import { FlipWords } from "./Flipwords";
const words = ["Backend", "Database", "Troubleshoot"];
import { motion } from "motion/react";

// Ukuran mengikuti mockup (Main.html 1440px / Mobile.html 390px):
// batas bawah = ukuran mobile, batas atas = ukuran desktop.
const shadow =
  "[text-shadow:3px_3px_0_#1b1250] light:[text-shadow:3px_3px_0_rgba(255,255,255,.8)]";
const shadowBig =
  "[text-shadow:5px_5px_0_#1b1250] light:[text-shadow:5px_5px_0_rgba(255,255,255,.8)]";

const HeroText = () => {
  const variant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    // Diposisikan absolut terhadap viewport (sama seperti ParallaxBackground),
    // supaya blok teks mulai di x=30% dan tidak menutupi planet oranye/hijau.
    <div className="absolute z-10 left-5 top-30 w-[340px] md:left-[30vw] md:top-[26vh] md:w-auto font-normal">
      <motion.h2
        className={`text-[clamp(24px,2.22vw,32px)] leading-[1.2] text-[#d9ccff] light:text-[#10204f] ${shadow}`}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        Hi I'm Rio
      </motion.h2>
      <motion.h1
        className={`mt-2 md:mt-2.5 text-[clamp(34px,4vw,58px)] leading-[1.1] font-normal ${shadowBig}`}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
      >
        a Software Developer
      </motion.h1>
      <motion.p
        className={`mt-4 md:mt-5 text-[clamp(24px,2.5vw,36px)] leading-[1.2] ${shadow}`}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      >
        Focused on building
      </motion.p>
      <motion.div
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.7 }}
      >
        <div className="flex items-end">
        <FlipWords
          words={words}
          className={`font-normal text-[#b79dff] light:text-white text-[clamp(52px,6.67vw,96px)] leading-[1.1] !px-0 [text-shadow:5px_5px_0_#1b1250] light:[text-shadow:5px_5px_0_#14204a]`}
        />
        <span
          aria-hidden="true"
          className="px-blink -ml-2 text-[clamp(52px,6.67vw,96px)] leading-[1.1] text-[#b79dff] light:text-white [text-shadow:5px_5px_0_#1b1250] light:[text-shadow:5px_5px_0_#14204a]"
        >
          _
        </span>
        </div>
      </motion.div>
      <motion.p
        className={`text-[clamp(24px,2.5vw,36px)] leading-[1.2] ${shadow}`}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.9 }}
      >
        that keeps systems running
      </motion.p>
    </div>
  );
};

export default HeroText;
