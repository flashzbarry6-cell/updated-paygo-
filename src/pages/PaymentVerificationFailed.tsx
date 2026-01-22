import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PaymentVerificationFailed = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-screen">
          <div className="mb-6 animate-fade-up">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <X className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-orange-500 mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Transaction verification failed!
          </h2>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed animate-fade-up" style={{ animationDelay: '150ms' }}>
            Your payment could not be completed.<br />
            Reason: No Payment received from you/<br />
            invalid payment method.
          </p>
          
          <div className="w-full mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="• • • • • • • • • • • •"
                className="w-full p-4 bg-card-dark border border-border/50 rounded-xl text-center text-foreground focus:border-primary focus:ring-primary/20"
                readOnly
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div className="space-y-3 w-full animate-fade-up" style={{ animationDelay: '250ms' }}>
            <Button 
              onClick={() => navigate("/buy-pay-id")}
              className="w-full bg-gradient-pink hover:opacity-90 text-white text-sm py-6 rounded-full shadow-button btn-glow"
            >
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="w-full text-sm py-6 rounded-full border-border/50 text-foreground hover:bg-card-dark/50 hover:border-primary"
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