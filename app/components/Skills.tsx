"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";
import Header from "./ui/Header";

import Raining from "./ui/skillsRainingbg";
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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute top-0 left-0 inset-0 h-full w-full brightness-[0.5] z-0">
          <Raining />
        </div>

        <div className="sticky top-10 z-10">
          <Header title="skills" />
        </div>

        <div
          ref={sectionRef}
          className="mt-32 w-max flex gap-8 sm:gap-12 px-6 lg:px-0 text-center overflow-x-auto"
        >
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
