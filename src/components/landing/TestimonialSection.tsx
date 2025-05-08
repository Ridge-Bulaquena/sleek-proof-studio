
import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "SimplerProofs has completely transformed how we handle custom orders. Our approval rate is up 40% and production errors are down to almost zero.",
    author: "Sarah Johnson",
    position: "Founder",
    company: "CustomTees Co."
  },
  {
    quote: "The time we save on approvals alone paid for the subscription in the first week. Our customers love the clean, simple interface.",
    author: "Michael Chen",
    position: "Production Manager",
    company: "PrintPro Solutions"
  },
  {
    quote: "As we scaled our business to handle more custom orders, SimplerProofs made it possible to maintain quality without adding staff.",
    author: "Alexis Rodriguez",
    position: "Operations Director",
    company: "Brand Merchandise Inc."
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Trusted by Custom Sellers
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about SimplerProofs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </blockquote>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
