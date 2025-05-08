
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
      <div className={`rounded-lg w-8 h-8 flex items-center justify-center ${mono ? 'bg-foreground' : 'bg-primary'} text-white`}>
        SP
      </div>
      <span>Simpler<span className="font-extrabold">Proofs</span></span>
    </div>
  );
};
