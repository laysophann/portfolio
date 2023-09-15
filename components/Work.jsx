import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../utils/ExperienceData";

const Work = () => {
  return (
    <section id="work" className="py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <h2 className="text-white text-center text-2xl font-bold mb-8">
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-8 flex flex-col items-center font-mono">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              contentStyle={{ background: "none", color: "#cbd5e0" }}
              contentArrowStyle={{ borderRight: "7px solid #cbd5e0" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <div>
                <h3 className="font-bold text-xl mb-1">{experience.title}</h3>
                <p
                  className="text-secondary font-semibold"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-4 list-disc ml-6 space-y-2">
                {experience.points.map((point, pointIndex) => (
                  <li
                    key={`experience-point-${pointIndex}`}
                    className="text-white-100 text-sm pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Work;
