import { useNavigate } from "react-router-dom";
import { X, CheckCircle } from "lucide-react";
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
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="p-4 flex justify-end relative z-10">
        <div className="bg-primary/20 p-2 rounded-full cursor-pointer hover:bg-primary/30 transition-colors" onClick={handleClose}>
          <X className="text-primary" />
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center relative z-10">
        <div className="w-32 h-32 bg-gradient-pink rounded-full flex items-center justify-center mb-8 shadow-glow animate-fade-up">
          <CheckCircle className="w-16 h-16 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-primary mb-3 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Welcome to PAYGO!
        </h1>
        
        <div className="max-w-md mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
          <p className="text-lg text-center text-muted-foreground mb-12">
            We're excited to introduce you to the ultimate platform for earning opportunities! Our mission is to empower individuals with financial freedom.
          </p>
          
          <Button
            onClick={handleGetStarted} 
            className="w-full py-6 text-lg bg-gradient-pink hover:opacity-90 rounded-full shadow-button btn-glow"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;