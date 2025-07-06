import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const TransferBank = () => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [payId, setPayId] = useState("");
  const [balance, setBalance] = useState("₦180,000.00");

  useEffect(() => {
    // Get balance from localStorage and format it
    const storedBalance = localStorage.getItem("paygo-balance");
    const currentBalance = storedBalance ? parseFloat(storedBalance) : 180000;
    
    const formattedBalance = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(currentBalance).replace('NGN', '₦');

    setBalance(formattedBalance);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bankName || !accountNumber || !accountName || !amount || !payId) {
      toast.error("Please fill all fields");
      return;
    }

    // Show invalid PAY ID notification and navigate to buy pay ID page
    toast.error("Invalid PAY ID. Please purchase a valid PAY ID to continue.");
    setTimeout(() => {
      navigate("/buy-pay-id");
    }, 2000);
  };

  const handleBuyId = () => {
    navigate("/buy-pay-id");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white relative">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-black">Transfer to Bank</h1>
        </header>
        
        <div className="p-4">
          {/* Available Balance Card */}
          <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-2xl p-4 text-white mb-6">
            <p className="text-white/80 mb-2">Available Balance</p>
            <h2 className="text-2xl font-bold">{balance}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Bank</label>
              <Input 
                placeholder="Choose a bank"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="h-12 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Account Number</label>
              <Input 
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="h-12 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Account Name</label>
              <Input 
                placeholder="Enter account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                className="h-12 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Amount</label>
              <Input 
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-12 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">PAY ID Code</label>
              <Input 
                placeholder="Enter PAY ID Code"
                value={payId}
                onChange={(e) => setPayId(e.target.value)}
                className="h-12 border-gray-300 rounded-lg"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-lg py-6 rounded-full mt-6"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Buy ID Link - moved to bottom right */}
        <div className="fixed bottom-4 right-4">
          <button 
            onClick={handleBuyId}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm cursor-pointer transition-colors"
          >
            Buy ID Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferBank;
