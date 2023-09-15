import React from "react";
import { motion } from "framer-motion";
import "../app/globals.css";
import skills from "../utils/SkillsData";

function Skills() {
  return (
    <motion.div
      id="skills"
      className="py-20 font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.title} className="p-4 rounded-lg">
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
