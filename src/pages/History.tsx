
import { useNavigate } from "react-router-dom";
import { X, Clock } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="p-4 flex justify-end">
        <div className="bg-[#9b87f5]/20 p-2 rounded-full cursor-pointer" onClick={handleClose}>
          <X className="text-[#9b87f5]" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-2">Transaction History</h1>
        <p className="text-xl text-gray-600 text-center mb-10">View your transaction history</p>
        
        <div className="w-full max-w-md flex flex-col items-center justify-center gap-4">
          <div className="p-6 rounded-full bg-gray-200">
            <Clock className="w-16 h-16 text-gray-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-700 mt-4">No history yet</h2>
          
          <p className="text-xl text-gray-500 text-center">
            Your transaction history will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
