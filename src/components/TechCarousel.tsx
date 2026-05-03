import React from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiAngular,
  SiJavascript, 
  SiGit,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiSpring,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const technologies = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

export const TechCarousel = () => {
  return (
    <div className="relative overflow-hidden py-10 w-full">
      {/* Background decoration - lighter for light mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/30 to-transparent pointer-events-none" />

      <div className="flex w-[200%] animate-scroll">
        {/* First set of icons */}
        <div className="flex justify-around items-center w-full">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-110 px-8"
            >
              <div className="relative">
                {/* Glow effect on hover - subtle for light mode */}
                <div 
                  className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
                <tech.icon 
                  className="relative text-5xl md:text-6xl lg:text-7xl transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        
        {/* Duplicate set for seamless loop */}
        <div className="flex justify-around items-center w-full">
          {technologies.map((tech, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex flex-col items-center gap-4 group transition-all duration-300 hover:scale-110 px-8"
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
                <tech.icon 
                  className="relative text-5xl md:text-6xl lg:text-7xl transition-all duration-300 filter grayscale group-hover:grayscale-0" 
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-xs md:text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};
