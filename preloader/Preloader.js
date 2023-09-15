import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../app/globals.css";

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      className={`preloader ${isLoading ? "loading" : ""}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, transition: { duration: 0.5 } }}
    >
      <div className="loader"></div>
    </motion.div>
  );
}

export default Preloader;
