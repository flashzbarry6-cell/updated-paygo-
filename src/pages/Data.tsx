import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import NetworkSelector from "@/components/telecom/NetworkSelector";
import PhoneNumberInput from "@/components/telecom/PhoneNumberInput";
import PayIdInput from "@/components/telecom/PayIdInput";
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
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-sm mx-auto bg-card-dark">
        {/* Header */}
        <header className="bg-gradient-pink p-4 text-white flex items-center shadow-glow">
          <ArrowLeft 
            className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => navigate("/dashboard")}
            size={20}
          />
          <h1 className="text-lg font-bold">Data</h1>
        </header>
        
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 text-white flex items-center justify-between">
          <div>
            <span className="text-sm">Enjoy Amazing </span>
            <span className="text-yellow-300 font-bold text-sm">5X Data Bonuses!</span>
          </div>
          <button className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full hover:bg-yellow-300 text-xs shadow-button">
            GO
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="animate-fade-up">
            <NetworkSelector 
              selectedNetwork={selectedNetwork}
              onNetworkSelect={setSelectedNetwork}
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '50ms' }}>
            <PhoneNumberInput 
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <DataPlanGrid 
              selectedPeriod="Daily"
              onBuyData={handleBuyData}
            />
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '150ms' }}>
            <PayIdInput 
              value={payId}
              onChange={setPayId}
            />
          </div>

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
            className="w-full bg-gradient-pink text-white py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-button btn-glow animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Buy Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;