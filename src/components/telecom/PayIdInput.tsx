
import { Input } from "@/components/ui/input";

interface PayIdInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PayIdInput = ({ value, onChange }: PayIdInputProps) => {
  return (
    <div className="mt-4">
      <Input 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter PAY ID Code" 
        className="p-4 bg-input border-border rounded-full h-12 text-foreground placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default PayIdInput;
