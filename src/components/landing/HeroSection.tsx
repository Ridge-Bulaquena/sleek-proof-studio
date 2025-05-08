
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Easiest Way to Approve Custom Orders
          </h1>
          
          <p className="text-xl font-sans text-muted-foreground mb-8">
            Upload. Approve. Produce.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full text-lg px-8 font-sans" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 font-sans" asChild>
              <Link to="/demo">See Demo</Link>
            </Button>
          </div>
          
          <div className="mt-12 bg-muted p-4 rounded-xl inline-block">
            <p className="text-sm text-muted-foreground font-sans">
              Trusted by <span className="font-semibold text-foreground">2,500+</span> custom product sellers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
