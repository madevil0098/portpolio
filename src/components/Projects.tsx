import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Emotion Detection System using Fuzzy Logic",
      description: "Developed an innovative system that accurately detects and analyzes human emotions through facial expressions using fuzzy logic algorithms. The system provides real-time feedback with high accuracy.",
      technologies: ["Python", "OpenCV", "Fuzzy Logic", "TensorFlow"],
      image: "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Humanoid Robotics Project",
      description: "Built a small-scale humanoid robot capable of performing basic human-like movements and interactions. Implemented AI algorithms for improved motion control and basic environmental awareness.",
      technologies: ["C++", "ROS", "Arduino", "Machine Learning"],
      image: "https://images.pexels.com/photos/8566425/pexels-photo-8566425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Advanced AI-Powered Healthcare System",
      description: "Created an AI system that assists healthcare professionals in diagnosing conditions based on patient symptoms. Integrated with medical databases for improved accuracy and recommendations.",
      technologies: ["Python", "Neural Networks", "Natural Language Processing", "Medical APIs"],
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div 
        ref={projectsRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              </div>
              
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="skill-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center"
                    >
                      <Github size={18} className="mr-1" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;