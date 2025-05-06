"use client";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BackgroundForHero from "./backgroundForHero";
import { useTheme } from "next-themes";
export default function Intro() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    if (typeof window !== "undefined" && scrollRef.current) {
      // Initialize Locomotive Scroll for Intro page
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
      } as any);

      // GSAP Timeline for the Intro animations
      if (boxRef.current && ImageRef.current) {
        timeline.current = gsap.timeline({ paused: true });

        timeline.current
          .to(ImageRef.current, {
            opacity: 0,
            y: -100,
            duration: 3,
            ease: "linear",
          })
          .to(boxRef.current, {
            scale: 0.1,
            duration: 5,
            ease: "linear",
          });
      }
      const handleProgressEvent = (e: CustomEvent) => {
        const { progress } = e.detail;
        if (timeline.current) {
          timeline.current.progress(progress);
        }
      };

      window.addEventListener(
        "progressEvent",
        handleProgressEvent as EventListener
      );

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
        window.removeEventListener(
          "progressEvent",
          handleProgressEvent as EventListener
        );
      };
    }
  }, []);
  return (
    <main data-scroll-container ref={scrollRef}>
      <div
        className="h-[100vh]"
        data-scroll
        data-scroll-offset="0,100%"
        data-scroll-event-progress="progressEvent"
      >
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded border"
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        )}
        <div className="relative w-full">
          <div
            className="absolute top-0 left-0 inset-0 h-full w-full brightness-[0.5]"
            ref={boxRef}
          >
            <BackgroundForHero />
          </div>
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8 px-4 md:px-6">
            <div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] brightness-[0.8]"
              ref={ImageRef}
            >
              <Image
                src="/mypic.png"
                alt="intro image"
                fill
                priority
                className="object-cover object-top "
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <h1
                data-scroll
                data-scroll-speed="0.7"
                className=" text-[10vw] md:text-[5vw] z-10 font-extrabold"
              >
                SHEFEENA E S
              </h1>
              <h2
                data-scroll
                data-scroll-speed="0.7"
                className=" font-bold tracking-[clamp(0.6rem,0.75vh,1.3rem)] text-sm sm:text-base md:text-lg mt-2"
              >
                FRONT END DEVELOPER
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
