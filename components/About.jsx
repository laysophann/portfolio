import React from "react";
import "../app/globals.css";
import { motion } from "framer-motion";

import useAnimations from "../hooks/useAnimations";
import socialLinks from "../utils/AboutData";

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
          About Me
        </motion.h2>
        <motion.p
          {...animations.delayedFadeUpAnimation}
          className="text-lg text-gray-400 mb-10"
        >
          Hi there! I am Lay Sophann, a passionate frontend developer with a
          love for creating beautiful websites. With 2 years of experience in
          the field, I have worked on a variety of projects that showcase my
          skills in HTML, CSS, JavaScript, React, Next, and TypeScript.
        </motion.p>
        <motion.p
          {...animations.delayedLongerFadeUpAnimation}
          className="text-lg text-gray-400 mb-10"
        >
          Feel free to reach out to me at{" "}
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
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...animations.scaleHoverAnimation}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
