
interface DataPlanGridProps {
  selectedPeriod: string;
  onBuyData: (amount: number, data: string) => void;
}

const DataPlanGrid = ({ selectedPeriod, onBuyData }: DataPlanGridProps) => {
  if (selectedPeriod === "Daily") {
    const plans = [
      { amount: 100, data: "300MB", duration: "1 DAY" },
      { amount: 300, data: "1GB", duration: "7 DAYS" },
      { amount: 500, data: "3GB", duration: "30 DAYS" },
      { amount: 800, data: "5GB", duration: "30 DAYS" },
      { amount: 1500, data: "10GB", duration: "30 DAYS" },
    ];

    return (
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-3 text-foreground">Select Data Plan</h3>
        <div className="grid grid-cols-3 gap-2">
          {plans.map((plan) => (
            <div 
              key={plan.amount}
              className="glass-card p-3 text-center cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => onBuyData(plan.amount, plan.data)}
            >
              <div className="text-base font-bold text-foreground">₦{plan.amount.toLocaleString()}</div>
              <div className="text-xs text-primary font-medium">{plan.data}</div>
              <div className="text-xs text-muted-foreground">{plan.duration}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selectedPeriod === "Weekly" || selectedPeriod === "Monthly") {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {selectedPeriod} plans coming soon
      </div>
    );
  }

  return null;
};

export default DataPlanGrid;
