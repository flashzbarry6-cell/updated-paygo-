
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy } from "lucide-react";
import { toast } from "sonner";

const UpgradeBankTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(location.state?.email || "");
  const [receipt, setReceipt] = useState<File | null>(null);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("8102562883");
    toast.success("Account number copied to clipboard");
  };

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceipt(file);
      toast.success("Receipt uploaded successfully");
    }
  };

  const handleConfirmTransfer = () => {
    if (!userEmail) {
      toast.error("Please enter your email address");
      return;
    }
    if (!receipt) {
      toast.error("Please upload your payment receipt");
      return;
    }
    navigate("/upgrade-payment-confirmation");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/upgrade-prepare-payment")} />
            <h1 className="text-xl font-semibold text-foreground">Bank Transfer</h1>
          </header>
          
          <div className="p-4">
            <div className="glass-card p-3 mb-4">
              <p className="text-primary text-sm font-medium">
                Please transfer the exact amount to the account below and upload your receipt
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-bold text-foreground mb-3">Transfer to this account</h2>
              
              <div className="space-y-3">
                <div>
                  <label className="text-muted-foreground text-sm">Account Number</label>
                  <div className="flex items-center glass-card p-3">
                    <span className="text-xl font-bold text-primary flex-1">8102562883</span>
                    <button onClick={handleCopyAccount} className="text-primary ml-2">
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-muted-foreground text-sm">Bank Name</label>
                  <div className="glass-card p-3">
                    <span className="text-lg font-bold text-foreground">Moniepoint Bank</span>
                  </div>
                </div>

                <div>
                  <label className="text-muted-foreground text-sm">Account Name</label>
                  <div className="glass-card p-3">
                    <span className="text-lg font-bold text-foreground">CHARIS SOMTOCHUKWU CHISOM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Amount to Transfer</h3>
              <div className="glass-card p-3">
                <span className="text-2xl font-bold text-foreground">₦20,000</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-muted-foreground text-sm">Your Email Address</label>
              <Input 
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="mt-2 h-12 bg-input border-border rounded-xl text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="mb-4">
              <label className="text-muted-foreground text-sm">Upload Payment Receipt</label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleReceiptUpload}
                className="mt-2 w-full p-3 bg-input border border-border rounded-xl text-foreground text-sm file:mr-3 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/20 file:text-primary"
              />
              {receipt && (
                <p className="text-green-400 text-sm mt-2">✓ Receipt uploaded: {receipt.name}</p>
              )}
            </div>

            <Button 
              onClick={handleConfirmTransfer}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full btn-glow"
            >
              Confirm Transfer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeBankTransfer;
