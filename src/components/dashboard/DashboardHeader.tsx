
import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardHeader = () => {
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Get first letter of user's name for avatar
  const getInitial = () => {
    return user.name ? user.name.charAt(0) : "C";
  };

  // Split the name to show "Hi, [FirstName]"
  const getFirstName = () => {
    return user.name ? user.name.split(" ")[0] : "Charis";
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#fff6f9]">
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 bg-[#e8f4f9] text-black">
          <AvatarFallback className="text-xl font-semibold">{getInitial()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-gray-800">PayGo</h1>
          <p className="text-sm text-gray-600">Hi, {getFirstName()}</p>
        </div>
      </div>
      <div className="text-gray-700">
        <Bell size={24} />
      </div>
    </header>
  );
};

export default DashboardHeader;
