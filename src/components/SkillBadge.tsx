
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  name: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, index }) => {
  // Create different variants for visual interest
  const variants = ['default', 'secondary', 'outline'];
  const variant = variants[index % variants.length] as 'default' | 'secondary' | 'outline';
  
  return (
    <Badge 
      variant={variant}
      className={cn(
        "px-4 py-2 text-sm font-medium opacity-0 hover:scale-110 hover:rotate-1 transition-all duration-300",
        `animate-fade-in [animation-delay:${150 + index * 100}ms]`
      )}
    >
      {name}
    </Badge>
  );
};

export default SkillBadge;
