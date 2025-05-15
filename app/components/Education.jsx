"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { education } from "../data/educationData";
import Header from "./ui/Header";

gsap.registerPlugin(ScrollTrigger);

// ✅ Custom hook to get device type
const useDeviceType = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDevice("mobile");
      else if (width < 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
};

export default function EducationParallax() {
  const sectionRef = useRef(null);
  const device = useDeviceType();

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

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

      const yPercentValue =
        device === "mobile" ? 100 : device === "tablet" ? -100 : -100;

      cards.forEach((card, index) => {
        tl.to(card, { yPercent: yPercentValue }, index === 0 ? 0 : ">");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [device]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Sticky Title */}
        <div className="md:sticky top-20 md:w-1/3 w-full">
          <Header title="education" />
        </div>

        {/* Right Cards Container */}
        <div className="md:w-2/3 w-full relative h-[600px]">
          {education.map((item, index) => (
            <a
              key={item.course}
              href={item.collegeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="edu-card absolute w-full h-[500px] sm:h-[420px] rounded-2xl text-black p-6 shadow-xl "
              style={{
                backgroundColor: item.color,
                top: `${index * 60}px`,
                zIndex: education.length - index,
              }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {item.course}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              <div className="relative w-full h-[200px] sm:h-[250px] rounded-[25px] overflow-hidden mt-4">
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
