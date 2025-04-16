import Intro from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Timeline />
      <Education />
      <Contact />
    </>
  );
}
