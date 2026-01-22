import TypewriterText from "./TypewriterText";
import { AlertTriangle } from "lucide-react";

const MobileWarningBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2.5 px-3 flex items-center justify-center space-x-2">
      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
      <span className="text-xs sm:text-sm font-medium">
        <TypewriterText text="NOTE: DEAR USERS WERE CURRENTLY EXPERIENCING ISSUES WITH OPAY TRANSFER PLEASE USE OTHER BANKS TO MAKE YOUR PAYMENT FOR PAY ID" />
      </span>
    </div>
  );
};

export default MobileWarningBanner;