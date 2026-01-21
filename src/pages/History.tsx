import { useNavigate } from "react-router-dom";
import { X, Clock, Gift, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useWelcomeBonus } from "@/contexts/WelcomeBonusContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const History = () => {
  const navigate = useNavigate();
  const { hasWelcomeBonus, welcomeBonusAmount, claimWelcomeBonus } = useWelcomeBonus();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("paygo-transactions") || "[]");
    setTransactions(savedTransactions);
  }, []);

  const handleClose = () => {
    navigate("/dashboard");
  };

  const handleClaimBonus = () => {
    claimWelcomeBonus();
  };

  return (
    <div className="flex flex-col min-h-screen bg-subtle-glow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="p-4 flex justify-end relative z-10">
        <div className="glass-button p-2 rounded-full cursor-pointer hover:bg-primary/20 transition-colors" onClick={handleClose}>
          <X className="text-primary" size={20} />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center relative z-10">
        <h1 className="text-2xl font-bold text-center mb-1 text-foreground animate-fade-up">Transaction History</h1>
        <p className="text-sm text-muted-foreground text-center mb-8 animate-fade-up">View your transaction history</p>
        
        <div className="w-full max-w-md">
          {hasWelcomeBonus && (
            <div className="glass-card bg-gradient-pink p-5 mb-6 animate-fade-up animate-glow-pulse">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-base font-bold text-foreground">Welcome Bonus</h3>
                  <p className="text-xs text-foreground/80">New user reward</p>
                </div>
              </div>
              <div className="text-xl font-bold mb-3 text-foreground">₦{welcomeBonusAmount.toLocaleString()}</div>
              <Button 
                onClick={handleClaimBonus}
                className="w-full bg-foreground text-primary hover:bg-foreground/90 font-medium"
              >
                Claim Bonus
              </Button>
            </div>
          )}
          
          {transactions.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Recent Transactions</h3>
              {transactions.map((transaction, index) => (
                <div key={transaction.id} className="glass-card p-3 animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'withdrawal' ? 'bg-destructive/20' : 'bg-green-500/20'
                      }`}>
                        {transaction.type === 'withdrawal' ? (
                          <ArrowDownLeft className="w-4 h-4 text-destructive" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm capitalize">
                          {transaction.type === 'withdrawal' ? 'Bank Transfer' : transaction.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold text-sm ${
                        transaction.type === 'withdrawal' ? 'text-destructive' : 'text-green-500'
                      }`}>
                        {transaction.type === 'withdrawal' ? '-' : '+'}₦{transaction.amount}
                      </p>
                      <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
                    </div>
                  </div>
                  {transaction.type === 'withdrawal' && (
                    <div className="mt-2 pt-2 border-t border-primary/20 text-xs text-muted-foreground">
                      <p>Bank: {transaction.bankName}</p>
                      <p>Account: {transaction.accountNumber}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!hasWelcomeBonus && transactions.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-4 animate-fade-up">
              <div className="p-6 rounded-full glass-card">
                <Clock className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold text-foreground mt-4">No history yet</h2>
              <p className="text-sm text-muted-foreground text-center">
                Your transaction history will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
