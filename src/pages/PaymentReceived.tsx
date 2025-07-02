
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy } from "lucide-react";
import { toast } from "sonner";

const PaymentReceived = () => {
  const navigate = useNavigate();
  const payId = "FB-2822XCQBURMK3JGBGOC842C1200A";

  const handleCopyPayId = () => {
    navigator.clipboard.writeText(payId);
    toast.success("PAY ID copied to clipboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Received</h2>
          <p className="text-gray-600 mb-8">
            Your payment of ₦6,500 has been confirmed. Copy your PAY ID below:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 w-full">
            <p className="text-lg font-bold text-center mb-4">{payId}</p>
            <Button 
              onClick={handleCopyPayId}
              variant="outline"
              className="w-full"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy PAY ID
            </Button>
          </div>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-lg py-6 rounded-lg"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentReceived;
