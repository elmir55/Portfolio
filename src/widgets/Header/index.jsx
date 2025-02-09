import React from 'react'; 
import { Link } from 'react-scroll'; 
import logo from '../../shared/assets/logo.svg';

export function Header() {
  return (
    <div className="fixed w-full bg-[#1A0B2E] top-0 left-0 z-50"> 
      <div className=" w-full mx-auto items-center py-3 px-10">
        <nav className="flex justify-between items-center text-lg font-bold tracking-widest uppercase mx-auto text-gray-300"> 
          <Link to="/block1"> 
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain"  
          />
           </Link>
          <div className="flex justify-end space-x-10">
            <div className="relative group cursor-pointer transition-all duration-500 hover:text-[#9B4D96] hover:scale-105 hover:-translate-y-1 hover:translate-x-1">
              <Link to="about-section" smooth={true} duration={500}>
                <div className="transition-all duration-500">ABOUT</div>
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#9B4D96] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </div>

            <div className="relative group cursor-pointer transition-all duration-500 hover:text-[#9B4D96] hover:scale-105 hover:-translate-y-1 hover:translate-x-1">
              <Link to="skills-section" smooth={true} duration={500}>
                <div className="transition-all duration-500">SKILLS</div>
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#9B4D96] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </div>

            <div className="relative group cursor-pointer transition-all duration-500 hover:text-[#9B4D96] hover:scale-105 hover:-translate-y-1 hover:translate-x-1">
              <Link to="projects-section" smooth={true} duration={500}>
                <div className="transition-all duration-500">PROJECTS</div>
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#9B4D96] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </div>

            <div className="relative group cursor-pointer transition-all duration-500 hover:text-[#9B4D96] hover:scale-105 hover:-translate-y-1 hover:translate-x-1">
              <Link to="contacts-section" smooth={true} duration={500}>
                <div className="transition-all duration-500">CONTACTS</div>
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#9B4D96] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
