import React from "react";
import { MdPictureAsPdf } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import useAnimations from "../hooks/useAnimations";
import "../app/globals.css";

function About() {
  const animations = useAnimations();

  return (
    <section id="about" className="py-20 font-mono">
      <div
        className="container mx-auto text-center p-4"
        style={{ maxWidth: "960px" }}
      >
        <motion.h2
          {...animations.fadeUpAnimation}
          className="text-3xl font-bold text-white mb-6"
        >
          About Me()
        </motion.h2>
        <motion.p
          {...animations.delayedFadeUpAnimation}
          className="text-lg text-gray-400 mb-10"
        >
          Hi there! I am Lay Sophann, a passionate frontend developer with a
          love for creating beautiful websites. With 2 years of experience in
          the field, I have worked on a variety of projects that showcase my
          skills in HTML, CSS, JavaScript, React, Next, Typescript. My goal is
          to become a full-stack developer.
        </motion.p>
        <motion.p
          {...animations.delayedLongerFadeUpAnimation}
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
          {...animations.delayedLongerFadeUpAnimation}
          className="text-white font-bold mb-2"
        >
          Get to Know Me!
        </motion.h1>
        <motion.div
          {...animations.delayedLongerFadeUpAnimation}
          className="flex text-gray-400 text-4xl justify-center items-center space-x-4 cursor-pointer"
        >
          <motion.a
            href="https://drive.google.com/file/d/1tGmWTK8lXa5f__o2AhEMxJTowgiHPkeM/view"
            target="_blank"
            rel="noopener noreferrer"
            {...animations.scaleHoverAnimation}
          >
            <MdPictureAsPdf className="animate-spin-hover" />
          </motion.a>
          <motion.a
            href="https://github.com/laysophann/"
            target="_blank"
            rel="noopener noreferrer"
            {...animations.scaleHoverAnimation}
          >
            <AiFillGithub className="animate-spin-hover" />
          </motion.a>
          <motion.a
            href="https://www.behance.net/sophannlay"
            target="_blank"
            rel="noopener noreferrer"
            {...animations.scaleHoverAnimation}
          >
            <FaBehanceSquare className="animate-spin-hover" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
