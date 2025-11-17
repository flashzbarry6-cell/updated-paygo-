
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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#FF0055] to-[#FF1177]">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-[#FF0055] to-[#FF1177] p-3 flex items-center text-white">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold">Profile</h1>
        </header>
        
        <div className="p-4 bg-gradient-to-br from-[#FF0055] to-[#FF1177] min-h-screen">
          {/* Profile Picture Section */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-3 border-2 border-white shadow-lg">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👤</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white/20 rounded-full p-1 border border-white">
                <span className="text-white text-xs">📷</span>
              </div>
            </div>
            <p className="text-white/80 text-xs mt-1">Tap to change profile picture</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-3">
            {/* Profile Information */}
            <div 
              className="bg-white/90 rounded-xl p-3 cursor-pointer shadow-sm"
              onClick={() => navigate("/profile-information")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF0055] to-[#FF1177] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Profile Information</h3>
                    <p className="text-gray-500 text-xs">View and edit your profile details</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Help & Support */}
            <div 
              className="bg-white/90 rounded-xl p-3 cursor-pointer shadow-sm"
              onClick={() => navigate("/support")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">❓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Help & Support</h3>
                    <p className="text-gray-500 text-xs">Get help with using PayGo</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* About */}
            <div 
              className="bg-white/90 rounded-xl p-3 cursor-pointer shadow-sm"
              onClick={() => navigate("/about")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">ℹ️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">About</h3>
                    <p className="text-gray-500 text-xs">Learn more about PayGo</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Refer & Earn */}
            <div 
              className="bg-white/90 rounded-xl p-3 cursor-pointer shadow-sm"
              onClick={() => navigate("/refer")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ff6f43] to-[#ffaa43] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Refer & Earn</h3>
                    <p className="text-gray-500 text-xs">Invite friends and earn ₦5,000 per referral</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-6">
            <Button 
              onClick={handleLogout}
              className="w-full bg-white/90 border border-red-200 text-red-500 hover:bg-red-50 py-3 rounded-xl font-semibold text-sm"
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
