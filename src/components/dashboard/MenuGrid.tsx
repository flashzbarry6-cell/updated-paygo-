
import { useNavigate } from "react-router-dom";
import { 
  History, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Satellite, 
  MessageCircle, 
  Globe, 
  Info, 
  LogOut,
  BanknoteIcon
} from "lucide-react";
import MenuCard from "./MenuCard";
import { toast } from "sonner";

const MenuGrid = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleMenuClick = (item: string, route?: string) => {
    if (route) {
      navigate(route);
    } else {
      toast(`${item} feature coming soon!`);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <MenuCard title="Transfer" icon={BanknoteIcon} onClick={() => handleMenuClick("Transfer", "/transfer")} />
      <MenuCard title="Buy PAY ID" icon={CreditCard} onClick={() => handleMenuClick("Buy PAY ID", "/buy-pay-id")} />
      <MenuCard title="History" icon={History} onClick={() => handleMenuClick("History")} />
      <MenuCard title="Watch" icon={BarChart3} onClick={() => handleMenuClick("Watch")} />
      <MenuCard title="Airtime" icon={Smartphone} onClick={() => handleMenuClick("Airtime")} />
      <MenuCard title="Data" icon={Satellite} onClick={() => handleMenuClick("Data")} />
      <MenuCard title="Support" icon={MessageCircle} onClick={() => handleMenuClick("Support")} />
      <MenuCard title="Group" icon={Globe} onClick={() => handleMenuClick("Group")} />
      <MenuCard title="About" icon={Info} onClick={() => handleMenuClick("About")} />
      <MenuCard title="Log out" icon={LogOut} onClick={handleLogout} />
    </div>
  );
};

export default MenuGrid;
