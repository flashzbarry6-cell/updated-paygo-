import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment-verification-failed");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-3 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/bank-transfer")} />
          <h1 className="text-lg font-bold">Confirming Payment</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center bg-gray-50 min-h-screen">
          <div className="mb-4">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
              <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-orange-400 border-r-orange-500 animate-spin bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-80" style={{
                background: 'conic-gradient(from 0deg, #f97316, #eab308, #f97316)',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))'
              }}></div>
            </div>
          </div>
          
          <h2 className="text-lg font-bold text-gray-800 mb-2">Confirming Your Payment</h2>
          <p className="text-gray-600 mb-4 text-xs">Please wait while we verify your transaction...</p>
        </div>
        
        <footer className="bg-gray-100 p-3 text-center text-gray-600">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
