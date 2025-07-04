
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";
import AirtimeHeader from "@/components/telecom/AirtimeHeader";
import AirtimePlanGrid from "@/components/telecom/AirtimePlanGrid";

const Airtime = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>("MTN");
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
    <div className="h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-sm mx-auto bg-white h-3 w-10 scale-100 origin-center">
        <AirtimeHeader />

        <div className="p-2 space-y-2">
          <NetworkSelector 
            selectedNetwork={selectedNetwork}
            onNetworkSelect={setSelectedNetwork}
          />

          <PhoneNumberInput 
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          <AirtimePlanGrid 
            selectedPeriod="Daily"
            onBuyAirtime={handleBuyAirtime}
          />

          <PayIdInput 
            value={payId}
            onChange={setPayId}
          />

          <button 
            onClick={() => handleBuyAirtime(100, 2)}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Buy Airtime
          </button>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
