
import UserProfile from "./UserProfile";
import BalanceSection from "./BalanceSection";
import ActionButtons from "./ActionButtons";

const DashboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-2xl mx-3 mt-3 p-4 text-white">
      <UserProfile />
      <BalanceSection 
        balance="₦180,000.00" 
        rewards="₦180,000.00" 
      />
      <ActionButtons />
    </div>
  );
};

export default DashboardHeader;
