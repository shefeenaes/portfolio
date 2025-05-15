import Intro from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import EducationParallax from "./components/Education";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Timeline />
      <EducationParallax />
      <Contact />
    </>
  );
}
