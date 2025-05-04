
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

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

    // Process transfer
    toast.success("Transfer initiated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-[#9b20f5] p-5 text-white">
        <h1 className="text-2xl font-bold">Transfer To Bank</h1>
      </header>
      
      <div className="p-5 flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input 
              placeholder="Account Name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="border-2 border-[#9b20f5]/50 rounded-3xl h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="border-2 border-[#9b20f5]/50 rounded-3xl h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Select value={bank} onValueChange={setBank}>
              <SelectTrigger className="border-2 border-[#9b20f5]/50 rounded-3xl h-14 text-lg">
                <SelectValue placeholder="Select Bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="access">Access Bank</SelectItem>
                <SelectItem value="firstbank">First Bank</SelectItem>
                <SelectItem value="gtb">GTBank</SelectItem>
                <SelectItem value="zenith">Zenith Bank</SelectItem>
                <SelectItem value="uba">UBA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input 
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-[#9b20f5]/50 rounded-3xl h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div>
            <Input 
              placeholder="Enter PAY ID Code"
              value={payId}
              onChange={(e) => setPayId(e.target.value)}
              className="border-2 border-[#9b20f5]/50 rounded-3xl h-14 text-lg placeholder:text-gray-400"
            />
          </div>
          
          <div className="text-[#9b20f5]">
            <p>
              Don't have a PAY ID?{" "}
              <button 
                type="button" 
                className="font-bold" 
                onClick={() => navigate("/buy-pay-id")}
              >
                Buy PAY ID
              </button>
            </p>
          </div>
          
          <div className="pt-2">
            <p className="text-lg font-semibold">Available Balance: ₦180000.00</p>
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-xl py-6 rounded-3xl"
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
