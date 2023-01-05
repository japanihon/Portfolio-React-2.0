import React from "react";
import { ChipIcon , BadgeCheckIcon } from "@heroicons/react/solid";
import { languages , tools } from "../data";

export default function Testimonials() {
  return (
    <section 
    id="testimonials"
    style={{backgroundColor: "#bfbfbf"}}
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
            <div key={languages[0]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[0]}
                </span>
              </div>
              </div>
            <div key={languages[1]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[1]}
                </span>
              </div>
              </div>
            <div key={languages[2]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[2]}
                </span>
              </div>
              </div>
            <div key={languages[3]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[3]}
                </span>
              </div>
              </div>
              <div key={languages[4]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[4]}
                </span>
              </div>
              </div>
              <div key={languages[5]} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {languages[5]}
                </span>
              </div>
              </div>

        </div>

        <div 
        className="flex flex-wrap m-1 w-full px-0 py-0 border-10 border-blue-500 md:border-green-500 ">
          {tools.map((tools) => (
            <div 
            key={tools}
            className="px-0 py-0 m-7 mb-0  md:w-1/4 rounded-2xl border-blue-500 md:border-green-500"
            style={{ backgroundColor: '#e0ebeb', border: "black "}}
             >
                <p className="leading-relaxed px-0 py-0 border-blue-500 md:border-green-500 ">
                {tools}
                </p>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
