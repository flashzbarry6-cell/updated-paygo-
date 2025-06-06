
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PeriodSelector from "@/components/telecom/PeriodSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";
import DataHeader from "@/components/telecom/DataHeader";
import DataPlanGrid from "@/components/telecom/DataPlanGrid";

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
      <DataHeader />

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

        <DataPlanGrid 
          selectedPeriod={selectedPeriod}
          onBuyData={handleBuyData}
        />

        <PayIdInput 
          value={payId}
          onChange={setPayId}
        />
      </div>
    </div>
  );
};

export default Data;
