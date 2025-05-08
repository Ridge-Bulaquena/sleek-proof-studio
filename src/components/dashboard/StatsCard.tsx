
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
  className = '',
}) => {
  return (
    <div className={`glass-card p-6 transition-all hover:translate-y-[-2px] hover:shadow-neon ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold font-heading mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2 text-xs font-medium">
              <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 ${
                change.isPositive 
                  ? 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30' 
                  : 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
              }`}>
                {change.isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                {Math.abs(change.value)}%
              </span>
              <span className="text-muted-foreground ml-2">vs last week</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-xl text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
