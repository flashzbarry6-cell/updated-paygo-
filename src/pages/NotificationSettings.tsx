import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useNotification } from "@/contexts/NotificationContext";
import { toast } from "sonner";

const NotificationSettings = () => {
  const navigate = useNavigate();
  const { 
    notificationsEnabled, 
    preferences, 
    toggleNotifications, 
    updatePreference 
  } = useNotification();

  const handleToggleNotifications = (checked: boolean) => {
    toggleNotifications(checked);
    toast.success(checked ? "Notifications enabled" : "Notifications disabled");
  };

  const handlePreferenceChange = (key: keyof typeof preferences, checked: boolean) => {
    updatePreference(key, checked);
    toast.success(`Preference updated`);
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  const notificationTypes = [
    { key: 'transactionAlerts', label: 'Transaction Alerts', description: 'Receive alerts for all transactions' },
    { key: 'payIdUpdates', label: 'PAY ID Updates', description: 'Get notified about PAY ID status changes' },
    { key: 'promotions', label: 'Promotions', description: 'Stay updated with the latest offers' },
    { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security notifications' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-gradient-pink p-4 text-white flex items-center justify-between shadow-glow">
        <div className="flex items-center">
          <ArrowLeft className="mr-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-bold">Notification Settings</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer hover:opacity-80 transition-opacity" />
      </header>
      
      <div className="p-5 flex-1">
        <div className="glass-card p-5 mb-6 flex items-center justify-between animate-fade-up">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-pink rounded-full flex items-center justify-center mr-4 shadow-glow">
              <Bell className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Enable Notifications</h2>
              <p className="text-muted-foreground text-sm">Toggle all notifications on/off</p>
            </div>
          </div>
          <Switch 
            checked={notificationsEnabled} 
            onCheckedChange={handleToggleNotifications}
            className="data-[state=checked]:bg-primary" 
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground mb-4">Notification Preferences</h2>
          
          {notificationTypes.map((type, index) => (
            <div 
              key={type.key} 
              className="glass-card p-4 flex items-center justify-between animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <h3 className="font-medium text-foreground">{type.label}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </div>
              <Switch 
                checked={preferences[type.key as keyof typeof preferences]} 
                onCheckedChange={(checked) => handlePreferenceChange(type.key as keyof typeof preferences, checked)}
                disabled={!notificationsEnabled}
                className="data-[state=checked]:bg-primary"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;