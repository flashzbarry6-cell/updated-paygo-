
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fff6f9]">
      <div className="p-4 flex justify-end">
        <div className="bg-[#9b87f5] bg-opacity-20 p-2 rounded-full cursor-pointer" onClick={handleClose}>
          <X className="text-[#9b87f5]" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center">
        <div className="w-40 h-40 bg-[#FFE599] rounded-full flex items-center justify-center mb-10">
          <span className="text-7xl font-bold">P</span>
        </div>
        
        <h1 className="text-5xl font-bold text-[#9b87f5] mb-3">Welcome to PAYGO! ✓</h1>
        
        <div className="max-w-md mx-auto">
          <p className="text-xl text-center text-gray-700 mb-12">
            We're excited to introduce you to the ultimate platform for earning opportunities! Our mission is to empower individuals with financial freedom.
          </p>
        
          <h2 className="text-3xl font-bold text-[#9b87f5] text-center mb-10">
            Get Started with a Generous Welcome
          </h2>
          
          <Button
            onClick={handleGetStarted} 
            className="w-full py-6 text-xl bg-[#9b87f5] hover:bg-[#8a76e4] rounded-full mt-8"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
