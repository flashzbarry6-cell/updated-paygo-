import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TransactionHistoryButton = () => {
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
        className="glass-button bg-primary/10 text-foreground hover:bg-primary/20 relative transition-all duration-300"
      >
        <Bell size={20} />
      </Button>
      {hasNewNotifications && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-glow-pulse shadow-glow"></div>
      )}
    </div>
  );
};

export default TransactionHistoryButton;
