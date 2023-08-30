import React from "react";
import "../app/globals.css";

const skillsData = [
  { title: "Git", icon: "git.png" },
  { title: "Github", icon: "github.png" },
  { title: "HTML", icon: "html.png" },
  { title: "CSS", icon: "css.png" },
  { title: "Tailwind", icon: "tailwind.png" },
  { title: "JavaScript", icon: "javascript.png" },
  { title: "React.Js", icon: "react.png" },
  { title: "Next.Js", icon: "next.png" },
  { title: "Vue.Js", icon: "vue.png" },
  { title: "Typescript", icon: "typescript.png" },
  { title: "Postgresql", icon: "postgresql.png" },
  { title: "Node.js", icon: "node.png" },
  { title: "React Native", icon: "react-native.png" },
  { title: "Notion", icon: "notion.png" },
  { title: "Jira", icon: "jira.png" },
  { title: "Figma", icon: "figma.png" },

  // Add more skills here
];

function Skills() {
  return (
    <section id="skills" className="py-20 font-mono">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map(skill => (
          <div
            key={skill.title}
            className="p-4 rounded-lg"
          >
            <img
              src={`/images/${skill.icon}`}
              alt={`${skill.title} Icon`}
              className="mx-auto h-12 mb-4 animate-spin-hover"
            />
            <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

export default Skills;
