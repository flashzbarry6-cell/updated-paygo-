
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Loan = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };
  
  const handleBuyPayId = () => {
    navigate("/buy-pay-id");
  };

  const handleSubmitApplication = () => {
    toast.success("Loan application submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fff6f9]">
      <header className="bg-[#9b87f5] p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <ArrowLeft className="mr-2 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-2xl font-bold">Apply for Loan</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer" />
      </header>
      
      <div className="flex-1 p-5 flex flex-col">
        <div className="mt-8 space-y-8">
          {/* Loan Amount Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Loan Amount (₦)</h2>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="w-full p-6 rounded-full text-xl border-2 border-[#9b87f5] focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
              />
            </div>
            <p className="mt-2 text-gray-500">Minimum: ₦100,000 | Maximum: ₦250,000</p>
          </div>
          
          {/* Loan Type Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Loan Type</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-center mb-2">Free Loan</h3>
                <p className="text-center text-gray-500">No repayment required</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-center mb-2">SLF Loan</h3>
                <p className="text-center text-gray-500">5% processing fee</p>
              </div>
            </div>
          </div>
          
          {/* PAY ID Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">PAY ID Code</h2>
            <input 
              type="text" 
              placeholder="Enter PAY ID Code" 
              className="w-full p-6 rounded-full text-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
            />
            <p 
              className="mt-3 text-[#9b87f5] text-xl font-semibold cursor-pointer"
              onClick={handleBuyPayId}
            >
              Don't have a PAY ID? Buy one now
            </p>
          </div>
          
          <Button 
            className="w-full py-8 text-xl bg-[#9b87f5] hover:bg-[#8a76e4] rounded-full"
            onClick={handleSubmitApplication}
          >
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loan;
