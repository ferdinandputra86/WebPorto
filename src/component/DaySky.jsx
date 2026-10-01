// Isi langit mode siang: pita langit, matahari, pesawat, balon udara, burung.
// Posisi mengikuti mockup (desktop 1440x940 / mobile 390x760 / start screen 1440x800)
// dan diskalakan lewat vw/vh supaya tetap di tempat yang sama di ukuran layar lain.
// Variabel CSS per elemen: --l/--t/--w (desktop) dan --ml/--mt/--mw (mobile).

export const skyBands =
  "linear-gradient(#2f80dc 0 14%, #3b8fe6 14% 28%, #4a9cea 28% 42%, #5eaaee 42% 56%, #78baf2 56% 70%, #98cdf5 70% 84%, #bfe3fb 84% 100%)";

const layouts = {
  hero: {
    height: 940,
    sun: { l: 1090, t: 150, w: 150, ml: 286, mt: 90, mw: 84 },
    plane: { l: 24, t: 190, w: 228, ml: 140, mt: 440, mw: 110 },
    balloonOrange: { l: 207, t: 369, w: 156, ml: 20, mt: 380, mw: 104 },
    balloonGreen: { l: 874, t: 150, w: 156, ml: 272, mt: 340, mw: 94 },
    birds: [
      { l: 600, t: 128, ml: 150, mt: 98, delay: "0s" },
      { l: 662, t: 152, ml: 196, mt: 118, delay: "0.3s" },
      { l: 540, t: 170, ml: 0, mt: 0, delay: "0.5s", desktopOnly: true },
    ],
  },
  intro: {
    height: 800,
    sun: { l: 1090, t: 110, w: 150, ml: 286, mt: 16, mw: 72 },
    plane: { l: 30, t: 150, w: 228, ml: 130, mt: 590, mw: 110 },
    balloonOrange: { l: 272, t: 300, w: 156, ml: 14, mt: 500, mw: 96 },
    balloonGreen: { l: 1010, t: 290, w: 156, ml: 292, mt: 470, mw: 78 },
    birds: [
      { l: 560, t: 60, ml: 150, mt: 98, delay: "0s" },
      { l: 615, t: 86, ml: 196, mt: 118, delay: "0.3s" },
    ],
  },
};

const vars = (o) => ({
  "--l": o.l,
  "--t": o.t,
  "--w": o.w,
  "--ml": o.ml,
  "--mt": o.mt,
  "--mw": o.mw,
});

export const DaySun = ({ variant = "hero" }) => {
  const L = layouts[variant];
  return (
    <div
      aria-hidden="true"
      className="day-item aspect-square"
      style={{ ...vars(L.sun), "--H": L.height }}
    >
      <img
        src="/assets/sprites/sun.svg"
        alt=""
        className="absolute inset-0 w-full h-full max-w-none [image-rendering:pixelated]"
      />
      <img
        src="/assets/sprites/sun-rays.svg"
        alt=""
        className="absolute inset-0 w-full h-full max-w-none [image-rendering:pixelated] px-rays"
      />
    </div>
  );
};

export const DaySprites = ({ variant = "hero" }) => {
  const L = layouts[variant];
  const H = { "--H": L.height };
  return (
    <div aria-hidden="true">
      {/* Pesawat + jejak asap pixel */}
      <div className="day-item" style={{ ...vars(L.plane), ...H }}>
        <div className="px-fly relative">
          {[0, 1, 2, 3].map((i) => (
            <i
              key={i}
              className="px-puff"
              style={{
                left: `${-6 - i * 12}%`,
                top: `${28 + (i % 2) * 8}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
          <img
            src="/assets/sprites/plane.png"
            alt=""
            className="block w-full max-w-none [image-rendering:pixelated]"
          />
        </div>
      </div>
      <div className="day-item" style={{ ...vars(L.balloonOrange), ...H }}>
        <img
          src="/assets/sprites/balloon-orange.png"
          alt=""
          className="block w-full max-w-none [image-rendering:pixelated] px-bob"
          style={{ animationDelay: "0.8s" }}
        />
      </div>
      <div className="day-item" style={{ ...vars(L.balloonGreen), ...H }}>
        <img
          src="/assets/sprites/balloon-green.png"
          alt=""
          className="block w-full max-w-none [image-rendering:pixelated] px-bob"
        />
      </div>
      {L.birds.map((b, i) => (
        <div
          key={i}
          className={`day-item day-bird px-bird ${b.desktopOnly ? "max-md:hidden" : ""}`}
          style={{ ...vars(b), ...H, animationDelay: b.delay }}
        />
      ))}
    </div>
  );
};
