import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, Building2, CreditCard, User, Wallet } from "lucide-react";

const TransferBank = () => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [payId, setPayId] = useState("");
  const [balance, setBalance] = useState("₦180,000.00");

  useEffect(() => {
    // Get balance from localStorage and format it
    const storedBalance = localStorage.getItem("paygo-balance");
    const currentBalance = storedBalance ? parseFloat(storedBalance) : 180000;
    
    const formattedBalance = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(currentBalance).replace('NGN', '₦');

    setBalance(formattedBalance);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bankName || !accountNumber || !accountName || !amount || !payId) {
      toast.error("Please fill all fields");
      return;
    }

    // Show invalid pay ID notification and redirect to buy pay ID page
    toast.error("Invalid Pay ID");
    navigate("/buy-pay-id");
  };

  const handleBuyId = () => {
    navigate("/buy-pay-id");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark relative">
        <header className="bg-card-dark p-4 flex items-center border-b border-border/20">
          <ArrowLeft className="mr-3 cursor-pointer text-foreground hover:text-primary transition-colors" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold text-foreground">Transfer to Bank</h1>
        </header>
        
        <div className="p-4">
          {/* Available Balance Card */}
          <div className="glass-card p-5 mb-6 animate-fade-up">
            <div className="flex items-center mb-2">
              <Wallet className="w-5 h-5 text-primary mr-2" />
              <p className="text-muted-foreground text-sm">Available Balance</p>
            </div>
            <h2 className="text-3xl font-bold text-foreground">{balance}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-fade-up" style={{ animationDelay: '50ms' }}>
              <label className="flex items-center text-muted-foreground text-sm mb-2">
                <Building2 className="w-4 h-4 mr-2 text-primary" />
                Select Bank
              </label>
              <Input 
                placeholder="Choose a bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
              <label className="flex items-center text-muted-foreground text-sm mb-2">
                <CreditCard className="w-4 h-4 mr-2 text-primary" />
                Account Number
              </label>
              <Input 
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '150ms' }}>
              <label className="flex items-center text-muted-foreground text-sm mb-2">
                <User className="w-4 h-4 mr-2 text-primary" />
                Account Name
              </label>
              <Input 
                placeholder="Enter account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              <label className="flex items-center text-muted-foreground text-sm mb-2">
                <Wallet className="w-4 h-4 mr-2 text-primary" />
                Amount
              </label>
              <Input 
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-primary/20"
              />
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '250ms' }}>
              <label className="flex items-center text-muted-foreground text-sm mb-2">
                <CreditCard className="w-4 h-4 mr-2 text-primary" />
                PAY ID Code
              </label>
              <Input 
                placeholder="Enter PAY ID Code"
                value={payId}
                onChange={(e) => setPayId(e.target.value)}
                className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground focus:border-primary focus:ring-primary/20"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-pink hover:opacity-90 text-white text-lg py-6 rounded-full mt-6 shadow-button btn-glow animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Buy ID Link - moved to bottom right */}
        <div className="fixed bottom-4 right-4">
          <button 
            onClick={handleBuyId}
            className="bg-gradient-pink hover:opacity-90 text-white px-4 py-2 rounded-full text-sm cursor-pointer transition-opacity shadow-button btn-glow"
          >
            Buy ID Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferBank;