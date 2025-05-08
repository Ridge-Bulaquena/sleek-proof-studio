
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  mono?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', mono = false, className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };
  
  return (
    <div className={`font-heading font-bold flex items-center gap-2 ${sizeClasses[size]} ${className}`}>
      <div className={`rounded-xl w-8 h-8 flex items-center justify-center ${mono ? 'bg-foreground' : 'bg-fluorescent-purple'} text-white`}>
        <span className="font-bold">SP</span>
      </div>
      <span>Simpler<span className="font-extrabold text-fluorescent-purple dark:text-fluorescent-purple">Proofs</span></span>
    </div>
  );
};
