
import { Button } from "@/components/ui/button";

interface EarnCardProps {
  title: string;
  description: string;
  reward: string;
  icon: string;
  action: () => void;
}

const EarnCard = ({ title, description, reward, icon, action }: EarnCardProps) => {
  return (
    <div className="bg-white rounded-lg border p-3 mb-3">
      <div className="flex items-center mb-2">
        <div className="text-xl mr-2">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold text-sm">{reward}</span>
        <Button 
          onClick={action}
          className="bg-[#9b20f5] hover:bg-[#8b10e5] text-white px-4 py-1 text-sm"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default EarnCard;
