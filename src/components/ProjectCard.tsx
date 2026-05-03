import React from 'react';
import { SiGithub } from 'react-icons/si';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  topics?: string[];
}

export const ProjectCard = ({ title, description, url, stars, language, topics = [] }: ProjectProps) => {
  return (
    <div className="card-minimal p-6 flex flex-col h-full group hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors capitalize">
          {title.replace(/-/g, ' ')}
        </h3>
        <div className="flex gap-3 text-gray-400">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="Ver en GitHub">
            <SiGithub className="text-xl" />
          </a>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
        {description || "Proyecto desarrollado con enfoque en calidad y buenas prácticas."}
      </p>

      {/* Topics / Tags */}
      {topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {topics.slice(0, 5).map((topic) => (
            <span 
              key={topic} 
              className="px-2 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider rounded-md"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          {language || "Code"}
        </span>
        <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
          ⭐ {stars}
        </span>
      </div>
    </div>
  );
};
