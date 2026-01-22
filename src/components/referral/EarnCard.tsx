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
    <div className="glass-card p-4 mb-3 animate-fade-up">
      <div className="flex items-center mb-3">
        <div className="text-2xl mr-3 bg-primary/20 p-2 rounded-full">{icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-foreground text-base">{title}</h3>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-primary font-bold text-sm">{reward}</span>
        <Button 
          onClick={action}
          className="bg-gradient-pink hover:opacity-90 text-white px-4 py-2 text-sm shadow-button btn-glow"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default EarnCard;