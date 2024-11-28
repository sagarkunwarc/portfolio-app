import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white py-4 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sagar Kunwar</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
          <div className="flex space-x-4 ml-4">
            <a href="https://github.com/sagarkunwarc" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/sagarkunwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://partner.cloudskillsboost.google/public_profiles/f0d3c4be-0bcb-43a5-8665-bbdaa63b022e"
             target="_blank" rel="noopener noreferrer" aria-label="Google Cloud Profile">
              <FaGoogle className="text-2xl" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

