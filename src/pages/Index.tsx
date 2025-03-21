
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import SkillBadge from '@/components/SkillBadge';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, Sparkles, Cpu, Server, Monitor, Network, Building, Workflow, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'SR. SOFTWARE ENGINEER',
    company: 'MINDFIRE',
    period: 'NOV 2022 - PRESENT',
    logo: <Server size={20} className="text-primary dark:text-gray-300" />,
    description: [
      'Developed and optimized the Home page and Operation Command Center (OCC) micro frontend using Next.js and Material-UI.',
      'Implemented complex functionalities like dynamic filtering, multi-select filters, and detailed job status tracking to enhance the OCC for efficient task management.',
      'Addressed and resolved critical bugs and integrated third-party APIs to ensure seamless operation and improved user experience.'
    ]
  },
  {
    title: 'PRODUCT ENGINEER',
    company: 'FACTORYPLUS',
    period: 'JUL 2021 - NOV 2022',
    logo: <Monitor size={20} className="text-primary dark:text-gray-300" />,
    description: [
      'Collaborated with the product team to turn ideas into marketable features.',
      'Developed two landing pages and a microsite using Next.js technology.',
      'Implemented third-party APIs like mixpanel, sentry.io, and google maps.',
      'Experienced in react library like tanstack virtual, recharts, react-hook-form, rosetta, react-cool-inview etc.',
      'Addressed and fixed complex bugs.'
    ]
  },
  {
    title: 'SOFTWARE DEVELOPER',
    company: 'EXPOSIUM SEARCHING YARD',
    period: 'JAN 2021 - JUL 2021',
    logo: <Network size={20} className="text-primary dark:text-gray-300" />,
    description: [
      'Created Exposium the all-in-one Virtual fair platform from scratch and hosted 5+ Virtual fairs.',
      'Solved complex problems like roles-wise UI, chat using firebase, order tracking, and admin dashboard.',
      'Worked at an independent level, while also serving as an effective and enthusiastic collaborator.',
      'Design and develop new custom components to meet project requirements.'
    ]
  }
];

const education = [
  {
    institution: 'SCHOOL OF ACCELERATED LEARNING',
    degree: 'Product Engineering Program',
    year: '2020'
  },
  {
    institution: 'C V RAMAN COLLEGE OF ENGINEERING',
    degree: 'Computer Science and Engineering',
    year: '2019'
  }
];

const skills = [
  'React.js', 
  'Next.js', 
  'JavaScript', 
  'TailwindCSS', 
  'Material UI', 
  'Firebase', 
  'HTML', 
  'CSS', 
  'Git'
];

const experienceTexts = [
  {
    title: "Product-Based Experience",
    details: [
      "Building products from the ground up",
      "Turning concepts into market-ready solutions",
      "Creating user-focused applications with measurable impact"
    ]
  },
  {
    title: "Service-Based Experience",
    details: [
      "Delivering client-focused solutions",
      "Adapting to diverse project requirements",
      "Implementing complex features with attention to detail"
    ]
  }
];

