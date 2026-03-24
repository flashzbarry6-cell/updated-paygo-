
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy } from "lucide-react";
import { toast } from "sonner";

const PaymentReceived = () => {
  const navigate = useNavigate();
  const fullPayId = "FB-2822XCQBURMK3JGBGOC842C1200A";
  const payId = fullPayId.slice(0, -4);

  const handleCopyPayId = () => {
    navigator.clipboard.writeText(payId);
    toast.success("PAY ID copied to clipboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10 glass-card p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mb-3">Payment Received</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Your payment of ₦6,500 has been confirmed. Copy your PAY ID below:
            </p>
            
            <div className="bg-muted/50 p-4 rounded-xl mb-6 w-full border border-border">
              <p className="text-base font-semibold text-center text-foreground mb-3">{payId}</p>
              <Button 
                onClick={handleCopyPayId}
                variant="outline"
                className="w-full text-sm py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy PAY ID
              </Button>
            </div>
            
            <Button 
              onClick={() => navigate("/dashboard")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 rounded-full btn-glow"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceived;
