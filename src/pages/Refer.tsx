import { useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Users, DollarSign, TrendingUp } from "lucide-react";
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
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 flex items-center text-white shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-bold">Earn More</h1>
        </header>
        
        <div className="p-4 min-h-screen">
          {/* Refer & Earn Section */}
          <div className="glass-card p-5 mb-4 animate-fade-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">Refer & Earn</h2>
                <p className="text-muted-foreground text-sm">Invite friends and earn rewards</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-full">
                <Users className="text-primary" size={20} />
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-muted-foreground text-sm mb-1">Earn up to</p>
              <p className="text-3xl font-bold text-primary">₦5,000</p>
              <p className="text-muted-foreground text-sm">per successful referral</p>
            </div>
            
            <Button 
              onClick={handleShare}
              className="w-full bg-gradient-pink hover:opacity-90 text-white font-semibold py-3 shadow-button btn-glow"
            >
              <Share2 className="mr-2" size={16} />
              Share Referral Link
            </Button>
          </div>

          {/* Daily Pay Section */}
          <div className="glass-card p-5 mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">Daily Pay</h2>
                <p className="text-muted-foreground text-sm">Complete daily tasks</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full">
                <DollarSign className="text-green-500" size={20} />
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-muted-foreground text-sm mb-1">Earn daily up to</p>
              <p className="text-3xl font-bold text-green-500">₦1,000</p>
              <p className="text-muted-foreground text-sm">by completing simple tasks</p>
            </div>
            
            <Button 
              onClick={() => toast.info("Daily tasks coming soon!")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 shadow-button"
            >
              View Tasks
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="glass-card p-4 text-center">
              <Users className="mx-auto mb-2 text-primary" size={24} />
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground">Friends Referred</div>
            </div>
            <div className="glass-card p-4 text-center">
              <TrendingUp className="mx-auto mb-2 text-green-500" size={24} />
              <div className="text-2xl font-bold text-foreground">₦45,000</div>
              <div className="text-sm text-muted-foreground">Total Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;