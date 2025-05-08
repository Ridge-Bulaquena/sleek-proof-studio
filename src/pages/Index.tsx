
import React from 'react';
import { MainNav } from '@/components/layout/MainNav';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureGrid } from '@/components/landing/FeatureGrid';
import { PricingSection } from '@/components/landing/PricingSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';
import { CTASection } from '@/components/landing/CTASection';

const Index = () => {
  React.useEffect(() => {
    document.title = "SimplerProofs - The Easiest Way to Approve Custom Orders";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-1">
        <HeroSection />
        <FeatureGrid />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
