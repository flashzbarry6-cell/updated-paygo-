
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WelcomeBonusContextType {
  hasWelcomeBonus: boolean;
  welcomeBonusAmount: number;
  showWelcomeNotification: boolean;
  claimWelcomeBonus: () => void;
  dismissNotification: () => void;
}

const WelcomeBonusContext = createContext<WelcomeBonusContextType | undefined>(undefined);

export const WelcomeBonusProvider = ({ children }: { children: ReactNode }) => {
  const [hasWelcomeBonus, setHasWelcomeBonus] = useState<boolean>(false);
  const [showWelcomeNotification, setShowWelcomeNotification] = useState<boolean>(false);
  const welcomeBonusAmount = 180000;

  useEffect(() => {
    const bonusClaimed = localStorage.getItem("paygo-welcome-bonus-claimed");
    const notificationDismissed = localStorage.getItem("paygo-welcome-notification-dismissed");
    const justLoggedIn = localStorage.getItem("paygo-just-logged-in");
    const currentBalance = parseFloat(localStorage.getItem("paygo-balance") || "180000");
    
    // Show welcome bonus if user just logged in and had 0 balance (meaning they transferred everything)
    if (justLoggedIn && !bonusClaimed && currentBalance === 0) {
      setHasWelcomeBonus(true);
      if (!notificationDismissed) {
        setShowWelcomeNotification(true);
      }
    } else if (!bonusClaimed) {
      setHasWelcomeBonus(true);
      if (!notificationDismissed) {
        setShowWelcomeNotification(true);
      }
    }
  }, []);

  const claimWelcomeBonus = () => {
    setHasWelcomeBonus(false);
    localStorage.setItem("paygo-welcome-bonus-claimed", "true");
  };

  const dismissNotification = () => {
    setShowWelcomeNotification(false);
    localStorage.setItem("paygo-welcome-notification-dismissed", "true");
  };

  return (
    <WelcomeBonusContext.Provider 
      value={{ 
        hasWelcomeBonus, 
        welcomeBonusAmount,
        showWelcomeNotification,
        claimWelcomeBonus,
        dismissNotification
      }}
    >
      {children}
    </WelcomeBonusContext.Provider>
  );
};

export const useWelcomeBonus = (): WelcomeBonusContextType => {
  const context = useContext(WelcomeBonusContext);
  if (context === undefined) {
    throw new Error("useWelcomeBonus must be used within a WelcomeBonusProvider");
  }
  return context;
};
