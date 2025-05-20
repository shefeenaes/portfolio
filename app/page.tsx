import Intro from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import EducationParallax from "./components/Education";
import ResumeSection from "./components/Resume";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data/navdata";
export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Intro />
      <About />
      <Skills />
      <Timeline />
      <EducationParallax />
      <ResumeSection />
      <Contact />
    </>
  );
}
