import React from 'react';

const skillsData = [
  { title: 'HTML', icon: 'html.png' },
  { title: 'CSS', icon: 'css.png' },
  { title: 'JavaScript', icon: 'javascript.png' },
  { title: 'React', icon: 'react.png' },
  { title: 'Node.js', icon: 'node.png' },
  // Add more skills here
];

function Skills() {
  return (
    <section id="skills" className="py-20 font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map(skill => (
            <div key={skill.title} className="p-4 rounded-lg">
              <img
                src={`/images/${skill.icon}`}
                alt={`${skill.title} Icon`}
                className="mx-auto h-12 mb-4"
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
