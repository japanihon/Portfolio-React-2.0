import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {

  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };



  return (
    <header className="bg-gray-800 md:sticky top-0 z-10"
    style={{backgroundColor: "#f2f2f2"}}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
        </a> 
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"> 
        <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Soft Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Technologies I work
          </a>
        </nav>
        <a
          href="#contactForm"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          style={{color: "#0000cc", backgroundColor: isHovering ? 'gray' : 'white' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          Contact Me
          <ArrowRightIcon 
          className="w-4 h-4 ml-1"
          style={{color: "#0000cc"}}
           />
        </a>
      </div>
    </header>
  );
}
