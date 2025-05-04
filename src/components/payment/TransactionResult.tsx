
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface TransactionResultProps {
  isOpen: boolean;
  onClose: () => void;
  success: boolean;
}

const TransactionResult = ({ isOpen, onClose, success }: TransactionResultProps) => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  
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
          <div className="p-6 bg-[#fff5f7] min-h-[70vh] flex flex-col items-center justify-center">
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
                <div className="bg-red-500 rounded-full p-6 mb-8">
                  <svg className="h-20 w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#f86a6a] text-center">Transaction verification failed!</h2>
                <p className="text-gray-600 text-center text-lg mb-10">
                  Your payment could not be completed.<br />
                  Reason: Unable to validate account / invalid mobile money account.
                </p>
                <div className="w-full mb-8">
                  <div className="relative w-full">
                    <input 
                      type="password" 
                      className="w-full border rounded-full py-4 px-5 text-lg"
                      placeholder="•••••••••••" 
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <Button 
                  onClick={handleTryAgain}
                  className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-xl py-6 rounded-xl"
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
