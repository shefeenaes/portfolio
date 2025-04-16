"use client";
import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="container mx-auto py-20">
      <ul className="text-list space-y-6 list-none mx-auto text-center">
        <li className="list-item text-2xl font-light relative text-gray-400">
          I am a full-stack web developer with a passion for creating
          interactive and responsive web applications.
        </li>
        <li className="list-item text-2xl font-light relative text-gray-400">
          I have experience working with JavaScript, React, Redux, Node.js,
          Express, PostgreSQL, HTML, CSS, and Git.
        </li>
        <li className="list-item text-2xl font-light relative text-gray-400">
          I am a quick learner and always looking to expand my knowledge and
          skill set.
        </li>
        <li className="list-item text-2xl font-light relative text-gray-400">
          I am a team player and am excited to work with others to create
          amazing applications.
        </li>
      </ul>
    </div>
  );
};

export default About;
