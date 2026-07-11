import HeroText from "../component/HeroText";
import ParallaxBackground from "../component/ParallaxBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className=" flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
    </section>
  );
};

export default Hero;
