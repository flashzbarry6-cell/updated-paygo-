
import { useNavigate } from "react-router-dom";
import { X, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ReferralStats from "@/components/referral/ReferralStats";
import EarnCard from "@/components/referral/EarnCard";

const Refer = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText("https://paygo.app/join?ref=yourcode");
    toast.success("Invite link copied to clipboard!");
  };

  const handleWatchAds = () => {
    toast("Watch ads feature coming soon!");
  };

  const handleCompleteOffers = () => {
    toast("Complete offers feature coming soon!");
  };

  const handleDailyCheckin = () => {
    toast.success("Daily check-in completed! ₦50 earned.");
  };

  const handleShareSocial = () => {
    toast("Share on social media feature coming soon!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="p-4 flex justify-end bg-white">
        <X onClick={handleClose} className="cursor-pointer" size={24} />
      </div>
      
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold text-center mb-2">Earn More</h1>
        <p className="text-gray-600 text-center mb-6">Refer friends and complete tasks to earn rewards</p>
        
        <ReferralStats />

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Earning Opportunities</h2>
          
          <EarnCard
            title="Daily Check-in"
            description="Check in daily to earn rewards"
            reward="₦50/day"
            icon="📅"
            action={handleDailyCheckin}
          />

          <EarnCard
            title="Watch Ads"
            description="Watch short video ads to earn points"
            reward="₦20/ad"
            icon="📺"
            action={handleWatchAds}
          />

          <EarnCard
            title="Complete Offers"
            description="Complete simple tasks and surveys"
            reward="₦100-500"
            icon="✅"
            action={handleCompleteOffers}
          />

          <EarnCard
            title="Social Share"
            description="Share PayGo on your social media"
            reward="₦100/share"
            icon="📱"
            action={handleShareSocial}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Refer Friends</h2>
          <div className="bg-white rounded-xl p-4 border text-center">
            <div className="text-4xl mb-2">🎁</div>
            <h3 className="font-semibold mb-2">Invite Friends & Earn</h3>
            <p className="text-gray-600 text-sm mb-4">
              Earn ₦500 for each friend who joins and makes their first purchase
            </p>
            <Button 
              onClick={copyInviteLink}
              className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white py-3 rounded-full"
            >
              <Share2 className="mr-2" size={16} />
              Copy Invite Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
