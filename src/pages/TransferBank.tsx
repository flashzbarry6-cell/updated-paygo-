import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const TransferBank = () => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [payId, setPayId] = useState("");
  const [balance, setBalance] = useState("₦180,000.00");

  useEffect(() => {
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

    toast.error("Invalid Pay ID");
    navigate("/buy-pay-id");
  };

  const handleBuyId = () => {
    navigate("/buy-pay-id");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="p-4 flex items-center border-b border-border">
            <ArrowLeft className="mr-3 cursor-pointer text-foreground" onClick={() => navigate("/dashboard")} />
            <h1 className="text-xl font-semibold text-foreground">Transfer to Bank</h1>
          </header>
          
          <div className="p-4">
            <div className="glass-card p-4 mb-6">
              <p className="text-muted-foreground mb-2 text-sm">Available Balance</p>
              <h2 className="text-2xl font-bold text-foreground">{balance}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-muted-foreground font-medium mb-2 text-sm">Select Bank</label>
                <Input 
                  placeholder="Choose a bank"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-muted-foreground font-medium mb-2 text-sm">Account Number</label>
                <Input 
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-muted-foreground font-medium mb-2 text-sm">Account Name</label>
                <Input 
                  placeholder="Enter account name"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  className="h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-muted-foreground font-medium mb-2 text-sm">Amount</label>
                <Input 
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-muted-foreground font-medium mb-2 text-sm">PAY ID Code</label>
                <Input 
                  placeholder="Enter PAY ID Code"
                  value={payId}
                  onChange={(e) => setPayId(e.target.value)}
                  className="h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full mt-6 btn-glow"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="fixed bottom-4 right-4">
            <button 
              onClick={handleBuyId}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm cursor-pointer transition-colors glow-soft"
            >
              Buy ID Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferBank;
