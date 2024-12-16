import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useMediaQuery from "../hooks/useMedieQuery";
import useNavLinks from "../hooks/useNavLink";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navLinks = useNavLinks();

  return (
    <nav
      className={`p-4 mx-auto ${isMobile && isNavOpen ? "fixed-nav" : ""} ${
        isDesktop ? "fixed-nav" : ""
      }`}
      style={{ maxWidth: "1400px" }}
    >
      <div className="flex justify-center items-center">
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
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-gray-400 rounded-lg p-3">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isMobile && isNavOpen ? (
        <ul
          className={`mt-4 flex flex-col justify-center items-center
        text-lg text-white font-semibold`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-gray-400 rounded-lg p-3">
              <a href={link.href} onClick={toggleNav}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}

export default Navigation;