const Index = () => {
  const [theme, setTheme] = useState('dark');
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [completedPoints, setCompletedPoints] = useState<string[]>([]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [delta, setDelta] = useState(80); // Faster initial typing speed
  const [typingSpeed, setTypingSpeed] = useState({
    slow: 120,
    medium: 80,
    fast: 40
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [displayText, currentExperience, currentDetailIndex, isTypingComplete, delta]);

  const tick = () => {
    const currentSet = experienceTexts[currentExperience];
    const fullText = currentSet.details[currentDetailIndex];
    
    if (displayText.length < fullText.length) {
      // Vary typing speed randomly for a more natural effect
      const speedVariation = Math.random() < 0.3;
      if (speedVariation) {
        // Occasionally change typing speed
        const speeds = [typingSpeed.slow, typingSpeed.medium, typingSpeed.fast];
        setDelta(speeds[Math.floor(Math.random() * speeds.length)]);
      }
      
      setDisplayText(fullText.substring(0, displayText.length + 1));
    } else {
      if (!completedPoints.includes(fullText)) {
        setCompletedPoints(prev => [...prev, fullText]);
      }
      
      // Pause briefly after completing a point
      setDelta(800);
      
      if (currentDetailIndex < currentSet.details.length - 1) {
        setCurrentDetailIndex(prevIndex => prevIndex + 1);
        setDisplayText('');
        setDelta(typingSpeed.medium); // Reset to medium speed for next point
      } else if (currentExperience < experienceTexts.length - 1) {
        // Longer pause between experience types
        setCurrentExperience(prevExp => prevExp + 1);
        setCurrentDetailIndex(0);
        setDisplayText('');
        setDelta(1500);
      } else {
        setIsTypingComplete(true);
        setDelta(2000);
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Subhakanta_Pati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      
      <section
        id="home" 
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 pt-20 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-6 max-w-3xl">
            <span className="chip opacity-0 animate-fade-in [animation-delay:200ms] dark:bg-gray-800 dark:text-gray-200">Frontend Engineer</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in [animation-delay:400ms] bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-blue-400">
              Subhakanta Pati
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground opacity-0 animate-fade-in [animation-delay:600ms] dark:text-gray-300">
              Crafting elegant, user-centered web experiences with 4 years of frontend expertise.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4 opacity-0 animate-fade-in [animation-delay:800ms]">
              <a 
                 href="#experience" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                View my work
              </a>
      
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group dark:bg-transparent dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <FileDown size={18} className="transition-transform group-hover:translate-y-1 animate-bounce animation-delay-200" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        id="my-expertise" 
        className="py-24 px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Code className="text-primary dark:text-blue-400 h-8 w-8 opacity-0 animate-fade-in" />
            <h2 className="section-heading opacity-0 animate-fade-in dark:text-gray-300 mt-[25px]">My Expertise</h2>
          </div>
          
          <div className="glass-panel p-8 opacity-0 animate-fade-in [animation-delay:200ms] dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700">
            {experienceTexts.map((expType, expIndex) => (
              <div key={expIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-blue-400">
                  {expType.title}
                </h3>
                
                <ul className="list-disc list-inside space-y-2 ml-2 text-lg dark:text-gray-300">
                  {expType.details.map((point, pointIndex) => {
                    // Display all completed points from previous experience types
                    if (expIndex < currentExperience) {
                      return (
                        <li key={`${expIndex}-${pointIndex}`} className="animate-fade-in [animation-delay:200ms]">
                          {point}
                        </li>
                      );
                    }
                    
                    // For current experience type
                    if (expIndex === currentExperience) {
                      // Show completed points
                      if (pointIndex < currentDetailIndex) {
                        return (
                          <li key={`${expIndex}-${pointIndex}`} className="animate-fade-in [animation-delay:200ms]">
                            {point}
                          </li>
                        );
                      }
                      
                      // Show currently typing point
                      if (pointIndex === currentDetailIndex) {
                        return (
                          <li key={`${expIndex}-${pointIndex}`} className="text-lg dark:text-gray-300">
                            <span className="relative">
                              {displayText}
                              <span className="absolute inline-block w-1.5 h-5 ml-0.5 -translate-y-0.5 bg-blue-500 animate-pulse">
                                &nbsp;
                              </span>
                            </span>
                          </li>
                        );
                      }
                    }
                    
                    return null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        id="experience" 
        className="py-24 px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-primary dark:text-blue-400 h-8 w-8 opacity-0 animate-fade-in" />
            <h2 className="section-heading opacity-0 animate-fade-in dark:text-gray-300 mt-[25px]">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                logo={exp.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        id="education" 
        className="py-24 px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Sparkles className="text-primary dark:text-blue-400 h-8 w-8 opacity-0 animate-fade-in" />
            <h2 className="section-heading opacity-0 animate-fade-in dark:text-gray-300 mt-[25px]">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard 
                key={index}
                institution={edu.institution}
                degree={edu.degree}
                year={edu.year}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        id="skills" 
        className="py-24 px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="text-primary dark:text-blue-400 h-8 w-8 opacity-0 animate-fade-in" />
            <h2 className="section-heading opacity-0 animate-fade-in dark:text-gray-300 mt-[25px]">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        id="contact" 
        className="py-24 px-6 md:px-12 transition-all duration-700 transform opacity-0 translate-y-8 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading opacity-0 animate-fade-in dark:text-gray-300">Get in Touch</h2>
          
          <div className="glass-panel p-8 opacity-0 animate-fade-in [animation-delay:200ms] hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/50 dark:backdrop-blur-xl dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="tel:+917008513259" 
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover:translate-x-2 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full dark:bg-gray-700">
                  <Phone size={20} className="dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-gray-200">Phone</h3>
                  <p className="text-muted-foreground dark:text-gray-400">+91 7008513259</p>
                </div>
              </a>
              
              <a 
                href="mailto:patisubhakantaniku@gmail.com" 
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover:translate-x-2 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full dark:bg-gray-700">
                  <Mail size={20} className="dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-gray-200">Email</h3>
                  <p className="text-muted-foreground dark:text-gray-400">patisubhakantaniku@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/subhakanta-pati/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover:translate-x-2 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full dark:bg-gray-700">
                  <Linkedin size={20} className="dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-gray-200">LinkedIn</h3>
                  <p className="text-muted-foreground dark:text-gray-400">Subhakanta Pati</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/patisubhakanta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-all duration-300 hover:translate-x-2 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full dark:bg-gray-700">
                  <Github size={20} className="dark:text-gray-300" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-gray-200">GitHub</h3>
                  <p className="text-muted-foreground dark:text-gray-400">patisubhakanta</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-6 md:px-12 text-center text-muted-foreground dark:text-gray-500">
        <div className="max-w-7xl mx-auto">
          <p className="opacity-0 animate-fade-in [animation-delay:200ms]">&copy; {new Date().getFullYear()} Subhakanta Pati. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
