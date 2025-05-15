"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./ui/Header";

import { timeline } from "../data/timeline";
import Gridbg from "./ui/Grid-bg";
const Timeline = () => {
  // For parallax effect on scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 inset-0 h-full w-full brightness-[0.5] z-0">
        <Gridbg />
      </div>

      <div className="w-full max-w-6xl mt-10 mx-auto px-4 md:px-8 py-16 z-10">
        {/* Title with animated glow - updated to match Home.jsx text style */}
        {/* <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow:
              "0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(147, 51, 234, 0.5)",
          }}
        >
          My Career Timeline
        </motion.h1> */}
        <Header title="experience" />

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Timeline vertical line with animated gradient */}
          <div className="absolute w-1 bg-gradient-to-b from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] h-full left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
            {/* Animated nodes that travel along the timeline */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-[#3B82F6] left-1/2 transform -translate-x-1/2"
              animate={{
                top: ["0%", "100%", "0%"],
                boxShadow: [
                  "0 0 10px 2px rgba(59, 130, 246, 0.7)",
                  "0 0 15px 3px rgba(147, 51, 234, 0.7)",
                  "0 0 10px 2px rgba(59, 130, 246, 0.7)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Fixed nodes at the top and bottom */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#6EE7B7]"
              style={{ boxShadow: "0 0 15px 5px rgba(255, 153, 102, 0.4)" }}
            ></div>
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#9333EA]"
              style={{ boxShadow: "0 0 15px 5px rgba(255, 153, 102, 0.4)" }}
            ></div>
          </div>

          {/* Timeline items */}
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center w-full my-12 relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon container - improved mobile positioning */}
              <div className="absolute z-20 w-16 h-16 flex items-center justify-center md:left-1/2 md:transform md:-translate-x-1/2 left-0">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-900 border-2 border-cyan-400/50 relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  }}
                  style={{
                    zIndex: 30, // Ensure icon is always on top
                    boxShadow: "0 0 10px rgba(255, 153, 102, 0.5)",
                  }}
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-[#3B82F6] opacity-20 blur-sm"></div>

                  {/* Link wrapper with improved image handling */}

                  <Image
                    src={`${event.iconPath}`}
                    alt={`${event.title} icon`}
                    className=" h-12 object-fill rounded-full"
                    width={300}
                    height={300}
                  />

                  {/* Animated pulse effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#6EE7B7] animate-ping opacity-50"></div>
                </motion.div>
              </div>

              {/* Content box - improved mobile positioning */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "md:mr-12 ml-8 md:ml-0" : "md:ml-12 ml-8"
                } w-4/5 md:w-5/12 mt-4 md:mt-0`}
              >
                <motion.div
                  className="relative overflow-hidden p-6 rounded-lg bg-white/70 dark:bg-black/60 backdrop-blur-md border border-cyan-400/30 dark:border-cyan-800/50"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-cyan-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-violet-300 transition-colors duration-300">
                    {event.company}
                  </h4>
                  <p className="text-sm italic text-blue-300 mb-2">
                    {event.year}
                  </p>
                  <p className="">{event.desc}</p>

                  {/* Glitch effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 bg-blue-800/20"
                    whileHover={{ opacity: [0, 0.2, 0, 0.1, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  ></motion.div>

                  {/* Animated border corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                  {/* Shine effect animation */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.1) 50%, transparent 55%)",
                      animation: "shine 3s infinite",
                    }}
                  ></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add required CSS for animations */}
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
