
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EarnCardProps {
  title: string;
  description: string;
  reward: string;
  icon: string;
  action: () => void;
}

const EarnCard = ({ title, description, reward, icon, action }: EarnCardProps) => {
  return (
    <div className="bg-white rounded-xl border p-4 mb-4">
      <div className="flex items-center mb-3">
        <div className="text-2xl mr-3">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold">{reward}</span>
        <Button 
          onClick={action}
          className="bg-[#9b20f5] hover:bg-[#8b10e5] text-white px-6"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default EarnCard;
