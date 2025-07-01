
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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-black">Profile</h1>
        </header>
        
        <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
          {/* Profile Picture Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center mb-4 border-4 border-purple-400">
                <div className="w-24 h-24 bg-purple-300 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">👤</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2 border-2 border-white">
                <span className="text-white text-sm">📷</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">Tap to change profile picture</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {/* Profile Information */}
            <div 
              className="bg-white rounded-2xl p-4 cursor-pointer shadow-sm"
              onClick={() => navigate("/profile-information")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Profile Information</h3>
                    <p className="text-gray-500 text-sm">View and edit your profile details</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* Help & Support */}
            <div 
              className="bg-white rounded-2xl p-4 cursor-pointer shadow-sm"
              onClick={() => navigate("/support")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">❓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Help & Support</h3>
                    <p className="text-gray-500 text-sm">Get help with using PayGo</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* About */}
            <div 
              className="bg-white rounded-2xl p-4 cursor-pointer shadow-sm"
              onClick={() => navigate("/about")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">ℹ️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">About</h3>
                    <p className="text-gray-500 text-sm">Learn more about PayGo</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>

            {/* Refer & Earn */}
            <div 
              className="bg-white rounded-2xl p-4 cursor-pointer shadow-sm"
              onClick={() => navigate("/refer")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-yellow-600 text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Refer & Earn</h3>
                    <p className="text-gray-500 text-sm">Invite friends and earn ₦5,000 per referral</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <Button 
              onClick={handleLogout}
              className="w-full bg-white border-2 border-red-200 text-red-500 hover:bg-red-50 py-4 rounded-2xl font-semibold text-lg"
              variant="outline"
            >
              <LogOut className="mr-2" size={20} />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
