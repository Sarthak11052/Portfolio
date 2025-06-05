import { useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="py-16 px-4 min-h-screen bg-[#000000]">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-[#181c27] p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
