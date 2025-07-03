
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";
import AirtimeHeader from "@/components/telecom/AirtimeHeader";
import AirtimePlanGrid from "@/components/telecom/AirtimePlanGrid";
import AirtimePurchaseButton from "@/components/telecom/AirtimePurchaseButton";

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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#9b20f5] to-[#ff6f43]">
      <div className="w-full max-w-sm bg-white shadow-lg">
        <AirtimeHeader />

        <div className="p-3 bg-white flex-1 overflow-y-auto">
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

          <AirtimePurchaseButton onBuyAirtime={handleBuyAirtime} />
        </div>
      </div>
    </div>
  );
};

export default Airtime;
