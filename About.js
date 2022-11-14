import React from "react";

export default function About() {

  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };



  return (
    <section id="about" 
    style={{backgroundColor: "#f2f2f2"}}
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Andres
            <br className="hidden lg:inline-block" /> This is my portfolio made with React.JS
          </h1>
          <p className="mb-8 leading-relaxed">
          Focus on put my skills to service the customer requirements about their ideal Website and Inspiring for design cool React Base Apps
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              style={{color: "#0000cc", backgroundColor: isHovering ? 'gray' : 'white' , fontSize: 24 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full w-4/5">
          <img
            className="object-cover object-center rounded w-4/5"
            alt="hero"
            src="./giphy.gif"
            style={{border: "5px solid black"}}
          />
        </div>
      </div>
    </section>
  );
}
