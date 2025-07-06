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
        <header className="bg-[#442f94] p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/bank-transfer")} />
          <h1 className="text-xl font-bold">Confirming Payment</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[calc(100vh-120px)] bg-gray-50">
          <div className="mb-8">
            <div className="w-24 h-24 border-8 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirming Your Payment</h2>
          <p className="text-gray-600 mb-8 text-base">Please wait while we verify your transaction...</p>
          
          <div className="w-full max-w-xs bg-gray-300 rounded-full h-2 mb-8">
            <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: '30%', animationDuration: '2s' }}></div>
          </div>
          
          <p className="text-gray-500 text-base mb-2">This may take a few moments</p>
          <p className="text-gray-500 text-base">Please do not close this page</p>
        </div>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p className="text-base">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
