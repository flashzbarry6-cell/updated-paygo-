
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BuyPayId = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("₦6,500");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email) {
      toast.error("Please fill all fields");
      return;
    }

    // Process payment
    toast.success("Payment successful! Your PAY ID will be displayed soon.");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#442f94] p-5 text-white">
        <h1 className="text-2xl font-bold">Buy PAY ID</h1>
      </header>
      
      <div className="p-5 flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-700 text-lg">Amount</label>
            <Input 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-200 rounded-xl h-14 text-lg bg-gray-100"
              readOnly
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-700 text-lg">Full Name</label>
            <Input 
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border-2 border-gray-200 rounded-xl h-14 text-lg"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-700 text-lg">Your Email Address</label>
            <Input 
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-200 rounded-xl h-14 text-lg"
            />
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-[#9b87f5] hover:bg-[#8b77e5] text-white text-xl py-6 rounded-xl"
            >
              Pay
            </Button>
          </div>
          
          <div className="text-center text-gray-600 pt-4">
            <p>Your PAY ID will be displayed on the app once your payment is confirmed.</p>
          </div>
        </form>
      </div>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>PayGo Financial Services LTD</p>
      </footer>
    </div>
  );
};

export default BuyPayId;
