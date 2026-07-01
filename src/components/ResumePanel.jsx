import { motion } from "motion/react";

function SectionCard({ title, children, className = "" }) {
  return (
    <div className={`liquid-glass rounded-[28px] p-4 md:p-5 ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-[0.24em] text-white/55">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function SkillGroup({ group }) {
  return (
    <div className="space-y-2.5 rounded-[20px] bg-white/[0.03] p-3">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="glass-pill rounded-full px-3 py-1 text-[11px] text-white/85"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.025] p-3.5 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/[0.035]">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-white leading-tight">{project.title}</h3>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/45">
          Project
        </span>
      </div>
      <p className="text-[11px] leading-relaxed text-white/65">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/8 bg-black/25 px-2 py-1 text-[10px] text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ResumePanel({ resumeData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-full max-w-3xl mx-auto"
    >
      <div className="grid gap-4">
        <SectionCard title="Resume Snapshot">
          <div className="grid grid-cols-3 gap-2">
            {resumeData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-white/8 bg-white/[0.03] p-3 text-center"
              >
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[20px] border border-white/8 bg-black/25 p-3">
            <p className="text-[11px] leading-relaxed text-white/70">{resumeData.objective}</p>
          </div>
        </SectionCard>

        <SectionCard title="Skills">
          <div className="grid gap-3 max-h-[26vh] md:max-h-[29vh] overflow-hidden">
            {resumeData.skills.map((group) => (
              <SkillGroup key={group.category} group={group} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Projects">
          <div className="grid gap-3 md:grid-cols-2">
            {resumeData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard title="Certification">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">
                {resumeData.certifications[0].title}
              </p>
              <p className="text-[11px] leading-relaxed text-white/65">
                {resumeData.certifications[0].summary}
              </p>
            </div>
          </SectionCard>

          <SectionCard title="Education">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">{resumeData.education.degree}</p>
              <p className="text-[11px] leading-relaxed text-white/65">
                {resumeData.education.institution} · {resumeData.education.timeline}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {resumeData.links.map((link) => (
                  <span
                    key={link}
                    className="glass-pill rounded-full px-3 py-1 text-[11px] text-white/75"
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </motion.div>
  );
}