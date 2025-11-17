
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Refer = () => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join PayGo',
        text: 'Join PayGo and get amazing benefits!',
        url: 'https://paygo.app/invite/PAYGO123'
      });
    } else {
      navigator.clipboard.writeText('https://paygo.app/invite/PAYGO123');
      toast.success("Referral link copied to clipboard!");
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#9b20f5] to-[#ff6f43]">
      <div className="w-full max-w-sm bg-white shadow-lg">
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#8b10e5] p-3 flex items-center text-white">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold">Earn More</h1>
        </header>
        
        <div className="p-4 bg-gradient-to-br from-[#9b20f5] to-[#ff6f43] min-h-screen">
          {/* Refer & Earn Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold">Refer & Earn</h2>
                <p className="text-white/80 text-xs">Invite friends and earn rewards</p>
              </div>
              <div className="bg-white/20 p-2 rounded-full">
                <Users className="text-white" size={18} />
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-white/80 text-xs mb-1">Earn up to</p>
              <p className="text-2xl font-bold">₦5,000</p>
              <p className="text-white/80 text-xs">per successful referral</p>
            </div>
            
            <Button 
              onClick={handleShare}
              className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold text-sm py-2"
            >
              <Share2 className="mr-2" size={14} />
              Share Referral Link
            </Button>
          </div>

          {/* Daily Pay Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white mb-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg font-bold">Daily Pay</h2>
                <p className="text-white/80 text-xs">Complete daily tasks</p>
              </div>
              <div className="bg-white/20 p-2 rounded-full">
                <DollarSign className="text-white" size={18} />
              </div>
            </div>
            
            <div className="mb-3">
              <p className="text-white/80 text-xs mb-1">Earn daily up to</p>
              <p className="text-2xl font-bold">₦1,000</p>
              <p className="text-white/80 text-xs">by completing simple tasks</p>
            </div>
            
            <Button 
              onClick={() => toast.info("Daily tasks coming soon!")}
              className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold text-sm py-2"
            >
              View Tasks
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center text-white">
              <div className="text-xl font-bold">12</div>
              <div className="text-xs text-white/80">Friends Referred</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center text-white">
              <div className="text-xl font-bold">₦45,000</div>
              <div className="text-xs text-white/80">Total Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
