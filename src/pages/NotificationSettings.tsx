
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
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-[#9b20f5] p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <ArrowLeft className="mr-2 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-2xl font-bold">Notification Settings</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer" />
      </header>
      
      <div className="p-5 flex-1">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Enable Notifications</h2>
            <p className="text-gray-500">Toggle all notifications on/off</p>
          </div>
          <Switch 
            checked={notificationsEnabled} 
            onCheckedChange={handleToggleNotifications}
            className="data-[state=checked]:bg-[#9b20f5]" 
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold">Notification Preferences</h2>
          
          {notificationTypes.map((type) => (
            <div key={type.key} className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-medium">{type.label}</h3>
                <p className="text-gray-500 text-sm">{type.description}</p>
              </div>
              <Switch 
                checked={preferences[type.key as keyof typeof preferences]} 
                onCheckedChange={(checked) => handlePreferenceChange(type.key as keyof typeof preferences, checked)}
                disabled={!notificationsEnabled}
                className="data-[state=checked]:bg-[#9b20f5]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
