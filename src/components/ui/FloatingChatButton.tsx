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
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our support team will get back to you shortly.", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] text-white p-3 rounded-t-lg flex items-center justify-between">
            <h3 className="font-semibold text-sm">PayGo Support</h3>
            <Button
              onClick={handleChatClick}
              className="bg-transparent hover:bg-white/20 p-1 h-auto"
            >
              <X size={16} />
            </Button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-xs ${
                  msg.isUser 
                    ? 'bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-xs"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:opacity-90 p-2 h-auto"
            >
              <Send size={14} />
            </Button>
          </div>
        </div>
      )}
      
      {/* Chat Button */}
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:from-[#8a1ce6] hover:to-[#ff5722] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default FloatingChatButton;