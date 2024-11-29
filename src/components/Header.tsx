import React from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white text-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sagar Kunwar</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 ml-4">
            <a
              href="https://github.com/sagarkunwarc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/sagarkunwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://partner.cloudskillsboost.google/public_profiles/f0d3c4be-0bcb-43a5-8665-bbdaa63b022e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Cloud Profile"
            >
              <FaGoogle className="text-2xl" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
