"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./ui/Header";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h3Ref = useRef<HTMLHeadingElement | null>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!h3Ref.current) return;

    // Initialize SplitType
    splitRef.current = new SplitType(h3Ref.current, { types: "words" });

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 90%",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      splitRef.current.words,
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

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getById("about-animation")?.kill();
      splitRef.current?.revert();
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen transition-colors duration-500"
    >
      <Header title="about" />
      <div className="mockup-browser border-base-300 border w-11/12 m-4 ">
        <div className="mockup-browser-toolbar">
          <div className="input">https://shefeenaes.com</div>
        </div>
        <div className="grid place-content-center bg-slate-900  border-t border-base-300 h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="z-10 w-full flex flex-col items-center justify-center"
          >
            <div className="mt-10 min-h-[60vh] px-6 md:px-4 max-w-4xl">
              <h3
                ref={h3Ref}
                className="text-base md:text-2xl font-semibold tracking-wide text-shadow-sm transition-colors duration-300"
              >
                I am a full-stack web developer with a passion for creating
                interactive and responsive web applications.
                <br />
                I have experience working with JavaScript, React, Redux,
                Node.js, Express, PostgreSQL, HTML, CSS, and Git.
                <br />
                I am a quick learner and always looking to expand my knowledge
                and skill set.
                <br />I am a team player and am excited to work with others to
                create amazing applications.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
