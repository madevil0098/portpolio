import React from 'react';
import { Heart, Brain, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 flex items-center">
            <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Onkar Singh</h2>
          </div>
          
          <div className="flex space-x-6 text-slate-600 dark:text-slate-300">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/onkar-singh-007974207/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:os0824555@gmail.com" 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <nav className="flex flex-wrap justify-center mb-6 gap-x-8 gap-y-2 text-sm">
            <a 
              href="#home" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#patents" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Patents
            </a>
            <a 
              href="#research" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Research
            </a>
            <a 
              href="#certifications" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
            &copy; {currentYear} Onkar Singh. All rights reserved. Made with 
            <Heart size={14} className="mx-1 text-red-500" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;