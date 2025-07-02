
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const TransferSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transferData = location.state || {};

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-[#442f94] p-4 text-white">
          <h1 className="text-xl font-bold">Withdrawal Result</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Withdrawal Successful!</h2>
          <p className="text-gray-600 mb-8">Your withdrawal has been processed successfully.</p>
          
          <div className="w-full space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount:</span>
              <span className="font-bold">₦{transferData.amount || '0'}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bank:</span>
              <span className="font-bold">{transferData.bankName || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Number:</span>
              <span className="font-bold">{transferData.accountNumber || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Account Name:</span>
              <span className="font-bold">{transferData.accountName || 'N/A'}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-bold">TRX{Math.random().toString().substr(2, 8)}</span>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate("/dashboard")}
            className="w-full bg-[#442f94] hover:bg-[#372875] text-white text-lg py-6 rounded-lg"
          >
            Back to Dashboard
          </Button>
        </div>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p>PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default TransferSuccess;
