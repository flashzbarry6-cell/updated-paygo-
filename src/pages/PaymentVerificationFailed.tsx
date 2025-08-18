
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Eye } from "lucide-react";
import { useState } from "react";

const PaymentVerificationFailed = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center bg-gray-50 min-h-screen">
          <div className="mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-orange-500 mb-3">Transaction verification failed!</h2>
          <p className="text-gray-800 mb-4 text-xs leading-relaxed">
            Your payment could not be completed.<br />
            Reason: No Payment received from you/<br />
            invalid payment method.
          </p>
          
          <div className="w-full mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="• • • • • • • • • • • •"
                className="w-full p-2 border border-gray-300 rounded-lg text-center text-sm"
                readOnly
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Eye className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="space-y-2 w-full">
            <Button 
              onClick={() => navigate("/buy-pay-id")}
              className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 text-white text-sm py-3 rounded-full"
            >
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="w-full text-sm py-3 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerificationFailed;
