import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, Wallet, Building } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-gradient-pink p-4 text-white flex items-center justify-between shadow-glow">
        <div className="flex items-center">
          <ArrowLeft className="mr-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-bold">Apply for Loan</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer hover:opacity-80 transition-opacity" />
      </header>
      
      <div className="flex-1 p-5 flex flex-col">
        <div className="mt-4 space-y-6">
          {/* Loan Amount Section */}
          <div className="glass-card p-5 animate-fade-up">
            <div className="flex items-center mb-4">
              <Wallet className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-lg font-bold text-foreground">Loan Amount (₦)</h2>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="w-full p-4 rounded-full text-lg bg-card-dark border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            <p className="mt-2 text-muted-foreground text-sm">Minimum: ₦100,000 | Maximum: ₦250,000</p>
          </div>
          
          {/* Loan Type Section */}
          <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center mb-4">
              <Building className="w-6 h-6 text-primary mr-2" />
              <h2 className="text-lg font-bold text-foreground">Loan Type</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center cursor-pointer hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-1">Free Loan</h3>
                <p className="text-muted-foreground text-sm">No repayment required</p>
              </div>
              <div className="glass-card p-4 text-center cursor-pointer hover:border-primary transition-colors">
                <h3 className="text-lg font-bold text-foreground mb-1">SLF Loan</h3>
                <p className="text-muted-foreground text-sm">5% processing fee</p>
              </div>
            </div>
          </div>
          
          {/* PAY ID Section */}
          <div className="glass-card p-5 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-lg font-bold text-foreground mb-4">PAY ID Code</h2>
            <input 
              type="text" 
              placeholder="Enter PAY ID Code" 
              className="w-full p-4 rounded-full text-lg bg-card-dark border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            <p 
              className="mt-3 text-primary text-sm font-semibold cursor-pointer hover:underline"
              onClick={handleBuyPayId}
            >
              Don't have a PAY ID? Buy one now
            </p>
          </div>
          
          <Button 
            className="w-full py-6 text-lg bg-gradient-pink hover:opacity-90 rounded-full shadow-button btn-glow animate-fade-up"
            style={{ animationDelay: '300ms' }}
            onClick={handleSubmitApplication}
          >
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loan;