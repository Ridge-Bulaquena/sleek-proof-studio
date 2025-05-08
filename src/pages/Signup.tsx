
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/Logo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [companyName, setCompanyName] = React.useState('');
  const [step, setStep] = React.useState(1);
  const totalSteps = 3;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log('Sign up with:', { name, email, password, companyName });
      // In a real app, we would create an account here
    }
  };
  
  React.useEffect(() => {
    document.title = "Sign Up - SimplerProofs";
  }, []);
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-heading font-semibold mb-4">Tell us about yourself</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Create Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Password must be at least 8 characters
                </p>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-xl font-heading font-semibold mb-4">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-1">Company Name</label>
                <input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-1">Industry</label>
                <select
                  id="industry"
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select an industry</option>
                  <option value="apparel">Apparel & Clothing</option>
                  <option value="promotional">Promotional Products</option>
                  <option value="printing">Printing & Signage</option>
                  <option value="gifts">Custom Gifts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium mb-1">Company Size</label>
                <select
                  id="size"
                  className="w-full p-2 bg-background border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select size</option>
                  <option value="1">Just me</option>
                  <option value="2-10">2-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51+">51+ employees</option>
                </select>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-xl font-heading font-semibold mb-4">Choose Your Plan</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Basic Plan</h3>
                  <span className="font-semibold">$29/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for getting started with proof approvals.</p>
              </div>
              <div className="border rounded-lg p-4 cursor-pointer bg-primary/5 border-primary ring-1 ring-primary/20 transition-colors">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Pro Plan</h3>
                  <span className="font-semibold">$79/mo</span>
                </div>
                <div className="bg-primary text-white text-xs px-2 py-0.5 rounded-full inline-block mb-2">POPULAR</div>
                <p className="text-sm text-muted-foreground">Our most popular plan for growing businesses.</p>
              </div>
              <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Business Plan</h3>
                  <span className="font-semibold">$149/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">For larger operations with complex needs.</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Logo size="sm" />
        </Link>
      </div>
      
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="glass-card w-full max-w-md p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-heading text-2xl font-bold">Create Your Account</h1>
            <div className="text-sm text-muted-foreground">
              Step {step}/{totalSteps}
            </div>
          </div>
          
          <div className="flex gap-1 mb-4">
            {[...Array(totalSteps)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full ${
                  i < step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}
          
          <div className="pt-2 flex gap-4">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <Button 
              type="submit" 
              className="flex-1"
            >
              {step === totalSteps ? 'Complete' : 'Next'}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
