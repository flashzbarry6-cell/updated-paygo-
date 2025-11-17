
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import BalanceSection from "./BalanceSection";
import ActionButtons from "./ActionButtons";
import TransactionHistoryButton from "./TransactionHistoryButton";

const DashboardHeader = () => {
  const [balance, setBalance] = useState("₦180,000.00");
  const [rewards, setRewards] = useState("₦180,000.00");

  useEffect(() => {
    // Get current balance from localStorage or default to 180000
    const storedBalance = localStorage.getItem("paygo-balance");
    const currentBalance = storedBalance ? parseInt(storedBalance) : 180000;
    
    // Only set to localStorage if it's not already there
    if (!storedBalance) {
      localStorage.setItem("paygo-balance", currentBalance.toString());
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
    <div className="bg-gradient-to-r from-[#FF0055] to-[#FF1177] rounded-2xl mx-3 mt-3 p-4 text-white shadow-lg shadow-pink-500/50">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <UserProfile />
        </div>
        <TransactionHistoryButton />
      </div>
      <BalanceSection 
        balance={balance} 
        rewards={rewards} 
      />
      <ActionButtons />
    </div>
  );
};

export default DashboardHeader;
