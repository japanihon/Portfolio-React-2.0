import React from 'react';

import { contact } from "../data";

export default function Footer() {
return (
    <footer id="contact" className="flex justify-center items-center"
    style={{backgroundColor: "#bfbfbf"}}>
    <div className="flex items-center space-x-5 bg-blue w-5"
    style={{width: 400, height: 300, padding: 10, margin: 10}}>
    {contact.map((contact) => ( 
        <div 
        key={contact.id}
        className="flex items-center space-x-5 bg-blue w-5"
        style={{backgroundColor: "#bfbfbf",
        width: "15rem", height: "auto"}}
        >
        <a href={contact.link} target="_blank" rel="noopener noreferrer">
        <img 
         src={contact.image}
         alt="social media"
         style={{border: "3px solid black", borderRadius: "20px"}} 
         />
         </a>
    
</div>
         ))}
         </div>
         <p> © 2022 Design by AR development. All rights reserved. </p>
         </footer>
)
}