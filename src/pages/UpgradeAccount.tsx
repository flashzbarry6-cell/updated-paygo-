
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
      <div className="w-full max-w-md bg-white">
        <header className="bg-[#9b20f5] p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold">Upgrade Account</h1>
        </header>
        
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Level</h2>
            <p className="text-gray-600">Select a level to view benefits and upgrade</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <span className="text-2xl">🥉</span>
              </div>
              <div>
                <p className="text-gray-600">Current Level</p>
                <p className="text-xl font-bold">Basic</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Select Level to Upgrade</h3>
            <div className="grid grid-cols-2 gap-4">
              {levels.map((level) => (
                <div
                  key={level.name}
                  onClick={() => handleLevelSelect(level.name)}
                  className={`${level.color} rounded-xl p-4 text-center cursor-pointer hover:shadow-md transition-shadow`}
                >
                  <div className="text-3xl mb-2">{level.icon}</div>
                  <h4 className="font-bold text-lg mb-1">{level.name}</h4>
                  <p className="text-sm font-semibold">{level.price}</p>
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
