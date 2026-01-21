import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const navigate = useNavigate();

  const handleWhatsAppChat = () => {
    const phoneNumber = "2349153889086";
    const message = "Hello, I need help with PayGo";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/EVKxpd8wVyGATKHV1qgVZD?mode=ems_copy_c", "_blank");
  };

  const handleEmailSupport = () => {
    window.open(`mailto:flashzbarry6@gmail.com?subject=${encodeURIComponent("PayGo Support Request")}`);
  };

  const handleTelegramSupport = () => {
    window.open("https://t.me/lumexzz", "_blank");
  };

  return (
    <div className="flex justify-center min-h-screen bg-subtle-glow">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        <header className="glass p-4 flex items-center border-b border-primary/20 relative z-10">
          <ArrowLeft className="mr-3 cursor-pointer text-foreground" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-semibold text-foreground">Support</h1>
        </header>
        
        <div className="flex-1 p-4 flex flex-col relative z-10">
          <h2 className="text-xl font-bold text-center mb-6 text-foreground animate-fade-up">How can we help you?</h2>
          
          <div className="space-y-3 mb-6">
            {[
              { icon: <Send size={20} />, title: "Telegram Support", desc: "Chat with our support team", action: handleTelegramSupport, contact: "@lumexzz", color: "bg-blue-500/20", iconColor: "text-blue-400" },
              { icon: <MessageCircle size={20} />, title: "Chat on WhatsApp", desc: "Quick assistance on WhatsApp", action: handleWhatsAppChat, contact: "09153889086", color: "bg-green-500/20", iconColor: "text-green-400" },
              { icon: <Users size={20} />, title: "Join WhatsApp Group", desc: "Community updates & discussions", action: handleWhatsAppGroup, color: "bg-green-500/20", iconColor: "text-green-400" },
              { icon: <Mail size={20} />, title: "Email Support", desc: "Detailed inquiries", action: handleEmailSupport, contact: "flashzbarry6@gmail.com", color: "bg-primary/20", iconColor: "text-primary" },
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className={item.iconColor}>{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
                <Button onClick={item.action} className="w-full bg-gradient-pink hover:opacity-90 text-foreground text-sm btn-glow">
                  Contact
                </Button>
                {item.contact && <p className="text-muted-foreground text-xs mt-2 text-center">{item.contact}</p>}
              </div>
            ))}
          </div>

          <div className="mt-auto text-center py-4">
            <p className="text-muted-foreground text-sm">PayGo © 2023. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
