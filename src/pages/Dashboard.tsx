import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import MenuGrid from "@/components/dashboard/MenuGrid";
import PromotionalCarousel from "@/components/dashboard/PromotionalCarousel";
import WelcomeOnboarding from "@/components/onboarding/WelcomeOnboarding";
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
    return <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>;
  }
  return <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-gray-50">
        {/* Warning Banner */}
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm">
          NOTE: DEAR USERS WERE CURRENTLY EXPERIENCING ISSUES WITH OPAY TRANSFER PLEASE USE OTHER BANKS TO MAKE YOUR PAYMENT FOR PAY ID
        </div>
        
        {/* Animated Logo */}
        <div className="bg-white p-4 flex justify-center">
          <img src="/lovable-uploads/63dcf04b-d54d-4fae-b4d5-6146cba42114.png" alt="PayGo Logo" className="h-16 w-auto animate-[slide-in-right_0.5s_ease-in-out_infinite_alternate]" />
        </div>

        <DashboardHeader />
        
        <div className="flex-1 px-4 py-6">
          <div className="mb-6">
            <BalanceCard balance={180000} rewards={180000} />
          </div>
          <MenuGrid />
          
          {/* Current Promotions Section */}
          <div className="mt-8">
            
            <PromotionalCarousel />
          </div>
        </div>

        {showOnboarding && <WelcomeOnboarding />}
      </div>
    </div>;
};
export default Dashboard;