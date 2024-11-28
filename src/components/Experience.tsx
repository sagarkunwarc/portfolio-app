import React from "react";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Software Engineer",
      duration: "Jan 2022 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building and maintaining a high-traffic e-commerce platform",
        "Implemented microservices architecture, resulting in a 40% improvement in system scalability",
        "Mentored junior developers and conducted code reviews to ensure code quality and best practices",
      ],
    },
    {
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      duration: "Mar 2019 - Dec 2021",
      responsibilities: [
        "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL",
        "Collaborated with UX/UI designers to implement responsive and accessible frontend designs",
        "Optimized database queries and implemented caching strategies, improving application performance by 30%",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Junior Software Developer",
      duration: "Jun 2017 - Feb 2019",
      responsibilities: [
        "Assisted in the development of a mobile-first web application using Angular and Firebase",
        "Implemented RESTful APIs and integrated third-party services for payment processing and analytics",
        "Participated in daily stand-ups and sprint planning meetings, following Agile methodologies",
      ],
    },
  ];

  return (
    <section className="mb-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={`${exp.company}-${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {exp.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {exp.duration}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <li
                  key={`${exp.company}-${respIndex}`}
                  className="text-gray-700 dark:text-gray-200"
                >
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
