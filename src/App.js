import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import ExtraFooter from "./components/ExtraFooter";

import { useEffect } from "react";
import ContactForm from "./components/ContactForm";

import './index.css';

export default function App() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <main 
    className="App"
    style={{borderRadius: "40px"}}
    >
      <Navbar  />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <ContactForm />
      <ExtraFooter />
    </main>
  );
}
