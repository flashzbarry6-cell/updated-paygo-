
import { Button } from "@/components/ui/button";

interface AirtimePurchaseButtonProps {
  onBuyAirtime: (amount: number, cashback: number) => void;
}

const AirtimePurchaseButton = ({ onBuyAirtime }: AirtimePurchaseButtonProps) => {
  return (
    <div className="mt-8">
      <Button 
        onClick={() => onBuyAirtime(100, 2)} 
        className="w-full bg-purple-500 text-white py-6 rounded-full"
      >
        Buy Airtime
      </Button>
    </div>
  );
};

export default AirtimePurchaseButton;
