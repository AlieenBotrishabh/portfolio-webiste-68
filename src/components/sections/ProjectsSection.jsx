import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { SectionWrapper, staggerContainer, staggerItem } from "../ui/SectionWrapper.jsx";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group glass-card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-500"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {project.highlight && (
              <span className="flex items-center gap-1 glass-pill px-2 py-0.5 text-[10px] font-medium text-white/70">
                <Star className="w-2.5 h-2.5 fill-white/50 text-white/50" />
                Featured
              </span>
            )}
            <span className="text-[10px] text-white/35 font-medium tracking-widest uppercase">
              {project.year}
            </span>
          </div>
          <h3 className="text-base font-semibold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full glass-card opacity-60 hover:opacity-100 transition-opacity duration-200"
              title="View on GitHub"
            >
              <Github className="w-3.5 h-3.5 text-white" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full glass-card opacity-60 hover:opacity-100 transition-opacity duration-200"
              title="View live demo"
            >
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-[13px] leading-relaxed text-white/65">
        {project.summary}
      </p>

      {/* Description (truncated) */}
      <p className="text-[12px] leading-relaxed text-white/45 line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/[0.06]">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/[0.08] bg-black/20 px-2.5 py-1 text-[10px] text-white/65 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectsSection({ resumeData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-white/45 mb-4"
          >
            Selected Work
          </motion.p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-medium section-title"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Projects I've built
            </motion.h2>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              href={resumeData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white/90 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              View all on GitHub
            </motion.a>
          </div>
        </div>

        {/* Featured (highlight=true) */}
        <div className="grid gap-5 md:grid-cols-2 mb-5">
          {resumeData.projects
            .filter((p) => p.highlight)
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
        </div>

        {/* Other projects */}
        <div className="grid gap-5 md:grid-cols-2">
          {resumeData.projects
            .filter((p) => !p.highlight)
            .map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 2} />
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
