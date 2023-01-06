import React from "react";
import { ChipIcon , BadgeCheckIcon } from "@heroicons/react/solid";
import { languages , tools } from "../data";


export default function Testimonials() {
  return (
    <section 
    id="testimonials"
    style={{backgroundColor: "#cccccc"}}
    >
      <div className="container px-2 py-2 mx-auto text-center">
        <ChipIcon className="w-10 inline-block mb-4" 
       style={{ backgroundColor: "#bfbfbf"}}
        />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12"
        >
        Technologies
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div key={languages[0]} className="p-2 sm:w-1/2 w-full" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="Javascript"
            src="./file-type-js-official.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                <span className="title-font font-medium text-white" >
                  {languages[0]}
                </span>
              </div>
              </div>
            <div key={languages[1]} className="p-2 sm:w-1/2 w-full" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="HTML"
            src="./html5.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                <span className="title-font font-medium text-white">
                  {languages[1]}
                </span>
              </div>
              </div>
            <div key={languages[2]} className="p-2 sm:w-1/2 w-full" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="CSS"
            src="./css3.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                <span className="title-font font-medium text-white">
                  {languages[2]}
                </span>
              </div>
              </div>
            <div key={languages[3]} className="p-2 sm:w-1/2 w-full" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="Node"
            src="./node.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                <span className="title-font font-medium text-white">
                  {languages[3]}
                </span>
              </div>
              </div>
              <div key={languages[4]} className="p-2 sm:w-1/2 w-full" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="React"
            src="./react.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                <span className="title-font font-medium text-white">
                  {languages[4]}
                </span>
              </div>
              </div>
              <div key={languages[5]} className="p-2 sm:w-1/2 w-full pt-2" style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}>
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <img
            alt="Tailwind"
            src="./tailwind.svg"
            className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
          />
                
                <span className="title-font font-medium text-white">
                  {languages[5]}
                </span>
              </div>
        
              </div>

        </div>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-0 mt-5"
        >
        Tools  🛠️
        </h1>
        <div 
        className="flex flex-wrap m-1 w-full px-0 py-0 border-10 ">
          {tools.map((tools) => (
            <div 
            key={tools}
            className="px-1 py-0 m-7 mb-0  md:w-1/4 rounded-2xl"
            style={{ backgroundColor: '#e0ebeb', border: "5px solid gray" ,fontFamily: 'monospace'}}
             >
                <p className="leading-relaxed px-0 py-0 font-mono pt-3">
                {tools}
                </p>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
