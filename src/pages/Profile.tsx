
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

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
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-black">Profile</h1>
        </header>
        
        <div className="p-4">
          {/* Profile Picture Section */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-600 text-2xl">👤</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Tap camera icon to change profile picture</p>
          </div>

          {/* Profile Information */}
          <div className="bg-purple-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600">👤</span>
                </div>
                <div>
                  <h3 className="font-medium">Profile Information</h3>
                  <p className="text-sm text-gray-600">View and edit your profile details</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-gray-600 text-sm">Full Name</label>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Phone</label>
              <p className="text-lg font-medium">{user.phone}</p>
            </div>
            <div>
              <label className="text-gray-600 text-sm">About</label>
              <p className="text-lg font-medium">PayGo user since 2023</p>
            </div>
          </div>

          {/* Help & Support */}
          <div 
            className="bg-green-50 rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => navigate("/support")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600">❓</span>
                </div>
                <div>
                  <h3 className="font-medium">Help & Support</h3>
                  <p className="text-sm text-gray-600">Get help with using PayGo</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* About PayGo */}
          <div 
            className="bg-blue-50 rounded-lg p-4 mb-6 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">ℹ️</span>
                </div>
                <div>
                  <h3 className="font-medium">About PayGo</h3>
                  <p className="text-sm text-gray-600">Learn more about PayGo services</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notifications</h3>
                <p className="text-sm text-gray-600">Enable/disable notifications</p>
              </div>
              <Switch 
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
          </div>

          {/* Logout Button */}
          <Button 
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
