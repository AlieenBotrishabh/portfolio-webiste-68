import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { AboutSection } from "./components/sections/AboutSection.jsx";
import { SkillsSection } from "./components/sections/SkillsSection.jsx";
import { ProjectsSection } from "./components/sections/ProjectsSection.jsx";
import { EducationSection } from "./components/sections/EducationSection.jsx";
import { ContactSection } from "./components/sections/ContactSection.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import { useResumeData } from "./hooks/useResumeData.js";
import { motion, AnimatePresence } from "motion/react";

function LoadingOverlay() {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-black"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full border border-white/20 grid place-items-center"
        >
          <div className="w-5 h-5 rounded-full border border-white/50" />
        </motion.div>
        <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65">
          Loading portfolio
        </div>
      </div>
    </motion.div>
  );
}

/** Thin horizontal divider between major sections */
function Divider() {
  return <div className="section-divider mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" />;
}

export default function App() {
  const { resumeData, isLoading } = useResumeData();

  return (
    <>
      {/* Fixed video layer sits behind everything */}
      <BackgroundVideo />

      {/* Scrollable content */}
      <div className="relative z-10 min-h-screen selection:bg-white selection:text-black">
        <Navbar />

        <main>
          <Hero resumeData={resumeData} />
          <Divider />
          <AboutSection resumeData={resumeData} />
          <Divider />
          <SkillsSection resumeData={resumeData} />
          <Divider />
          <ProjectsSection resumeData={resumeData} />
          <Divider />
          <EducationSection resumeData={resumeData} />
          <Divider />
          <ContactSection resumeData={resumeData} />
        </main>

        <Footer resumeData={resumeData} />
      </div>

      {/* Loading overlay fades out when data is ready */}
      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>
    </>
  );
}