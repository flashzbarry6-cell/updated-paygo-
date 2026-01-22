import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle } from "lucide-react";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-red-500 p-4 text-white flex items-center shadow-lg">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/bank-transfer")} />
          <h1 className="text-lg font-bold">PAY ID FAILED</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[70vh]">
          <div className="mb-8 animate-fade-up">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-red-500 mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Payment Failed
          </h2>
          <p className="text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Your payment could not be processed. Please check your details and try again.
          </p>
          
          <div className="space-y-3 w-full animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button 
              onClick={() => navigate("/dashboard")}
              className="w-full bg-gradient-pink hover:opacity-90 text-white text-lg py-6 rounded-full shadow-button btn-glow"
            >
              Continue to Dashboard
            </Button>
            
            <Button 
              onClick={() => navigate("/bank-transfer")}
              variant="outline"
              className="w-full text-lg py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Recheck
            </Button>
          </div>
        </div>
        
        <footer className="bg-card-dark border-t border-border/20 p-4 text-center text-muted-foreground">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentFailed;