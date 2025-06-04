
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const UpgradePaymentConfirmation = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfirmation(false);
      setTimeout(() => {
        navigate("/upgrade-payment-failed");
      }, 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-[#442f94] p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/upgrade-bank-transfer")} />
          <h1 className="text-xl font-bold">Payment Confirmation</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          {showConfirmation ? (
            <>
              <div className="w-24 h-24 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirming Your Payment</h2>
              <p className="text-gray-600">Please wait while we process your upgrade...</p>
            </>
          ) : (
            <>
              <div className="w-24 h-24 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">Processing...</h2>
              <p className="text-gray-600">Verifying payment details...</p>
            </>
          )}
        </div>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p>PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default UpgradePaymentConfirmation;
