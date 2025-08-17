
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
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-screen">
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Transaction verification failed!</h2>
          <p className="text-gray-600 mb-8 text-center">
            Your payment could not be completed.<br />
            Reason:No Payment received from you/<br />
            invalid payment method.
          </p>
          
          <div className="w-full mb-8">
            <div className="relative w-full">
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-full py-4 px-5 text-lg border-gray-300"
                placeholder="•••••••••••••" 
              />
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                <Eye className="w-6 h-6 text-gray-500" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4 w-full">
            <Button 
              onClick={() => navigate("/buy-pay-id")}
              className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:from-[#8a1ce6] hover:to-[#ff5722] text-white text-xl py-6 rounded-full"
            >
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="w-full text-lg py-6 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
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
