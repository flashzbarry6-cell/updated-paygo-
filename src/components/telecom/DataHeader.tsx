
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DataHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-5 text-white flex items-center">
      <Button 
        variant="ghost" 
        className="p-0 mr-2" 
        onClick={() => navigate("/dashboard")}
      >
        <ArrowLeft size={24} />
      </Button>
      <h1 className="text-2xl font-bold">Buy Data</h1>
    </header>
  );
};

export default DataHeader;
