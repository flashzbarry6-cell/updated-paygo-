
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BalanceCardProps {
  balance: number;
  rewards: number;
}

const BalanceCard = ({ balance, rewards }: BalanceCardProps) => {
  const navigate = useNavigate();

  // Format number with Naira symbol
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      currencyDisplay: 'symbol'
    }).format(amount).replace('NGN', '₦');
  };

  // Format with .00 for rewards
  const formatRewards = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(amount).replace('NGN', '₦');
  };

  const handleWithdraw = () => {
    navigate("/transfer");
  };

  return (
    <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-xl p-4 text-white mb-4">
      <div className="mb-4">
        <p className="text-lg opacity-90">Your Balance</p>
        <h3 className="text-3xl font-bold">{formatCurrency(balance)}</h3>
        <p className="text-sm opacity-75">Weekly Rewards: {formatRewards(rewards)}</p>
      </div>
      
      <div className="flex gap-3">
        <Button 
          className="bg-white/20 text-white border-white/30 rounded-full px-6 py-2 hover:bg-white/30" 
          onClick={() => navigate("/upgrade-account")}
        >
          ✓ Upgrade
        </Button>
        <Button 
          className="bg-white/20 text-white border-white/30 rounded-full px-6 py-2 hover:bg-white/30" 
          onClick={handleWithdraw}
        >
          ↑ Transfer
        </Button>
      </div>
    </div>
  );
};

export default BalanceCard;
