
import { Input } from "@/components/ui/input";

interface PayIdInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PayIdInput = ({ value, onChange }: PayIdInputProps) => {
  return (
    <div className="mt-8">
      <Input 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter PAY ID Code" 
        className="p-4 border rounded-full h-14"
      />
    </div>
  );
};

export default PayIdInput;
