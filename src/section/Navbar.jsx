import { useState, useEffect } from "react";
import { motion } from "motion/react";
import ThemeToggle from "../component/ThemeToggle";

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
      <li className="nav-li">
        <a className="nav-link sm:!text-xl md:!text-2xl" href="#contact">
          Contact
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
          ? "bg-[var(--nav-bg-open)] backdrop-blur-lg" // Warna menu saat terbuka di HP (menyatu penuh)
          : hasScrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-lg" // Warna saat di-scroll ke bawah
            : "bg-transparent" // Warna saat mentok di atas
      }`}
    >
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-2xl font-bold transition-opacity text-[var(--nav-text)] hover:opacity-70"
          >
            Ferdinand
          </a>
          <div className="flex items-center gap-3.5 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex cursor-pointer text-[var(--nav-text)] focus:outline-none"
            >
              <img
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                className="w-6 h-6 light:invert"
                alt=""
              />
            </button>
          </div>
          <nav className="items-center hidden sm:flex">
            <Navigation />
            <ThemeToggle className="ml-5 md:ml-9" />
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
