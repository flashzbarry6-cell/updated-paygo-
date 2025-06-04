
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy } from "lucide-react";
import { toast } from "sonner";

const BankTransfer = () => {
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
    toast.success("Transfer confirmed! We'll process your payment shortly.");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/prepare-payment")} />
          <h1 className="text-xl font-semibold text-black">Bank Transfer</h1>
        </header>
        
        <div className="p-4">
          {/* Warning Banner */}
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mb-6">
            <p className="text-orange-800 text-sm">
              Please transfer the exact amount to the account below and upload your receipt
            </p>
          </div>

          {/* Transfer Details */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Transfer to this account</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Account Number</label>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <span className="text-xl font-bold text-purple-600 flex-1">8102562883</span>
                  <button onClick={handleCopyAccount} className="text-orange-500 ml-2">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-600 text-sm">Bank Name</label>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-lg font-bold">Moniepoint Bank</span>
                </div>
              </div>

              <div>
                <label className="text-gray-600 text-sm">Account Name</label>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-lg font-bold">CHARIS SOMTOCHUKWU BENJAMIN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Amount to Transfer</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-2xl font-bold">₦7,250</span>
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm">Your Email Address</label>
            <Input 
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="mt-2 h-12 border-gray-300 rounded-lg"
            />
          </div>

          {/* Receipt Upload */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm">Upload Payment Receipt</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleReceiptUpload}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
            />
            {receipt && (
              <p className="text-green-600 text-sm mt-2">✓ Receipt uploaded: {receipt.name}</p>
            )}
          </div>

          {/* Confirm Button */}
          <Button 
            onClick={handleConfirmTransfer}
            className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white text-lg py-6 rounded-lg"
          >
            Confirm Transfer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
