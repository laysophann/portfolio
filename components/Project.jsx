import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";
import projects from "../utils/ProjectData";
import useAnimations from "../hooks/useAnimations";

function Project() {
  const animations = useAnimations();
  return (
    <section id="projects" className="py-20 font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg border border-gray-800 hover:border-white mx-auto max-w-sm"
              {...animations.projectFadeUpAnimation}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="mx-auto h-48 mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
