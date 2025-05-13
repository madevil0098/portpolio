import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

interface Internship {
  role: string;
  company: string;
  period: string;
  description: string;
}

const Certifications: React.FC = () => {
  const certRef = useRef<HTMLDivElement>(null);

  const certifications: Certification[] = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      date: "2023",
      credential: "Credential ID: DLSP123456"
    },
    {
      title: "Machine Learning",
      issuer: "Google Digital Garage",
      date: "2022",
      credential: "Credential ID: GDG-ML-789012"
    },
    {
      title: "AI for Everyone",
      issuer: "Coursera",
      date: "2022",
      credential: "Credential ID: AI4E-345678"
    },
    {
      title: "Advanced Python Programming",
      issuer: "NPTEL",
      date: "2022",
      credential: "Credential ID: NPTEL-PY-234567"
    }
  ];

  const internships: Internship[] = [
    {
      role: "AI Research Intern",
      company: "ISRO",
      period: "May 2023 - Aug 2023",
      description: "Worked on image processing algorithms for satellite imagery, implementing machine learning models to improve feature detection and classification."
    },
    {
      role: "AI Developer Intern",
      company: "IIT Patna",
      period: "Dec 2022 - Feb 2023",
      description: "Collaborated with faculty researchers on developing neural network architectures for speech recognition systems. Contributed to an ongoing project focused on multi-lingual speech processing."
    },
    {
      role: "AI Research Assistant",
      company: "Academor",
      period: "Jun 2022 - Aug 2022",
      description: "Assisted in developing and testing emotion recognition algorithms. Conducted literature reviews and contributed to research methodologies for affective computing applications."
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

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div 
        ref={certRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Certifications & Internships</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="card hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
                >
                  <h4 className="font-bold text-slate-800 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mb-2">
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="font-medium">Date:</span> {cert.date}
                    </div>
                  </div>
                  {cert.credential && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.credential}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Internships */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Internships</h3>
            </div>
            
            <div className="space-y-4">
              {internships.map((intern, index) => (
                <div 
                  key={index} 
                  className="card hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <h4 className="font-bold text-slate-800 dark:text-white mb-1">
                    {intern.role}
                  </h4>
                  <div className="flex flex-wrap justify-between text-sm mb-3">
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      {intern.company}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      {intern.period}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;