
import { useEffect, useState } from "react";
import { Bell, BellDot } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/contexts/NotificationContext";
import { toast } from "sonner";

const DashboardHeader = () => {
  const [user, setUser] = useState({ name: "" });
  const navigate = useNavigate();
  const { hasUnreadNotifications, notificationsEnabled } = useNotification();

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Get first letter of user's name for avatar
  const getInitial = () => {
    return user.name ? user.name.charAt(0) : "C";
  };

  // Split the name to show "Hi, [FirstName]"
  const getFirstName = () => {
    return user.name ? user.name.split(" ")[0] : "Charis";
  };

  const handleNotificationClick = () => {
    navigate("/notification-settings");
  };

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    localStorage.removeItem("paygo-onboarding-completed");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-6 text-white">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-white/20 text-white">
            <AvatarFallback className="text-xl font-semibold bg-white/20 text-white">
              {getInitial()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <span className="text-3xl">🔔</span>
            </div>
            <h1 className="text-2xl font-bold">Hi, {getFirstName()}</h1>
            <h2 className="text-xl font-bold">Benjamin</h2>
            <p className="text-sm opacity-90">Welcome back!</p>
          </div>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline"
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
        >
          Logout
        </Button>
      </div>

      <div className="mb-4">
        <p className="text-lg opacity-90">Your Balance</p>
        <div className="flex items-center gap-2">
          <h3 className="text-4xl font-bold">₦180,000.00</h3>
          <div 
            className="cursor-pointer" 
            onClick={handleNotificationClick}
          >
            {notificationsEnabled && hasUnreadNotifications ? (
              <BellDot size={24} className="text-white" />
            ) : (
              <Bell size={24} className="text-white" />
            )}
          </div>
        </div>
        <p className="text-sm opacity-75">Weekly Rewards: ₦180,000.00</p>
      </div>

      <div className="flex gap-3">
        <Button 
          className="bg-white/20 text-white border-white/30 rounded-full px-6 py-2 hover:bg-white/30"
          onClick={() => navigate("/buy-pay-id")}
        >
          ✓ Upgrade
        </Button>
        <Button 
          className="bg-white/20 text-white border-white/30 rounded-full px-6 py-2 hover:bg-white/30"
          onClick={() => navigate("/transfer")}
        >
          ↑ Transfer
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
