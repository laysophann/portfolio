import { motion } from "framer-motion";

function useAnimations() {
  const fadeUpAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const delayedFadeUpAnimation = {
    ...fadeUpAnimation,
    transition: { duration: 0.6, delay: 0.3 },
  };

  const delayedLongerFadeUpAnimation = {
    ...fadeUpAnimation,
    transition: { duration: 0.6, delay: 0.6 },
  };

  const scaleHoverAnimation = {
    whileHover: { scale: 1.1 },
  };

  return {
    fadeUpAnimation,
    delayedFadeUpAnimation,
    delayedLongerFadeUpAnimation,
    scaleHoverAnimation,
  };
}

export default useAnimations;
