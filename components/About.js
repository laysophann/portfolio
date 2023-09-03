import React from "react";
import { MdPictureAsPdf } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "../app/globals.css";

function About() {
  return (
    <section id="about" className="py-20 font-mono">
      <div className="container mx-auto text-center p-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-6"
        >
          About Me()
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-400 mb-10"
        >
          Hi there! I am Lay Sophann, a passionate frontend developer with a
          love for creating beautiful websites. With 2 years of experience in
          the field, I have worked on a variety of projects that showcase my
          skills in HTML, CSS, JavaScript, React, Next, Typescript. My goal is
          to become a full-stack developer.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-400 mb-10"
        >
          When I am not coding, you can find me watching anime or playing
          football and volleyball. Feel free to reach out to me at{" "}
          <a
            href="https://mail.google.com/mail/u/1/#inbox"
            className="text-lime-500 hover:text-lime-600"
          >
            sophannlay@gmail.com
          </a>{" "}
          or connect with me on social media!
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-white font-bold mb-2"
        >
          Get to Know Me!
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex text-gray-400 text-4xl justify-center items-center space-x-4 cursor-pointer"
        >
          <motion.a
            href="https://drive.google.com/file/d/1tFBvEj8vfiB4rU4Qqzgc08qeQyaF3w8b/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <MdPictureAsPdf className="animate-spin-hover" />
          </motion.a>
          <motion.a
            href="https://github.com/laysophann/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillGithub className="animate-spin-hover" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
