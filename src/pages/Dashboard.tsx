
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BalanceCard from "@/components/dashboard/BalanceCard";
import MenuGrid from "@/components/dashboard/MenuGrid";

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <DashboardHeader />
      <div className="p-4 flex-1">
        <div className="mb-6">
          <BalanceCard balance={100000} rewards={180000} />
        </div>
        <MenuGrid />
      </div>
    </div>
  );
};

export default Dashboard;
