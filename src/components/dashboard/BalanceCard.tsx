
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BalanceCardProps {
  balance: number;
  rewards: number;
}

const BalanceCard = ({
  balance,
  rewards
}: BalanceCardProps) => {
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
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-600 text-sm">Available Balance</p>
          <h2 className="text-3xl font-bold text-gray-800">{formatCurrency(balance)}</h2>
        </div>
        <Button 
          onClick={handleWithdraw}
          className="bg-[#9b87f5] hover:bg-[#7c3aed] text-white"
        >
          Withdraw
        </Button>
      </div>
      
      <div className="border-t pt-4">
        <p className="text-gray-600 text-sm">Weekly Rewards</p>
        <p className="text-xl font-semibold text-green-600">{formatRewards(rewards)}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
