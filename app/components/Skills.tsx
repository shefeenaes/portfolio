"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";
import Header from "./ui/Header";
import Raining from "./ui/skillsRainingbg";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: () => {
            // Calculate exact scroll width to avoid issues on mobile or prod
            const el = sectionRef.current;
            if (!el) return "-300vw";
            // Total scroll width = scrollWidth - clientWidth
            const scrollDistance = el.scrollWidth - window.innerWidth;
            return `-${scrollDistance}px`;
          },
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => {
              // End depends on scroll distance to pin properly
              const el = sectionRef.current;
              if (!el) return "+=4000";
              const scrollDistance = el.scrollWidth - window.innerWidth;
              return `+=${scrollDistance}`;
            },
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true, // Important for responsive recalculation
          },
        }
      );

      // Refresh ScrollTrigger on window resize to handle mobile/prod resizing
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        animation.kill();
        window.removeEventListener("resize", handleResize);
      };
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden relative">
      <div
        ref={triggerRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background effect */}
        <div className="absolute inset-0 z-0 brightness-[0.5]">
          <Raining />
        </div>

        {/* Sticky title */}
        <div className="sticky top-10 z-10">
          <Header title="skills" />
        </div>

        {/* Scrollable cards */}
        <div
          ref={sectionRef}
          className="mt-32 flex w-max gap-8 sm:gap-12 px-6 lg:px-0 text-center"
        >
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default Skills;
