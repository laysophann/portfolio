"use client";
import React from "react";
import { motion } from "framer-motion";
import NightSkyBackground from "../components/NightSkyBackground";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { BiSolidArrowToTop } from "react-icons/bi";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <NightSkyBackground />
      </div>
      <div className="text-white font-mono">
        <Navigation />
      </div>
      <About />
      <Work />
      <Skills />
      <Contact />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-gray-400 text-2xl md:text-3xl lg:text-4xl float-right mr-10 mb-10 animate-bounce cursor-pointer scroll-smooth"
        onClick={scrollToTop}
      >
        <BiSolidArrowToTop />
      </motion.div>
    </div>
  );
}
