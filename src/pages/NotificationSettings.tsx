
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
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

  const notificationTypes = [
    { key: 'transactionAlerts', label: 'Transaction Alerts', description: 'Receive alerts for all transactions' },
    { key: 'payIdUpdates', label: 'PAY ID Updates', description: 'Get notified about PAY ID status changes' },
    { key: 'promotions', label: 'Promotions', description: 'Stay updated with the latest offers' },
    { key: 'securityAlerts', label: 'Security Alerts', description: 'Important security notifications' },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <ArrowLeft className="mr-2 cursor-pointer text-primary" onClick={() => navigate("/dashboard")} />
              <h1 className="text-xl font-bold text-foreground">Notification Settings</h1>
            </div>
            <X onClick={() => navigate("/dashboard")} className="cursor-pointer text-muted-foreground" />
          </header>
          
          <div className="p-5 flex-1">
            <div className="mb-6 flex items-center justify-between glass-card p-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">Enable Notifications</h2>
                <p className="text-muted-foreground text-sm">Toggle all notifications on/off</p>
              </div>
              <Switch 
                checked={notificationsEnabled} 
                onCheckedChange={handleToggleNotifications}
                className="data-[state=checked]:bg-primary" 
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold text-foreground">Notification Preferences</h2>
              
              {notificationTypes.map((type) => (
                <div key={type.key} className="flex items-center justify-between glass-card p-3">
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{type.label}</h3>
                    <p className="text-muted-foreground text-xs">{type.description}</p>
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
      </div>
    </div>
  );
};

export default NotificationSettings;
