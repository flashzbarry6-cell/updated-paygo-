
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
      navigate(route);
    } else {
      toast(`${item} feature coming soon!`);
    }
  };

  // Icons styled as SVGs
  const HistoryIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8V12L14.5 14.5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.6 19.4C4.5 18.3 3.7 16.8 3.3 15.2C2.9 13.6 3.0 11.9 3.6 10.4C4.1 8.8 5.1 7.4 6.4 6.4C7.7 5.4 9.3 4.8 11 4.7C12.7 4.6 14.4 5.0 15.9 5.8C17.4 6.6 18.6 7.9 19.4 9.4C20.2 10.9 20.5 12.7 20.3 14.4C20.1 16.1 19.4 17.7 18.2 19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 20L16 17L15 19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#9b87f5" strokeWidth="2" />
      <path d="M2 10H22" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 15H13" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const WatchIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" stroke="#9b87f5" strokeWidth="2" />
      <path d="M12 8V12L14.5 14.5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 4L17 2" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 4L7 2" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 20L17 22" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 20L7 22" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const AirtimeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L10.2658 7.49391C9.98381 8.05851 9.8428 8.3408 9.64215 8.55392C9.46436 8.74245 9.24245 8.88827 9 8.97858C8.72223 9.08196 8.40128 9.08196 7.75939 9.08196H5C4.44772 9.08196 4 9.52968 4 10.082V11C4 11.5523 4.44772 12 5 12H7.75939C8.40128 12 8.72223 12 9 12.1034C9.24245 12.1937 9.46436 12.3395 9.64215 12.5281C9.8428 12.7412 9.98381 13.0235 10.2658 13.5881L12 17" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 4L19.5 7M19.5 4L16.5 7" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 10V12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17 15L19 17M19 15L17 17" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 19H17" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const DataIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#9b87f5" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="#9b87f5" strokeWidth="2" />
      <path d="M12 2V7" stroke="#9b87f5" strokeWidth="2" />
      <path d="M12 17V22" stroke="#9b87f5" strokeWidth="2" />
      <path d="M22 12L17 12" stroke="#9b87f5" strokeWidth="2" />
      <path d="M7 12L2 12" stroke="#9b87f5" strokeWidth="2" />
    </svg>
  );

  const SupportIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#9b87f5" strokeWidth="2" />
      <path d="M12 17V16.9" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14C12 11 15 11.5 15 9C15 7.5 13.6667 6 12 6C10.5 6 9.5 7 9 8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const GroupIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3" stroke="#9b87f5" strokeWidth="2" />
      <circle cx="16" cy="15" r="3" stroke="#9b87f5" strokeWidth="2" />
      <path d="M5 17C5 14.2386 6.79086 12 9 12C11.2091 12 13 14.2386 13 17" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const ReferIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17L4 12L9 7" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12L8 12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const LoanIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8H18C18.5523 8 19 8.44772 19 9V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V9C5 8.44772 5.44772 8 6 8H8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 12H8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16H8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 3L12 8" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 5.5L12 3L14.5 5.5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const InfoIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#9b87f5" strokeWidth="2" />
      <path d="M12 8V16" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z" fill="#9b87f5" />
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17L21 12L16 7" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12H9" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="grid grid-cols-3 gap-3">
      <MenuCard title="History" icon={<HistoryIcon />} onClick={() => handleMenuClick("History")} />
      <MenuCard title="Buy PAY ID" icon={<CreditCardIcon />} onClick={() => handleMenuClick("Buy PAY ID", "/buy-pay-id")} />
      <MenuCard title="Watch" icon={<WatchIcon />} onClick={() => handleMenuClick("Watch")} />
      <MenuCard title="Airtime" icon={<AirtimeIcon />} onClick={() => handleMenuClick("Airtime")} />
      <MenuCard title="Data" icon={<DataIcon />} onClick={() => handleMenuClick("Data", "/data")} />
      <MenuCard title="Support" icon={<SupportIcon />} onClick={() => handleMenuClick("Support", "/support")} />
      <MenuCard title="Group" icon={<GroupIcon />} onClick={() => handleMenuClick("Group")} />
      <MenuCard title="Refer" icon={<ReferIcon />} onClick={() => handleMenuClick("Refer")} />
      <MenuCard title="Loan" icon={<LoanIcon />} onClick={() => handleMenuClick("Loan", "/loan")} />
      <MenuCard title="About" icon={<InfoIcon />} onClick={() => handleMenuClick("About", "/about")} />
      <MenuCard title="Log out" icon={<LogoutIcon />} onClick={handleLogout} />
    </div>
  );
};

export default MenuGrid;
