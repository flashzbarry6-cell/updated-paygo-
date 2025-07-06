
interface AirtimePlanGridProps {
  selectedPeriod: string;
  onBuyAirtime: (amount: number, cashback: number) => void;
}

const AirtimePlanGrid = ({ selectedPeriod, onBuyAirtime }: AirtimePlanGridProps) => {
  if (selectedPeriod === "Daily") {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Amount</h3>
        <div className="grid grid-cols-3 gap-3">
          {/* First Row */}
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(50, 1)}
          >
            <div className="text-xl font-bold text-gray-800">₦50</div>
            <div className="text-xs text-gray-500">₦1 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(100, 2)}
          >
            <div className="text-xl font-bold text-gray-800">₦100</div>
            <div className="text-xs text-gray-500">₦2 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(200, 3)}
          >
            <div className="text-xl font-bold text-gray-800">₦200</div>
            <div className="text-xs text-gray-500">₦3 Cashback</div>
          </div>
          
          {/* Second Row */}
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(500, 10)}
          >
            <div className="text-xl font-bold text-gray-800">₦500</div>
            <div className="text-xs text-gray-500">₦10 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(1000, 20)}
          >
            <div className="text-lg font-bold text-gray-800">₦1000</div>
            <div className="text-xs text-gray-500">₦20 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(2000, 50)}
          >
            <div className="text-lg font-bold text-gray-800">₦2000</div>
            <div className="text-xs text-gray-500">₦50 Cashback</div>
          </div>
          
          {/* Third Row */}
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(3000, 75)}
          >
            <div className="text-lg font-bold text-gray-800">₦3000</div>
            <div className="text-xs text-gray-500">₦75 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(5000, 125)}
          >
            <div className="text-lg font-bold text-gray-800">₦5000</div>
            <div className="text-xs text-gray-500">₦125 Cashback</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyAirtime(10000, 250)}
          >
            <div className="text-base font-bold text-gray-800">₦10000</div>
            <div className="text-xs text-gray-500">₦250 Cashback</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedPeriod === "Weekly" || selectedPeriod === "Monthly") {
    return (
      <div className="text-center py-8 text-gray-500">
        {selectedPeriod} options coming soon
      </div>
    );
  }

  return null;
};

export default AirtimePlanGrid;
