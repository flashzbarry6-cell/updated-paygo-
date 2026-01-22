import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Crown, Gem, Star, Zap, Trophy, Shield, Diamond } from "lucide-react";

const UpgradeAccount = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = [
    { name: "Silver", icon: Gem, price: "₦5,500", color: "from-gray-400 to-gray-500" },
    { name: "Gold", icon: Trophy, price: "₦7,500", color: "from-yellow-400 to-yellow-600" },
    { name: "Platinum", icon: Zap, price: "₦10,000", color: "from-blue-400 to-blue-600" },
    { name: "Emerald", icon: Gem, price: "₦15,000", color: "from-green-400 to-green-600" },
    { name: "Ruby", icon: Star, price: "₦20,000", color: "from-red-400 to-red-600" },
    { name: "Diamond", icon: Diamond, price: "₦25,000", color: "from-purple-400 to-purple-600" },
    { name: "Black", icon: Crown, price: "₦50,000", color: "from-gray-800 to-black" }
  ];

  const handleLevelSelect = (levelName: string) => {
    setSelectedLevel(levelName);
    navigate(`/upgrade-benefits/${levelName.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 text-white flex items-center shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-bold">Upgrade Account</h1>
        </header>
        
        <div className="p-4">
          <div className="text-center mb-6 animate-fade-up">
            <h2 className="text-lg font-bold text-foreground mb-2">Choose Your Level</h2>
            <p className="text-muted-foreground text-sm">Select a level to view benefits and upgrade</p>
          </div>

          <div className="glass-card p-4 mb-6 animate-fade-up" style={{ animationDelay: '50ms' }}>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/20 p-3 rounded-full">
                <Shield className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Current Level</p>
                <p className="text-lg font-bold text-foreground">Basic</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Select Level to Upgrade</h3>
            <div className="grid grid-cols-2 gap-3">
              {levels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <div
                    key={level.name}
                    onClick={() => handleLevelSelect(level.name)}
                    className="glass-card p-4 text-center cursor-pointer hover:border-primary transition-all hover:scale-105 animate-fade-up"
                    style={{ animationDelay: `${(index + 2) * 50}ms` }}
                  >
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-1">{level.name}</h4>
                    <p className="text-primary text-sm font-semibold">{level.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeAccount;