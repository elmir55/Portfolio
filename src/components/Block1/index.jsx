import React from "react";
import { FaPhoneAlt, FaInstagram, FaGithub } from "react-icons/fa";
import st1 from '../../shared/assets/girl.jpg';

export default function Block1() {
  return (
    <div id="about-section" className="w-full bg-[#1A0B2E] py-20 mt-16">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-row-reverse items-center justify-between gap-6 mb-10">  
        <img
          src={st1}
          alt="Elmira"
          className="w-[400px] h-[450px] rounded-full object-cover shadow-lg border-4 border-[#1A0B2E]"
        />
        <div className="text-left max-w-2xl">
          <h2 className="text-6xl font-extrabold tracking-wide text-[#9B4D96] mb-4 inline-block">
            Hi, My Name is Elmira
          </h2>
          <p className="text-2xl mt-4 leading-relaxed text-gray-400">
            I'm a passionate <span className="text-white font-semibold">Frontend Developer</span> with experience in building modern,  
            user-friendly, and scalable web applications.
          </p>

          <div className="mt-6">
            <h3 className="text-3xl text-white font-bold mb-4">Here you can contact me:</h3>
            <div className="flex gap-6 justify-start text-3xl mt-10 ">
              <a href="tel:+996999166165" className="transition-all duration-300">
                <div className="bg-white p-3 rounded-full hover:bg-pink-500 hover:scale-110 transform transition-all duration-300">
                  <FaPhoneAlt className="text-gray-700 hover:text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/yourusername" className="transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-3 rounded-full hover:bg-pink-500 hover:scale-110 transform transition-all duration-300">
                  <FaInstagram className="text-[#E4405F] hover:text-white" />
                </div>
              </a>
              <a href="https://github.com/elmir55" className="transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-3 rounded-full hover:bg-pink-500 hover:scale-110 transform transition-all duration-300">
                  <FaGithub className="text-[#000000] hover:text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
