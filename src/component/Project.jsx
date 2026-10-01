import { useState } from "react";
import { motion } from "motion/react";
import ProjectDetails from "./ProjectDetails";
import { getStageTheme, stageVars } from "../constants/stageThemes";

const Chip = ({ children, size }) => (
  <span className={`stage-chip ${size}`}>{children}</span>
);

// Kartu "Select Stage". `featured` = kartu lebar (gambar kiri, teks kanan).
const Project = ({
  index,
  featured = false,
  subtitle,
  subtitleDate,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getStageTheme(index);
  const label = `STAGE ${String(index + 1).padStart(2, "0")}`;
  const open = () => setIsOpen(true);

  const shot = (
    <div
      className={
        featured
          ? "relative overflow-hidden min-h-[220px] md:min-h-[380px] md:flex-[1.35] border-b-4 md:border-b-0 md:border-r-4"
          : "relative overflow-hidden aspect-[16/10] border-b-4"
      }
      style={{ borderColor: theme.border }}
    >
      <div
        className="absolute inset-0 stage-shot bg-[#161040] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(transparent 0 3px, rgba(0,0,0,.12) 3px 4px)",
        }}
      />
      {!featured && (
        <span
          className="absolute left-2 top-2 px-2 py-0.5 text-sm text-white [text-shadow:1px_1px_0_#000]"
          style={{ background: theme.border }}
        >
          {label}
        </span>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center stage-go"
        style={{ background: "rgba(3,4,18,.5)" }}
      >
        <span
          className={`text-white shadow-[3px_3px_0_#000] ${
            featured ? "text-2xl px-5 py-2.5" : "text-xl px-4 py-2"
          }`}
          style={{ background: theme.border }}
        >
          {featured ? "▶ VIEW PROJECT" : "▶ VIEW"}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        role="button"
        tabIndex={0}
        aria-label={`Open ${title}`}
        className={`stage-card is-link ${featured ? "is-featured flex flex-col md:flex-row" : ""}`}
        style={stageVars(theme)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: featured ? 0 : (index % 4) * 0.1 }}
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onFocus={() => setPreview(null)}
      >
        {shot}
        {featured ? (
          <div className="flex flex-col justify-center flex-1 gap-3.5 p-6 md:p-9">
            <span
              className="self-start px-2.5 py-0.5 text-sm text-[#14102b] shadow-[2px_2px_0_#000]"
              style={{ background: "#ffe27a" }}
            >
              ★ FEATURED · {label}
            </span>
            <div className="text-4xl md:text-[44px] leading-[1.1] text-white light:text-[#14102b] [text-shadow:3px_3px_0_#000] light:[text-shadow:none]">
              {title}
            </div>
            <div className="text-lg leading-normal text-[#d9ccff] light:text-[#3b2f7a]">
              {subtitle ?? description}
              {subtitleDate && (
                <>
                  <br />
                  <span className="text-[#a79fd0] light:text-[#5a4f9a]">{subtitleDate}</span>
                </>
              )}
            </div>
            <div>
              {tags.map((tag) => (
                <Chip key={tag.id} size="text-base stage-chip-featured">
                  {tag.name}
                </Chip>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 pt-3.5 pb-2.5">
            <div className="min-h-[48px] text-[19px] leading-tight text-white light:text-[#14102b] [text-shadow:2px_2px_0_#000] light:[text-shadow:none]">
              {title}
            </div>
            <div className="mt-2">
              {tags.map((tag) => (
                <Chip key={tag.id} size="text-sm">
                  {tag.name}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </motion.div>
      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
