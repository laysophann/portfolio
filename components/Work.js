import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A description of Project 1',
    image: '/images/react.png',
  },
  {
    title: 'Project 2',
    description: 'A description of Project 2',
    image: '/images/project2.jpg',
  },
  // Add more projects here
];

function Work() {
  return (
    <section id="work" className="py-20 font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className=" rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
