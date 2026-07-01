import { motion, useInView } from "motion/react";
import { MapPin, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import { useRef } from "react";
import { SectionWrapper, staggerContainer, staggerItem } from "../ui/SectionWrapper.jsx";

function StatCard({ stat, index }) {
  return (
    <motion.div
      variants={staggerItem}
      className="glass-card p-5 text-center flex flex-col items-center justify-center gap-1"
    >
      <span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
        {stat.value}
      </span>
      <span className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-medium">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function AboutSection({ resumeData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-white/45 mb-4"
        >
          About Me
        </motion.p>

        <div ref={ref} className="grid gap-8 lg:grid-cols-[1fr_0.85fr] items-start">
          {/* Left — bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-medium leading-[1.1] mb-6 section-title"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Building things that matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/70 text-[15px] leading-relaxed mb-8"
            >
              {resumeData.bio}
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 mb-8"
            >
              <a
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors duration-300 text-sm group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full glass-card">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="group-hover:text-white transition-colors">{resumeData.email}</span>
              </a>
              <div className="flex items-center gap-3 text-white/65 text-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full glass-card">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                <span>{resumeData.location}</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <a
                href={resumeData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:opacity-90 transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href={resumeData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:opacity-90 transition-all duration-300"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-3"
          >
            {resumeData.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}

            {/* Objective card spanning full width */}
            <motion.div
              variants={staggerItem}
              className="glass-card col-span-2 p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-2">
                Objective
              </p>
              <p className="text-sm text-white/75 leading-relaxed">
                {resumeData.objective}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
