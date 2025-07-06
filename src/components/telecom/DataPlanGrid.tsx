
interface DataPlanGridProps {
  selectedPeriod: string;
  onBuyData: (amount: number, data: string) => void;
}

const DataPlanGrid = ({ selectedPeriod, onBuyData }: DataPlanGridProps) => {
  if (selectedPeriod === "Daily") {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Data Plan</h3>
        <div className="grid grid-cols-3 gap-3">
          {/* First Row */}
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyData(100, "300MB")}
          >
            <div className="text-xl font-bold text-gray-800">₦100</div>
            <div className="text-xs text-gray-500">300MB</div>
            <div className="text-xs text-gray-400">1 DAY</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyData(300, "1GB")}
          >
            <div className="text-xl font-bold text-gray-800">₦300</div>
            <div className="text-xs text-gray-500">1GB</div>
            <div className="text-xs text-gray-400">7 DAYS</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyData(500, "3GB")}
          >
            <div className="text-xl font-bold text-gray-800">₦500</div>
            <div className="text-xs text-gray-500">3GB</div>
            <div className="text-xs text-gray-400">30 DAYS</div>
          </div>
          
          {/* Second Row */}
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyData(800, "5GB")}
          >
            <div className="text-xl font-bold text-gray-800">₦800</div>
            <div className="text-xs text-gray-500">5GB</div>
            <div className="text-xs text-gray-400">30 DAYS</div>
          </div>
          <div 
            className="border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onBuyData(1500, "10GB")}
          >
            <div className="text-lg font-bold text-gray-800">₦1500</div>
            <div className="text-xs text-gray-500">10GB</div>
            <div className="text-xs text-gray-400">30 DAYS</div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedPeriod === "Weekly" || selectedPeriod === "Monthly") {
    return (
      <div className="text-center py-8 text-gray-500">
        {selectedPeriod} plans coming soon
      </div>
    );
  }

  return null;
};

export default DataPlanGrid;
