import React, { useState } from "react";
import logo from "../assets/kevinRushLogo.png";
import Hero from "./Hero";
import Technologies from "./Technologies";
import About from "./About"
import Experience from "./Experience";
import Projects from "./Projects"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import RajSawantResume from "../assets/RajSawantResume.pdf";

const Navbar = () => { 
  const [activeComponent, setActiveComponent] = useState("");

  const handleComponentClick = (component) => {
    setActiveComponent(component); // Set the active component based on button click
  };
  const handleIconClick = (url) => {
  window.open(url, "_blank");
}
  return (
    <div>
    <nav className="mb-20 flex items-centre justify-between py-6">
      <div className="flex flex-shrink-0 items-center ml-4 md:ml-20">
        {/* <h4 className="mx-2 w-10 font-semibold">RS</h4> */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full md:w-auto">
          <button 
            onClick={() => handleComponentClick('About')}
            className="w-full md:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            About Me
          </button>
          <button 
            onClick={() => handleComponentClick('Technologies')}
            className="w-full md:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Technologies
          </button>
          <button 
            onClick={() => handleComponentClick('Projects')}
            className="w-full md:w-auto px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Projects
          </button>
          <button 
            onClick={() => handleComponentClick('Experience')}
            className="w-full md:w-auto px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Experience
          </button>
          <button 
            onClick={() => handleIconClick('https://codolio.com/profile/rajsawant2722001')}
            className="w-full md:w-auto px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            CP Profile
          </button>
          <button 
            onClick={() => window.open(RajSawantResume)}
            className="w-full md:w-auto px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r from-violet-400 to-violet-600 text-black rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            View Resume
          </button>
          </div>
        </div>
      <div className="m-8 flex items-center justify-centre gap-4 text-2xl">

   
        <FaLinkedin size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://www.linkedin.com/in/raj-sawant-15a989214')}/>
        <FaGithub size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://github.com/rajsawant27')}/>
        <FaInstagram size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://www.instagram.com/raj_sawant_03/')}/>
        <FaSquareXTwitter size={30} 
        style={{ margin: '10px', cursor: 'pointer' }} 
        onClick={() => handleIconClick('https://x.com/raj2722001')}/>
      </div>
    </nav>

<div className="mt-4">
{activeComponent === "Hero" && <Hero />}
{activeComponent === "Technologies" && <Technologies />}
{activeComponent === "Projects" && <Projects />}
{activeComponent === "Experience" && <Experience />}
{activeComponent === "Contact" && <Contact />}
{activeComponent === "About" && <About />}

</div>

</div>
    
  );
}

export default Navbar;