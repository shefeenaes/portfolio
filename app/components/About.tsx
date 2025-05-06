"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h3Ref = useRef(null);
  const sectionRef = useRef(null);
  const spiralRef = useRef(null);

  // Animation for text elements
  useEffect(() => {
    if (!h3Ref.current) return;

    const splitText = new SplitType(h3Ref.current, { types: "words" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 90%",
          end: "+=100%",
          scrub: 1,
        },
      })
      .fromTo(
        splitText.words,
        { color: "#ffcc66", opacity: 0.1 },
        { color: "#ff9966", opacity: 1, stagger: 0.1, duration: 1 }
      );

    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Spiral background animation
  useEffect(() => {
    if (!spiralRef.current) return;

    gsap.to(spiralRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col justify-center items-center text-center  overflow-hidden"
      style={{
        // background:
        //   "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Ambient glow effects */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center w-full"
      >
        {/* About me section */}
        <div className="relative z-10 mt-10 text-center min-h-[60vh]">
          <h3
            ref={h3Ref}
            className="text-xl mb-20 md:text-4xl font-bold text-white tracking-wide px-4 md:px-0"
            style={{
              textShadow: "0 0 5px rgba(255, 153, 102, 0.3)",
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

      {/* Scanline effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 4px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default About;
