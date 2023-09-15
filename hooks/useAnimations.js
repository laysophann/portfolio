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
  const skillsFadeUpAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 },
  };
  const contactFadeUpAnimation = {
    ...skillsFadeUpAnimation,
    initial: { y: 20 },
    animate: { y: 0 },
    exit: { y: 20 },
    transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
  };
  const contacIconsAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
  };
  const projectFadeUpAnimation = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const scaleHoverAnimation = {
    whileHover: { scale: 1.1 },
  };

  return {
    fadeUpAnimation,
    delayedFadeUpAnimation,
    delayedLongerFadeUpAnimation,
    scaleHoverAnimation,
    skillsFadeUpAnimation,
    projectFadeUpAnimation,
    contactFadeUpAnimation,
    contacIconsAnimation,
  };
}

export default useAnimations;
