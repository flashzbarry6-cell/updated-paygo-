import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TransactionHistoryButton = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for new transactions that haven't been viewed
    const lastViewedTime = localStorage.getItem("paygo-last-viewed-history");
    const transactions = JSON.parse(localStorage.getItem("paygo-transactions") || "[]");
    
    if (transactions.length > 0) {
      const lastTransaction = transactions[transactions.length - 1];
      const lastTransactionTime = new Date(lastTransaction.date).getTime();
      const lastViewed = lastViewedTime ? parseInt(lastViewedTime) : 0;
      
      if (lastTransactionTime > lastViewed) {
        setHasNewNotifications(true);
      }
    }

    // Listen for new transactions
    const handleStorageChange = () => {
      const updatedTransactions = JSON.parse(localStorage.getItem("paygo-transactions") || "[]");
      if (updatedTransactions.length > 0) {
        setHasNewNotifications(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleClick = () => {
    // Mark notifications as viewed
    setHasNewNotifications(false);
    localStorage.setItem("paygo-last-viewed-history", Date.now().toString());
    navigate("/history");
  };

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        variant="ghost"
        size="icon"
        className="bg-white/20 text-white hover:bg-white/30 relative"
      >
        <Bell size={20} />
      </Button>
      {hasNewNotifications && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default TransactionHistoryButton;