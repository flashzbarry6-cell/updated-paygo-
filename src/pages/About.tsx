
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
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="p-4 flex justify-end">
            <div className="bg-primary/20 p-2 rounded-full cursor-pointer" onClick={handleClose}>
              <X className="text-primary" />
            </div>
          </div>
          
          <div className="flex-1 p-5 flex flex-col items-center">
            <img 
              src="/lovable-uploads/a7fcb042-8bad-43ed-9a4e-7d8555c7f2ca.png" 
              alt="Welcome Bonus" 
              className="w-full max-w-md mb-8"
            />
            
            <h1 className="text-4xl font-bold text-primary mb-3 text-glow">Welcome to PAYGO! ✓</h1>
            
            <div className="max-w-md mx-auto">
              <p className="text-lg text-center text-muted-foreground mb-12">
                We're excited to introduce you to the ultimate platform for earning opportunities! Our mission is to empower individuals with financial freedom.
              </p>
              
              <Button
                onClick={handleGetStarted} 
                className="w-full py-6 text-xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-full btn-glow"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
