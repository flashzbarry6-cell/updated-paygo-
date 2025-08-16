
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const BankTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState(location.state?.email || "");
  const [receipt, setReceipt] = useState<File | null>(null);

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
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gray-200 p-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-black">Bank Transfer</h1>
          <button className="text-red-500 font-semibold text-sm" onClick={() => navigate("/prepare-payment")}>
            Cancel
          </button>
        </header>
        
        <div className="p-3 bg-gray-50">
          {/* Profile Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold">NGN 6,500</h2>
                <p className="text-gray-600 text-sm">benjamincharis15@gmail.com</p>
              </div>
            </div>
          </div>

          <p className="text-base mb-4">Complete this bank transfer to proceed</p>

          {/* Transfer Details Card */}
          <div className="bg-white rounded-2xl p-3 mb-4 shadow-sm">
            {/* Amount */}
            <div className="mb-3">
              <label className="text-gray-600 text-sm">Amount</label>
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-lg font-bold">NGN 6,500</span>
                <button onClick={handleCopyAmount} className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">
                  Copy
                </button>
              </div>
            </div>

            {/* Account Number */}
            <div className="mb-3">
              <div className="flex items-center mb-1">
                <span className="text-blue-500 mr-1">🏧</span>
                <label className="text-gray-600 text-sm">Account Number</label>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-lg font-bold">8102562883</span>
                <button onClick={handleCopyAccount} className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">
                  Copy
                </button>
              </div>
            </div>

            {/* Bank Name */}
            <div className="mb-3">
              <div className="flex items-center mb-1">
                <span className="text-blue-500 mr-1">🏛️</span>
                <label className="text-gray-600 text-sm">Bank Name</label>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <span className="text-base font-bold">Moniepoint Bank</span>
              </div>
            </div>

            {/* Account Name */}
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <span className="text-blue-500 mr-1">👤</span>
                <label className="text-gray-600 text-sm">Account Name</label>
              </div>
              <div className="bg-gray-50 p-2 rounded-lg">
                <span className="text-base font-bold">PAYGO AGENT</span>
              </div>
            </div>

            {/* Instructions */}
            <p className="text-gray-600 text-sm mb-3">
              Kindly proceed with the payment for your PAY ID. Complete the bank transfer to activate your PAY ID.
            </p>

            {/* Email Field */}
            <div className="mb-3">
              <Input 
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="h-10 border-gray-300 rounded-lg"
              />
            </div>

            {/* Receipt Upload */}
            <div className="mb-3">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleReceiptUpload}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            {/* Confirm Button */}
            <Button 
              onClick={handleConfirmTransfer}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base py-3 rounded-lg"
            >
              I have made this bank Transfer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
