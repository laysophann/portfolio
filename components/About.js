import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg text-gray-400 mb-10">
          Hi there! I'm [Your Name], a passionate web developer with a love for creating
          beautiful and functional websites. With [X] years of experience in the field,
          I've worked on a variety of projects that showcase my skills in [HTML, CSS,
          JavaScript, etc.]. My goal is to [mention your goals, aspirations, or unique qualities].
        </p>
        <p className="text-lg text-gray-400">
          When I'm not coding, you can find me [mention your hobbies, interests, or something personal].
          Feel free to reach out to me at [email@example.com] or connect with me on social media!
        </p>
      </div>
    </section>
  );
}

export default About;
