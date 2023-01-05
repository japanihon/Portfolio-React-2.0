import React from "react";

import { languages } from "../data";





export default function Testimonials() {
  return (
    <section 
    id="testimonials"
    style={{backgroundColor: "#bfbfbf"}}
    >
      <div className="container px-5 py-10 mx-auto text-center"
        
       style={{ backgroundColor: "#bfbfbf"}}
        >
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12"
        >
        Technologies I work
        </h1>
        <div 
        className="flex flex-wrap m-4">
          {languages.map((languages) => (
            <div 
            key={languages}
            className="p-4 md:w-1/2 w-full"
            style={{ backgroundColor: '#e0ebeb'}}
             >
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded"
              style={{ backgroundColor: '#e0ebeb'}}>
                
                
                 
                <p className="leading-relaxed mb-6">
                {languages}
                </p>
                <div className="inline-flex items-center">
                  <img
                    
                    alt="noo"
                    src={""}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}