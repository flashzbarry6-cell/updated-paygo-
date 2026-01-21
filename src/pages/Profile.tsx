import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser({
        name: parsedUser.name || "User",
        email: parsedUser.email || "",
        phone: parsedUser.phone || ""
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("paygo-user");
    localStorage.removeItem("paygo-onboarding-completed");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const menuItems = [
    { icon: "👤", title: "Profile Information", desc: "View and edit your profile details", route: "/profile-information", gradient: "from-primary to-secondary" },
    { icon: "❓", title: "Help & Support", desc: "Get help with using PayGo", route: "/support", gradient: "from-teal-400 to-teal-600" },
    { icon: "ℹ️", title: "About", desc: "Learn more about PayGo", route: "/about", gradient: "from-blue-400 to-blue-600" },
    { icon: "💰", title: "Refer & Earn", desc: "Invite friends and earn ₦5,000", route: "/refer", gradient: "from-primary to-orange-500" },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-subtle-glow">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <header className="bg-gradient-pink p-3 flex items-center text-foreground">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold">Profile</h1>
        </header>
        
        <div className="p-4 min-h-screen relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Profile Picture */}
          <div className="text-center mb-6 relative z-10 animate-fade-up">
            <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-primary/50 shadow-glow">
              <span className="text-3xl">👤</span>
            </div>
            <p className="text-muted-foreground text-xs">Tap to change picture</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-3 relative z-10">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-3 cursor-pointer animate-fade-up hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => navigate(item.route)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mr-3 shadow-glow-sm`}>
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="mt-6 relative z-10 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button 
              onClick={handleLogout}
              className="w-full glass-card border-destructive/30 text-destructive hover:bg-destructive/10 py-3 rounded-xl font-semibold text-sm"
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

export default Profile;
