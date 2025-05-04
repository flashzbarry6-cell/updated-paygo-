
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
    <div className="bg-[#9b20f5] text-white rounded-3xl p-6 w-full">
      <div className="mb-6">
        <h2 className="text-xl font-medium">Today Balance</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-5xl font-bold">{formatCurrency(balance)}</h3>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-white/95">Weekly Rewards: {formatRewards(rewards)}</p>
        <Button 
          className="bg-white text-[#9b20f5] hover:bg-gray-100 rounded-full px-8 py-2 font-medium text-base"
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default BalanceCard;
