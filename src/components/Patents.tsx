import React, { useEffect, useRef } from 'react';
import { Award, FileText } from 'lucide-react';

interface Patent {
  title: string;
  applicationNumber: string;
  status: string;
  date: string;
  description: string;
}

const Patents: React.FC = () => {
  const patentsRef = useRef<HTMLDivElement>(null);

  const patents: Patent[] = [
    {
      title: "Emotion Recognition System Using Fuzzy Logic",
      applicationNumber: "IN202341007623",
      status: "Filed",
      date: "2023-05-12",
      description: "A novel system that utilizes fuzzy logic algorithms to detect and analyze human emotions from facial expressions with high accuracy and real-time processing capabilities."
    },
    {
      title: "AI-Based Healthcare Diagnostic Assistant",
      applicationNumber: "IN202341009845",
      status: "Filed",
      date: "2023-07-28",
      description: "An artificial intelligence system that assists healthcare professionals in diagnosing medical conditions based on patient symptoms, medical history, and relevant medical databases."
    },
    {
      title: "Humanoid Robot Control System",
      applicationNumber: "IN202341012567",
      status: "Filed",
      date: "2023-09-15",
      description: "A control system for humanoid robots that enables more natural and fluid movements through advanced algorithms and sensor integration."
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

    if (patentsRef.current) {
      observer.observe(patentsRef.current);
    }

    return () => {
      if (patentsRef.current) {
        observer.unobserve(patentsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div 
        ref={patentsRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Patents</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 card p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="shrink-0">
                <Award className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Innovating for the Future</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  My patent portfolio reflects my commitment to developing novel technological solutions that address real-world challenges. Each patent represents a unique approach to solving problems at the intersection of artificial intelligence, human-computer interaction, and emotional intelligence.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Through these innovations, I aim to create systems that better understand human emotions and needs, ultimately making technology more intuitive, responsive, and beneficial for users.
                </p>
              </div>
            </div>
          </div>
          
          {patents.map((patent, index) => (
            <div 
              key={index} 
              className="card hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                    {patent.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-sm">
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Application No:</span> {patent.applicationNumber}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Status:</span> {patent.status}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Date:</span> {patent.date}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300">
                    {patent.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patents;