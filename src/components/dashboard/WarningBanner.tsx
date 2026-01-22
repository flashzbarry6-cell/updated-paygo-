import { AlertTriangle } from "lucide-react";

const WarningBanner = () => {
  return (
    <div className="bg-red-500/20 border border-red-500/30 py-3 px-4 text-center rounded-xl mx-4 my-2">
      <div className="flex items-center justify-center space-x-2">
        <AlertTriangle className="w-4 h-4 text-red-500" />
        <p className="text-red-500 font-medium text-sm">
          WARNING: Do not buy PAY ID code from any vendor. Only purchase through our official app.
        </p>
      </div>
    </div>
  );
};

export default WarningBanner;