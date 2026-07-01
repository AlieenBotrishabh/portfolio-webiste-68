import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ResumePanel } from "./components/ResumePanel.jsx";
import { useResumeData } from "./hooks/useResumeData.js";

function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-30 grid place-items-center bg-black/55 backdrop-blur-sm">
      <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65">
        Loading portfolio
      </div>
    </div>
  );
}

export default function App() {
  const { resumeData, isLoading } = useResumeData();

  return (
    <main className="relative bg-black h-screen w-screen flex flex-col overflow-hidden selection:bg-white selection:text-black shrink-0">
      <BackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />
      <Navbar />
      <div className="relative z-10 flex-1 px-6 pb-6 lg:px-8 lg:pb-8">
        <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <Hero resumeData={resumeData} />
          <div className="flex h-full items-center justify-center">
            <ResumePanel resumeData={resumeData} />
          </div>
        </div>
      </div>
      {isLoading ? <LoadingOverlay /> : null}
    </main>
  );
}