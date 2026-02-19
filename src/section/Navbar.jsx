import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link sm:!text-xl md:!text-2xl" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link sm:!text-xl md:!text-2xl" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link sm:!text-xl md:!text-2xl" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link sm:!text-xl md:!text-2xl" href="#experience">
          Experience
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-20 w-full transition-colors duration-500 ease-in-out ${
        isOpen
          ? "bg-primary/90 backdrop-blur-lg" // Warna menu saat terbuka di HP (menyatu penuh)
          : hasScrolled
            ? "bg-primary/40 backdrop-blur-lg" // Warna saat di-scroll ke bawah
            : "bg-primary/0" // Warna saat mentok di atas
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-2xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ferdinand
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          {/* Background tambahan dihapus agar menyatu mulus dengan container induknya */}
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
