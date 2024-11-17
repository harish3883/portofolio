import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              NOORA HARISH
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Machine Learning Enthusiast | Computer Vision | Problem Solver
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="#contact" 
               className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Contact Me
            </a>
            <a href="#projects" 
               className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
              View Work
            </a>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-purple-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}