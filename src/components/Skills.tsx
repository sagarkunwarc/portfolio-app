import React from "react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const Skills: React.FC = () => {
  const skills: SkillCategory[] = [
    {
      category: "Backend",
      items: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "SQL", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "Next.js", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "AWS", level: 75 },
        { name: "GCP", level: 70 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 65 },
      ],
    },
  ];

  return (
    <section className="mb-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-left">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div
            key={category.category}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <ul className="space-y-4">
              {category.items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
