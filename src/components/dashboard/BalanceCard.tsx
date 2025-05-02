
import { Button } from "@/components/ui/button";

interface BalanceCardProps {
  balance: number;
  rewards: number;
}

const BalanceCard = ({ balance, rewards }: BalanceCardProps) => {
  // Format number with Naira symbol and commas
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      currencyDisplay: 'symbol'
    }).format(amount).replace('NGN', '₦');
  };

  return (
    <div className="bg-[#9b20f5] text-white rounded-xl p-4 w-full">
      <div className="mb-4">
        <h2 className="text-xl">Today Balance</h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-bold">{formatCurrency(balance)}</h3>
        <Button className="bg-white text-[#9b20f5] hover:bg-gray-100 rounded-full px-6 font-medium">
          Withdraw
        </Button>
      </div>
      <div>
        <p>Weekly Rewards: {formatCurrency(rewards)}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
