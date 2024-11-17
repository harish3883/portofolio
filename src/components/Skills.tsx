import React from 'react';
import { Code, Brain, Database, Layout, Terminal, Cpu } from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    items: ["Python", "Java", "C", "Dart", "HTML", "CSS"]
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    items: ["TensorFlow", "PyTorch", "Computer Vision", "Deep Learning"]
  },
  {
    category: "Web Development",
    icon: <Layout className="w-6 h-6" />,
    items: ["HTML", "CSS", "Bootstrap", "Responsive Design"]
  },
  {
    category: "Mobile Development",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Flutter", "Dart", "Cross-platform Development"]
  },
  {
    category: "Data Management",
    icon: <Database className="w-6 h-6" />,
    items: ["SQL", "Database Design", "Data Analysis"]
  },
  {
    category: "Technical Skills",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Problem Solving", "Algorithm Design", "Version Control"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}