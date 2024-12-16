import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
import "../app/globals.css";

import projects from "../utils/ProjectData";
import useAnimations from "../hooks/useAnimations";

function Project() {
  const animations = useAnimations();
  return (
    <section id="projects" className="py-20 font-mono">
      <div
        className="container mx-auto text-center"
        style={{ maxWidth: "1300px" }}
      >
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
              <p className="text-gray-400 mb-2">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="text-gray-400 mb-2">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-center items-center space-x-4 mt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    <AiFillGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    <CiLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
