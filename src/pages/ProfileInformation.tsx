import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Globe, Award, CheckCircle, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const ProfileInformation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser({
        name: parsedUser.name || "Charis Benjamin",
        email: parsedUser.email || "benjamincharis15@gmail.com",
        phone: parsedUser.phone || "+234 801 234 5678"
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    localStorage.removeItem("paygo-onboarding-completed");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 flex items-center text-white shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/profile")} />
          <h1 className="text-lg font-bold">Profile Information</h1>
        </header>
        
        <div className="p-4 min-h-screen">
          {/* Profile Picture and Name */}
          <div className="text-center mb-6 animate-fade-up">
            <div className="w-24 h-24 bg-gradient-pink rounded-full flex items-center justify-center mb-3 mx-auto shadow-glow">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-lg font-bold text-foreground">{user.name}</h2>
          </div>

          {/* Account Information Card */}
          <div className="glass-card p-5 mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-bold text-foreground mb-4">Account Information</h3>
            
            <div className="space-y-4">
              {/* Full Name */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-pink rounded-full flex items-center justify-center mr-3 shadow-glow">
                  <User className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">Full Name</p>
                  <p className="text-sm font-semibold text-foreground">{user.name}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Mail className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">Email Address</p>
                  <p className="text-sm font-semibold text-foreground">{user.email}</p>
                </div>
              </div>

              {/* Country */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Globe className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">Country</p>
                  <p className="text-sm font-semibold text-foreground">Not specified</p>
                </div>
              </div>

              {/* Account Level */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <Award className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">Account Level</p>
                  <p className="text-sm font-semibold text-foreground">Basic</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">Account Status</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <p className="text-sm font-semibold text-foreground">Active</p>
                  </div>
                </div>
              </div>

              {/* PAY ID Status */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-pink rounded-full flex items-center justify-center mr-3 shadow-glow">
                  <CreditCard className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs">PAY ID Status</p>
                  <p className="text-sm font-semibold text-orange-500">Not Purchased</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <Button 
            onClick={handleLogout}
            className="w-full glass-card border border-red-500/50 text-red-500 hover:bg-red-500/10 py-4 rounded-xl font-semibold text-sm animate-fade-up"
            variant="outline"
            style={{ animationDelay: '200ms' }}
          >
            <LogOut className="mr-2" size={18} />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;