
import { useEffect, useState } from "react";
import { Bell, BellDot } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@/contexts/NotificationContext";

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

  return (
    <header className="flex justify-between items-center p-4 bg-[#fff6f9]">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 bg-[#e8f4f9] text-black">
          <AvatarFallback className="text-xl font-semibold">{getInitial()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-gray-800">PayGo</h1>
          <p className="text-sm text-gray-600">Hi, {getFirstName()}</p>
        </div>
      </div>
      <div 
        className="text-gray-700 cursor-pointer" 
        onClick={handleNotificationClick}
      >
        {notificationsEnabled && hasUnreadNotifications ? (
          <BellDot size={24} className="text-[#9b20f5]" />
        ) : (
          <Bell size={24} />
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
