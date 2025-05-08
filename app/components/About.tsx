"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./ui/Header";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h3Ref = useRef(null);

  useEffect(() => {
    if (!h3Ref.current) return;

    const splitText = new SplitType(h3Ref.current, { types: "words" });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

    animation.fromTo(
      splitText.words,
      {
        opacity: 0.1,
        color: "var(--text-start-color)",
      },
      {
        opacity: 1,
        color: "var(--text-end-color)",
        stagger: 0.08,
        duration: 1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splitText.revert(); // Clean up SplitType
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 w-full flex flex-col items-center justify-center"
      >
        <Header title="about" />
        <div className="mt-10 min-h-[60vh] px-4 md:px-0">
          <h3
            ref={h3Ref}
            className="text-xl md:text-4xl font-bold tracking-wide transition-colors duration-300"
            style={{
              color: "var(--text-start-color)",
              textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
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
