
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import MenuGrid from "@/components/dashboard/MenuGrid";
import WarningBanner from "@/components/dashboard/WarningBanner";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("paygo-user");
    if (!userData) {
      navigate("/login");
      return;
    }
    
    setIsLoading(false);
  }, [navigate]);

  const handleDataPromo = () => {
    navigate("/data");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex-1">
        <WarningBanner />
        
        {/* Data Promo Banner */}
        <div className="px-4 pt-3">
          <div className="relative w-full overflow-hidden rounded-lg cursor-pointer" onClick={handleDataPromo}>
            <img 
              src="/lovable-uploads/5e5b93b3-001c-43db-a7c8-e63d73560d01.png" 
              alt="Data Promo" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="px-4 py-6">
          <div className="mb-6">
            <BalanceCard balance={180000} rewards={180000} />
          </div>
          <MenuGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
