
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$29',
    description: 'For individuals and small businesses getting started.',
    features: [
      'Up to 50 proofs per month',
      'Email notifications',
      '1 team member',
      'Basic integrations',
      '7-day revision history'
    ],
    highlighted: false,
    buttonText: 'Start Free Trial'
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For growing businesses with more custom orders.',
    features: [
      'Up to 250 proofs per month',
      'Email + SMS notifications',
      '3 team members',
      'Advanced integrations',
      '30-day revision history',
      'Custom branding'
    ],
    highlighted: true,
    buttonText: 'Start Free Trial'
  },
  {
    name: 'Business',
    price: '$149',
    description: 'For larger operations with complex needs.',
    features: [
      'Up to 1,000 proofs per month',
      'Priority notifications',
      '10 team members',
      'All integrations',
      'Unlimited revision history',
      'Custom branding',
      'Priority support'
    ],
    highlighted: false,
    buttonText: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with high-volume requirements.',
    features: [
      'Unlimited proofs',
      'All notification channels',
      'Unlimited team members',
      'Custom integrations',
      'Unlimited revision history',
      'Custom branding',
      'Dedicated support',
      'SLA guarantees'
    ],
    highlighted: false,
    buttonText: 'Contact Sales'
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 flex flex-col ${
                tier.highlighted 
                  ? 'border-primary/30 ring-2 ring-primary/20' 
                  : 'border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="py-1 px-3 bg-primary text-white text-xs font-semibold rounded-full self-start mb-4">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="font-heading font-bold text-xl">{tier.name}</h3>
              
              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-muted-foreground ml-1">/month</span>}
              </div>
              
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              
              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 text-primary mt-1">
                        <Check size={16} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className={`w-full ${tier.highlighted ? '' : 'bg-muted text-foreground hover:bg-muted/80'}`}
                variant={tier.highlighted ? 'default' : 'outline'}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
