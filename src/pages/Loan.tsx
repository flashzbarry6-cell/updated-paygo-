
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Loan = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };
  
  const handleBuyPayId = () => {
    navigate("/buy-pay-id");
  };

  const handleSubmitApplication = () => {
    toast.success("Loan application submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <ArrowLeft className="mr-2 cursor-pointer text-primary" onClick={() => navigate("/dashboard")} />
              <h1 className="text-xl font-bold text-foreground">Apply for Loan</h1>
            </div>
            <X onClick={handleClose} className="cursor-pointer text-muted-foreground" />
          </header>
          
          <div className="flex-1 p-4 flex flex-col">
            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">Loan Amount (₦)</h2>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter amount" 
                    className="w-full p-4 rounded-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <p className="mt-2 text-muted-foreground text-xs">Minimum: ₦100,000 | Maximum: ₦250,000</p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">Loan Type</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card p-4 cursor-pointer hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-bold text-center text-foreground mb-1">Free Loan</h3>
                    <p className="text-center text-muted-foreground text-xs">No repayment required</p>
                  </div>
                  <div className="glass-card p-4 cursor-pointer hover:border-primary/50 transition-all">
                    <h3 className="text-lg font-bold text-center text-foreground mb-1">SLF Loan</h3>
                    <p className="text-center text-muted-foreground text-xs">5% processing fee</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-bold text-foreground mb-3">PAY ID Code</h2>
                <input 
                  type="text" 
                  placeholder="Enter PAY ID Code" 
                  className="w-full p-4 rounded-full bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p 
                  className="mt-2 text-primary text-sm font-semibold cursor-pointer"
                  onClick={handleBuyPayId}
                >
                  Don't have a PAY ID? Buy one now
                </p>
              </div>
              
              <Button 
                className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full btn-glow"
                onClick={handleSubmitApplication}
              >
                Submit Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
