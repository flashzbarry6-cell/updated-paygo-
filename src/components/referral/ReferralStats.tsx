import { User, Gift, TrendingUp } from "lucide-react";

const ReferralStats = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="glass-card p-4 text-center animate-fade-up">
        <User className="mx-auto mb-2 text-primary" size={24} />
        <div className="text-lg font-bold text-foreground">5</div>
        <div className="text-xs text-muted-foreground">Referred</div>
      </div>
      <div className="glass-card p-4 text-center animate-fade-up" style={{ animationDelay: '50ms' }}>
        <Gift className="mx-auto mb-2 text-green-500" size={24} />
        <div className="text-lg font-bold text-foreground">₦2,500</div>
        <div className="text-xs text-muted-foreground">Earned</div>
      </div>
      <div className="glass-card p-4 text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
        <TrendingUp className="mx-auto mb-2 text-primary" size={24} />
        <div className="text-lg font-bold text-foreground">Level 2</div>
        <div className="text-xs text-muted-foreground">Status</div>
      </div>
    </div>
  );
};

export default ReferralStats;