
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";
import DataHeader from "@/components/telecom/DataHeader";
import DataPlanGrid from "@/components/telecom/DataPlanGrid";

const Data = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>("MTN");
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white w-full scale-75 origin-top">
        <DataHeader />

        <div className="p-2 space-y-2">
          <NetworkSelector 
            selectedNetwork={selectedNetwork}
            onNetworkSelect={setSelectedNetwork}
          />

          <PhoneNumberInput 
            value={phoneNumber}
            onChange={setPhoneNumber}
          />

          <DataPlanGrid 
            selectedPeriod="Daily"
            onBuyData={handleBuyData}
          />

          <PayIdInput 
            value={payId}
            onChange={setPayId}
          />

          <button 
            onClick={() => {
              if (!phoneNumber) {
                toast.error("Please enter a phone number");
                return;
              }
              
              if (!payId) {
                navigate("/buy-pay-id");
                return;
              }
              
              toast.success("Data purchase successful!");
            }}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Buy Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
