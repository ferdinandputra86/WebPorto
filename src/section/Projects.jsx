import Project from "../component/Project";
import { myProjects, experiences } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

// Teks kartu unggulan diturunkan dari data Experience (freelance solacestudio.id).
// Preview gambar yang mengikuti kursor saat hover kartu. Ubah ke true untuk menyalakan lagi.
const ENABLE_CURSOR_PREVIEW = false;

const solaceJob = experiences.find((e) => e.job === "solacestudio.id");

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  const [featured, ...rest] = myProjects;

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative bg-[var(--page-2)] scroll-mt-16"
    >
      <div className="mx-auto max-w-[1344px] px-5 sm:px-10 lg:px-24 pt-24 md:pt-[90px] pb-20 md:pb-[100px]">
        <div className="text-base md:text-xl text-[var(--accent)] tracking-[0.2em]">
          ▸ SELECT STAGE
        </div>
        <h2 className="mt-1.5 mb-6 md:mb-10 text-3xl md:text-[40px] font-bold">
          Projects
        </h2>

        <Project
          index={0}
          featured
          subtitle={
            solaceJob
              ? `Freelance backend project for ${solaceJob.job}`
              : featured.description
          }
          subtitleDate={solaceJob?.date}
          setPreview={setPreview}
          {...featured}
        />

        <div className="grid grid-cols-1 gap-5 mt-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {rest.map((project, i) => (
            <Project
              key={project.id}
              index={i + 1}
              setPreview={setPreview}
              {...project}
            />
          ))}
          {/* Tile terkunci: hiasan */}
          <div
            aria-hidden="true"
            className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border-[6px] border-dashed border-[#2a1f6e] light:border-[#8fb0d4] bg-[#0a0824]/60 light:bg-white/55 p-6 text-center min-h-[160px]"
          >
            <div className="text-[44px] grayscale opacity-70">🔒</div>
            <div className="text-xl text-[#a79fd0] light:text-[#5a4f9a]">NEW STAGE</div>
            <div className="text-[15px] text-[#8b86b4] light:text-[#5b6f90]">Loading...</div>
          </div>
        </div>
      </div>
      {ENABLE_CURSOR_PREVIEW && preview && (
        <motion.img
          alt=""
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 hidden md:block"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
