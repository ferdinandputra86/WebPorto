"use client";
import { useScroll, useSpring, useTransform, motion } from "motion/react";
import React, { useRef } from "react";
import { getStageTheme, stageVars } from "../constants/stageThemes";

// Node planet/bintang per peran (urut dari terbaru). w = lebar px desktop, h = tinggi kotak.
const nodes = [
  { src: "/assets/sprites/pl-green.webp", w: 84, h: 84 },
  { src: "/assets/sprites/pl-orange.webp", w: 70, h: 70 },
  { src: "/assets/sprites/pl-saturn.webp", w: 116, h: 116 },
  { src: "/assets/sprites/pl-moon.webp", w: 66, h: 66 },
  { src: "/assets/sprites/st-purple.webp", w: 72, h: 56 },
  { src: "/assets/sprites/st-blue.webp", w: 66, h: 52 },
];

const dottedLine =
  "absolute top-5 bottom-[50px] left-[30px] md:left-1/2 w-0 border-l-[5px] md:border-l-[6px] border-dotted border-[#7a57db] md:-translate-x-[3px]";
const lineGlow =
  "[filter:drop-shadow(0_0_8px_#7a57db)] light:[filter:drop-shadow(0_0_6px_rgba(92,51,204,.35))]";

const Node = ({ node, isLatest }) => (
  <motion.div
    className="relative flex items-center justify-center"
    style={{ "--w": node.w, "--h": node.h }}
    initial={{ scale: 0.6, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ type: "spring", stiffness: 160, damping: 14 }}
  >
    {isLatest && (
      <div className="absolute left-0 md:left-1/2 -top-[30px] md:-translate-x-1/2 whitespace-nowrap px-2 py-0.5 text-sm text-[#14102b] bg-[#ffe27a] shadow-[2px_2px_0_#000] px-hop">
        ▼ YOU ARE HERE
      </div>
    )}
    <div className="h-[calc(var(--h)*.62px)] md:h-[calc(var(--h)*1px)] flex items-center">
      <img
        src={node.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="block w-[calc(var(--w)*.62px)] md:w-[calc(var(--w)*1px)] px-float [image-rendering:pixelated] [filter:drop-shadow(0_0_18px_rgba(154,123,255,.55))] light:[filter:drop-shadow(0_0_14px_rgba(255,255,255,.9))]"
        style={{ animationDelay: `${(isLatest ? 0 : -1.4) * 1}s` }}
      />
    </div>
  </motion.div>
);

const Entry = ({ item, index, total }) => {
  const theme = getStageTheme(index);
  const cardLeft = index % 2 === 0; // desktop: kartu kiri/kanan bergantian
  const isLatest = index === 0;

  const dateEl = (
    <div
      className={`text-lg md:text-2xl text-[#c9b8ff] light:text-[#3d2a9a] [text-shadow:2px_2px_0_#000] light:[text-shadow:none] md:px-2 mb-2 md:mb-0 col-start-2 row-start-1 md:row-start-1 ${
        cardLeft
          ? "md:col-start-3 md:text-left"
          : "md:col-start-1 md:text-right"
      }`}
    >
      {item.date}
    </div>
  );

  const card = (
    <motion.div
      className={`stage-card is-link p-4 md:px-6 md:py-5 col-start-2 row-start-2 md:row-start-1 ${
        cardLeft ? "md:col-start-1" : "md:col-start-3"
      }`}
      style={{ cursor: "default", ...stageVars(theme) }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl md:text-[26px] leading-tight text-white light:text-[#14102b] [text-shadow:2px_2px_0_#000] light:[text-shadow:none]">
        {item.title}
      </h3>
      <div
        className="mt-1 text-base md:text-lg text-(--chip) light:text-(--chip-l)"
      >
        {item.job}
      </div>
      <ul className="mt-2.5 pl-5 text-[15px] md:text-[17px] leading-[1.45] text-[#d9d4f0] light:text-[#2a2f55] list-disc">
        {item.contents.map((content, i) => (
          <li key={i} className="my-1">
            {content}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div
      className={`grid grid-cols-[64px_1fr] gap-x-3 md:grid-cols-[1fr_180px_1fr] md:gap-x-0 md:items-center ${
        index === total - 1 ? "" : "mb-[34px] md:mb-14"
      }`}
    >
      <div className="relative z-[1] col-start-1 row-start-1 row-span-2 md:row-span-1 md:col-start-2 flex justify-center pt-2 md:pt-0 self-start md:self-center">
        <Node node={nodes[index % nodes.length]} isLatest={isLatest} />
      </div>
      {dateEl}
      {card}
    </div>
  );
};

export const Timeline = ({ data }) => {
  const trackRef = useRef(null);

  // Garis perjalanan "tergambar" mengikuti scroll (clip-path, bukan top/height).
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { damping: 40, stiffness: 120 });
  const clip = useTransform(
    progress,
    (v) => `inset(0 0 ${Math.max(0, Math.min(1, 1 - v)) * 100}% 0)`,
  );

  return (
    <div className="relative mx-auto max-w-[1100px] px-5 sm:px-10 md:px-6 pt-24 md:pt-[90px] pb-28 md:pb-[140px]">
      <div className="text-base md:text-xl text-[var(--accent)] tracking-[0.2em]">
        ▸ JOURNEY
      </div>
      <h2 className="mt-1 mb-9 md:mt-1.5 md:mb-16 text-3xl md:text-[40px] font-bold">
        Work Experience
      </h2>

      <div ref={trackRef} className="relative">
        {/* jalur redup + jalur terang yang tergambar */}
        <div aria-hidden="true" className={`${dottedLine} opacity-25`} />
        <motion.div
          aria-hidden="true"
          className={`${dottedLine} ${lineGlow}`}
          style={{ clipPath: clip }}
        />

        {data.map((item, index) => (
          <Entry key={index} item={item} index={index} total={data.length} />
        ))}
      </div>

      <div className="relative mt-2 text-lg text-center text-[#c9b8ff] light:text-[#2a4a9a]">
        <span className="px-3.5 py-1 bg-[var(--page-2)]">▼ LANDING ZONE</span>
      </div>
    </div>
  );
};
