import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";
import MouseGlow from "./MouseGlow";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090B] text-[#F9FAFB]">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}