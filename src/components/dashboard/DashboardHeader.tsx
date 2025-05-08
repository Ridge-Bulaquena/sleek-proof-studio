
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../layout/ThemeToggle';
import { Bell, Search, Plus } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40 h-16">
      <div className="px-6 flex items-center justify-between h-full">
        <h1 className="text-xl font-heading font-bold">{title}</h1>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="search"
              placeholder="Search..."
              className="bg-muted pl-10 pr-4 py-2 rounded-lg text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <Button size="sm" variant="ghost" className="rounded-full">
            <Bell size={20} />
          </Button>
          
          <ThemeToggle />
          
          <Button size="sm" className="gap-2 hidden md:flex">
            <Plus size={18} />
            <span>New Proof</span>
          </Button>
          
          <Button size="icon" className="md:hidden">
            <Plus size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};
