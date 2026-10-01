import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { flushSync } from "react-dom";

// Tema disimpan di <html data-theme="dark|light">. Nilai awal sudah ditentukan oleh
// script inline di index.html (localStorage -> prefers-color-scheme) sebelum React jalan.
const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

const prefersReducedMotion = () =>
  typeof matchMedia === "function" &&
  matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readTheme);

  const apply = useCallback((next) => {
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage diblokir: tema tetap berganti untuk sesi ini */
    }
    setTheme(next);
  }, []);

  // `origin` = elemen tombol; lingkaran pergantian melebar dari tengahnya.
  const toggle = useCallback(
    (origin) => {
      const next = theme === "dark" ? "light" : "dark";
      const canAnimate =
        typeof document.startViewTransition === "function" &&
        !prefersReducedMotion();

      if (!canAnimate) {
        apply(next);
        return;
      }

      const rect = origin?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : 0;
      const radius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => apply(next));
      });
      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 900,
              easing: "steps(12)",
              pseudoElement: "::view-transition-new(root)",
            },
          );
        })
        .catch(() => {});
    },
    [theme, apply],
  );

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
