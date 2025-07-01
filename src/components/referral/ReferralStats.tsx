
import { User, Gift, TrendingUp } from "lucide-react";

const ReferralStats = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="bg-white rounded-lg p-3 text-center border">
        <User className="mx-auto mb-1 text-blue-500" size={20} />
        <div className="text-lg font-bold">5</div>
        <div className="text-xs text-gray-600">Referred</div>
      </div>
      <div className="bg-white rounded-lg p-3 text-center border">
        <Gift className="mx-auto mb-1 text-green-500" size={20} />
        <div className="text-lg font-bold">₦2,500</div>
        <div className="text-xs text-gray-600">Earned</div>
      </div>
      <div className="bg-white rounded-lg p-3 text-center border">
        <TrendingUp className="mx-auto mb-1 text-purple-500" size={20} />
        <div className="text-lg font-bold">Level 2</div>
        <div className="text-xs text-gray-600">Status</div>
      </div>
    </div>
  );
};

export default ReferralStats;
