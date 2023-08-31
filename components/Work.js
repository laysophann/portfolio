import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    date: "2020-9-15 - 2020-10-01",
    title: "Frontend Developer",
    company_name: "Full Stack Bootcamp",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Developed and maintained responsive web applications using Vue.Js",
      "Programming Languages: Node.Js and Vue.Js",
      "Objective : Capable of developing a full stack web application",
    ],
  },
  {
    date: "2021-02 - 2022-04",
    title: "Data Annotator",
    company_name: "Client Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Tool : Post Annotation and V7 ",
      "Objective : Training data sets for AI",
    ],
  },
  {
    date: "2021-0304 - 2022-02-04",
    title: "Frontend Developer",
    company_name: "OGP Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Develop responsive web applications using Refine.Js",
      "Objective : To find the problem in agriculture then come up with the solution.",
    ],
  },
  {
    date: "2022-01-24 - 2022-03-07",
    title: "Flutter Developer",
    company_name: "Training Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Programming used : Flutter",
      "Objective : Is a training which focusing on Flutter that aims to improve the capability and skill sets.",
    ],
  },
  {
    date: "2022-08-29 - 2022-10-31",
    title: "Frontend Developer",
    company_name: "Client Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Programming used : Three.JS",
      "Objective : project is to Showroom that can view on Web browser and VR",
    ],
  },
  {
    date: "2021-12-15 - 2022-02-15",
    title: "IC(Incubation Center) support",
    company_name: "KIT",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Responsible for uploading apps to AppStore and PlayStore",
      "Objective : Support the operation of IC",
    ],
  },
  {
    date: "2022-04-19 - 2022-06-18",
    title: "Mobile App developer",
    company_name: "Training Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Tool : BuildBox",
      "Objective : Is a training that each group of the student will develop a mobile game in BuildBox,2D or 3D using Unity",
    ],
  },
  {
    date: "2022-09-12 - 2023-04-15",
    title: "Shopify Frontend Web developer",
    company_name: "Client Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Programming languages : Polaris, Liquid , React.Js and Typescript",
      "Objective : making a system for booking movie ticket where all user can book through online",
    ],
  },
  {
    date: "2022-11-14 - 2023-01-02",
    title: "Desktop App developer",
    company_name: "Training Project",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Programming language : Electron.Js",
      "Objective : Is a training that each group of the student will develop a desktop application using electron framework",
    ],
  },
  {
    date: "2023-05-19 - 2023-07-21",
    title: "Frontend developer",
    company_name: "Bootcamp fullstack Web development",
    icon: "/icons/kitlogo.png",
    iconBg: "#1d1836",
    points: [
      "Programming languages : React.Js and Typescript",
      "Objective : Develop a fullstack website.",
    ],
  },
];

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
                <h3 className="font-bold text-xl mb-1">
                  {experience.title}
                </h3>
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
