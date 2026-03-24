
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ServiceNoticeModal from "@/components/notifications/ServiceNoticeModal";

const PreparePayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showServiceNotice, setShowServiceNotice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowServiceNotice(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceNoticeClose = () => {
    setShowServiceNotice(false);
    navigate("/buy-pay-id");
  };

  const handleServiceNoticeContinue = () => {
    setShowServiceNotice(false);
    navigate("/bank-transfer", { state: location.state });
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/buy-pay-id")} />
            <h1 className="text-lg font-bold text-foreground">Buy PAY ID</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-[60vh]">
            <div className="mb-6">
              <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            </div>
            
            <h2 className="text-xl font-bold text-foreground mb-3">Preparing Payment Account</h2>
            <p className="text-muted-foreground mb-6 text-sm">Please wait while we set up your payment...</p>
          </div>
          
          <footer className="border-t border-border p-3 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>

          <ServiceNoticeModal 
            isOpen={showServiceNotice}
            onClose={handleServiceNoticeClose}
            onContinue={handleServiceNoticeContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default PreparePayment;
