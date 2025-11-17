
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MenuGrid from "@/components/dashboard/MenuGrid";
import PromotionalCarousel from "@/components/dashboard/PromotionalCarousel";
import WelcomeOnboarding from "@/components/onboarding/WelcomeOnboarding";
import MobileLogo from "@/components/dashboard/MobileLogo";
import AnnouncementBanner from "@/components/dashboard/AnnouncementBanner";
import JoinPlatformModal from "@/components/notifications/JoinPlatformModal";
import FloatingChatButton from "@/components/ui/FloatingChatButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

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

    // Show join modal after dashboard loads, but only once per session
    const modalShownToday = sessionStorage.getItem("paygo-join-modal-shown");
    if (!modalShownToday) {
      setTimeout(() => {
        setShowJoinModal(true);
        sessionStorage.setItem("paygo-join-modal-shown", "true");
      }, 1000); // Show after 1 second
    }

    // Listen for onboarding completion
    const handleOnboardingCompleted = () => {
      setShowOnboarding(false);
    };

    window.addEventListener('onboarding-completed', handleOnboardingCompleted);

    return () => {
      window.removeEventListener('onboarding-completed', handleOnboardingCompleted);
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFF1F3]">
        <div className="animate-pulse">
          <div className="h-8 w-24 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-[#FFF1F3]">
      <div className="w-full max-w-sm bg-[#FFF1F3]">
        <AnnouncementBanner />
        <MobileLogo />
        <DashboardHeader />
        
        <div className="flex-1 px-2 sm:px-3 py-4">
          <MenuGrid />
          
          <div className="mt-4 sm:mt-6">
            <PromotionalCarousel />
          </div>
        </div>

        {showOnboarding && <WelcomeOnboarding />}
        
        <JoinPlatformModal 
          isOpen={showJoinModal}
          onClose={() => setShowJoinModal(false)}
        />
        
        <FloatingChatButton />
      </div>
    </div>
  );
};

export default Dashboard;
