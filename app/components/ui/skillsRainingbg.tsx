"use client";

import React, { useEffect, useRef, useState } from "react";

type DoodleData = {
  id: number;
  type: "text" | "svg";
  content?: string;
  svgId?: string;
  x: number; // horizontal position
  y: number; // vertical position
  speed: number; // falling speed
};

const doodles: { type: "text" | "svg"; content?: string; id?: string }[] = [
  { type: "text", content: "<>" },
  { type: "text", content: "{}" },
  { type: "text", content: "</>" },
  { type: "text", content: ";" },
  { type: "svg", id: "react-logo" },
  { type: "svg", id: "ts-logo" },
  { type: "svg", id: "tailwind-logo" },
  { type: "svg", id: "nextjs-logo" },
];

const generateDoodles = (count: number): DoodleData[] => {
  return Array.from({ length: count }).map((_, i) => {
    const doodle = doodles[i % doodles.length];
    return {
      id: i,
      type: doodle.type,
      content: doodle.content,
      svgId: doodle.id,
      x: Math.random() * 100, // random x%
      y: Math.random() * -100, // start above view
      speed: 0.2 + Math.random() * 0.5, // random fall speed
    };
  });
};

const BackgroundForHero: React.FC = () => {
  const [positions, setPositions] = useState<DoodleData[]>(() =>
    generateDoodles(50)
  );
  const requestRef = useRef<number | null>(null);
  useEffect(() => {
    const animate = () => {
      setPositions((prev) =>
        prev.map((d) => {
          let newY = d.y + d.speed;
          if (newY > 100) {
            newY = Math.random() * -10; // reset above screen
            return { ...d, y: newY, x: Math.random() * 100 };
          }
          return { ...d, y: newY };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full z-[-1] pointer-events-none opacity-20"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <g id="react-logo" fill="#61dafb" transform="scale(0.006)">
            <circle cx="250" cy="250" r="50" fill="#61dafb" />
            <ellipse
              cx="250"
              cy="250"
              rx="200"
              ry="80"
              fill="none"
              stroke="#61dafb"
              strokeWidth="20"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="200"
              ry="80"
              fill="none"
              stroke="#61dafb"
              strokeWidth="20"
              transform="rotate(60 250 250)"
            />
            <ellipse
              cx="250"
              cy="250"
              rx="200"
              ry="80"
              fill="none"
              stroke="#61dafb"
              strokeWidth="20"
              transform="rotate(120 250 250)"
            />
          </g>

          <g id="ts-logo" transform="scale(0.005)">
            <path fill="#2298bd" d="M0 200V0h400v400H0z" />
            <path
              fill="#ffff"
              d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1z"
            />
          </g>

          <linearGradient
            id="tailwind-gradient"
            x1="-2.778%"
            y1="32%"
            y2="67.556%"
          >
            <stop offset="0" stopColor="#2298bd" />
            <stop offset="1" stopColor="#0ed7b5" />
          </linearGradient>

          <g id="tailwind-logo" transform="scale(0.006)">
            <path
              d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
              fill="url(#tailwind-gradient)"
            />
          </g>

          <g id="nextjs-logo" transform="scale(0.002)">
            <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
            <path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
          </g>
        </defs>

        <style>
          {`
            .doodle-text {
              font-family: monospace;
              font-size: 2px;
              fill: #cbd5e1;
              opacity: 0.3;
            }
            .dark .doodle-text {
              fill: #93c5fd;
              opacity: 0.12;
            }
          `}
        </style>

        {positions.map((d) =>
          d.type === "text" ? (
            <text
              key={d.id}
              x={`${d.x}%`}
              y={`${d.y}%`}
              fontSize="2" // same size for all text
              fill="#888"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {d.content}
            </text>
          ) : (
            <use
              key={d.id}
              href={`#${d.svgId}`}
              x={`${d.x}%`}
              y={`${d.y}%`}
              width="10"
              height="10"
              transform={`translate(-5, -5)`} // center the symbol
            />
          )
        )}
      </svg>
    </div>
  );
};

export default BackgroundForHero;
