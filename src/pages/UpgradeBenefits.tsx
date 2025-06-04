
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const UpgradeBenefits = () => {
  const navigate = useNavigate();
  const { level } = useParams<{ level: string }>();

  const getBenefits = (levelName: string) => {
    const benefits = {
      silver: {
        icon: "🛡️",
        price: "₦5,500",
        referral: "₦500",
        weekly: "₦5,000"
      },
      gold: {
        icon: "🏆", 
        price: "₦7,500",
        referral: "₦1,000",
        weekly: "₦10,000"
      },
      platinum: {
        icon: "⚡",
        price: "₦10,000", 
        referral: "₦2,000",
        weekly: "₦20,000"
      },
      emerald: {
        icon: "💎",
        price: "₦15,000",
        referral: "₦3,000", 
        weekly: "₦30,000"
      },
      ruby: {
        icon: "⭐",
        price: "₦20,000",
        referral: "₦4,000",
        weekly: "₦40,000"
      },
      diamond: {
        icon: "👑",
        price: "₦25,000",
        referral: "₦5,000",
        weekly: "₦50,000"
      },
      black: {
        icon: "🔷",
        price: "₦50,000", 
        referral: "₦10,000",
        weekly: "₦100,000"
      }
    };

    return benefits[levelName as keyof typeof benefits] || benefits.silver;
  };

  const currentLevel = level || "silver";
  const benefits = getBenefits(currentLevel);

  const handleProceedToPayment = () => {
    navigate("/payment-confirmation");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white">
        <header className="bg-[#9b20f5] p-4 text-white flex items-center">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/upgrade-account")} />
          <h1 className="text-xl font-semibold">Level Benefits</h1>
        </header>
        
        <div className="p-6">
          <div className="bg-gray-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-4">
                <span className="text-3xl">{benefits.icon}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold capitalize">{currentLevel} Level</h2>
                <p className="text-xl font-semibold">{benefits.price}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#9b20f5] mb-6">Benefits & Features</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-[#9b20f5] w-6 h-6" />
                <span className="text-lg">Earn {benefits.referral} per referral</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Check className="text-[#9b20f5] w-6 h-6" />
                <span className="text-lg">Weekly rewards of {benefits.weekly}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Check className="text-[#9b20f5] w-6 h-6" />
                <span className="text-lg">Basic customer support</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Check className="text-[#9b20f5] w-6 h-6" />
                <span className="text-lg">Access to standard features</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleProceedToPayment}
            className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-lg py-6 rounded-full mb-4"
          >
            Proceed to Payment
          </Button>

          <p className="text-center text-gray-600 text-sm">
            Your upgrade will be activated immediately after payment is confirmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeBenefits;
