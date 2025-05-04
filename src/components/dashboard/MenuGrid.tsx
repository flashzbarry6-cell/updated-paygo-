
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

  // Custom icons
  const HistoryIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5H7C4 5 2 7 2 10V15C2 18 4 20 7 20H17C20 20 22 18 22 15V10C22 7 20 5 17 5H15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 5C9 3.9 9.9 3 11 3H13C14.1 3 15 3.9 15 5C15 6.1 14.1 7 13 7H11C9.9 7 9 6.1 9 5Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H11" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 12H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 15H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 8.5H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 16.5H8" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 16.5H14.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H17.55C21.11 3.5 22 4.38 22 7.89V8.49" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChartIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10.74V13.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9V13.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 13.94V7.26" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 13.95H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8.94H7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 3.94H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18.95H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 18.95H2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM15.5 19H8.5C8.22 19 8 18.78 8 18.5C8 18.22 8.22 18 8.5 18H15.5C15.78 18 16 18.22 16 18.5C16 18.78 15.78 19 15.5 19ZM17 16H7V6H17V16Z" fill="#292D32"/>
    </svg>
  );

  const SatelliteIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 12.98C15.43 12.98 16.98 11.44 16.98 9.5C16.98 7.57 15.43 6.02 13.5 6.02C11.57 6.02 10.02 7.57 10.02 9.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.56 7.94L21.53 3.96" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.44 7.94L5.46 3.96" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.46 20.04L18.54 6.95996" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 22L22 2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13.98C4 18.41 7.58 21.98 12 21.98C16.42 21.98 20 18.41 20 13.98" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SupportIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#292D32"/>
      <path d="M7.5 13.5C8.32843 13.5 9 12.8284 9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5Z" fill="#292D32"/>
      <path d="M16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5Z" fill="#292D32"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const InfoIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V13" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9945 16H12.0035" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 12H3.62" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <MenuCard title="History" icon={<HistoryIcon />} onClick={() => handleMenuClick("History")} />
      <MenuCard title="Buy PAY ID" icon={<CreditCardIcon />} onClick={() => handleMenuClick("Buy PAY ID", "/buy-pay-id")} />
      <MenuCard title="Watch" icon={<ChartIcon />} onClick={() => handleMenuClick("Watch")} />
      <MenuCard title="Airtime" icon={<PhoneIcon />} onClick={() => handleMenuClick("Airtime")} />
      <MenuCard title="Data" icon={<SatelliteIcon />} onClick={() => handleMenuClick("Data", "/data")} />
      <MenuCard title="Support" icon={<SupportIcon />} onClick={() => handleMenuClick("Support")} />
      <MenuCard title="Group" icon={<GlobeIcon />} onClick={() => handleMenuClick("Group")} />
      <MenuCard title="About" icon={<InfoIcon />} onClick={() => handleMenuClick("About")} />
      <MenuCard title="Log out" icon={<LogoutIcon />} onClick={handleLogout} />
    </div>
  );
};

export default MenuGrid;
