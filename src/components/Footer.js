import React from 'react';

import { contact } from "../data";

export default function Footer() {
return (

    <footer className="justify-center bg-gray items-center text-center"
    >
    {contact.map((contact) => ( 
        <div 
        key={contact.id}
        className="justify-center items-center font-mono text-2xl text-center"
        style={{backgroundColor: "#bfbfbf",
        width: "15rem", height: "auto"}}
        >
        <a href={contact.link} target="_blank" rel="noopener noreferrer">
        <img 
         src={contact.image}
         alt="social media"
         style={{border: "3px solid black", borderRadius: "10px"}} 
         />
         </a>
         </div>
         ))}
         <p className="justify-center items-center font-mono text-2xl text-center"> © 2022 Design by AR development. All rights reserved. </p>
         </footer>
)
}