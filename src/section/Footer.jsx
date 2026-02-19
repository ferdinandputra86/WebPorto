import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/r.fnand/", // Ganti dengan link Instagram kamu
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/riferd/", // Ganti dengan link Steam kamu
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
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

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-10">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-110"
              aria-label={social.name}
            >
              {typeof social.icon === "string" ? (
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </span>
              )}
            </a>
          ))}
        </div>
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Ferdinand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
