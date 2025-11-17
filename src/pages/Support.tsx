
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const navigate = useNavigate();

  const handleWhatsAppChat = () => {
    const phoneNumber = "2349153889086";
    const message = "Hello, I need help with PayGo";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppGroup = () => {
    const groupUrl = "https://chat.whatsapp.com/EVKxpd8wVyGATKHV1qgVZD?mode=ems_copy_c";
    window.open(groupUrl, "_blank");
  };

  const handleEmailSupport = () => {
    const email = "flashzbarry6@gmail.com";
    const subject = "PayGo Support Request";
    const body = "Hello, I need help with PayGo.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handleTelegramSupport = () => {
    const telegramUrl = "https://t.me/lumexzz";
    window.open(telegramUrl, "_blank");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-[#FF0055] to-[#FF1177]">
      <div className="w-full max-w-sm bg-white">
        <header className="bg-gradient-to-r from-[#FF0055] to-[#FF1177] p-4 flex items-center border-b">
          <ArrowLeft className="mr-3 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-xl font-semibold text-white">Support</h1>
        </header>
        
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-2xl font-bold text-center mb-8">How can we help you?</h2>
          
          <div className="space-y-4 mb-8">
            {/* Telegram Support */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Telegram Support</h3>
                  <p className="text-gray-600 text-sm">Chat with our support team on Telegram</p>
                </div>
              </div>
              <Button 
                onClick={handleTelegramSupport}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                💬 Chat on Telegram
              </Button>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Contact: @lumexzz
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
                Contact: 09153889086
              </p>
            </div>

            {/* WhatsApp Group */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Join WhatsApp Group</h3>
                  <p className="text-gray-600 text-sm">Join our community group for updates and discussions</p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsAppGroup}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
              >
                👥 Join Group
              </Button>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Connect with other PayGo users
              </p>
            </div>

            {/* Email Support */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Email Support</h3>
                  <p className="text-gray-600 text-sm">Send us an email for detailed inquiries</p>
                </div>
              </div>
              <Button 
                onClick={handleEmailSupport}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
              >
                📧 Send Email
              </Button>
              <p className="text-gray-600 text-sm mt-2 text-center">
                flashzbarry6@gmail.com
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
