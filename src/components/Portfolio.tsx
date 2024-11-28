// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ToggleButton from "./ToggleButton";
// import Header from "./Header";
// import SocialLinks from "./SocialLinks";
// import Testimonials from "./Testimonials";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Experience from "./Experience";

// const Portfolio: React.FC = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//     document.body.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
//       <div className="container mx-auto px-4 py-8 transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-white">
//         <header className="fixed top-0 right-0 m-4 z-50">
//           <ToggleButton
//             isDarkMode={isDarkMode}
//             toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
//           />
//         </header>
//         <Header />
//         <SocialLinks />
//         <Skills />
//         <Projects />
//         <Experience />
//         <ToggleButton
//           isDarkMode={isDarkMode}
//           toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
//         />
//         <Testimonials />
//         <footer className="text-center py-4 mt-12 border-t dark:border-gray-700">
//           <p className="text-sm">
//             &copy; 2024 Sagar Kunwar. All rights reserved.
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
