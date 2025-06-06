
import { useNavigate } from "react-router-dom";
import { X, Clock, Gift } from "lucide-react";
import { useWelcomeBonus } from "@/contexts/WelcomeBonusContext";
import { Button } from "@/components/ui/button";

const History = () => {
  const navigate = useNavigate();
  const { hasWelcomeBonus, welcomeBonusAmount, claimWelcomeBonus } = useWelcomeBonus();

  const handleClose = () => {
    navigate("/dashboard");
  };

  const handleClaimBonus = () => {
    claimWelcomeBonus();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="p-4 flex justify-end">
        <div className="bg-[#9b87f5]/20 p-2 rounded-full cursor-pointer" onClick={handleClose}>
          <X className="text-[#9b87f5]" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-2">Transaction History</h1>
        <p className="text-xl text-gray-600 text-center mb-10">View your transaction history</p>
        
        <div className="w-full max-w-md">
          {hasWelcomeBonus && (
            <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] text-white p-6 rounded-xl mb-6">
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
                className="w-full bg-white text-purple-600 hover:bg-gray-100"
              >
                Claim Bonus
              </Button>
            </div>
          )}
          
          {!hasWelcomeBonus && (
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
