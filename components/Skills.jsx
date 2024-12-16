import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";
import skills from "../utils/SkillsData";
import useAnimations from "../hooks/useAnimations";

function Skills() {
  const animations = useAnimations();
  return (
    <motion.div id="skills" {...animations.skillsFadeUpAnimation}>
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-white mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.div key={skill.title} className="p-1 rounded-lg">
              <img
                src={`/images/${skill.icon}`}
                alt={`${skill.title} Icon`}
                className="mx-auto h-12 mb-4 animate-spin-hover"
              />
              <h3 className="text-lg font-semibold text-white">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
