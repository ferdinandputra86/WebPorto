import { useRef } from "react";
import { useScroll, useSpring } from "motion/react";
import Experiences from "./Experiences";
import Footer from "./Footer";

// Satu scroll yang menggerakkan perjalanan: Experience -> kota malam (footer).
const Journey = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const progress = useSpring(scrollYProgress, { damping: 50 });

  return (
    <div ref={ref} className="relative">
      <Experiences progress={progress} />
      <Footer progress={progress} />
    </div>
  );
};

export default Journey;
