
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Eye } from "lucide-react";
import { useState } from "react";

const PaymentVerificationFailed = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 text-center min-h-screen">
          <div className="mb-4">
            <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-destructive-foreground" />
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-primary mb-3">Transaction verification failed!</h2>
          <p className="text-muted-foreground mb-4 text-xs leading-relaxed">
            Your payment could not be completed.<br />
            Reason: No Payment received from you/<br />
            invalid payment method.
          </p>
          
          <div className="w-full mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="• • • • • • • • • • • •"
                className="w-full p-2 bg-input border border-border rounded-xl text-center text-sm text-foreground"
                readOnly
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Eye className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2 w-full">
            <Button 
              onClick={() => navigate("/buy-pay-id")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-3 rounded-full btn-glow"
            >
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="w-full text-sm py-3 rounded-full border-border text-muted-foreground hover:bg-muted"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerificationFailed;
