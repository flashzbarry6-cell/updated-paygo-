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
      }, 1000);
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
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-subtle-glow">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <AnnouncementBanner />
          <MobileLogo />
          <DashboardHeader />
          
          <div className="flex-1 px-3 py-4">
            <MenuGrid />
            
            <div className="mt-6">
              <PromotionalCarousel />
            </div>
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
