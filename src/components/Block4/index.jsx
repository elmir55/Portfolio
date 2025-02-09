import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Block4() {
  return (
    <div id="contacts-section" className="w-full bg-[#1A0B2E] py-16">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-[#9B4D96] tracking-wider text-start mt-20">
          CONTACTS
        </h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-12 mt-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-white tracking-wider mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-white leading-relaxed mb-8">
              I'm eager to collaborate on innovative projects that make a difference. Whether you’re looking to build intuitive web experiences or just want to say hi, don’t hesitate to reach out!
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-8">
            <a
              href="mailto:your-email@example.com"
              className="group flex flex-col items-center text-white hover:text-white"
            >
              <div className="p-6 rounded-full bg-white shadow-lg group-hover:bg-[#9B4D96] transition-all duration-300">
                <FaEnvelope size={40} color="#D44638" />
              </div>
              <span className="mt-4 text-lg font-medium  transition-all duration-300">
                Email
              </span>
            </a>

            <a
              href="https://www.instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-white hover:text-white"
            >
              <div className="p-6 rounded-full bg-white shadow-lg group-hover:bg-[#9B4D96] transition-all duration-300">
                <FaInstagram size={40} color="#E4405F" />
              </div>
              <span className="mt-4 text-lg font-medium  transition-all duration-300">
                Instagram
              </span>
            </a>

            <a
              href="https://github.com/elmir55"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-white hover:text-white"
            >
              <div className="p-6 rounded-full bg-white shadow-lg group-hover:bg-[#9B4D96] transition-all duration-300">
                <FaGithub size={40} color="#000000" />
              </div>
              <span className="mt-4 text-lg font-medium  transition-all duration-300">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-white hover:text-white"
            >
              <div className="p-6 rounded-full bg-white shadow-lg group-hover:bg-[#9B4D96] transition-all duration-300">
                <FaLinkedin size={40} color="#0077B5" />
              </div>
              <span className="mt-4 text-lg font-medium  transition-all duration-300">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
