
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X, Gift } from "lucide-react";
import { useWelcomeBonus } from "@/contexts/WelcomeBonusContext";

const WelcomeBonusNotification = () => {
  const { showWelcomeNotification, welcomeBonusAmount, dismissNotification } = useWelcomeBonus();

  if (!showWelcomeNotification) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <Alert className="bg-gradient-to-r from-[#2D1B55] to-[#111111] text-white border-none">
        <Gift className="h-4 w-4" />
        <AlertTitle className="text-white">Welcome Bonus Available!</AlertTitle>
        <AlertDescription className="text-white">
          You have a welcome bonus of ₦{welcomeBonusAmount.toLocaleString()} waiting for you in your transaction history!
        </AlertDescription>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 text-white hover:bg-white/20 bg-[#2D1B55]"
          onClick={dismissNotification}
        >
          <X className="h-4 w-4" />
        </Button>
      </Alert>
    </div>
  );
};

export default WelcomeBonusNotification;
