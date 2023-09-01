import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/globals.css";
import useMediaQuery from "./useMedieQuery";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isNavOpen);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // console.log(isDesktop)

  return (
    <nav className={`p-4 ${isNavOpen ? "fixed-nav" : ""}`}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-5xl cursor-pointer">|SP|</h1>

        {isDesktop ? (
          <ul
            className={`text-lg text-white font-semibold space-x-10 flex items-center`}
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
        ) : (
          <div>
            {isNavOpen ? (
              <FaTimes
                onClick={toggleNav}
                className="text-gray-400 cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={toggleNav}
                className="text-gray-400 cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
      {isNavOpen ? (
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
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navigation;
