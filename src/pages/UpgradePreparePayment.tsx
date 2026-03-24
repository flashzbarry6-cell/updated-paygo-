
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const UpgradePreparePayment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/upgrade-bank-transfer", { state: location.state });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/upgrade-payment")} />
            <h1 className="text-xl font-bold text-foreground">Upgrade Payment</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
            <div className="mb-8">
              <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">Preparing Payment Account</h2>
            <p className="text-muted-foreground mb-8">Please wait while we set up your payment...</p>
          </div>
          
          <footer className="border-t border-border p-4 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UpgradePreparePayment;
