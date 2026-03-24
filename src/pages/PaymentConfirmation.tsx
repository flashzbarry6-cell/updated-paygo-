import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment-verification-failed");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/bank-transfer")} />
            <h1 className="text-lg font-bold text-foreground">Confirming Payment</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-[60vh]">
            <div className="mb-6">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-foreground mb-3">Confirming Your Payment</h2>
            <p className="text-muted-foreground mb-6 text-sm">Please wait while we verify your transaction...</p>
          </div>
          
          <footer className="border-t border-border p-3 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
