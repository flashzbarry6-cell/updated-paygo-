
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Gift, CreditCard, Phone, Wallet, Zap } from "lucide-react";

const WelcomeOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      title: "Welcome to PayGo!",
      subtitle: "As a new user, you'll receive a generous welcome bonus of",
      amount: "₦180,000",
      description: ", which can be withdrawn at any time. Yes, you read that right - it's yours to keep!",
      buttonText: "Continue to Dashboard",
      icon: <Gift className="w-16 h-16 text-[#9b87f5]" />
    },
    {
      title: "Welcome Bonus",
      subtitle: "You've received a welcome bonus of ₦180,000! This amount is already in your account and can be withdrawn after purchasing a PAY ID.",
      buttonText: "Next →",
      icon: <Gift className="w-16 h-16 text-[#9b87f5]" />
    },
    {
      title: "Get Your PAY ID",
      subtitle: "To withdraw funds, you'll need to purchase a PAY ID for ₦7,250. This is a one-time purchase that unlocks all features of the app.",
      buttonText: "Next →",
      icon: <CreditCard className="w-16 h-16 text-blue-500" />
    },
    {
      title: "Airtime & Data",
      subtitle: "You can purchase airtime and data for all major networks directly from the app. Simply select the service, enter the phone number, choose your plan, and complete your purchase.",
      buttonText: "Next →",
      icon: <Phone className="w-16 h-16 text-green-500" />
    },
    {
      title: "Withdrawal Process",
      subtitle: "To withdraw your funds, tap the \"Withdraw\" button on your dashboard, enter your bank details and PAY ID, and submit your request. Withdrawals are processed within 24 hours.",
      buttonText: "Next →",
      icon: <Wallet className="w-16 h-16 text-red-500" />
    },
    {
      title: "Earn More",
      subtitle: "Explore our app to discover ways to earn more! Refer friends to earn ₦500 per referral, join our communities, and take advantage of special promotions.",
      buttonText: "Get Started →",
      icon: <Zap className="w-16 h-16 text-orange-500" />
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem("paygo-onboarding-completed", "true");
      navigate("/dashboard");
    }
  };

  const handleClose = () => {
    localStorage.setItem("paygo-onboarding-completed", "true");
    navigate("/dashboard");
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full relative overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-6 text-white relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-xl font-bold">Welcome to PayGo, Charis Benjamin !</h2>
          <p className="text-sm mt-1">Step {currentStep + 1} of {steps.length}</p>
          
          {/* Progress bar */}
          <div className="flex gap-1 mt-4">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 flex-1 rounded ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            {currentStepData.icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {currentStepData.title}
          </h3>

          <div className="text-gray-600 text-lg leading-relaxed mb-8">
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
            className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 text-white py-6 rounded-2xl text-lg font-medium"
          >
            {currentStepData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOnboarding;
