"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Education = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const courses = [
    {
      course: "Master of Computer Application",
      year: "2018 - 2021",
      cgpa: "9.21",
    },
    {
      course: "Bachelor of Computer Application",
      year: "2015 - 2018",
      cgpa: "7.1",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const totalSlides = courses.length;
    const scrollLength = window.innerHeight * totalSlides;

    const ctx = gsap.context(() => {
      gsap.to(rightRef.current, {
        yPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: 1,
          pin: sectionRef.current,
        },
      });

      gsap.from(".course-slide", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-neutral-900 text-white font-mont overflow-hidden"
    >
      <div className="flex h-full">
        {/* Left - Sticky Title */}
        <div
          ref={leftRef}
          className="w-1/2 sticky top-0 flex items-center justify-start px-10 z-10"
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light uppercase font-serif tracking-wide">
            Education
          </h1>
        </div>

        {/* Right - Scrollable Courses */}
        <div className="w-1/2 pr-14">
          <div
            ref={rightRef}
            className="flex flex-col gap-32 transition-transform"
          >
            {courses.map((c, index) => (
              <div
                key={index}
                className="course-slide h-screen flex flex-col justify-center"
              >
                <h2 className="text-3xl lg:text-4xl font-semibold uppercase text-blue-300 mb-2">
                  {c.course}
                </h2>
                <p className="text-xl text-gray-300 mb-1">{c.year}</p>
                <p className="text-xl text-gray-400">CGPA: {c.cgpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
