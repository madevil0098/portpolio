import React, { useEffect, useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Research {
  title: string;
  journal: string;
  authors: string;
  description: string;
  link?: string;
  date: string;
}

const Research: React.FC = () => {
  const researchRef = useRef<HTMLDivElement>(null);

  const researchPapers: Research[] = [
    {
      title: "Improved Emotion Recognition through Fuzzy Logic Integration with Neural Networks",
      journal: "International Journal of Artificial Intelligence & Applications",
      authors: "Singh, O., Kumar, S., & Patel, R.",
      description: "This paper presents a novel approach to emotion recognition by combining fuzzy logic systems with neural networks, achieving higher accuracy in detecting subtle emotional states compared to traditional methods.",
      link: "#",
      date: "2023"
    },
    {
      title: "Applications of AI in Healthcare: Challenges and Opportunities",
      journal: "Journal of Medical Systems & Informatics",
      authors: "Singh, O., Gupta, A., & Mehta, P.",
      description: "A comprehensive review of artificial intelligence applications in healthcare settings, examining current challenges, ethical considerations, and future directions for AI-powered diagnostic and treatment systems.",
      link: "#",
      date: "2022"
    }
  ];

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

    if (researchRef.current) {
      observer.observe(researchRef.current);
    }

    return () => {
      if (researchRef.current) {
        observer.unobserve(researchRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div 
        ref={researchRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Research Publications</h2>
        
        <div className="space-y-8">
          <div className="card p-6 md:p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="shrink-0">
                <BookOpen className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Research Focus</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  My research focuses on advancing artificial intelligence applications, particularly in emotion recognition, healthcare diagnostics, and human-computer interaction. Through rigorous experimentation and innovative approaches, I strive to contribute meaningful insights to the rapidly evolving field of AI.
                </p>
              </div>
            </div>
          </div>
          
          {researchPapers.map((paper, index) => (
            <div 
              key={index} 
              className="card hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                {paper.title}
              </h3>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm">
                <div className="text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Journal:</span> {paper.journal}
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Authors:</span> {paper.authors}
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Publication Year:</span> {paper.date}
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {paper.description}
              </p>
              
              {paper.link && (
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  Read Full Paper <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;