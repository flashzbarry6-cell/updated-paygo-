
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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#9b20f5] to-[#ff6f43]">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] p-3 flex items-center text-white">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/profile")} />
          <h1 className="text-lg font-semibold">Profile Information</h1>
        </header>
        
        <div className="p-4 bg-gradient-to-br from-[#9b20f5] to-[#ff6f43] min-h-screen">
          {/* Profile Picture and Name */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto border-2 border-white shadow-lg">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👤</span>
              </div>
            </div>
            <h2 className="text-lg font-bold text-white">{user.name}</h2>
          </div>

          {/* Account Information Card */}
          <div className="bg-white/90 rounded-xl p-4 mb-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Account Information</h3>
            
            <div className="space-y-4">
              {/* Full Name */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-full flex items-center justify-center mr-3">
                  <User className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Full Name</p>
                  <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Mail className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Email Address</p>
                  <p className="text-sm font-semibold text-gray-800">{user.email}</p>
                </div>
              </div>

              {/* Country */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3">
                  <Globe className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Country</p>
                  <p className="text-sm font-semibold text-gray-800">Not specified</p>
                </div>
              </div>

              {/* Account Level */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#ff6f43] to-[#ffaa43] rounded-full flex items-center justify-center mr-3">
                  <Award className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Account Level</p>
                  <p className="text-sm font-semibold text-gray-800">Basic</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">Account Status</p>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                    <p className="text-sm font-semibold text-gray-800">Active</p>
                  </div>
                </div>
              </div>

              {/* PAY ID Status */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-full flex items-center justify-center mr-3">
                  <CreditCard className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs">PAY ID Status</p>
                  <p className="text-sm font-semibold text-orange-600">Not Purchased</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
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
  );
};

export default ProfileInformation;
