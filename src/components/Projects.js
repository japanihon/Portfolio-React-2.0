import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font mt-0"
    style={{backgroundColor: "#cccccc"}}
    >
      <div className="container px-0 py-0 mx-auto text-center w-full ">
        <div className="flex flex-col w-full mb-5">
  
          
          <CodeIcon className="mx-auto inline-block w-10 mb-1" />
          <p className="title-font font-bold sm:text-4xl text-3xl w-full mx-2 my-0 leading-relaxed " >
           I like to learn new skills, understand software technologies and think about solve problems in the industry to help with practical solutions. My current goal is master technologies to create amazing apps.
          </p>
          <h1 className=" font-medium title-font text-black m-0  w-full  " style={{color: '#e0ebeb'}}>
             </h1>
        </div>

        <div className="flex flex-wrap mt-0">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              key={project.image}
              className="sm:w-1/3  p-4"
              >
              <div className="flex relative px-0 py-0 m-0" >
                <img
                  alt="gallery"
                  className="absolute flex  px-0 py-0"
                  src={project.image}
                  style={{width: '25rem', height: '15rem', border: "5px solid gray" , borderRadius: "20px"}}
                />

                <div className="relative z-10 border-4  opacity-0 hover:opacity-100 px-5 py-5 w-full bg-white" 
                style={{width: '25rem', height: '15rem', borderRadius: "20px"}}
                >
                  <h1 className="relative z-10  title-font text-lg font-medium  mb-3 w-full px-0 py-0"
                  >
                    {project.title}{project.description} </h1>
                
                
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
