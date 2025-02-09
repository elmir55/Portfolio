import React, { useState } from "react";
import { FaReact, FaCode, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Block2 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const skills = [
    {
      title: "React.js",
      description: "A powerful library for building user interfaces.",
      icon: <FaReact className="text-blue-500 w-14 h-14" />,
    },
    {
      title: "JavaScript (ES6+)",
      description: "The core programming language of the web.",
      icon: <SiJavascript className="text-yellow-400 w-14 h-14" />,
    },
    {
      title: "React Router DOM",
      description: "Handles routing in React applications.",
      icon: <FaCode className="text-gray-500 w-14 h-14" />,
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      icon: <SiTailwindcss className="text-teal-400 w-14 h-14" />,
    },
    {
      title: "Git & GitHub",
      description: "Version control and collaboration tools.",
      icon: <FaGithub className="text-gray-800 w-14 h-14" />,
    },
    {
      title: "Redux",
      description: "State management for modern web apps.",
      icon: <FaCode className="text-purple-500 w-14 h-14" />,
    },
  ];

  return (
    <section id="skills-section" className="w-full bg-[#1A0B2E] py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-start gap-10 ">
        <h1 className="text-5xl font-extrabold tracking-wide text-[#9B4D96] text-left">
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg transition-all duration-300 transform bg-gradient-to-br from-[#2A0944] to-[#5A189A] text-white hover:scale-105 hover:translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-4">{skill.icon}</div>

              <h3 className="text-xl font-bold mb-2 text-center">{skill.title}</h3>

              <p className="text-md text-gray-300 text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
