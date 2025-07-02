
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UpgradeAccount = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = [
    { name: "Silver", icon: "💎", price: "₦5,500", color: "bg-gray-200" },
    { name: "Gold", icon: "🏆", price: "₦7,500", color: "bg-yellow-200" },
    { name: "Platinum", icon: "⚡", price: "₦10,000", color: "bg-blue-200" },
    { name: "Emerald", icon: "💎", price: "₦15,000", color: "bg-green-200" },
    { name: "Ruby", icon: "⭐", price: "₦20,000", color: "bg-red-200" },
    { name: "Diamond", icon: "👑", price: "₦25,000", color: "bg-purple-200" },
    { name: "Black", icon: "🔷", price: "₦50,000", color: "bg-black text-white" }
  ];

  const handleLevelSelect = (levelName: string) => {
    setSelectedLevel(levelName);
    navigate(`/upgrade-benefits/${levelName.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-[#9b20f5] p-3 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold">Upgrade Account</h1>
        </header>
        
        <div className="p-3">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Choose Your Level</h2>
            <p className="text-gray-600 text-sm">Select a level to view benefits and upgrade</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-orange-100 p-1.5 rounded-full">
                <span className="text-lg">🥉</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Current Level</p>
                <p className="text-lg font-bold">Basic</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Select Level to Upgrade</h3>
            <div className="grid grid-cols-2 gap-3">
              {levels.map((level) => (
                <div
                  key={level.name}
                  onClick={() => handleLevelSelect(level.name)}
                  className={`${level.color} rounded-xl p-3 text-center cursor-pointer hover:shadow-md transition-shadow`}
                >
                  <div className="text-2xl mb-1">{level.icon}</div>
                  <h4 className="font-bold text-base mb-0.5">{level.name}</h4>
                  <p className="text-xs font-semibold">{level.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeAccount;
