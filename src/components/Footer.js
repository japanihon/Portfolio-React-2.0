import React from 'react';

import { contact } from "../data";

export default function Footer() {
return (
    <div className="flex items-center space-x-5 bg-blue"
    style={{width: 400, height: 300, padding: 10, margin: 10}}>
    {contact.map((contact) => ( 
        <div 
        key={contact.id}
        style={{backgroundColor: "#fff", borderColor: "15 solid black",
        width: "15rem", height: "auto"}}
        >
        <img 
        src={contact.image}
         alt="social media" />
        <a href={contact.link} 
        className=" items-center space-x-5 bg-blue"
        >   </a>
</div>
         ))}
         </div>
)
}