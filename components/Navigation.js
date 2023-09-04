import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/globals.css";
import useMediaQuery from "./useMedieQuery";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // Close the mobile navigation when switching to desktop view
    if (!isMobile) {
      setIsNavOpen(false);
    }
  }, [isMobile]);

  return (
    <nav
      className={`p-4 ${isMobile && isNavOpen ? "fixed-nav" : ""} ${
        isDesktop ? "fixed-nav" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl cursor-pointer">|SP|</h1>

        {isMobile ? (
          isNavOpen ? (
            <FaTimes
              onClick={toggleNav}
              className="text-gray-400 cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleNav}
              className="text-gray-400 cursor-pointer lg:hidden"
            />
          )
        ) : (
          <ul className="text-lg text-white font-semibold space-x-5 flex items-center">
            <li className="hover:text-gray-400 rounded-lg p-3">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-gray-400 rounded-lg p-3">
              <a href="#work">Work</a>
            </li>
            <li className="hover:text-gray-400 rounded-lg p-3">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-gray-400 rounded-lg p-3">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-400 rounded-lg p-3">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </div>
      {isMobile && isNavOpen ? (
        <ul
          className={`mt-4 flex flex-col justify-center items-center
        text-lg text-white font-semibold`}
        >
          <li className="hover:text-gray-400 rounded-lg p-3">
            <a href="#about" onClick={toggleNav}>
              About
            </a>
          </li>
          <li className="hover:text-gray-400 rounded-lg p-3">
            <a href="#work" onClick={toggleNav}>
              Work
            </a>
          </li>
          <li className="hover:text-gray-400 rounded-lg p-3">
            <a href="#skills" onClick={toggleNav}>
              Skills
            </a>
          </li>
          <li className="hover:text-gray-400 rounded-lg p-3">
            <a href="#projects" onClick={toggleNav}>
              Projects
            </a>
          </li>
          <li className="hover:text-gray-400 rounded-lg p-3">
            <a href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navigation;
