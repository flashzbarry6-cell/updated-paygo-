
import TypewriterText from "./TypewriterText";

const MobileWarningBanner = () => {
  return (
    <div className="bg-red-500 text-white text-center py-2 px-2 text-xs sm:text-sm">
      <TypewriterText text="NOTE: DEAR USERS WERE CURRENTLY EXPERIENCING ISSUES WITH OPAY TRANSFER PLEASE USE OTHER BANKS TO MAKE YOUR PAYMENT FOR PAY ID" />
    </div>
  );
};

export default MobileWarningBanner;
