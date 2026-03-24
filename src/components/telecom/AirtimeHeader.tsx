
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AirtimeHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2 text-primary" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={18} />
        </Button>
        <h1 className="text-base font-bold text-foreground">Airtime</h1>
      </header>
      
      <div className="bg-primary/10 border-b border-primary/20 p-2 flex items-center justify-between">
        <div>
          <span className="text-foreground text-xs">Enjoy </span>
          <span className="text-primary font-bold text-xs">Bonuses!</span>
        </div>
        <Button className="bg-primary text-primary-foreground font-bold px-3 py-0.5 rounded-full hover:bg-primary/90 text-xs">
          GO
        </Button>
      </div>
    </div>
  );
};

export default AirtimeHeader;
