
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export const MainNav: React.FC = () => {
  return (
    <header className="border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/features" className="font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="font-medium text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/contact" className="font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:flex space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};
