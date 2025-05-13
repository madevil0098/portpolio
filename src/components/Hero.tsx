import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400 dark:bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-purple-400 dark:bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-teal-400 dark:bg-teal-600 opacity-10 blur-3xl"></div>
      </div>
      
      <div 
        ref={heroRef}
        className="section-container flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
          <span className="block">Hi, I'm Onkar Singh</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            AI Innovator & Researcher
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mb-10">
          Innovating Emotion-Aware AI for Human-Centered Technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects"
            className="btn-primary"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="btn-secondary"
          >
            Get in Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about"
            className="text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;