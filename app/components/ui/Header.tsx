import React from "react";

interface TitleProps {
  title: string;
}

const Header: React.FC<TitleProps> = ({ title }) => {
  const titleMap: Record<string, { code: string; desc: string }> = {
    about: {
      code: 'console.log(" ABOUT ME ")',
      desc: "A Little Bit About Me",
    },
    experience: {
      code: 'print(" MY EXPERTISE ")',
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
    <div className="mx-auto max-w-xl mt-5 text-center">
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500">
        {current.code}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white">
        {current.desc}
      </p>
    </div>
  );
};

export default Header;
