// components/EducationParallax.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { education } from "../data/educationData";
import Header from "./ui/Header";

gsap.registerPlugin(ScrollTrigger);

export default function EducationParallax() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".edu-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 500}`,
          scrub: true,
          pin: sectionRef.current,
        },
      });

      cards.forEach((card, index) => {
        tl.to(card, { yPercent: -100 }, index === 0 ? 0 : ">");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-8 overflow-hidden"
    >
      <div className="flex gap-8">
        {/* Left Sticky Title */}
        <div className="sticky top-20 w-1/3 h-fit">
          <Header title="education" />
        </div>

        {/* Right Cards Container */}
        <div className="w-2/3 relative h-[600px]">
          {education.map((item, index) => (
            <a
              key={index}
              href={item.collegeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="edu-card absolute w-full h-[500px] rounded-2xl text-white p-6 shadow-xl"
              style={{
                backgroundColor: item.color,
                top: `${index * 60}px`,
                zIndex: education.length - index,
              }}
            >
              <h3 className="text-2xl font-semibold mb-2">{item.course}</h3>
              <p className="text-base leading-relaxed">{item.description}</p>

              <div className="relative w-[60%] h-[80%] rounded-[25px] overflow-hidden">
                <Image
                  fill
                  src={`/${item.collegepic}`}
                  alt={item.course}
                  className="object-cover"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
