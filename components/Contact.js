import React from "react";
import { motion } from "framer-motion";
import contacts from "../utils/ContactData";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is present
      exit={{ opacity: 0, y: 20 }} // Animation when component is removed
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
    >
      <div className="container mx-auto text-center font-mono">
        <h2 className="text-3xl font-bold text-white mb-6">Connect Me</h2>
        <p className="text-lg text-gray-400 mb-10 mx-3">
          Want to get in touch? Feel free to reach out to me via email or
          connect with me on social media. I am always excited to collaborate on
          new projects and opportunities!
        </p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-4"
          initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
          animate={{ opacity: 1, scale: 1 }} // Animation when component is present
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Animation duration and easing with a slight delay
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
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                whileTap={{ scale: 0.9 }} // Scale effect on tap
              />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
