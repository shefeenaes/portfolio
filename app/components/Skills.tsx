"use client";
import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Skills = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="overflow-hidden  bg-gradient-to-r from-black to-gray-900">
      <div ref={triggerRef} className=" h-[100vh]">
        <div
          ref={sectionRef}
          className="flex relative h-[100vh] w-[400vw] text-white tracking-[clamp(1rem,2vh,4rem)] "
        >
          <div className="flex text-center  items-center justify-center h-[100vh] w-[100vw]">
            <h3>Next JS</h3>
          </div>
          <div className="flex text-center  items-center justify-center h-[100vh] w-[100vw]">
            <h3>React</h3>
          </div>
          <div className="flex text-center  items-center justify-center h-[100vh] w-[100vw]">
            <h3>Typescript</h3>
          </div>
          <div className="flex text-center  items-center justify-center h-[100vh] w-[100vw]">
            <h3>TailwindCSS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
