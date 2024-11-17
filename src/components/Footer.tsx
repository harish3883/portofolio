import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NOORA HARISH
            </p>
            <p className="text-gray-400 mt-2">Machine Learning Enthusiast & Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nooraharish143@gmail.com"
               className="hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NOORA HARISH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}