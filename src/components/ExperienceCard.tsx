
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
  logo: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  period, 
  description,
  index,
  logo
}) => {
  return (
    <div className={cn(
      "glass-panel p-6 lg:p-8 opacity-0",
      `animate-fade-in [animation-delay:${200 + index * 100}ms]`
    )}>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full dark:bg-gray-700 animate-scale-in [animation-delay:300ms]">
              {logo}
            </div>
            <div>
              <span className="chip mb-2">
                {company}
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
            <Calendar size={16} className="mr-1" />
            <span>{period}</span>
          </div>
        </div>
        
        <ul className="space-y-2 mt-4 text-sm md:text-base">
          {description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
