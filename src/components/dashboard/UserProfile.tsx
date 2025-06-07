
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 bg-white/20 text-white">
          <AvatarFallback className="text-lg font-semibold bg-white/20 text-white">
            {getInitial()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xl">👋</span>
          </div>
          <h1 className="text-xl font-bold">Hi, {getFirstName()}</h1>
          <p className="text-xs opacity-90">Welcome back!</p>
        </div>
      </div>
      <Button 
        onClick={handleLogout} 
        variant="outline" 
        className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-3 py-1"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
