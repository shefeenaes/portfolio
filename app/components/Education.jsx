// components/EducationParallax.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Your education data
const education = [
  {
    course: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    collegepic: "mypic1.jpg",
    collegeLink:
      "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    course: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes.",
    collegepic: "mypic1.jpg",
    collegeLink:
      "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    course: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with ambiguity.",
    collegepic: "mypic1.jpg",
    collegeLink:
      "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    course: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold.",
    collegepic: "mypic1.jpg",
    collegeLink:
      "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
  },
];

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
      className="relative min-h-screen bg-gray-100 py-32 px-8 overflow-hidden"
    >
      <div className="flex gap-8">
        {/* Left Sticky Title */}
        <div className="sticky top-20 w-1/3 h-fit">
          <h2 className="text-4xl font-bold">Education</h2>
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
              <Image
                src={item.collegepic}
                alt={item.course}
                className="w-full h-40 object-cover rounded-lg mt-4"
                width={100}
                height={100}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
