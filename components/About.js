import React from "react";
import { MdPictureAsPdf } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "../app/globals.css";

function About() {
  return (
    <section id="about" className="py-20 font-mono">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-3xl font-bold text-white mb-6">About Me()</h2>
        <p className="text-lg text-gray-400 mb-10">
          Hi there! I am Lay Sophann, a passionate frontend development with a
          love for creating beautiful websites. With 2 years of experience in
          the field, I have worked on a variety of projects that showcase my
          skills in HTML, CSS, JavaScript, React, Next, Typescript. My goal is
          to become fullstack developer.
        </p>
        <p className="text-lg text-gray-400 mb-10">
          When I am not coding, you can find me watching anime or playing
          football and volleyball. Feel free to reach out to me at
          sophannlay@gmail.com or connect with me on social media!
        </p>
        <h1 className="text-white font-bold mb-2">Get to Know Me!</h1>
        <div className="flex text-gray-400 text-4xl justify-center items-center space-x-4 cursor-pointer">
          <a
            href="https://drive.google.com/file/d/1tFBvEj8vfiB4rU4Qqzgc08qeQyaF3w8b/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPictureAsPdf className="animate-spin-hover" />
          </a>
          <a
            href="https://github.com/laysophann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="animate-spin-hover" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
