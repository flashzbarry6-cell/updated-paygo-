
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PreparePayment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to bank transfer page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/bank-transfer", { state: location.state });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-3 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/buy-pay-id")} />
          <h1 className="text-lg font-bold">Buy PAY ID</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-gray-50 min-h-screen">
          <div className="mb-6">
            <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3">Preparing Payment Account</h2>
          <p className="text-gray-600 mb-6 text-sm">Please wait while we set up your payment...</p>
        </div>
        
        <footer className="bg-gray-100 p-3 text-center text-gray-600">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default PreparePayment;
