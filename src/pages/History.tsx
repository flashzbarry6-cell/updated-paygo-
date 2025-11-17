
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#FF0055] to-[#FF1177]">
      <div className="p-4 flex justify-end">
        <div className="bg-white/20 p-2 rounded-full cursor-pointer" onClick={handleClose}>
          <X className="text-white" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-2 text-white">Transaction History</h1>
        <p className="text-xl text-white text-center mb-10">View your transaction history</p>
        
        <div className="w-full max-w-md">
          {hasWelcomeBonus && (
            <div className="bg-white text-[#FF0055] p-6 rounded-xl mb-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Welcome Bonus</h3>
                  <p className="text-sm opacity-90">New user reward</p>
                </div>
              </div>
              <div className="text-3xl font-bold mb-4">₦{welcomeBonusAmount.toLocaleString()}</div>
              <Button 
                onClick={handleClaimBonus}
                className="w-full bg-gradient-to-r from-[#FF0055] to-[#FF1177] text-white hover:opacity-90"
              >
                Claim Bonus
              </Button>
            </div>
          )}
          
          {transactions.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recent Transactions</h3>
              {transactions.map((transaction) => (
                <div key={transaction.id} className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'withdrawal' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {transaction.type === 'withdrawal' ? (
                          <ArrowDownLeft className="w-5 h-5 text-red-600" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 capitalize">
                          {transaction.type === 'withdrawal' ? 'Bank Transfer' : transaction.type}
                        </p>
                        <p className="text-sm text-gray-600">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {transaction.type === 'withdrawal' ? '-' : '+'}₦{transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">{transaction.status}</p>
                    </div>
                  </div>
                  {transaction.type === 'withdrawal' && (
                    <div className="mt-3 pt-3 border-t text-xs text-gray-600">
                      <p>Bank: {transaction.bankName}</p>
                      <p>Account: {transaction.accountNumber}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!hasWelcomeBonus && transactions.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="p-6 rounded-full bg-gray-200">
                <Clock className="w-16 h-16 text-gray-500" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-700 mt-4">No history yet</h2>
              
              <p className="text-xl text-gray-500 text-center">
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
