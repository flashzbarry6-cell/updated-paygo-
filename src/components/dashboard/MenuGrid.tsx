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
        window.open(route, "_blank", "noopener,noreferrer");
        toast(`Opening ${item} in a new tab`);
      } else {
        navigate(route);
      }
    } else {
      toast(`${item} feature coming soon!`);
    }
  };

  const menuItems = [
    { title: "Buy PAY ID", icon: "💳", route: "/buy-pay-id" },
    { title: "Watch", icon: "📺", route: "https://t.me/+9PQFIYgVQUU0YzZk" },
    { title: "Airtime", icon: "📊", route: "/airtime" },
    { title: "Data", icon: "💾", route: "/data" },
    { title: "Support", icon: "🎧", route: "/support" },
    { title: "Group", icon: "🌐", route: "https://t.me/+9PQFIYgVQUU0YzZk" },
    { title: "Earn More", icon: "💰", route: "/refer" },
    { title: "Profile", icon: "👤", route: "/profile" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
      {menuItems.map((item, index) => (
        <MenuCard 
          key={item.title}
          title={item.title} 
          icon={item.icon}
          delay={index * 50}
          onClick={() => handleMenuClick(item.title, item.route)} 
        />
      ))}
    </div>
  );
};

export default MenuGrid;
