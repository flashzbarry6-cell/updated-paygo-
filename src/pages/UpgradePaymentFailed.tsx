
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle } from "lucide-react";

const UpgradePaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-destructive/80 backdrop-blur-xl p-4 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-destructive-foreground" onClick={() => navigate("/upgrade-bank-transfer")} />
            <h1 className="text-xl font-bold text-destructive-foreground">PAY ID FAILED</h1>
          </header>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
            <div className="mb-8">
              <XCircle className="w-20 h-20 text-destructive mx-auto mb-6" />
            </div>
            
            <h2 className="text-2xl font-bold text-destructive mb-4">Payment Failed</h2>
            <p className="text-muted-foreground mb-8">Your upgrade payment could not be processed. Please check your details and try again.</p>
            
            <div className="space-y-4 w-full">
              <Button 
                onClick={() => navigate("/dashboard")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full btn-glow"
              >
                Continue to Dashboard
              </Button>
              
              <Button 
                onClick={() => navigate("/upgrade-bank-transfer")}
                variant="outline"
                className="w-full text-lg py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Recheck
              </Button>
            </div>
          </div>
          
          <footer className="border-t border-border p-4 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UpgradePaymentFailed;
