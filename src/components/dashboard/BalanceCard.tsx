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
  return;
};
export default BalanceCard;