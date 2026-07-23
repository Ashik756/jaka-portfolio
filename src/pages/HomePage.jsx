import { Toaster } from "sonner";
import Nav from "../components/layout/Nav.jsx";
import BackToTop from "../components/layout/BackToTop.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";
import ExperienceEdu from "../components/sections/ExperienceEdu.jsx";
import Certifications from "../components/sections/Certifications.jsx";
import Services from "../components/sections/Services.jsx";
import Projects from "../components/sections/Projects.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import Contact from "../components/sections/Contact.jsx";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceEdu />
        <Certifications />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <BackToTop />
      <Toaster theme="dark" position="top-right" richColors />
    </div>
  );
}
