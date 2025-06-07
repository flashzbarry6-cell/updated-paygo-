
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const navigate = useNavigate();

  const handleWhatsAppChat = () => {
    const phoneNumber = "2348123978226";
    const message = "Hello, I need help with PayGo";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleLiveChat = () => {
    navigate("/live-chat");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-white p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-black">Support</h1>
        </header>
        
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-8">How can we help you?</h2>
          
          <div className="space-y-4 mb-8">
            {/* Live Chat */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Live Chat</h3>
                  <p className="text-gray-600 text-sm">Chat with our support team directly in the app</p>
                </div>
              </div>
              <Button 
                onClick={handleLiveChat}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"
              >
                💬 Start Live Chat
              </Button>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Our support agents are available to assist you with any questions or issues.
              </p>
            </div>

            {/* WhatsApp Support */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Chat on WhatsApp</h3>
                  <p className="text-gray-600 text-sm">Chat with our support team on WhatsApp for quick assistance</p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsAppChat}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
              >
                💬 Chat on WhatsApp
              </Button>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Contact: +234 812 397 8226
              </p>
            </div>
          </div>

          <div className="mt-auto text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Financial Services</h3>
            <p className="text-gray-600">PayGo © 2023. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
