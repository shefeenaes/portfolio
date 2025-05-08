"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";
import Header from "./ui/Header";

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
          end: "+=4000",
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
    <section className="overflow-hidden ">
      {/* <section className="overflow-hidden bg-gradient-to-r from-black to-gray-900"></section> */}
      <div
        ref={triggerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  "
      >
        <Header title="skills" />
        {/* <div className="mx-auto max-w-xl mt-5 text-center">
          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 from-10% via-violet-500 via-30% to-sky-500 to-90%">
            Skills & Services
          </h2>
          <p className="mt-4 text-base leading-relaxed ">
            These are my working Skills & Services I have done.
          </p>
        </div> */}
        <div
          ref={sectionRef}
          className="mt-32 w-max max-h-96 flex gap-8 sm:gap-12 px-6  lg:px-0  text-center overflow-x-auto"
        >
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
