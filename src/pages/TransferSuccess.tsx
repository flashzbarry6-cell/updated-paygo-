
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
    localStorage.setItem("paygo-balance", "0");
    
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
    
    localStorage.removeItem("paygo-welcome-bonus-claimed");
    localStorage.removeItem("paygo-welcome-notification-dismissed");
  }, [transferData]);

  const handleBackToDashboard = () => {
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmocBjuMzvLThSYGKHvN8N2QPgcTYSQmZ");
    audio.play().catch(() => {});
    
    toast({
      title: "Withdrawal Successful",
      description: `₦${transferData.amount} has been successfully withdrawn from your account.`,
      duration: 5000,
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4">
            <h1 className="text-xl font-bold text-foreground">Withdrawal Result</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-20 h-20 text-green-500" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3">Withdrawal Successful!</h2>
            <p className="text-muted-foreground mb-8 text-sm">Your withdrawal has been processed successfully.</p>
            
            <div className="w-full space-y-3 mb-8 glass-card p-4">
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground text-sm">Amount:</span>
                <span className="font-bold text-foreground">₦{transferData.amount || '0'}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground text-sm">Bank:</span>
                <span className="font-bold text-foreground">{transferData.bankName || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground text-sm">Account Number:</span>
                <span className="font-bold text-foreground">{transferData.accountNumber || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground text-sm">Account Name:</span>
                <span className="font-bold text-foreground">{transferData.accountName || 'N/A'}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-muted-foreground text-sm">Transaction ID:</span>
                <span className="font-bold text-foreground">TRX{Math.random().toString().substr(2, 8)}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleBackToDashboard}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-4 rounded-full font-medium btn-glow"
            >
              Back to Dashboard
            </Button>
          </div>
          
          <footer className="border-t border-border p-4 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TransferSuccess;
