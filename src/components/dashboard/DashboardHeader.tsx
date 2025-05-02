
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

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10 bg-[#FFDDBA]">
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold">PayGo</h1>
          <p className="text-sm">Hi, {user.name}</p>
        </div>
      </div>
      <div>
        <Bell size={24} />
      </div>
    </header>
  );
};

export default DashboardHeader;
