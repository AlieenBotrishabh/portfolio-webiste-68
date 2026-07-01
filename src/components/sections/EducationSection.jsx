import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper.jsx";

function TimelineItem({ children, delay = 0, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-white/[0.08]"
    >
      {/* dot */}
      <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full border border-white/20 bg-black" />
      {children}
    </motion.div>
  );
}

export function EducationSection({ resumeData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const { education, certifications } = resumeData;

  return (
    <SectionWrapper id="education">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-white/45 mb-4"
          >
            Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-medium section-title"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Education & Credentials
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap className="w-4 h-4 text-white/50" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/40 font-semibold">
                Education
              </span>
            </motion.div>

            <TimelineItem delay={0.2} inView={inView}>
              <div className="glass-card p-5 mb-4">
                <h3 className="text-base font-semibold text-white mb-1 leading-snug">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-white/55">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {education.institution}, {education.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {education.timeline}
                  </span>
                </div>
                <ul className="space-y-2">
                  {education.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[12px] text-white/60">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/30" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Award className="w-4 h-4 text-white/50" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/40 font-semibold">
                Certifications
              </span>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <TimelineItem key={cert.title} delay={0.25 + i * 0.1} inView={inView}>
                  <div className="glass-card p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-sm font-semibold text-white leading-snug flex-1">
                        {cert.title}
                      </h3>
                      <span className="glass-pill px-2.5 py-1 text-[10px] text-white/55 font-medium shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/45 font-medium mb-2 uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                    <p className="text-[12px] text-white/60 leading-relaxed">
                      {cert.summary}
                    </p>
                  </div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
