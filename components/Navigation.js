import React, { useState, useEffect } from "react";
import "../app/globals.css";

function Navigation() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center py-4 px-10 ${
        isNavFixed ? "fixed-nav" : ""
      }`}
    >
      <h1 className="font-bold text-5xl text-lime-500">.SP.</h1>
      <ul className="flex space-x-10 text-lg">
        <li className="hover:text-lime-500">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-lime-500">
          <a href="#work">Work</a>
        </li>
        <li className="hover:text-lime-500">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-lime-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
