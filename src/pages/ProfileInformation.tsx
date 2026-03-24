
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

  const infoItems = [
    { icon: User, label: "Full Name", value: user.name, gradient: "bg-primary/20" },
    { icon: Mail, label: "Email Address", value: user.email, gradient: "bg-primary/20" },
    { icon: Globe, label: "Country", value: "Not specified", gradient: "bg-primary/20" },
    { icon: Award, label: "Account Level", value: "Basic", gradient: "bg-primary/20" },
    { icon: CheckCircle, label: "Account Status", value: "Active", isActive: true, gradient: "bg-primary/20" },
    { icon: CreditCard, label: "PAY ID Status", value: "Not Purchased", isWarning: true, gradient: "bg-primary/20" },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/profile")} />
            <h1 className="text-lg font-semibold text-foreground">Profile Information</h1>
          </header>
          
          <div className="p-4">
            {/* Profile Picture and Name */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mb-3 mx-auto animate-glow-pulse">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-lg font-bold text-foreground">{user.name}</h2>
            </div>

            {/* Account Information Card */}
            <div className="glass-card p-4 mb-6">
              <h3 className="text-base font-bold text-foreground mb-4">Account Information</h3>
              
              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-8 h-8 ${item.gradient} rounded-full flex items-center justify-center mr-3`}>
                      <item.icon className="text-primary" size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground text-xs">{item.label}</p>
                      <div className="flex items-center">
                        {item.isActive && <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1" />}
                        <p className={`text-sm font-semibold ${item.isWarning ? 'text-primary' : 'text-foreground'}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <Button 
              onClick={handleLogout}
              className="w-full bg-destructive/20 border border-destructive/30 text-destructive hover:bg-destructive/30 py-3 rounded-xl font-semibold text-sm"
              variant="outline"
            >
              <LogOut className="mr-2" size={16} />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
