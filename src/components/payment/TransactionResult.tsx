
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface TransactionResultProps {
  isOpen: boolean;
  onClose: () => void;
  success: boolean;
}

const TransactionResult = ({ isOpen, onClose, success }: TransactionResultProps) => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    // Show loading for a few seconds before showing the result
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  const handleClose = () => {
    setShowLoading(true);
    onClose();
  };
  
  const handleTryAgain = () => {
    setShowLoading(true);
    navigate("/buy-pay-id");
  };
  
  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-0 border-none rounded-xl max-w-md w-full overflow-hidden">
        <div className="relative">
          {/* Header */}
          <div className="bg-[#442f94] p-5 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Buy PAY ID</h2>
              <button onClick={handleClose} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 bg-white min-h-[70vh] flex flex-col items-center justify-center">
            {showLoading ? (
              <>
                <div className="relative h-40 w-40 mb-8">
                  <div className="h-full w-full rounded-full border-4 border-gray-200"></div>
                  <div className="h-full w-full rounded-full border-t-4 border-[#442f94] absolute top-0 left-0 animate-spin"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">Confirming Payment</h2>
                <p className="text-gray-600 text-center text-lg">
                  Please wait while we verify your payment...
                </p>
              </>
            ) : success ? (
              <>
                <div className="bg-green-500 rounded-full p-6 mb-8">
                  <svg className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-green-500 text-center">Payment Successful!</h2>
                <p className="text-gray-600 text-center text-lg mb-8">
                  Your PAY ID has been successfully activated.
                </p>
                <Button 
                  onClick={handleBackToDashboard}
                  className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-xl py-6 rounded-xl"
                >
                  Go to Dashboard
                </Button>
              </>
            ) : (
              <>
                <div className="bg-[#f44336] rounded-full p-6 mb-8 w-32 h-32 flex items-center justify-center">
                  <X className="w-16 h-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#f97316] text-center">Transaction verification failed!</h2>
                <p className="text-gray-600 text-center text-lg mb-10">
                  Your payment could not be completed.<br />
                  Reason: Unable to validate account / invalid mobile money account.
                </p>
                <div className="w-full mb-8">
                  <div className="relative w-full">
                    <input 
                      type={showPassword ? "text" : "password"}
                      className="w-full border rounded-full py-4 px-5 text-lg"
                      placeholder="•••••••••••" 
                    />
                    <button 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      <Eye className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </div>
                <Button 
                  onClick={handleTryAgain}
                  className="w-full bg-[#7e3af2] hover:bg-[#6025d9] text-white text-xl py-6 rounded-full"
                >
                  Try Again
                </Button>
              </>
            )}
          </div>
          
          <div className="p-4 text-center text-gray-600">
            <p>PayGo Financial Services LTD</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionResult;
