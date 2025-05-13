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
      description: "A groundbreaking system leveraging cutting-edge **fuzzy logic algorithms** to **accurately detect and analyze human emotions** from facial expressions in real-time. This advanced technology brings a revolutionary approach to emotion recognition, enabling unprecedented accuracy and speed in understanding human behavior — a game changer for industries such as healthcare, education, and customer experience."
    },
    {
      title: "AI-Based Healthcare Diagnostic Assistant",
      applicationNumber: "IN202341009845",
      status: "Filed",
      date: "2023-07-28",
      description: "An **artificial intelligence-driven healthcare assistant** designed to revolutionize diagnostics by leveraging a deep understanding of patient symptoms, medical history, and cutting-edge medical databases. This powerful tool empowers healthcare professionals with lightning-fast, precise diagnostic capabilities, streamlining decision-making and improving patient outcomes. The future of **AI in healthcare** is here."
    },
    {
      title: "Humanoid Robot Control System",
      applicationNumber: "IN202341012567",
      status: "Filed",
      date: "2023-09-15",
      description: "An **innovative humanoid robot control system** that pushes the boundaries of human-robot interaction. By integrating **advanced algorithms** and **state-of-the-art sensor technology**, this system enables humanoid robots to move with an **unmatched level of naturalness and fluidity**, offering unparalleled precision in applications ranging from personal assistants to next-generation robotics research."
    },
    {
      title: "Fuzzy Expert System for Emotion Detection in Students",
      applicationNumber: "202421002653A",
      status: "Published",
      date: "2024-03-22",
      description: "A **breakthrough Fuzzy Expert System** designed specifically for **emotion detection and analysis** within student populations. This patented system utilizes fuzzy logic to provide an **in-depth understanding of emotional states**, offering educators and administrators a **powerful tool** for student well-being analysis, personalized learning approaches, and mental health support."
    },
    {
      title: "The Emotion Recognition System for Movies through Facial Expressions (ERS)",
      applicationNumber: "G10L002524000",
      status: "Published",
      date: "2024-06-11",
      description: "A **cutting-edge emotion recognition system** for analyzing **facial expressions in movies**, enabling a new era of **interactive cinematic experiences**. This patented system brings **AI-powered emotional insights** to the film industry, providing filmmakers, marketers, and audience researchers with powerful tools to understand emotional engagement and tailor content more effectively."
    },
    {
      title: "System and Method for Calculating Surface Area and Compressive Strength of Irregular Paver Blocks",
      applicationNumber: "202521007418A",
      status: "Published",
      date: "2024-05-30",
      description: "An **innovative method and system** designed to calculate the **surface area and compressive strength** of irregular paver blocks with high precision. This patent offers a **significant improvement in construction material testing**, providing engineers and manufacturers with a faster, more reliable way to assess paver quality and optimize design for construction projects."
    },
    {
      title: "System and Method for Comprehensive Soil Test Result Calculation and Automated Report Generation",
      applicationNumber: "202521007769",
      status: "Published",
      date: "2024-06-05",
      description: "A **comprehensive soil testing solution** that automates the **calculation of test results** and generates detailed, **customized reports**. This patented system significantly improves the efficiency of soil analysis in agriculture and construction, providing fast, accurate, and actionable insights for engineers, farmers, and land developers."
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
                    {patent.description.split("**").map((part, index) => 
                      index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                    )}
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