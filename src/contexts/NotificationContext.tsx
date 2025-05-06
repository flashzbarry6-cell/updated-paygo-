
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface NotificationPreferences {
  transactionAlerts: boolean;
  payIdUpdates: boolean;
  promotions: boolean;
  securityAlerts: boolean;
}

interface NotificationContextType {
  notificationsEnabled: boolean;
  preferences: NotificationPreferences;
  toggleNotifications: (enabled: boolean) => void;
  updatePreference: (key: keyof NotificationPreferences, value: boolean) => void;
  hasUnreadNotifications: boolean;
  markAllAsRead: () => void;
}

const defaultPreferences: NotificationPreferences = {
  transactionAlerts: true,
  payIdUpdates: true,
  promotions: false,
  securityAlerts: true,
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [preferences, setPreferences] = useState<NotificationPreferences>(defaultPreferences);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState<boolean>(false);

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const savedNotificationsEnabled = localStorage.getItem("paygo-notifications-enabled");
    const savedPreferences = localStorage.getItem("paygo-notification-preferences");
    
    if (savedNotificationsEnabled !== null) {
      setNotificationsEnabled(JSON.parse(savedNotificationsEnabled));
    }
    
    if (savedPreferences !== null) {
      setPreferences(JSON.parse(savedPreferences));
    }

    // Simulate having unread notifications
    setHasUnreadNotifications(true);
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("paygo-notifications-enabled", JSON.stringify(notificationsEnabled));
    localStorage.setItem("paygo-notification-preferences", JSON.stringify(preferences));
  }, [notificationsEnabled, preferences]);

  const toggleNotifications = (enabled: boolean) => {
    setNotificationsEnabled(enabled);
  };

  const updatePreference = (key: keyof NotificationPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const markAllAsRead = () => {
    setHasUnreadNotifications(false);
  };

  return (
    <NotificationContext.Provider 
      value={{ 
        notificationsEnabled, 
        preferences, 
        toggleNotifications, 
        updatePreference,
        hasUnreadNotifications,
        markAllAsRead
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
