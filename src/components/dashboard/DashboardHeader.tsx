
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import BalanceSection from "./BalanceSection";
import ActionButtons from "./ActionButtons";

const DashboardHeader = () => {
  const [balance, setBalance] = useState("₦180,000.00");
  const [rewards, setRewards] = useState("₦180,000.00");

  useEffect(() => {
    // Get balance from localStorage or default to 180000
    const storedBalance = localStorage.getItem("paygo-balance");
    let currentBalance = storedBalance ? parseFloat(storedBalance) : 180000;

    // Check if user just logged in and needs welcome bonus
    const justLoggedIn = localStorage.getItem("paygo-just-logged-in");
    const bonusClaimed = localStorage.getItem("paygo-welcome-bonus-claimed");
    
    if (justLoggedIn && !bonusClaimed && currentBalance === 0) {
      // Reset balance to 180000 for welcome bonus
      currentBalance = 180000;
      localStorage.setItem("paygo-balance", currentBalance.toString());
      localStorage.removeItem("paygo-just-logged-in");
    }

    // Format the balance
    const formattedBalance = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(currentBalance).replace('NGN', '₦');

    const formattedRewards = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(currentBalance).replace('NGN', '₦');

    setBalance(formattedBalance);
    setRewards(formattedRewards);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-2xl mx-3 mt-3 p-4 text-white">
      <UserProfile />
      <BalanceSection 
        balance={balance} 
        rewards={rewards} 
      />
      <ActionButtons />
    </div>
  );
};

export default DashboardHeader;
