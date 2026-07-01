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

/** Thin horizontal gradient divider between sections */
function Divider() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="section-divider max-w-6xl mx-auto" />
    </div>
  );
}

export default function App() {
  const { resumeData } = useResumeData();

  return (
    <>
      {/* Fixed video layer sits behind everything */}
      <BackgroundVideo />

      {/* Scrollable content column */}
      <div className="relative z-10 selection:bg-white selection:text-black">
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
    </>
  );
}