
import { Input } from "@/components/ui/input";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput = ({ value, onChange }: PhoneNumberInputProps) => {
  return (
    <div className="mb-4">
      <Input 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter mobile number" 
        className="p-4 border rounded-full h-14"
      />
    </div>
  );
};

export default PhoneNumberInput;
