import React, { useState } from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Footer from "./section/Footer";
import Preloader from "./component/Preloader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div
        className="container mx-auto max-w-7xl"
        style={{
          // Hide content and prevent scroll while loading
          visibility: isLoaded ? "visible" : "hidden",
          overflow: isLoaded ? "visible" : "hidden",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Footer />
      </div>
    </>
  );
};

export default App;
