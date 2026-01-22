import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";

interface PayIdInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PayIdInput = ({ value, onChange }: PayIdInputProps) => {
  return (
    <div className="mt-4">
      <div className="relative">
        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
        <Input 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter PAY ID Code" 
          className="pl-12 p-4 h-14 bg-card-dark border-border/50 rounded-2xl text-foreground focus:border-primary focus:ring-primary/20"
        />
      </div>
    </div>
  );
};

export default PayIdInput;