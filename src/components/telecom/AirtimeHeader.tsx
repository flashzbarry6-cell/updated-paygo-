
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AirtimeHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-5 text-white flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-bold">Airtime</h1>
      </header>
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white flex items-center justify-between">
        <div>
          <span className="text-lg">Enjoy </span>
          <span className="text-yellow-300 font-bold">Airtime Bonuses!</span>
        </div>
        <Button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300">
          GO
        </Button>
      </div>
    </div>
  );
};

export default AirtimeHeader;
