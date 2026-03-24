
interface AirtimePlanGridProps {
  selectedPeriod: string;
  onBuyAirtime: (amount: number, cashback: number) => void;
}

const AirtimePlanGrid = ({ selectedPeriod, onBuyAirtime }: AirtimePlanGridProps) => {
  if (selectedPeriod === "Daily") {
    const plans = [
      { amount: 50, cashback: 1 }, { amount: 100, cashback: 2 }, { amount: 200, cashback: 3 },
      { amount: 500, cashback: 10 }, { amount: 1000, cashback: 20 }, { amount: 2000, cashback: 50 },
      { amount: 3000, cashback: 75 }, { amount: 5000, cashback: 125 }, { amount: 10000, cashback: 250 },
    ];

    return (
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-3 text-foreground">Select Amount</h3>
        <div className="grid grid-cols-3 gap-2">
          {plans.map((plan) => (
            <div 
              key={plan.amount}
              className="glass-card p-3 text-center cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => onBuyAirtime(plan.amount, plan.cashback)}
            >
              <div className="text-base font-bold text-foreground">₦{plan.amount.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">₦{plan.cashback} Cashback</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selectedPeriod === "Weekly" || selectedPeriod === "Monthly") {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {selectedPeriod} options coming soon
      </div>
    );
  }

  return null;
};

export default AirtimePlanGrid;
