import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { X, ArrowLeft } from "lucide-react";

const TransferBank = () => {
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");
  const [payId, setPayId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accountName || !accountNumber || !bank || !amount || !payId) {
      toast.error("Please fill all fields");
      return;
    }

    // Redirect to the Buy PAY ID page
    toast.info("Redirecting to Buy PAY ID page for validation");
    navigate("/buy-pay-id");
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-[#9b20f5] p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <ArrowLeft className="mr-2" onClick={() => navigate("/dashboard")} />
          <h1 className="text-2xl font-bold">Transfer To Bank</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer" />
      </header>
      
      <div className="p-5 flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input 
              placeholder="Account Name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="border-2 border-[#9b20f5]/50 rounded-full h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="border-2 border-[#FFA500]/50 rounded-full h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Bank Name"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="border-2 border-[#E0F7FA]/80 rounded-full h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-[#FFDAB9]/80 rounded-full h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Enter PAY ID Code"
              value={payId}
              onChange={(e) => setPayId(e.target.value)}
              className="border-2 border-[#E6E6FA]/80 rounded-full h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div className="text-[#9b20f5] text-center">
            <p className="text-lg">
              Don't have a PAY ID? <a 
                href="/buy-pay-id"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/buy-pay-id");
                }}
                className="font-bold text-[#9b20f5]"
              >
                Buy PAY ID
              </a>
            </p>
          </div>
          
          <div className="pt-2">
            <p className="text-xl font-bold">Available Balance: ₦180,000</p>
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-xl py-6 rounded-full"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferBank;
