import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfirmation(false);
      setTimeout(() => {
        navigate("/payment-received");
      }, 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-[#442f94] p-3 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/bank-transfer")} />
          <h1 className="text-lg font-semibold">Confirming Payment</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center bg-gray-50 min-h-screen">
          <div className="mb-4">
            <div className="w-16 h-16 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Confirming Your Payment</h2>
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
