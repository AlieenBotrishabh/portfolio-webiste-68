import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({ resumeData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name / brand */}
        <div>
          <p className="text-sm font-semibold text-white/80">
            {resumeData.name}
          </p>
          <p className="text-xs text-white/35 mt-0.5">{resumeData.role}</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${resumeData.email}`}
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={resumeData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={resumeData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-white/30">
          © {year} {resumeData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
