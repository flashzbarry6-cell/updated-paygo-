
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Data = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>("MTN");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Daily");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [payId, setPayId] = useState<string>("");

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network);
  };

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  const handleBuyData = (amount: number, data: string) => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }
    
    if (!payId) {
      // Redirect to buy PAY ID if not available
      navigate("/buy-pay-id");
      return;
    }
    
    toast.success(`${data} data bundle purchase successful!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-[#442f94] p-5 text-white">
        <h1 className="text-2xl font-bold">Buy Data</h1>
      </header>

      {/* Banner */}
      <div className="bg-green-500 text-white p-4 relative">
        <div>
          <h2 className="text-2xl font-bold">
            Enjoy <span className="text-yellow-300">Glo's</span> Amazing 5X
          </h2>
          <p className="text-xl">Airtime Bonuses!</p>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full">
          GO
        </button>
        <button className="absolute right-2 top-2 text-white">✕</button>
      </div>

      {/* Network Selection */}
      <div className="p-4 bg-white">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            className={`p-4 rounded-full border ${
              selectedNetwork === "Airtel" ? "bg-gray-100" : "bg-white"
            }`}
            onClick={() => handleNetworkSelect("Airtel")}
          >
            Airtel
          </button>
          <button
            className={`p-4 rounded-full border ${
              selectedNetwork === "MTN" ? "bg-purple-600 text-white" : "bg-white"
            }`}
            onClick={() => handleNetworkSelect("MTN")}
          >
            MTN
          </button>
          <button
            className={`p-4 rounded-full border ${
              selectedNetwork === "Glo" ? "bg-gray-100" : "bg-white"
            }`}
            onClick={() => handleNetworkSelect("Glo")}
          >
            Glo
          </button>
          <button
            className={`p-4 rounded-full border ${
              selectedNetwork === "9mobile" ? "bg-gray-100" : "bg-white"
            }`}
            onClick={() => handleNetworkSelect("9mobile")}
          >
            9mobile
          </button>
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <Input 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter mobile number" 
            className="p-4 border rounded-full h-14"
          />
        </div>

        {/* Period Selection */}
        <div className="flex border-b mb-4">
          <button
            className={`pb-2 px-4 ${
              selectedPeriod === "Daily"
                ? "text-purple-600 border-b-2 border-purple-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => handlePeriodSelect("Daily")}
          >
            Daily
          </button>
          <button
            className={`pb-2 px-4 ${
              selectedPeriod === "Weekly"
                ? "text-purple-600 border-b-2 border-purple-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => handlePeriodSelect("Weekly")}
          >
            Weekly
          </button>
          <button
            className={`pb-2 px-4 ${
              selectedPeriod === "Monthly"
                ? "text-purple-600 border-b-2 border-purple-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => handlePeriodSelect("Monthly")}
          >
            Monthly
          </button>
        </div>

        {/* Data Plans */}
        {selectedPeriod === "Daily" && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyData(150, "200MB")}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">200MB</div>
              <div className="text-xl font-medium">₦150</div>
            </div>
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyData(200, "500MB")}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">500MB</div>
              <div className="text-xl font-medium">₦200</div>
            </div>
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyData(70, "100MB")}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">100MB</div>
              <div className="text-xl font-medium">₦70</div>
            </div>
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyData(350, "1GB")}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">1GB</div>
              <div className="text-xl font-medium">₦350</div>
            </div>
          </div>
        )}

        {/* Weekly and Monthly plans would be similar, but hiding for brevity */}
        {(selectedPeriod === "Weekly" || selectedPeriod === "Monthly") && (
          <div className="text-center py-8 text-gray-500">
            {selectedPeriod} plans coming soon
          </div>
        )}

        {/* PAY ID Input */}
        <div className="mt-8">
          <Input 
            value={payId} 
            onChange={(e) => setPayId(e.target.value)}
            placeholder="Enter PAY ID Code" 
            className="p-4 border rounded-full h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Data;
