import React, { useEffect, useRef } from 'react';
import { Code, Database, Layout, Terminal, Monitor, Server, Cpu, BookOpen } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Java']
    },
    {
      name: 'AI & Machine Learning',
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Natural Language Processing', 'Computer Vision', 'Fuzzy Logic']
    },
    {
      name: 'Web Development',
      icon: <Layout className="w-6 h-6 text-teal-500" />,
      skills: ['React', 'Node.js', 'HTML/CSS', 'RESTful APIs', 'Electron']
    },
    {
      name: 'Data Science',
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      skills: ['SQL', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis']
    },
    {
      name: 'DevOps & Tools',
      icon: <Server className="w-6 h-6 text-amber-500" />,
      skills: ['Git', 'Docker', 'CI/CD', 'Jupyter Notebooks', 'Linux']
    },
    {
      name: 'Research Skills',
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      skills: ['Academic Writing', 'Literature Review', 'Experimentation', 'Patent Writing', 'Data Collection']
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div 
        ref={skillsRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card flex flex-col h-full hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white ml-3">{category.name}</h3>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="flex items-center text-slate-600 dark:text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;