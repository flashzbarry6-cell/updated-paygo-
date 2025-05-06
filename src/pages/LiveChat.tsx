
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Bot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const LiveChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your PayGo assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Generate response based on user question
    setTimeout(() => {
      const botResponse = generateResponse(inputMessage);
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const generateResponse = (question: string): Message => {
    const lowerQuestion = question.toLowerCase();
    let response = "I'm not sure about that. Please check our support page for more information.";

    // Predefined answers based on common questions about the app
    if (lowerQuestion.includes("pay id") || lowerQuestion.includes("payid")) {
      response = "PAY ID is our unique payment identifier. You can purchase one from the 'Buy PAY ID' section in your dashboard to make faster transactions.";
    } else if (lowerQuestion.includes("airtime")) {
      response = "You can buy airtime by clicking on the Airtime button in your dashboard. We support multiple networks including MTN, Airtel, Glo, and 9mobile.";
    } else if (lowerQuestion.includes("data")) {
      response = "Data bundles can be purchased from the Data section in your dashboard. We offer various data plans for different networks.";
    } else if (lowerQuestion.includes("transfer") || lowerQuestion.includes("send money")) {
      response = "To transfer money, go to the Transfer section in your dashboard. You can transfer to any bank account.";
    } else if (lowerQuestion.includes("contact") || lowerQuestion.includes("support")) {
      response = "For support, please email plutozanki@gmail.com or visit our Support page from the dashboard.";
    } else if (lowerQuestion.includes("login") || lowerQuestion.includes("sign in")) {
      response = "You can login to your account from the Login page. If you don't have an account, you can register from the Register page.";
    } else if (lowerQuestion.includes("register") || lowerQuestion.includes("sign up")) {
      response = "You can create a new account from the Register page. Fill in your details to get started.";
    } else if (lowerQuestion.includes("loan")) {
      response = "We offer loan services accessible from the Loan section in your dashboard. Check your eligibility and apply there.";
    } else if (lowerQuestion.includes("refer") || lowerQuestion.includes("referral")) {
      response = "Refer your friends to earn rewards! Visit the Refer section in your dashboard to get your referral link.";
    } else if (lowerQuestion.includes("history") || lowerQuestion.includes("transaction")) {
      response = "You can view your transaction history in the History section of your dashboard.";
    } else if (lowerQuestion.includes("notification")) {
      response = "Manage your notification preferences from the Notification Settings page. You can access it by clicking on the bell icon in your dashboard.";
    } else if (lowerQuestion.includes("about")) {
      response = "Visit our About page to learn more about PayGo and our mission.";
    }

    return {
      id: `bot-${Date.now()}`,
      content: response,
      sender: "bot",
      timestamp: new Date(),
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-[#000000] p-5 text-white flex items-center">
        <Button 
          variant="ghost" 
          className="p-0 mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-bold">Live Chat Support</h1>
      </header>

      <div className="flex-1 p-4 flex flex-col">
        <div className="bg-white rounded-lg shadow-sm p-4 flex-1 flex flex-col">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 mb-4 h-[calc(100vh-240px)]" ref={scrollAreaRef}>
            <div className="p-2 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] shadow-sm ${
                      message.sender === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {message.sender === "bot" && (
                      <div className="flex items-center mb-1 text-purple-600">
                        <Bot size={16} className="mr-1" />
                        <span className="font-medium text-sm">PayGo Assistant</span>
                      </div>
                    )}
                    <p className="break-words">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
