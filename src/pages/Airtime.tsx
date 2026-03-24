
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
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <AirtimeHeader />

          <div className="p-3 space-y-3">
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
              className="w-full bg-pink-gradient text-primary-foreground py-3 rounded-full font-semibold text-sm btn-glow"
            >
              Buy Airtime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
