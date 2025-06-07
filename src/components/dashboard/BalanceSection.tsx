
import { useState } from "react";
import { Eye, EyeOff, Bell, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/contexts/NotificationContext";

interface BalanceSectionProps {
  balance: string;
  rewards: string;
}

const BalanceSection = ({ balance, rewards }: BalanceSectionProps) => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();
  const { hasUnreadNotifications, notificationsEnabled } = useNotification();

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const handleNotificationClick = () => {
    navigate("/notification-settings");
  };

  return (
    <div className="mb-3">
      <p className="text-sm opacity-90">Your Balance</p>
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">
          {showBalance ? balance : "₦****,***.**"}
        </h3>
        <div className="cursor-pointer" onClick={toggleBalanceVisibility}>
          {showBalance ? 
            <Eye size={20} className="text-white" /> : 
            <EyeOff size={20} className="text-white" />
          }
        </div>
        <div className="cursor-pointer" onClick={handleNotificationClick}>
          {notificationsEnabled && hasUnreadNotifications ? 
            <BellDot size={20} className="text-white" /> : 
            <Bell size={20} className="text-white" />
          }
        </div>
      </div>
      <p className="text-xs opacity-75">
        Weekly Rewards: {showBalance ? rewards : "₦****,***.**"}
      </p>
    </div>
  );
};

export default BalanceSection;
