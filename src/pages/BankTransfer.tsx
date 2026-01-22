import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Building2, User, CreditCard } from "lucide-react";
import { toast } from "sonner";

const BankTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [receipt, setReceipt] = useState<File | null>(null);

  // Get user email from localStorage on component mount
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
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 text-white flex items-center shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate(-1)} />
          <h1 className="text-lg font-bold">Bank Transfer</h1>
        </header>
        
        <div className="p-4 space-y-4">
          {/* Profile section */}
          <div className="glass-card p-4 flex items-center space-x-3 animate-fade-up">
            <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center shadow-glow">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">NGN 6,500</h2>
              <p className="text-muted-foreground text-sm">{userEmail}</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm">Complete this bank transfer to proceed</p>

          {/* Amount */}
          <div className="glass-card p-4 space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <label className="text-muted-foreground text-xs uppercase tracking-wider">Amount</label>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-foreground">NGN 6,500</span>
              <Button 
                onClick={handleCopyAmount}
                className="bg-gradient-pink hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-button btn-glow"
              >
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
            </div>
          </div>

          {/* Account Number */}
          <div className="glass-card p-4 space-y-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-primary" />
              <label className="text-muted-foreground text-xs uppercase tracking-wider">Account Number</label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-foreground">8102562883</span>
              <Button 
                onClick={handleCopyAccount}
                className="bg-gradient-pink hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium shadow-button btn-glow"
              >
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </Button>
            </div>
          </div>

          {/* Bank Name */}
          <div className="glass-card p-4 space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-primary" />
              <label className="text-muted-foreground text-xs uppercase tracking-wider">Bank Name</label>
            </div>
            <span className="text-lg font-bold text-foreground block">Moniepoint Bank</span>
          </div>

          {/* Account Name */}
          <div className="glass-card p-4 space-y-2 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-primary" />
              <label className="text-muted-foreground text-xs uppercase tracking-wider">Account Name</label>
            </div>
            <span className="text-lg font-bold text-foreground block">CHARIS SOMTOCHUKWU CHISOM</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed py-2">
            Kindly proceed with the payment for your PAY ID. Complete the bank transfer to activate your PAY ID
          </p>

          {userEmail && (() => {
            const userData = localStorage.getItem("paygo-user");
            const user = userData ? JSON.parse(userData) : {};
            const referenceNumber = user.referenceNumber || "";
            return referenceNumber ? (
              <p className="text-primary text-sm font-semibold py-2">
                REFERENCE: {referenceNumber}
              </p>
            ) : null;
          })()}

          {/* Email Input */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Input 
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="h-12 bg-card-dark border-border/50 rounded-xl text-foreground text-sm focus:border-primary focus:ring-primary/20"
              readOnly
            />
          </div>

          {/* File Upload */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '350ms' }}>
            <div className="relative">
              <input 
                type="file"
                accept="image/*,.pdf"
                onChange={handleReceiptUpload}
                className="w-full p-3 bg-card-dark border border-border/50 rounded-xl file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30 text-sm text-foreground"
              />
              {!receipt && <span className="text-muted-foreground text-xs absolute right-3 top-4">No file chosen</span>}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleConfirmTransfer}
            disabled={!receipt || !userEmail}
            className="w-full bg-gradient-pink hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm py-6 rounded-full mt-4 font-semibold shadow-button btn-glow animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            I have made payment
          </Button>
        </div>
        
        <footer className="bg-card-dark border-t border-border/20 p-4 text-center text-muted-foreground">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default BankTransfer;