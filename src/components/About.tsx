import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div 
        ref={aboutRef}
        className="section-container opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I'm an Artificial Intelligence B.Tech student at Sage University, Indore, driven by a passion for developing innovative technological solutions that address real-world challenges. My journey in AI has been fueled by curiosity and a deep desire to create systems that better understand human emotions and enhance how we interact with technology.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              As a researcher and innovator, I've had the privilege of publishing multiple patents and research papers, particularly in the field of emotion detection using fuzzy logic systems. My work aims to bridge the gap between complex AI capabilities and intuitive human-centered applications.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              My experiences at institutions like ISRO, IIT Patna, and Academor have shaped my approach to problem-solving, giving me valuable insights into how AI can be applied across diverse domains. I'm constantly learning, exploring new technologies, and refining my skills to stay at the forefront of AI advancements.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">My Vision</h3>
              <p className="text-slate-600 dark:text-slate-400">
                To develop AI systems that genuinely understand human emotions and needs, creating technology that adapts to humans rather than forcing humans to adapt to technology.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">My Approach</h3>
              <p className="text-slate-600 dark:text-slate-400">
                I blend technical expertise with creative problem-solving, always keeping the end user in mind. My work is characterized by innovation, meticulous attention to detail, and an unwavering commitment to ethical AI development.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">My Goals</h3>
              <p className="text-slate-600 dark:text-slate-400">
                To continue pushing the boundaries of AI research, contribute meaningfully to the field through innovative solutions, and inspire the next generation of AI developers and researchers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;