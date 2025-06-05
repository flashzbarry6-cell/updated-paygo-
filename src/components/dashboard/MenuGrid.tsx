
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
    <div className="grid grid-cols-4 gap-3">
      <MenuCard 
        title="Buy PAY ID" 
        icon="💳" 
        bgColor="bg-yellow-100" 
        onClick={() => handleMenuClick("Buy PAY ID", "/buy-pay-id")} 
      />
      <MenuCard 
        title="Watch" 
        icon="📺" 
        bgColor="bg-blue-100" 
        onClick={() => handleMenuClick("Watch", "https://t.me/+9PQFIYgVQUU0YzZk")} 
      />
      <MenuCard 
        title="Airtime" 
        icon="📊" 
        bgColor="bg-green-100" 
        onClick={() => handleMenuClick("Airtime", "/airtime")} 
      />
      <MenuCard 
        title="Data" 
        icon="💾" 
        bgColor="bg-gray-100" 
        onClick={() => handleMenuClick("Data", "/data")} 
      />
      <MenuCard 
        title="Support" 
        icon="🎧" 
        bgColor="bg-blue-100" 
        onClick={() => handleMenuClick("Support", "/support")} 
      />
      <MenuCard 
        title="Group" 
        icon="🌐" 
        bgColor="bg-cyan-100" 
        onClick={() => handleMenuClick("Group", "https://t.me/+9PQFIYgVQUU0YzZk")} 
      />
      <MenuCard 
        title="Earn More" 
        icon="💰" 
        bgColor="bg-yellow-100" 
        onClick={() => handleMenuClick("Refer", "/refer")} 
      />
      <MenuCard 
        title="Profile" 
        icon="👤" 
        bgColor="bg-blue-100" 
        onClick={() => handleMenuClick("Profile", "/profile")} 
      />
    </div>
  );
};

export default MenuGrid;
