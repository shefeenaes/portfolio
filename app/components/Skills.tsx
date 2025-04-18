"use client";
import React, { useRef, useEffect } from "react";
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

  const cards = [
    {
      title: "Next.js",
      description: "React framework for production.",
    },
    {
      title: "React",
      description: "Library for building UIs.",
    },
    {
      title: "TypeScript",
      description: "JavaScript with types.",
    },
    {
      title: "TailwindCSS",
      description: "Utility-first CSS framework.",
    },
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-r from-black to-gray-900">
      <div ref={triggerRef} className="h-[100vh] relative">
        <div ref={sectionRef} className="flex h-[100vh] w-[400vw] text-white">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[100vh] w-[100vw]"
            >
              {/* Glowing Card */}
              <div className="group perspective w-[60vw] max-w-[500px] h-[50vh] relative animate-glow">
                <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-black rounded-xl shadow-lg flex items-center justify-center text-3xl font-semibold text-white text-center backface-hidden">
                    {card.title}
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-lg p-4 text-white text-center rotate-y-180 backface-hidden">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
