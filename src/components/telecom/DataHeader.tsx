
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DataHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-3 text-white flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-xl font-bold">Data</h1>
      </header>
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 text-white flex items-center justify-between">
        <div>
          <span className="text-sm">Enjoy </span>
          <span className="text-yellow-300 font-bold text-sm">Glo's</span>
          <span className="text-sm"> Amazing 5X Data</span>
          <br />
          <span className="text-sm font-bold">Bonuses!</span>
        </div>
        <Button className="bg-yellow-400 text-black font-bold px-4 py-1 rounded-full hover:bg-yellow-300 text-sm">
          GO
        </Button>
      </div>
    </div>
  );
};

export default DataHeader;
