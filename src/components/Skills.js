import { BadgeCheckIcon, ChatIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";


export default function Skills() {
 
  return (
    <section id="skills"
    style={{backgroundColor: "#cccccc"}}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChatIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">

            Soft Skills
          </h1>
          <p className="title-font font-bold sm:text-4xl text-3xl mb-4 leading-relaxed w-full mx-auto  text-gray-400">
           I think that share knowledge, give an opinion and listening to others opinions it is important to learn and grow our perspective and help to open to new solutions and points of views.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white" style={{ fontFamily: 'monospace'}}>
                  {skills}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
