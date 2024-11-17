import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-purple-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:text-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com"
               className="p-2 hover:text-purple-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}