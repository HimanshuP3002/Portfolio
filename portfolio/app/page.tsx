import SceneWrapper from "@/components/canvas/SceneWrapper";
import HeroText from "@/components/ui/HeroText";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CornerWidgetWrapper from "@/components/canvas/CornerWidgetWrapper";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen text-white">

      <Navbar />

      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <SceneWrapper />
      </div>

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-red-600/15 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[50vw] bg-purple-600/10 blur-[130px] rounded-full mix-blend-screen" />
      </div>

      {/* Cinematic Vignette Overlay (Fixed) */}
      <div className="fixed inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] mix-blend-multiply"></div>

      {/* Scrolling Content Flow */}
      <div className="relative z-20 pointer-events-none">
        
        {/* Interactive wrapper block for Hero */}
        <section id="hero" className="relative w-full h-screen flex items-center justify-center z-50 pointer-events-none">
          <div className="pointer-events-auto relative z-50 mt-16 px-4 w-full flex justify-center">
            <HeroText />
          </div>
        </section>

        {/* Other Sections (Content needs pointer-events-auto to be clickable) */}
        <About />
        <Projects />
        <Contact />
        <Footer />
        
        {/* Global Floating Corner Mascot */}
        <CornerWidgetWrapper />
      </div>
    </main>
  );
}