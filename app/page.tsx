"use client";
import NightSkyBackground from "../components/NightSkyBackground";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
    </div>
  );
}
