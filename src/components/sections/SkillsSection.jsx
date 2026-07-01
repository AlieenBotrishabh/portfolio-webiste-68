import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionWrapper, staggerContainer, staggerItem } from "../ui/SectionWrapper.jsx";

const categoryColors = {
  "Programming Languages": "rgba(168, 85, 247, 0.15)",
  "Frontend": "rgba(59, 130, 246, 0.15)",
  "Backend": "rgba(34, 197, 94, 0.15)",
  "DevOps & Tools": "rgba(251, 146, 60, 0.15)",
  "Databases": "rgba(244, 63, 94, 0.15)",
  "Machine Learning": "rgba(20, 184, 166, 0.15)",
};

const categoryBorders = {
  "Programming Languages": "rgba(168, 85, 247, 0.3)",
  "Frontend": "rgba(59, 130, 246, 0.3)",
  "Backend": "rgba(34, 197, 94, 0.3)",
  "DevOps & Tools": "rgba(251, 146, 60, 0.3)",
  "Databases": "rgba(244, 63, 94, 0.3)",
  "Machine Learning": "rgba(20, 184, 166, 0.3)",
};

function SkillGroup({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const bg = categoryColors[group.category] ?? "rgba(255,255,255,0.04)";
  const border = categoryBorders[group.category] ?? "rgba(255,255,255,0.08)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-5"
      style={{
        background: `linear-gradient(135deg, ${bg} 0%, rgba(255,255,255,0.015) 100%)`,
        borderColor: border,
      }}
    >
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-4">
        {group.category}
      </h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-2"
      >
        {group.items.map((skill) => (
          <motion.span
            key={skill}
            variants={staggerItem}
            className="glass-pill px-3 py-1 text-[12px] text-white/85 font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function SkillsSection({ resumeData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-white/45 mb-4"
          >
            Technical Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-medium section-title"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Tools of the trade
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.skills.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
