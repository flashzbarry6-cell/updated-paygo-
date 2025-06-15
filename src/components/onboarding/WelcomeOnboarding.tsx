
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Gift, CreditCard, Zap } from "lucide-react";

const WelcomeOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Welcome to PayGo!",
      subtitle: "As a new user, you'll receive a generous welcome bonus of",
      amount: "₦180,000",
      description: ", which can be withdrawn after purchasing a PAY ID. Yes, you read that right - it's yours to keep!",
      buttonText: "Amazing! Continue →",
      icon: <Gift className="w-16 h-16 text-[#9b87f5]" />
    },
    {
      title: "Get Your PAY ID",
      subtitle: "To unlock withdrawals and all app features, purchase a PAY ID for just ₦6,500. This one-time purchase gives you access to airtime, data, transfers, and withdrawals.",
      buttonText: "Got it! Next →",
      icon: <CreditCard className="w-16 h-16 text-blue-500" />
    },
    {
      title: "Start Earning More!",
      subtitle: "Beyond your welcome bonus, earn through referrals (₦500 each), daily check-ins, watching ads, and special promotions. Ready to explore?",
      buttonText: "Let's Get Started! →",
      icon: <Zap className="w-16 h-16 text-orange-500" />
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full relative overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-6 text-white relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-xl font-bold">Welcome to PayGo, Charis Benjamin!</h2>
          <p className="text-sm mt-1 opacity-90">Step {currentStep + 1} of {steps.length}</p>
          
          {/* Progress bar */}
          <div className="flex gap-2 mt-4">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            {currentStepData.icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {currentStepData.title}
          </h3>

          <div className="text-gray-600 text-base leading-relaxed mb-8">
            {currentStep === 0 ? (
              <div>
                {currentStepData.subtitle}
                <span className="text-[#9b87f5] font-bold text-2xl"> {currentStepData.amount}</span>
                {currentStepData.description}
              </div>
            ) : (
              currentStepData.subtitle
            )}
          </div>

          <Button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 text-white py-6 rounded-2xl text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {currentStepData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOnboarding;
