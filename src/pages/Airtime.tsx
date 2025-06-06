
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PeriodSelector from "@/components/telecom/PeriodSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";

const Airtime = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>("MTN");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Daily");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [payId, setPayId] = useState<string>("");

  const handleBuyAirtime = (amount: number, cashback: number) => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }
    
    if (!payId) {
      navigate("/buy-pay-id");
      return;
    }
    
    toast.success(`₦${amount} airtime purchase successful! ₦${cashback} cashback earned.`);
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
        <h1 className="text-2xl font-bold">Airtime</h1>
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
              onClick={() => handleBuyAirtime(50, 1)}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">₦50</div>
              <div className="text-xl font-medium">₦1 Cashback</div>
            </div>
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyAirtime(100, 2)}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">₦100</div>
              <div className="text-xl font-medium">₦2 Cashback</div>
            </div>
            <div 
              className="rounded-3xl border p-4 text-center cursor-pointer"
              onClick={() => handleBuyAirtime(200, 3)}
            >
              <div className="text-lg text-gray-500">1 DAY</div>
              <div className="text-4xl font-bold my-2">₦200</div>
              <div className="text-xl font-medium">₦3 Cashback</div>
            </div>
          </div>
        )}

        {(selectedPeriod === "Weekly" || selectedPeriod === "Monthly") && (
          <div className="text-center py-8 text-gray-500">
            {selectedPeriod} options coming soon
          </div>
        )}

        <PayIdInput 
          value={payId}
          onChange={setPayId}
        />

        <div className="mt-8">
          <Button 
            onClick={() => handleBuyAirtime(100, 2)} 
            className="w-full bg-purple-500 text-white py-6 rounded-full"
          >
            Buy Airtime
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
