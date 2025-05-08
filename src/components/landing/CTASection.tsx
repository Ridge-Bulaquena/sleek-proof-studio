
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 md:p-16 bg-gradient-to-r from-primary/20 to-secondary/20 border-none overflow-hidden relative">
          {/* Abstract shapes */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Approval Process?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses saving time and reducing errors with SimplerProofs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full text-lg px-8" asChild>
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8" asChild>
                <Link to="/demo">Schedule Demo</Link>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Free for 14 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
