
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
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Payment Received</h2>
          <p className="text-gray-600 mb-4 text-xs">
            Your payment of ₦6,500 has been confirmed. Copy your PAY ID below:
          </p>
          
          <div className="bg-gray-50 p-3 rounded-lg mb-4 w-full">
            <p className="text-sm font-semibold text-center mb-2">{payId}</p>
            <Button 
              onClick={handleCopyPayId}
              variant="outline"
              className="w-full text-xs py-2"
            >
              <Copy className="w-3 h-3 mr-2" />
              Copy PAY ID
            </Button>
          </div>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-sm py-3 rounded-lg"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceived;
