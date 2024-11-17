import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Human Face Generator Using GAN'S",
    description: "Developed an UserFriendly Human face generator using GAN's that led to 8% improvement than already existed one.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    github: "https://github.com"
  },
  {
    title: "Dhaanya - Farmer Friendly Application",
    description: "An innovative application empowering farmers with ML-powered disease prediction and GEMINI API integration for intelligent assistance.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "GEMINI API", "Python", "AI"],
    github: "https://github.com"
  },
  {
    title: "Image to Text Language Translator",
    description: "A web application that extracts text from images and translates it into multiple languages, perfect for travelers. Built with OCR and GEMINI-API.",
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=800&q=80",
    tags: ["OpenCV", "OCR", "GEMINI-API", "PHP", "JavaScript"],
    github: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}