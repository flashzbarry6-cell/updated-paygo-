
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, XCircle } from "lucide-react";

const UpgradePaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-red-600 p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/upgrade-bank-transfer")} />
          <h1 className="text-xl font-bold">PAY ID FAILED</h1>
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
          </div>
          
          <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h2>
          <p className="text-gray-600 mb-8">Your upgrade payment could not be processed. Please check your details and try again.</p>
          
          <div className="space-y-4 w-full">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white text-lg py-6 rounded-full"
            >
              Continue to Dashboard
            </Button>
            
            <Button 
              onClick={() => navigate("/upgrade-bank-transfer")}
              variant="outline"
              className="w-full text-lg py-6 rounded-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
            >
              Recheck
            </Button>
          </div>
        </div>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p>PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default UpgradePaymentFailed;
