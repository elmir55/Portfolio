import React from 'react';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className= " bg-[#1A0B2E] w-full py-8 text-white">
      <div className="max-w-[1200px] mx-auto px-5 mt-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-8">
            <div className="flex flex-col items-start">
              <p
                className="hover:underline cursor-pointer text-lg transition-all"
                onClick={() => scrollToSection('about-section')}
              >
                About
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p
                className="hover:underline cursor-pointer text-lg transition-all"
                onClick={() => scrollToSection('skills-section')}
              >
                Skills
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p
                className="hover:underline cursor-pointer text-lg transition-all"
                onClick={() => scrollToSection('projects-section')}
              >
                Projects
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p
                className="hover:underline cursor-pointer text-lg transition-all"
                onClick={() => scrollToSection('contacts-section')}
              >
                Contacts
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 uppercase text-white">Follow Me</h1>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-7 w-7 cursor-pointer hover:scale-125 transition-transform text-pink-500" />
              </a>
              <a href="https://github.com/elmir55" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-7 w-7 cursor-pointer hover:scale-125 transition-transform text-gray-300" />
              </a>
              <a href="mailto:info@hurghada.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="h-7 w-7 cursor-pointer hover:scale-125 transition-transform text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#9B4D96] pt-4 mt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
