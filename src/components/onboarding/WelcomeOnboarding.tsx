import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Gift, CreditCard, Zap } from "lucide-react";

const WelcomeOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name || "User");
    }
  }, []);

  const steps = [
    {
      title: "Welcome to PayGo!",
      subtitle: "As a new user, you'll receive a generous welcome bonus of",
      amount: "₦180,000",
      description: ", which can be withdrawn after purchasing a PAY ID. Yes, you read that right - it's yours to keep!",
      buttonText: "Amazing! Continue →",
      icon: <Gift className="w-14 h-14 text-primary" />
    },
    {
      title: "Get Your PAY ID",
      subtitle: "To unlock withdrawals and all app features, purchase a PAY ID for just ₦6,500. This one-time purchase gives you access to airtime, data, transfers, and withdrawals.",
      buttonText: "Got it! Next →",
      icon: <CreditCard className="w-14 h-14 text-primary" />
    },
    {
      title: "Start Earning More!",
      subtitle: "Beyond your welcome bonus, earn through referrals (₦500 each), daily check-ins, watching ads, and special promotions. Ready to explore?",
      buttonText: "Let's Get Started! →",
      icon: <Zap className="w-14 h-14 text-primary" />
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem("paygo-onboarding-completed", "true");
      window.dispatchEvent(new Event('onboarding-completed'));
    }
  };

  const handleClose = () => {
    localStorage.setItem("paygo-onboarding-completed", "true");
    window.dispatchEvent(new Event('onboarding-completed'));
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-matte-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card max-w-sm w-full relative overflow-hidden animate-scale-in">
        {/* Header with gradient */}
        <div className="bg-gradient-pink p-4 text-foreground relative">
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-foreground hover:bg-foreground/20 rounded-full p-1 transition-colors"
          >
            <X size={18} />
          </button>
          
          <h2 className="text-lg font-bold">Welcome to PayGo, {userName}!</h2>
          <p className="text-sm mt-1 opacity-90">Step {currentStep + 1} of {steps.length}</p>
          
          {/* Progress bar */}
          <div className="flex gap-2 mt-3">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-foreground shadow-glow-sm' : 'bg-foreground/30'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center bg-card">
          <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
            {currentStepData.icon}
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">
            {currentStepData.title}
          </h3>

          <div className="text-muted-foreground text-sm leading-relaxed mb-6">
            {currentStep === 0 ? (
              <div>
                {currentStepData.subtitle}
                <span className="text-primary font-bold text-xl text-glow"> {currentStepData.amount}</span>
                {currentStepData.description}
              </div>
            ) : (
              currentStepData.subtitle
            )}
          </div>

          <Button
            onClick={handleNext}
            className="w-full bg-gradient-pink hover:opacity-90 text-foreground py-5 rounded-xl text-base font-medium transition-all duration-200 shadow-button btn-glow"
          >
            {currentStepData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOnboarding;
