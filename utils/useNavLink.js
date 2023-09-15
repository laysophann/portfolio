import { useState } from "react";

function useNavLinks() {
  const [navLinks] = useState([
    { text: "About", href: "#about" },
    { text: "Work", href: "#work" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ]);

  return navLinks;
}

export default useNavLinks;
