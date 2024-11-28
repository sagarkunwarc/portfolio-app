import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Project 1",
    description: "A brief description of project 1",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "https://github.com/yourusername/project1",
  },
  {
    id: "task-manager",
    title: "Project 2",
    description: "A brief description of project 2",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
            <p className="mb-4 dark:text-gray-300">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

