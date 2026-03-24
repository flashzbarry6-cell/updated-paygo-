import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const BankTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [receipt, setReceipt] = useState<File | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserEmail(user.email || "");
    }
  }, []);

  const handleCopyAmount = () => {
    navigator.clipboard.writeText("6500");
    toast.success("Amount copied to clipboard");
  };

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
    navigate("/payment-confirmation");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate(-1)} />
            <h1 className="text-lg font-bold text-foreground">Bank Transfer</h1>
          </header>
          
          <div className="p-3 space-y-2.5">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center glow-soft">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">**NGN 6,500**</h2>
                <p className="text-muted-foreground text-xs">{userEmail}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-xs mb-2">Complete this bank transfer to proceed</p>

            <div className="space-y-1">
              <label className="text-muted-foreground text-xs">Amount</label>
              <div className="flex items-center justify-between glass-card p-2.5">
                <span className="text-base font-extrabold text-foreground">NGN 6,500</span>
                <Button 
                  onClick={handleCopyAmount}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-primary/30 rounded flex items-center justify-center text-xs">💳</div>
                <label className="text-muted-foreground text-xs">Account Number</label>
              </div>
              <div className="flex items-center justify-between glass-card p-2.5">
                <span className="text-base font-extrabold text-foreground">8102562883</span>
                <Button 
                  onClick={handleCopyAccount}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
                >
                  Copy
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-muted rounded flex items-center justify-center text-xs">🏛️</div>
                <label className="text-muted-foreground text-xs">Bank Name</label>
              </div>
              <div className="glass-card p-2.5">
                <span className="text-base font-extrabold text-foreground">Moniepoint Bank</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-primary/30 rounded-full flex items-center justify-center text-xs">👤</div>
                <label className="text-muted-foreground text-xs">Account Name</label>
              </div>
              <div className="glass-card p-2.5">
                <span className="text-base font-extrabold text-foreground">CHARIS SOMTOCHUKWU CHISOM</span>
              </div>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed py-1.5">
              Kindly proceed with the payment for your PAY ID. Complete the bank transfer to activate your PAY ID
            </p>

            {userEmail && (() => {
              const userData = localStorage.getItem("paygo-user");
              const user = userData ? JSON.parse(userData) : {};
              const referenceNumber = user.referenceNumber || "";
              return referenceNumber ? (
                <p className="text-primary text-xs font-semibold py-1.5">
                  REFERENCE: {referenceNumber}
                </p>
              ) : null;
            })()}

            <div className="space-y-1">
              <Input 
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="h-9 bg-input border-border rounded-xl text-foreground text-xs"
                readOnly
              />
            </div>

            <div className="space-y-1">
              <div className="relative">
                <input 
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleReceiptUpload}
                  className="w-full p-2.5 bg-input border border-border rounded-xl file:mr-3 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 text-xs text-foreground"
                />
                {!receipt && <span className="text-muted-foreground text-xs absolute right-2.5 top-2.5">No file chosen</span>}
              </div>
            </div>

            <Button 
              onClick={handleConfirmTransfer}
              disabled={!receipt || !userEmail}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground text-xs py-3 rounded-full mt-3 font-medium btn-glow"
            >
              I have made payment
            </Button>
          </div>
          
          <footer className="border-t border-border p-3 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
