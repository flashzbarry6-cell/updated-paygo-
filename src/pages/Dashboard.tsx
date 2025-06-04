
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import MenuGrid from "@/components/dashboard/MenuGrid";
import PromotionalCarousel from "@/components/dashboard/PromotionalCarousel";
import WelcomeOnboarding from "@/components/onboarding/WelcomeOnboarding";
import TypewriterText from "@/components/dashboard/TypewriterText";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("paygo-user");
    if (!userData) {
      navigate("/login");
      return;
    }

    // Check if onboarding has been completed
    const onboardingCompleted = localStorage.getItem("paygo-onboarding-completed");
    if (!onboardingCompleted) {
      setShowOnboarding(true);
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-gray-50">
        {/* Warning Banner */}
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm">
          <TypewriterText text="NOTE: DEAR USERS WERE CURRENTLY EXPERIENCING ISSUES WITH OPAY TRANSFER PLEASE USE OTHER BANKS TO MAKE YOUR PAYMENT FOR PAY ID" />
        </div>
        
        {/* Animated Logo */}
        <div className="bg-white p-3 flex justify-center">
          <img 
            src="/lovable-uploads/63dcf04b-d54d-4fae-b4d5-6146cba42114.png" 
            alt="PayGo Logo" 
            className="h-12 w-auto animate-logo" 
          />
        </div>

        <DashboardHeader />
        
        <div className="flex-1 px-3 py-4">
          <MenuGrid />
          
          {/* Current Promotions Section */}
          <div className="mt-6">
            <PromotionalCarousel />
          </div>
        </div>

        {showOnboarding && <WelcomeOnboarding />}
      </div>
    </div>
  );
};

export default Dashboard;
