
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AirtimeHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-2 text-white flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={16} />
        </Button>
        <h1 className="text-base font-bold">Airtime</h1>
      </header>
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-1.5 text-white flex items-center justify-between">
        <div>
          <span className="text-xs">Enjoy </span>
          <span className="text-yellow-300 font-bold text-xs">Bonuses!</span>
        </div>
        <Button className="bg-yellow-400 text-black font-bold px-2 py-0.5 rounded-full hover:bg-yellow-300 text-xs">
          GO
        </Button>
      </div>
    </div>
  );
};

export default AirtimeHeader;
