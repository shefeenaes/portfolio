"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BorderBeam } from "./border-beam";
import { MagicCard } from "./magic-card";
import Image from "next/image";
import { skills } from "@/app/data/skillsData";

const FeatureCard = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const effectiveTheme = theme === "system" ? resolvedTheme : theme;

  return skills.map((item, index) => {
    return (
      <MagicCard
        key={index}
        gradientColor={effectiveTheme === "dark" ? "#334155" : "#8e96b3"}
      >
        <div className="rounded-lg p-4 sm:p-5 w-[85vw] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[350px]">
          <div className="mx-auto mt-6 sm:mt-8 flex h-40 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full">
            {item.imageLink.endsWith(".json") ? (
              <lottie-player
                src={item.imageLink}
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{
                  width: "100px",
                  height: "100px",
                }}
              ></lottie-player>
            ) : (
              <Image
                width={80}
                height={80}
                src={item.imageLink}
                alt={item.title}
                className={`object-contain h-16 w-16 sm:h-20 sm:w-20 ${
                  item.isDark && effectiveTheme === "dark"
                    ? "filter invert"
                    : ""
                }`}
              />
            )}
          </div>
          <h3 className="mt-6 sm:mt-8 text-base sm:text-lg font-semibold text-center">
            {item.title}
          </h3>
          <p className="mt-3 md:text-sm text-xs  text-center">
            {item.description}
          </p>
        </div>
        {/* Shine effect animation */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100"
          style={{
            background:
              "linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.1) 50%, transparent 55%)",
            animation: "shine 3s infinite",
          }}
        ></div>
        <BorderBeam className="rounded-xl" size={120} duration={12} delay={9} />
      </MagicCard>
    );
  });
};

export default FeatureCard;
