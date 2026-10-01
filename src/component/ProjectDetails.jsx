import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 light:from-white light:to-[#f1eaff] light:border-[#6d28d9] light:border-4 light:shadow-[0_6px_0_rgba(20,32,74,.35)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 light:bg-white light:hover:bg-[#e2d4ff]"
        >
          <img src="/assets/close.svg" alt="Close" className="w-6 h-6 light:invert"></img>
        </button>
        <img src={image} alt={title} className="w-full h-full" loading="lazy" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white light:text-[#14102b]">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400 light:text-[#2a2f55]">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400 light:text-[#2a2f55]">
              {subDesc}
            </p>
          ))}
          <div className="flex-items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                ></img>
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project
              <img src="/assets/arrow-up.svg" alt="arrow up" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
