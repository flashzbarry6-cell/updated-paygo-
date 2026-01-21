import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-subtle-glow px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="text-center relative z-10 animate-fade-up">
        <h1 className="text-7xl font-bold text-primary mb-4 text-glow">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <Button 
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-pink hover:opacity-90 text-foreground shadow-button btn-glow"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
