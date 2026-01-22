import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const TransferSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transferData = location.state || {};

  useEffect(() => {
    // Set balance to 0 immediately when page loads
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
    
    // Reset welcome bonus flags since balance is now 0
    localStorage.removeItem("paygo-welcome-bonus-claimed");
    localStorage.removeItem("paygo-welcome-notification-dismissed");
  }, [transferData]);

  const handleBackToDashboard = () => {
    // Play notification sound
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmocBjuMzvLThSYGKHvN8N2QPgcTYSQmZ");
    audio.play().catch(() => {}); // Ignore errors if sound fails
    
    // Show success notification
    toast({
      title: "Withdrawal Successful",
      description: `₦${transferData.amount} has been successfully withdrawn from your account.`,
      duration: 5000,
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 text-white shadow-glow">
          <h1 className="text-lg font-bold">Withdrawal Result</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-6 animate-fade-up">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Withdrawal Successful!
          </h2>
          <p className="text-muted-foreground mb-8 text-sm animate-fade-up" style={{ animationDelay: '200ms' }}>
            Your withdrawal has been processed successfully.
          </p>
          
          <div className="w-full glass-card p-4 mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground text-sm">Amount:</span>
                <span className="font-bold text-foreground">₦{transferData.amount || '0'}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground text-sm">Bank:</span>
                <span className="font-bold text-foreground">{transferData.bankName || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground text-sm">Account Number:</span>
                <span className="font-bold text-foreground">{transferData.accountNumber || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground text-sm">Account Name:</span>
                <span className="font-bold text-foreground">{transferData.accountName || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground text-sm">Transaction ID:</span>
                <span className="font-bold text-primary">TRX{Math.random().toString().substr(2, 8)}</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleBackToDashboard}
            className="w-full bg-gradient-pink hover:opacity-90 text-white text-lg py-6 rounded-full font-semibold shadow-button btn-glow animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Back to Dashboard
          </Button>
        </div>
        
        <footer className="bg-card-dark border-t border-border/20 p-4 text-center text-muted-foreground">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default TransferSuccess;