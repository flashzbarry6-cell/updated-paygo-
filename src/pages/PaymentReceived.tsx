
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
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Payment Received</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Your payment of ₦6,500 has been confirmed. Copy your PAY ID below:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 w-full">
            <p className="text-base font-semibold text-center mb-3">{payId}</p>
            <Button 
              onClick={handleCopyPayId}
              variant="outline"
              className="w-full text-sm py-2"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy PAY ID
            </Button>
          </div>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-base py-3 rounded-lg"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceived;
