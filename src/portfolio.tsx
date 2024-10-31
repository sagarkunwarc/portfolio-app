import React, { useEffect, useState } from "react";

const Portfolio: React.FC = () => {
  const [isDarkMode] = useState(true);

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

  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com",
      github: "https://github.com/username/project1",
    },
    // Add more projects
  ];

  return (
    <div className={`container mx-auto px-4 py-8`}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            Sagar Kunwar
          </h1>
          <p className="text-xl mb-6">Full-Stack Developer</p>
          <div className="flex justify-center gap-4">
            <button className="border border-blue-500 hover:bg-blue-500 transition-colors duration-300 px-6 py-2 rounded">
              <a href="https://github.com/sagarkunwarc" target="_blank">
                GitHub
              </a>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 px-6 py-2 rounded">
              <a
                href="https://www.linkedin.com/in/sagarkunwar/"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed">
              Passionate full-stack developer with expertise in building
              scalable web applications on Java, Spring Boot and React.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Add some key statistics or highlights */}
            <div className="p-4 bg-blue-500 rounded">
              <h3 className="text-2xl font-bold">5+</h3>
              <p>Years Experience</p>
            </div>
            {/* Add more stats */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out group-hover:bg-blue-600"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded h-32"
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
