"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { education } from "../data/educationData";
import Header from "./ui/Header";

gsap.registerPlugin(ScrollTrigger);

type DeviceType = "mobile" | "tablet" | "desktop";

export default function EducationParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const [device, setDevice] = useState<DeviceType>("mobile");

  // Detect device type based on window width
  useEffect(() => {
    const determineDevice = (): DeviceType => {
      const width = window.innerWidth;
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDevice(determineDevice());
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !cardsContainerRef.current ||
      device === "mobile"
    )
      return;

    const cards = gsap.utils.toArray<HTMLElement>(".edu-card");
    const cardHeight = cards[0]?.offsetHeight || 500;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${cards.length * cardHeight}`,
          scrub: true,
          pin: sectionRef.current!,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        timeline.to(
          card,
          { yPercent: -100, duration: 1 },
          index === 0 ? 0 : ">"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [device]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative min-h-screen py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sticky Left Title */}
        <div className="md:sticky top-20 md:w-1/2 w-full">
          <Header title="education" />
        </div>

        {/* Right Cards */}
        <div
          ref={cardsContainerRef}
          className={`md:w-1/2 w-full ${
            device === "mobile"
              ? "relative h-auto flex flex-col gap-8 "
              : "relative h-[600px] sm:h-[500px] "
          }`}
        >
          {education.map((item, index) => (
            <a
              key={item.course}
              href={item.collegeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`edu-card p-4 rounded-2xl shadow-xl  bg-secondary dark:bg-slate-900  text-gray-700 dark:text-white backdrop-blur-md border border-cyan-400/30 dark:border-cyan-800/50 ${
                device === "mobile" ? "relative " : "absolute"
              }  `}
              style={{
                ...(device !== "mobile"
                  ? {
                      top: `${index * 60}px`,
                      zIndex: education.length - index,
                    }
                  : {}),
              }}
              aria-label={`Open details about ${item.course} at ${item.course}`}
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
                  priority={index === 0}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
