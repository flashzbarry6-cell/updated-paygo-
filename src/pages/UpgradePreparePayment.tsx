import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";

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
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 text-white flex items-center shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/upgrade-payment")} />
          <h1 className="text-lg font-bold">Upgrade Payment</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[70vh]">
          <div className="mb-8 animate-fade-up">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-pink rounded-full flex items-center justify-center shadow-glow">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Preparing Payment Account
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Please wait while we set up your payment...
          </p>
          
          <div className="flex space-x-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
        
        <footer className="bg-card-dark border-t border-border/20 p-4 text-center text-muted-foreground">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default UpgradePreparePayment;