
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <Button 
        className="bg-white/20 text-white border-white/30 rounded-full px-4 py-1 text-xs hover:bg-white/30" 
        onClick={() => navigate("/upgrade-account")}
      >
        ✓ Upgrade
      </Button>
      <Button 
        className="bg-white/20 text-white border-white/30 rounded-full px-4 py-1 text-xs hover:bg-white/30" 
        onClick={() => navigate("/transfer")}
      >
        ↑ Transfer
      </Button>
    </div>
  );
};

export default ActionButtons;
