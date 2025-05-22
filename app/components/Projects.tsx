"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Header from "./ui/Header";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 py-10 max-w-6xl mx-auto">
      <Header title="projects" />
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    renderMode: "performance",
    created(s) {
      setInterval(() => {
        s.next();
      }, 2500); // change image every 2.5s
    },
  });

  return (
    <div className="space-y-4">
      <a href={project.ProjectLink} target="_blank" rel="noopener noreferrer">
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
          {[
            project.projectimage1,
            project.projectimage2,
            project.projectimage3,
          ].map((img, i) => (
            <div className="keen-slider__slide" key={i}>
              <Image
                src={`/${img}`}
                alt={`Screenshot ${i + 1}`}
                width={800}
                height={450}
                quality={90}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-2 p-2">
          <h3 className="text-xl font-semibold break-words">{project.name}</h3>
          <p className="text-sm  mt-2 break-words">{project.description}</p>
        </div>
      </a>
    </div>
  );
};

export default Projects;
