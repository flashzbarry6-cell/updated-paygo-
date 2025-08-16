
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const TransferSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transferData = location.state || {};

  const handleBackToDashboard = () => {
    // Set balance to 0 since funds have been withdrawn
    localStorage.setItem("paygo-balance", "0");
    
    // Save withdrawal transaction to history
    const transaction = {
      id: `TRX${Math.random().toString().substr(2, 8)}`,
      type: 'withdrawal',
      amount: transferData.amount || '0',
      bankName: transferData.bankName || 'N/A',
      accountNumber: transferData.accountNumber || 'N/A',
      accountName: transferData.accountName || 'N/A',
      date: new Date().toISOString(),
      status: 'completed'
    };
    
    const existingTransactions = JSON.parse(localStorage.getItem("paygo-transactions") || "[]");
    existingTransactions.unshift(transaction);
    localStorage.setItem("paygo-transactions", JSON.stringify(existingTransactions));
    
    // Play notification sound
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmocBjuMzvLThSYGKHvN8N2QPgcTYSQmZ");
    audio.play().catch(() => {}); // Ignore errors if sound fails
    
    // Show success notification
    toast({
      title: "Withdrawal Successful",
      description: `₦${transferData.amount} has been successfully withdrawn from your account.`,
      duration: 5000,
    });
    
    // Reset welcome bonus flags since balance is now 0
    localStorage.removeItem("paygo-welcome-bonus-claimed");
    localStorage.removeItem("paygo-welcome-notification-dismissed");
    
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
          <h1 className="text-xl font-bold">Withdrawal Result</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-black mb-3">Withdrawal Successful!</h2>
          <p className="text-gray-500 mb-8 text-sm">Your withdrawal has been processed successfully.</p>
          
          <div className="w-full space-y-3 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600 text-sm">Amount:</span>
              <span className="font-bold text-black">₦{transferData.amount || '0'}</span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600 text-sm">Bank:</span>
              <span className="font-bold text-black">{transferData.bankName || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600 text-sm">Account Number:</span>
              <span className="font-bold text-black">{transferData.accountNumber || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600 text-sm">Account Name:</span>
              <span className="font-bold text-black">{transferData.accountName || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-600 text-sm">Transaction ID:</span>
              <span className="font-bold text-black">TRX{Math.random().toString().substr(2, 8)}</span>
            </div>
          </div>
          
          <Button 
            onClick={handleBackToDashboard}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg py-4 rounded-full font-medium"
          >
            Back to Dashboard
          </Button>
        </div>
        
        <footer className="p-4 text-center text-gray-600 bg-white">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default TransferSuccess;
