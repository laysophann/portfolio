import React from "react";
import { animations, motion } from "framer-motion";
import contacts from "../utils/ContactData";
import useAnimations from "../hooks/useAnimations";

function Contact() {
  const animations = useAnimations();
  return (
    <motion.section
      id="contact"
      className="py-20"
      {...animations.contactFadeUpAnimation}
    >
      <div
        className="container mx-auto text-center font-mono"
        style={{ maxWidth: "960px" }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Connect Me</h2>
        <p className="text-lg text-gray-400 mb-10 mx-3">
          Want to get in touch? Feel free to reach out to me via email or
          connect with me on social media. I am always excited to collaborate on
          new projects and opportunities!
        </p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-4"
          {...animations.contacIconsAnimation}
        >
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1 cursor-pointer hover:bg-slate-800"
            >
              <motion.img
                src={`/icons/${contact.icon}`}
                alt={`${contact.title} Icon`}
                className="h-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
