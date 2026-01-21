import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const getInitial = () => {
    return user.name ? user.name.charAt(0) : "C";
  };

  const getFirstName = () => {
    return user.name ? user.name.split(" ")[0] : "Charis";
  };

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    localStorage.removeItem("paygo-onboarding-completed");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar className="w-11 h-11 border-2 border-primary/50 shadow-glow-sm">
          <AvatarFallback className="text-lg font-bold bg-gradient-pink text-foreground">
            {getInitial()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg">👋</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Hi, {getFirstName()}</h1>
          <p className="text-xs text-muted-foreground">Welcome back!</p>
        </div>
      </div>
      <Button 
        onClick={handleLogout} 
        variant="outline" 
        className="glass-button bg-card/50 border-primary/30 text-muted-foreground hover:text-foreground hover:bg-primary/20 text-xs px-3 py-1 transition-all duration-300"
      >
        <LogOut size={12} className="mr-1" />
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
