
import { useNavigate } from "react-router-dom";
import { X, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Refer = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText("https://paygo.app/join?ref=yourcode");
    toast.success("Invite link copied to clipboard!");
  };

  const handleStartReferring = () => {
    copyInviteLink();
  };

  const handleSignUpNow = () => {
    toast("Daily Pay feature coming soon!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="p-4 flex justify-between items-center bg-white border-b">
        <X onClick={handleClose} className="cursor-pointer" size={24} />
        <h1 className="text-xl font-semibold">Earn More</h1>
        <div className="w-6"></div>
      </div>
      
      <div className="flex-1 p-4 space-y-6">
        {/* Refer & Earn Section */}
        <div className="bg-gradient-to-r from-[#9b20f5] to-[#8b10e5] rounded-2xl p-6 text-white">
          <div className="flex items-start mb-4">
            <Share className="mr-3 mt-1" size={24} />
            <div>
              <h2 className="text-2xl font-bold mb-2">Refer & Earn</h2>
              <p className="text-lg mb-1">Earn ₦5,000 for each friend who joins</p>
            </div>
          </div>
          
          <p className="text-sm mb-6 opacity-90">
            Invite friends to PayGo and earn ₦5,000 for each friend who signs up using your referral link and purchases a PAY ID.
          </p>
          
          <Button 
            onClick={handleStartReferring}
            className="w-full bg-white text-[#9b20f5] font-semibold py-3 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <Share className="mr-2" size={16} />
            Start Referring Friends
          </Button>
        </div>

        {/* Daily Pay Section */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#9b20f5]">Daily Pay</h2>
          
          <p className="text-gray-600 text-lg">
            Take your earnings to the next level with Daily Pay.
          </p>
          
          <p className="text-gray-600">
            Access exclusive features and higher earning opportunities.
          </p>
          
          <p className="text-gray-600">
            Join thousands of users already maximizing their income.
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={handleSignUpNow}
              className="bg-[#9b20f5] hover:bg-[#8b10e5] text-white font-semibold py-3 px-8 rounded-lg"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
