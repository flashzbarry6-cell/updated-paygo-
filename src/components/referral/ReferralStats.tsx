
import { User, Gift, TrendingUp } from "lucide-react";

const ReferralStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl p-4 text-center border">
        <User className="mx-auto mb-2 text-blue-500" size={24} />
        <div className="text-xl font-bold">5</div>
        <div className="text-xs text-gray-600">Referred</div>
      </div>
      <div className="bg-white rounded-xl p-4 text-center border">
        <Gift className="mx-auto mb-2 text-green-500" size={24} />
        <div className="text-xl font-bold">₦2,500</div>
        <div className="text-xs text-gray-600">Earned</div>
      </div>
      <div className="bg-white rounded-xl p-4 text-center border">
        <TrendingUp className="mx-auto mb-2 text-purple-500" size={24} />
        <div className="text-xl font-bold">Level 2</div>
        <div className="text-xs text-gray-600">Status</div>
      </div>
    </div>
  );
};

export default ReferralStats;
