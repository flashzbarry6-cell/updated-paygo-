
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PeriodSelector from "@/components/telecom/PeriodSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";

const Data = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>("MTN");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Daily");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [payId, setPayId] = useState<string>("");

  const handleBuyData = (amount: number, data: string) => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }
    
    if (!payId) {
      navigate("/buy-pay-id");
      return;
    }
    
    toast.success(`${data} data bundle purchase successful!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-5 text-white flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-bold">Buy Data</h1>
      </header>

      <div className="p-4 bg-white">
        <NetworkSelector 
          selectedNetwork={selectedNetwork}
          onNetworkSelect={setSelectedNetwork}
        />

        <PhoneNumberInput 
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <PeriodSelector 
          selectedPeriod={selectedPeriod}
          onPeriodSelect={setSelectedPeriod}
        />

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

        {(selectedPeriod === "Weekly" || selectedPeriod === "Monthly") && (
          <div className="text-center py-8 text-gray-500">
            {selectedPeriod} plans coming soon
          </div>
        )}

        <PayIdInput 
          value={payId}
          onChange={setPayId}
        />
      </div>
    </div>
  );
};

export default Data;
