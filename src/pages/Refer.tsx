
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
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-sm bg-white shadow-lg">
        <header className="bg-gradient-to-r from-[#9b20f5] to-[#8b10e5] p-4 flex items-center text-white">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold">Earn More</h1>
        </header>
        
        <div className="p-6">
          {/* Refer & Earn Section */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 mb-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Refer & Earn</h2>
                <p className="text-purple-100 text-sm">Invite friends and earn rewards</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Users className="text-white" size={24} />
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-purple-100 text-sm mb-2">Earn up to</p>
              <p className="text-3xl font-bold">₦5,000</p>
              <p className="text-purple-100 text-sm">per successful referral</p>
            </div>
            
            <Button 
              onClick={handleShare}
              className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            >
              <Share2 className="mr-2" size={16} />
              Share Referral Link
            </Button>
          </div>

          {/* Daily Pay Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Daily Pay</h2>
                <p className="text-green-100 text-sm">Complete daily tasks</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <DollarSign className="text-white" size={24} />
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-green-100 text-sm mb-2">Earn daily up to</p>
              <p className="text-3xl font-bold">₦1,000</p>
              <p className="text-green-100 text-sm">by completing simple tasks</p>
            </div>
            
            <Button 
              onClick={() => toast.info("Daily tasks coming soon!")}
              className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold"
            >
              View Tasks
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-purple-500">Friends Referred</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">₦45,000</div>
              <div className="text-sm text-green-500">Total Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
