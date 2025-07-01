
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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/profile")} />
          <h1 className="text-xl font-semibold text-black">Profile Information</h1>
        </header>
        
        <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
          {/* Profile Picture and Name */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-purple-200 rounded-full flex items-center justify-center mb-4 mx-auto border-4 border-purple-400">
              <div className="w-24 h-24 bg-purple-300 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-3xl">👤</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          </div>

          {/* Account Information Card */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Account Information</h3>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <User className="text-purple-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">Full Name</p>
                  <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">Email Address</p>
                  <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                </div>
              </div>

              {/* Country */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">Country</p>
                  <p className="text-lg font-semibold text-gray-800">Not specified</p>
                </div>
              </div>

              {/* Account Level */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-yellow-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">Account Level</p>
                  <p className="text-lg font-semibold text-gray-800">Basic</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">Account Status</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <p className="text-lg font-semibold text-gray-800">Active</p>
                  </div>
                </div>
              </div>

              {/* PAY ID Status */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="text-purple-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-sm">PAY ID Status</p>
                  <p className="text-lg font-semibold text-orange-600">Not Purchased</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
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
  );
};

export default ProfileInformation;
