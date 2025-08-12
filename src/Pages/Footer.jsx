

import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl from-[#0b1221] to-[#112836] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Noushin Zahan. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Noushinzahan872"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/noushinzahan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
