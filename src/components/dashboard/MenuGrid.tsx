
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MenuCard from "./MenuCard";

const MenuGrid = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleMenuClick = (item: string, route?: string) => {
    if (route) {
      if (route.startsWith("http")) {
        // External link
        window.open(route, "_blank", "noopener,noreferrer");
        toast(`Opening ${item} in a new tab`);
      } else {
        // Internal route
        navigate(route);
      }
    } else {
      toast(`${item} feature coming soon!`);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <MenuCard 
        title="Buy PAY ID" 
        icon="💳" 
        iconColor="text-[#FF007A]"
        onClick={() => handleMenuClick("Buy PAY ID", "/buy-pay-id")} 
      />
      <MenuCard 
        title="Watch" 
        icon="📺" 
        iconColor="text-[#FF007A]"
        onClick={() => handleMenuClick("Watch", "https://t.me/+9PQFIYgVQUU0YzZk")} 
      />
      <MenuCard 
        title="Airtime" 
        icon="📊" 
        iconColor="text-green-500"
        onClick={() => handleMenuClick("Airtime", "/airtime")} 
      />
      <MenuCard 
        title="Data" 
        icon="💾" 
        iconColor="text-purple-500"
        onClick={() => handleMenuClick("Data", "/data")} 
      />
      <MenuCard 
        title="Support" 
        icon="🎧" 
        iconColor="text-blue-500"
        onClick={() => handleMenuClick("Support", "/support")} 
      />
      <MenuCard 
        title="Group" 
        icon="🌐" 
        iconColor="text-orange-500"
        onClick={() => handleMenuClick("Group", "https://t.me/+9PQFIYgVQUU0YzZk")} 
      />
      <MenuCard 
        title="Earn More" 
        icon="💰" 
        iconColor="text-yellow-500"
        onClick={() => handleMenuClick("Refer", "/refer")} 
      />
      <MenuCard 
        title="Profile" 
        icon="👤" 
        iconColor="text-gray-300"
        onClick={() => handleMenuClick("Profile", "/profile")} 
      />
    </div>
  );
};

export default MenuGrid;
