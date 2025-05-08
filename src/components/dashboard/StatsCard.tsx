
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
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
}) => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold font-heading mt-1">{value}</h3>
          
          {change && (
            <div className="flex items-center mt-2 text-sm">
              <span className={`flex items-center ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {change.isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                {Math.abs(change.value)}%
              </span>
              <span className="text-muted-foreground ml-1">vs last week</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="bg-primary/10 p-3 rounded-lg text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
