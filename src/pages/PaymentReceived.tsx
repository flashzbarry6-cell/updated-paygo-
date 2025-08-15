
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy } from "lucide-react";
import { toast } from "sonner";

const PaymentReceived = () => {
  const navigate = useNavigate();
  const fullPayId = "FB-2822XCQBURMK3JGBGOC842C1200A";
  // Remove last 4 digits
  const payId = fullPayId.slice(0, -4);

  const handleCopyPayId = () => {
    navigator.clipboard.writeText(payId);
    toast.success("PAY ID copied to clipboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
          <div className="mb-10">
            <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-14 h-14 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Payment Received</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Your payment of ₦6,500 has been confirmed. Copy your PAY ID below:
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-10 w-full">
            <p className="text-xl font-bold text-center mb-6">{payId}</p>
            <Button 
              onClick={handleCopyPayId}
              variant="outline"
              className="w-full text-lg py-4"
            >
              <Copy className="w-5 h-5 mr-2" />
              Copy PAY ID
            </Button>
          </div>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-xl py-6 rounded-lg"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceived;
