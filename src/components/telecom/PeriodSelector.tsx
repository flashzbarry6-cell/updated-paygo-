
interface PeriodSelectorProps {
  selectedPeriod: string;
  onPeriodSelect: (period: string) => void;
}

const PeriodSelector = ({ selectedPeriod, onPeriodSelect }: PeriodSelectorProps) => {
  const periods = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="flex border-b mb-4">
      {periods.map((period) => (
        <button
          key={period}
          className={`pb-2 px-4 ${
            selectedPeriod === period
              ? "text-purple-600 border-b-2 border-purple-600 font-medium"
              : "text-gray-500"
          }`}
          onClick={() => onPeriodSelect(period)}
        >
          {period}
        </button>
      ))}
    </div>
  );
};

export default PeriodSelector;
