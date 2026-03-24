
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const UpgradeBenefits = () => {
  const navigate = useNavigate();
  const { level } = useParams<{ level: string }>();

  const getBenefits = (levelName: string) => {
    const benefits = {
      silver: { icon: "🛡️", price: "₦5,500", referral: "₦500", weekly: "₦5,000" },
      gold: { icon: "🏆", price: "₦7,500", referral: "₦1,000", weekly: "₦10,000" },
      platinum: { icon: "⚡", price: "₦10,000", referral: "₦2,000", weekly: "₦20,000" },
      emerald: { icon: "💎", price: "₦15,000", referral: "₦3,000", weekly: "₦30,000" },
      ruby: { icon: "⭐", price: "₦20,000", referral: "₦4,000", weekly: "₦40,000" },
      diamond: { icon: "👑", price: "₦25,000", referral: "₦5,000", weekly: "₦50,000" },
      black: { icon: "🔷", price: "₦50,000", referral: "₦10,000", weekly: "₦100,000" }
    };
    return benefits[levelName as keyof typeof benefits] || benefits.silver;
  };

  const currentLevel = level || "silver";
  const benefits = getBenefits(currentLevel);

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/upgrade-account")} />
            <h1 className="text-xl font-semibold text-foreground">Level Benefits</h1>
          </header>
          
          <div className="p-5">
            <div className="glass-card p-5 mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-4">
                  <span className="text-3xl">{benefits.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold capitalize text-foreground">{currentLevel} Level</h2>
                  <p className="text-xl font-semibold text-primary">{benefits.price}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-4">Benefits & Features</h3>
              
              <div className="space-y-3">
                {[
                  `Earn ${benefits.referral} per referral`,
                  `Weekly rewards of ${benefits.weekly}`,
                  "Basic customer support",
                  "Access to standard features"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 glass-card p-3">
                    <Check className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => navigate(`/upgrade-payment/${currentLevel}`)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-full mb-4 btn-glow"
            >
              Proceed to Payment
            </Button>

            <p className="text-center text-muted-foreground text-sm">
              Your upgrade will be activated immediately after payment is confirmed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeBenefits;
