
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UpgradeAccount = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = [
    { name: "Silver", icon: "💎", price: "₦5,500" },
    { name: "Gold", icon: "🏆", price: "₦7,500" },
    { name: "Platinum", icon: "⚡", price: "₦10,000" },
    { name: "Emerald", icon: "💎", price: "₦15,000" },
    { name: "Ruby", icon: "⭐", price: "₦20,000" },
    { name: "Diamond", icon: "👑", price: "₦25,000" },
    { name: "Black", icon: "🔷", price: "₦50,000" }
  ];

  const handleLevelSelect = (levelName: string) => {
    setSelectedLevel(levelName);
    navigate(`/upgrade-benefits/${levelName.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/dashboard")} />
            <h1 className="text-lg font-semibold text-foreground">Upgrade Account</h1>
          </header>
          
          <div className="p-3">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold text-foreground mb-1">Choose Your Level</h2>
              <p className="text-muted-foreground text-sm">Select a level to view benefits and upgrade</p>
            </div>

            <div className="mb-4">
              <div className="glass-card p-3 flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <span className="text-lg">🥉</span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Current Level</p>
                  <p className="text-lg font-bold text-foreground">Basic</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Select Level to Upgrade</h3>
              <div className="grid grid-cols-2 gap-3">
                {levels.map((level, index) => (
                  <div
                    key={level.name}
                    onClick={() => handleLevelSelect(level.name)}
                    className={`glass-card p-3 text-center cursor-pointer hover:border-primary/50 transition-all animate-fade-up stagger-${index + 1}`}
                  >
                    <div className="text-2xl mb-1">{level.icon}</div>
                    <h4 className="font-bold text-base text-foreground mb-0.5">{level.name}</h4>
                    <p className="text-xs font-semibold text-primary">{level.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeAccount;
