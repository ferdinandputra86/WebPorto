import React, { useRef } from "react";
import { motion, useInView, useTransform } from "motion/react";
import { useTheme } from "../lib/theme";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/r.fnand/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/riferd/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fff"
        width="32"
        height="32"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-9.96 9.04l5.35 2.21a2.83 2.83 0 0 1 1.6-.49h.06l2.39-3.46v-.05a3.79 3.79 0 1 1 3.79 3.79h-.09l-3.4 2.43a2.85 2.85 0 0 1-5.65.5L1.94 14.1A10 10 0 1 0 12 2Zm-4.51 15.8a2.14 2.14 0 0 0 2.14-.98l.96.4a1.63 1.63 0 0 1-3.04.85 1.63 1.63 0 0 1 .88-2.13l1.04.43a2.14 2.14 0 0 0-1.98 1.43Zm8.3-5.5a2.53 2.53 0 1 0-2.53-2.53 2.53 2.53 0 0 0 2.53 2.53Zm0-4.22a1.69 1.69 0 1 1-1.69 1.69 1.69 1.69 0 0 1 1.69-1.69Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ferdinandputra86/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

const cityMask =
  "linear-gradient(transparent 0, rgba(0,0,0,.08) 15%, rgba(0,0,0,.3) 30%, rgba(0,0,0,.65) 48%, #000 68%)";

// Gedung dari jauh ke dekat. `from` = jarak geser (px) saat kota belum terlihat;
// layer dekat bergerak lebih jauh dari layer jauh (parallax scroll).
// `dur` = durasi geser horizontal pelan (CSS), beda tiap layer.
// `lights` = jendela yang menyala (malam) / berkilau (siang): [left %, top %, delay s].
const buildings = [
  { n: 2, bottom: 100, mBottom: 90, from: 30, dur: 26, lights: [] },
  {
    n: 3,
    bottom: 85,
    mBottom: 75,
    from: 55,
    dur: 22,
    lights: [
      [8.16, 54.01, 0],
      [46.24, 45.06, 2.6],
      [73.44, 53.29, 5.2],
      [96.35, 62.24, 7.8],
    ],
  },
  {
    n: 4,
    bottom: 70,
    mBottom: 60,
    from: 85,
    dur: 18,
    lights: [
      [30.96, 63.07, 1.3],
      [55.5, 67.39, 3.9],
      [79.63, 63.99, 6.5],
    ],
  },
  { n: 5, bottom: 55, mBottom: 45, from: 120, dur: 14, lights: [] },
];

const Building = ({ b, progress, isDay }) => {
  const y = useTransform(progress, [0, 1], [b.from, 0]);
  const src = isDay
    ? `/assets/day/city${b.n}-day.png`
    : `/assets/city/city${b.n}.png`;
  return (
    <motion.div
      aria-hidden="true"
      className="absolute aspect-[16/9] left-[-215px] w-[820px] bottom-[calc(var(--mb)*-1px)] md:left-[-3%] md:w-[106%] md:bottom-[calc(var(--db)*-1px)] pointer-events-none"
      style={{ "--mb": b.mBottom, "--db": b.bottom, y }}
    >
      <div
        className="absolute inset-0 px-drift"
        style={{ animationDuration: `${b.dur}s` }}
      >
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="block w-full h-full max-w-none [image-rendering:pixelated]"
        />
        {b.lights.map(([l, t, d], i) => (
          <i
            key={i}
            className={isDay ? "px-glint" : "px-window"}
            style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${d}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// `progress` = scrollYProgress dari pembungkus Journey.
const Footer = ({ progress }) => {
  const { theme } = useTheme();
  const isDay = theme === "light";
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "100px" });

  return (
    <footer
      ref={ref}
      id="contact"
      data-paused={!inView}
      className="relative z-[1] -mt-20 md:-mt-[120px] h-[960px] md:h-[989px] overflow-hidden text-center"
      style={{
        background: isDay
          ? "linear-gradient(rgba(207,232,251,0) 0, #cfe8fb 11%, #bee3fa 24%, #a6d8f8 40%, #8fcdf6 58%, #7ac4f4 78%, #6cc0f4 100%)"
          : "linear-gradient(rgba(7,6,28,0) 0, #07061c 11%, #080b2b 20%, #07123d 30%, #0a1d5c 42%, #0e2b7a 56%, #123b98 72%, #1a4aae 86%, #1d4fb5 100%)",
      }}
    >
      <img
        src={isDay ? "/assets/day/city1-day.png" : "/assets/city/city1.png"}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[60%_100%] md:object-[50%_100%] [image-rendering:pixelated]"
        style={{ WebkitMaskImage: cityMask, maskImage: cityMask }}
      />
      {!isDay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background: "rgba(70,30,140,.22)",
            WebkitMaskImage: cityMask,
            maskImage: cityMask,
          }}
        />
      )}
      {buildings.map((b) => (
        <Building key={b.n} b={b} progress={progress} isDay={isDay} />
      ))}

      <div className="absolute inset-x-0 top-[250px] md:top-[230px] px-5 md:px-24">
        <div className="relative z-[3] flex justify-center gap-3.5 md:gap-[18px]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="px-tile w-[60px] h-[60px]"
            >
              <span className="px-tile-in">
                {typeof social.icon === "string" ? (
                  <img
                    src={social.icon}
                    alt=""
                    width="32"
                    height="32"
                    className="w-8 h-8"
                  />
                ) : (
                  social.icon
                )}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[110px] md:h-[120px]"
        style={{
          background: isDay
            ? "linear-gradient(transparent, rgba(16,36,86,.78))"
            : "linear-gradient(transparent, rgba(3,4,18,.85))",
        }}
      />
      <div
        className={`absolute inset-x-0 z-[3] bottom-4 md:bottom-[22px] text-[15px] md:text-lg ${isDay ? "text-[#eef7ff]" : "text-[#c9c3e6]"}`}
      >
        &copy; {new Date().getFullYear()} Ferdinand. All rights reserved.
        <div
          className={`mt-1 md:mt-1.5 text-xs md:text-sm ${isDay ? "text-[#c4dcf5]" : "text-[#a9a2d0]"}`}
        >
          Background: Night City Pixel Art by CraftPix.net (OGA-BY 3.0)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
