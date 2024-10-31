import React, { useEffect, useState } from "react";

const Portfolio: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
  
    if (isDarkMode) {
      document.body.classList.add("bg-gray-800", "text-white");
      document.body.classList.remove("bg-white", "text-gray-800");
    } else {
      document.body.classList.add("bg-white", "text-gray-800");
      document.body.classList.remove("bg-gray-800", "text-white");
    }
  }, [isDarkMode]);

  const skills = [
    { name: "Java", level: 70 },
    { name: "Spring Boot", level: 70 },
    { name: "SQL", level: 75 },
    { name: "REST APIs", level: 65 },
    { name: "AWS", level: 50 },
    { name: "GCP", level: 45 },
    { name: "Python", level: 45 },
    { name: "Docker", level: 50 },
    { name: "Express", level: 50 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 45 },
    { name: "Next JS", level: 35 },
    { name: "TypeScript", level: 45 },
    { name: "Tailwind CSS", level: 35 },
  ];

  return (
    <div className={`container mx-auto px-4 py-8`}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle to {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Sagar Kunwar</h1>
          <p className="mb-6">Full-Stack Developer</p>
          <h2 className="text-2xl font-medium mb-2">About Me</h2>
          <p className="mb-6">
            Passionate about building web applications on Java and React.
          </p>
          <h2 className="text-2xl font-medium mb-2">Contact</h2>
          <div className="flex items-center">
            <a
              href="https://github.com/sagarkunwarc"
              target="_blank"
              className="mr-4 text-blue-500 hover:text-blue-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sagarkunwar/"
              target="_blank"
              className="text-blue-500 hover:text-blue-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">Skills</h2>
          <ul className="list-none">
            {skills.map((skill) => (
              <li key={skill.name} className="mb-4">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
