import React, { useState } from "react";

import { UsersIcon } from "@heroicons/react/solid";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/5e9439c0-63bb-11ed-891b-4f350712a1f0"

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="justify-center items-center text-center font-mono text-2xl"
      style={{backgroundColor: "#bfbfbf"}} >
       Your message was sended correctly ! We'll be in touch soon. 
       <h2> Have a great Day !  </h2> 
      </div>
    );
  }

  return (
    <section id="contactForm" className="flex justify-center items-center"
    style={{backgroundColor: "#bfbfbf"}}
    >
    <div className="justify-center bg-gray text-center">
    <UsersIcon
       className="inline-block" 
       style={{width: "70px", backgroundColor: "#bfbfbf", alignItems: "center"}}
       />
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
     <h2 className="text-gray sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center content-center items-center font-mono" 
        style={{color: '#e0ebeb'}}
        >
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5 font-medium font-mono text-gray-600 ">
        Thank you for visiting my website. Let's build something amazing together!
        </p>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-gray-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send me an e-mail
        </button>
      </div>
    </form>
    </div>
  </section>
  );
};

export default ContactForm;