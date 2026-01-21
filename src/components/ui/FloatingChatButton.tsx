import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const FloatingChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);

  const handleChatClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { text: message, isUser: true }]);
      setMessage("");
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our support team will get back to you shortly.", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 h-96 glass-card flex flex-col animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-pink text-foreground p-3 flex items-center justify-between">
            <h3 className="font-semibold text-sm">PayGo Support</h3>
            <Button
              onClick={handleChatClick}
              variant="ghost"
              className="bg-transparent hover:bg-foreground/20 p-1 h-auto text-foreground"
            >
              <X size={16} />
            </Button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-background/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-up`}>
                <div className={`max-w-[80%] p-2.5 rounded-xl text-xs ${
                  msg.isUser 
                    ? 'bg-gradient-pink text-foreground shadow-glow-sm' 
                    : 'bg-card text-foreground border border-primary/20'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="p-3 border-t border-primary/20 flex gap-2 bg-card/80">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-xs bg-background border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-gradient-pink hover:opacity-90 p-2 h-auto text-foreground shadow-button"
            >
              <Send size={14} />
            </Button>
          </div>
        </div>
      )}
      
      {/* Chat Button */}
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full bg-gradient-pink hover:opacity-90 text-foreground shadow-glow animate-glow-pulse flex items-center justify-center transition-all duration-300"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default FloatingChatButton;
