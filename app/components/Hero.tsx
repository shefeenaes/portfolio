"use client";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Intro() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const ImageRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

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
        <div className="relative w-full min-h-[100vh]">
          <div
            className="absolute top-0 left-0 inset-0 h-full w-full brightness-[0.4]"
            ref={boxRef}
          >
            <Image
              src="/intro-1.jpg"
              fill={true}
              alt="background image"
              priority={true}
              className="object-cover"
            />
          </div>

          <div className="relative z-20 flex items-center justify-center min-h-screen">
            <div
              className="w-[350px] h-[475px] brightness-[0.8]"
              ref={ImageRef}
            >
              <Image
                src="/mypic.jpg"
                alt="intro image"
                fill={true}
                priority={true}
                className="object-cover object-top"
              />
            </div>
            <div className="flex-col text-center justify-center">
              <h1
                data-scroll
                data-scroll-speed="0.7"
                className="text-white text-[7vw] z-10 whitespace-nowrap"
              >
                SHEFEENA E S
              </h1>
              <h2
                data-scroll
                data-scroll-speed="0.7"
                className=" font-bold tracking-[clamp(0.6rem,0.75vh,1.3rem)]"
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
