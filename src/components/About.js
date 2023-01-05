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
    style={{backgroundColor: "#cccccc"}}
    >
  
        <div className="grid min-h-screen p-10 bg-white/40 backdrop-blur-md shadow place-items-center  ">
          <img
            className="mr-5 mt-2 flex justify-end space-x-1 place-items-center px-10 mx-10 my-10 rounded-3xl bg-white/10 backdrop-blur-md "
            alt="Andres"
            src="./portfolio llama.png"
            style={{border: "5px solid gray" }}
          />
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-400  leading-relaxed px-10  my-px10   my-2.5
         w-full ">
             Hi, I'm Andres, a software developer who get inspiring of technologies, communicates effectively, and works collaboratively to turn ideas into reality through the use of code.  
          </h1>
      
          <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg mt-2 mb-0"
              style={{backgroundColor: isHovering ? 'gray' : 'white' , fontSize: 24 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              >
              See My Projects
            </a>
        </div>
  
    </section>
  );
}
