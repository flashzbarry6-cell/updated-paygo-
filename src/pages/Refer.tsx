
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
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/dashboard")} />
            <h1 className="text-lg font-semibold text-foreground">Earn More</h1>
          </header>
          
          <div className="p-4 space-y-4">
            {/* Refer & Earn Section */}
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Refer & Earn</h2>
                  <p className="text-muted-foreground text-xs">Invite friends and earn rewards</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <Users className="text-primary" size={18} />
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-muted-foreground text-xs mb-1">Earn up to</p>
                <p className="text-2xl font-bold text-foreground">₦5,000</p>
                <p className="text-muted-foreground text-xs">per successful referral</p>
              </div>
              
              <Button 
                onClick={handleShare}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm py-2 btn-glow"
              >
                <Share2 className="mr-2" size={14} />
                Share Referral Link
              </Button>
            </div>

            {/* Daily Pay Section */}
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Daily Pay</h2>
                  <p className="text-muted-foreground text-xs">Complete daily tasks</p>
                </div>
                <div className="bg-primary/20 p-2 rounded-full">
                  <DollarSign className="text-primary" size={18} />
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-muted-foreground text-xs mb-1">Earn daily up to</p>
                <p className="text-2xl font-bold text-foreground">₦1,000</p>
                <p className="text-muted-foreground text-xs">by completing simple tasks</p>
              </div>
              
              <Button 
                onClick={() => toast.info("Daily tasks coming soon!")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-sm py-2 btn-glow"
              >
                View Tasks
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-3 text-center">
                <div className="text-xl font-bold text-foreground">12</div>
                <div className="text-xs text-muted-foreground">Friends Referred</div>
              </div>
              <div className="glass-card p-3 text-center">
                <div className="text-xl font-bold text-foreground">₦45,000</div>
                <div className="text-xs text-muted-foreground">Total Earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
