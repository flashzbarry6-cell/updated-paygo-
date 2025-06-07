
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DataHeader = () => {
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
        <h1 className="text-2xl font-bold">Data</h1>
      </header>
      
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white flex items-center justify-between">
        <div>
          <span className="text-lg">Enjoy </span>
          <span className="text-yellow-300 font-bold">Glo's</span>
          <span className="text-lg"> Amazing 5X Data</span>
          <br />
          <span className="text-lg font-bold">Bonuses!</span>
        </div>
        <Button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300">
          GO
        </Button>
      </div>
    </div>
  );
};

export default DataHeader;
