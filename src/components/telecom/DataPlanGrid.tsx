
interface DataPlanGridProps {
  selectedPeriod: string;
  onBuyData: (amount: number, data: string) => void;
}

const DataPlanGrid = ({ selectedPeriod, onBuyData }: DataPlanGridProps) => {
  if (selectedPeriod === "Daily") {
    return (
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyData(150, "200MB")}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">200MB</div>
          <div className="text-xl font-medium">₦150</div>
        </div>
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyData(200, "500MB")}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">500MB</div>
          <div className="text-xl font-medium">₦200</div>
        </div>
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyData(70, "100MB")}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">100MB</div>
          <div className="text-xl font-medium">₦70</div>
        </div>
        <div 
          className="rounded-3xl border p-4 text-center cursor-pointer"
          onClick={() => onBuyData(350, "1GB")}
        >
          <div className="text-lg text-gray-500">1 DAY</div>
          <div className="text-4xl font-bold my-2">1GB</div>
          <div className="text-xl font-medium">₦350</div>
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
