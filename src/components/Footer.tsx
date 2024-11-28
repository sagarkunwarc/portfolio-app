import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="dark:text-gray-300">&copy; {new Date().getFullYear()} Sagar Kunwar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

