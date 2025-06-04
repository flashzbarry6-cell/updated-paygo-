
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const TransferBank = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [payId, setPayId] = useState("");

  const banks = [
    "Access Bank", "Zenith Bank", "GTBank", "First Bank", "UBA", 
    "Fidelity Bank", "FCMB", "Sterling Bank", "Union Bank", "Wema Bank"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedBank || !accountNumber || !accountName || !amount || !payId) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Transfer initiated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-black">Transfer to Bank</h1>
        </header>
        
        <div className="p-6">
          {/* Available Balance Card */}
          <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-2xl p-6 text-white mb-8">
            <p className="text-white/80 mb-2">Available Balance</p>
            <h2 className="text-3xl font-bold">₦180,000.00</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Bank</label>
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger className="w-full h-12 border-gray-300 rounded-lg">
                  <SelectValue placeholder="Choose a bank" />
                </SelectTrigger>
                <SelectContent>
                  {banks.map((bank) => (
                    <SelectItem key={bank} value={bank}>
                      {bank}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <p className="text-sm text-gray-500 mt-2">
                Enter your PAY ID code to authorize withdrawal.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-lg py-6 rounded-full mt-8"
            >
              Transfer Money
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferBank;
