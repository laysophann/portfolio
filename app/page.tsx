"use client";
import React from "react";
import { motion } from "framer-motion";

import NightSkyBackground from "../components/NightSkyBackground.jsx";
import Navigation from "../components/Navigation.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Skills from "../components/Skills.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import { IoArrowUpCircle } from "react-icons/io5";
import Preloader from "../preloader/Preloader";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  return (
    <div>
      <Preloader />
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <NightSkyBackground />
      </div>
      <div className="text-white font-mono">
        <Navigation />
      </div>
      <About />
      <Work />
      <Skills />
      <Project />
      <Contact />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-gray-400 text-2xl md:text-3xl lg:text-4xl float-right mr-10 mb-10 animate-bounce cursor-pointer scroll-smooth"
        onClick={scrollToTop}
      >
        <IoArrowUpCircle />
      </motion.div>
    </div>
  );
}
