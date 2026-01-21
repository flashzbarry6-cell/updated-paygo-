import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 justify-between">
      <Button 
        className="glass-button bg-primary/20 text-foreground border-primary/30 rounded-full px-4 py-2 text-xs hover:bg-primary/30 hover:shadow-glow transition-all duration-300 flex items-center gap-1.5" 
        onClick={() => navigate("/upgrade-account")}
      >
        <Sparkles size={14} />
        Upgrade
      </Button>
      <Button 
        className="bg-gradient-pink text-foreground border-none rounded-full px-4 py-2 text-xs hover:opacity-90 shadow-button transition-all duration-300 flex items-center gap-1.5 ml-auto btn-glow" 
        onClick={() => navigate("/transfer")}
      >
        <ArrowUpRight size={14} />
        Transfer
      </Button>
    </div>
  );
};

export default ActionButtons;
