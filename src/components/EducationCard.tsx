
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  year: string;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  institution, 
  degree, 
  year,
  index 
}) => {
  return (
    <div className={cn(
      "glass-panel p-6 opacity-0",
      `animate-fade-in [animation-delay:${200 + index * 100}ms]`
    )}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <span className="chip mb-2 flex items-center gap-1">
            <GraduationCap size={12} />
            <span>{year}</span>
          </span>
          <h3 className="text-xl font-semibold">{institution}</h3>
          <p className="text-muted-foreground mt-1">{degree}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
