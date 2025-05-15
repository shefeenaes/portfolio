"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./ui/Header";
import { SparklesCore } from "./ui/Sparkles";
import Gridbg from "./ui/Grid-bg";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h3Ref = useRef(null);

  useEffect(() => {
    if (!h3Ref.current) return;

    const splitText = new SplitType(h3Ref.current, { types: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      splitText.words,
      {
        opacity: 0.1,
        y: 20,
        color: "var(--text-start-color)",
      },
      {
        opacity: 1,
        y: 0,
        color: "var(--text-end-color)",
        stagger: 0.12,
        duration: 2,
        ease: "power2.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitText.revert();
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen  transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 w-full flex flex-col items-center justify-center"
      >
        <Header title="about" />
        <div className="mt-10 min-h-[60vh] px-8 md:px-4 max-w-4xl">
          <h3
            ref={h3Ref}
            className="text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300  "
            style={{
              textShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            I am a full-stack web developer with a passion for creating
            interactive and responsive web applications.
            <br />
            I have experience working with JavaScript, React, Redux, Node.js,
            Express, PostgreSQL, HTML, CSS, and Git.
            <br />
            I am a quick learner and always looking to expand my knowledge and
            skill set.
            <br />I am a team player and am excited to work with others to
            create amazing applications.
          </h3>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
