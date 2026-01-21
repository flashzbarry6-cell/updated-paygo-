import { useState, useEffect } from "react";
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
  const [referenceNumber, setReferenceNumber] = useState("");
  const navigate = useNavigate();
  const { hasUnreadNotifications, notificationsEnabled } = useNotification();

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const user = JSON.parse(userData);
      setReferenceNumber(user.referenceNumber || "");
    }
  }, []);

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const handleNotificationClick = () => {
    navigate("/notification-settings");
  };

  return (
    <div className="mb-4">
      <p className="text-sm text-muted-foreground mb-1">Your Balance</p>
      <div className="flex items-center gap-3">
        <h3 className="text-3xl font-bold text-foreground animate-count-up text-glow">
          {showBalance ? balance : "₦********"}
        </h3>
        <div 
          className="cursor-pointer p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors" 
          onClick={toggleBalanceVisibility}
        >
          {showBalance ? 
            <Eye size={18} className="text-primary" /> : 
            <EyeOff size={18} className="text-primary" />
          }
        </div>
        <div 
          className="cursor-pointer p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors" 
          onClick={handleNotificationClick}
        >
          {notificationsEnabled && hasUnreadNotifications ? 
            <BellDot size={18} className="text-primary" /> : 
            <Bell size={18} className="text-muted-foreground" />
          }
        </div>
      </div>
      {referenceNumber && (
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          REFERENCE: <span className="text-primary">{referenceNumber}</span>
        </p>
      )}
    </div>
  );
};

export default BalanceSection;
