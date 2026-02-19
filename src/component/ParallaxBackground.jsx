import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ShootingStars } from "./shooting-stars";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const cloud2y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const cloud1y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  
  // Perubahan hanya di baris ini: mulai dari 0% (tampil) ke -100% (keluar ke atas)
  const planety = useTransform(x, [0, 0.5], ["0%", "-100%"]); 

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className=" relative h-screen overflow-y-hidden">
        <ShootingStars />
        {/* Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Cloud */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/cloud.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: cloud2y,
          }}
        />
        {/* Planet */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: planety, // Memanggil planety yang baru
          }}
        />
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/cloud2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: cloud1y,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, var(--color-primary) 100%)",
          }}
        />
        <div />
        <div />
      </div>
    </section>
  );
};

export default ParallaxBackground;