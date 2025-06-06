
interface AirtimePlanGridProps {
  selectedPeriod: string;
  onBuyAirtime: (amount: number, cashback: number) => void;
}

const AirtimePlanGrid = ({ selectedPeriod, onBuyAirtime }: AirtimePlanGridProps) => {
  if (selectedPeriod === "Daily") {
    return (
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyAirtime(50, 1)}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">₦50</div>
          <div className="text-xl font-medium">₦1 Cashback</div>
        </div>
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyAirtime(100, 2)}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">₦100</div>
          <div className="text-xl font-medium">₦2 Cashback</div>
        </div>
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyAirtime(200, 3)}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">₦200</div>
          <div className="text-xl font-medium">₦3 Cashback</div>
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
