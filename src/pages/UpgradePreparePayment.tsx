
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const UpgradePreparePayment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/upgrade-bank-transfer", { state: location.state });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-[#442f94] p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/upgrade-payment")} />
          <h1 className="text-xl font-bold">Upgrade Payment</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preparing Payment Account</h2>
          <p className="text-gray-600 mb-8">Please wait while we set up your payment...</p>
        </div>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p>PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default UpgradePreparePayment;
