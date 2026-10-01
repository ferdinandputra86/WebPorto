import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "motion/react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Journey from "./section/Journey";
import Preloader from "./component/Preloader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // reducedMotion="user": gerak transform/layout dimatikan kalau OS minta reduced motion
    <MotionConfig reducedMotion="user">
      <Analytics />
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div
        style={{
          // Hide content and prevent scroll while loading
          visibility: isLoaded ? "visible" : "hidden",
          overflow: isLoaded ? "visible" : "hidden",
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <About />
        </div>
        {/* Projects & Journey full-bleed: latar selebar layar */}
        <Projects />
        <Journey />
      </div>
    </MotionConfig>
  );
};

export default App;
