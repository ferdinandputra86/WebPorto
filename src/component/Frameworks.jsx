import { OrbitingCircles } from "./OrbitingCircle";

export function Frameworks() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Teks di Tengah Lingkaran (Opsional) */}
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-400 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent drop-shadow-sm">
        Tech Stack
      </span>

      {/* Lingkaran Luar (6 Ikon) */}
      <OrbitingCircles iconSize={40} radius={160} speed={1.5}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="Java"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
          alt="C++"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
          alt="Go"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
          alt="Flutter"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
          alt="Android"
        />
      </OrbitingCircles>

      {/* Lingkaran Dalam (5 Ikon) */}
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS"
        />
        {/* Ikon JavaScript Baru */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          alt="MySQL"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg"
          alt="Kotlin"
        />
      </OrbitingCircles>
    </div>
  );
}
