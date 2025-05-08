"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BorderBeam } from "./border-beam";
import { MagicCard } from "./magic-card";
import Image from "next/image";
import { FeatureCardJSON } from "../../data/FeatureCardJSON";

const FeatureCard = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
    setMounted(true);
  }, []);

  // Wait until client-side hydration is done
  if (!mounted) return null;

  const effectiveTheme = theme === "system" ? resolvedTheme : theme;

  return FeatureCardJSON.map((item, index) => {
    return (
      <MagicCard
        key={index}
        gradientColor={effectiveTheme === "dark" ? "#334155" : "#e0e7ff"}
      >
        <div className="rounded-lg p-5 w-full">
          <div className="mx-auto mt-12  flex h-20 w-20 items-center justify-center rounded-full ">
            {item.imageLink.endsWith(".json") ? (
              <lottie-player
                src={item.imageLink}
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "150px", height: "150px" }}
              ></lottie-player>
            ) : (
              <Image
                width={500}
                height={500}
                src={item.imageLink}
                alt={item.title}
                className={`${
                  item.isDark && effectiveTheme === "dark"
                    ? "filter invert"
                    : ""
                }`}
              />
            )}
          </div>
          <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
          <p className="mt-4 text-sm">{item.description}</p>
        </div>
        <BorderBeam className="rounded-xl" size={120} duration={12} delay={9} />
      </MagicCard>
    );
  });
};

export default FeatureCard;
