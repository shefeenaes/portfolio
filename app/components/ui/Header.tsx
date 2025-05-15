import React from "react";
import { Sacramento, Montserrat } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface TitleProps {
  title: string;
}

const Header: React.FC<TitleProps> = ({ title }) => {
  const titleMap: Record<string, { code: string; desc: string }> = {
    about: {
      code: 'console.log(" About Me ")',
      desc: "A Little Bit About Me",
    },
    experience: {
      code: 'print(" My Expertise ")',
      desc: "I've been doing web development for about 3 years now, and I'm always eager to learn more in this fast-paced industry.",
    },
    education: {
      code: 'import { Knowledge } from  "life ";',
      desc: "Each of these institutions played a key role in shaping my journey into the world of technology and software development.",
    },
    contact: {
      code: 'document.write(" Contact ");',
      desc: "Whether you have an idea for a project or just want to chat, feel free to shoot me an email!",
    },
    skills: {
      code: "<SkillSet />",
      desc: "These are my working Skills & Services I have done.",
    },
  };

  const current = titleMap[title.toLowerCase()] || {
    code: "console.log('Section')",
    desc: "Description not available.",
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center mt-5">
      <h2
        className={`${sacramento.className} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500`}
      >
        {current.code}
      </h2>
      <p
        className={`${montserrat.className} mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300`}
      >
        {current.desc}
      </p>
    </div>
  );
};

export default Header;
