
import { useNavigate } from "react-router-dom";
import { X, ArrowLeft, Mail, MessageCircle } from "lucide-react";

const Support = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-[#1A1F2C] p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <ArrowLeft className="mr-2 cursor-pointer" onClick={() => navigate("/dashboard")} />
          <h1 className="text-2xl font-bold">Support</h1>
        </div>
        <X onClick={handleClose} className="cursor-pointer" />
      </header>
      
      <div className="flex-1 p-5 flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-4">How can we help you?</h2>
        
        <p className="text-center text-lg mb-12 text-gray-700">
          Our support team is available to assist you with any questions or issues you may have. Choose your preferred contact method below.
        </p>
        
        <div className="space-y-6">
          {/* Email Support */}
          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center">
              <div className="bg-[#9b87f5] bg-opacity-20 p-3 rounded-full mr-4">
                <Mail className="text-[#9b87f5]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Email Support</h3>
                <p className="text-gray-500">paygocustomerservice@gmail.com</p>
              </div>
            </div>
            <ArrowLeft className="transform rotate-180 text-gray-400" />
          </div>
          
          {/* Telegram Support */}
          <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="bg-blue-500 p-3 rounded-full mr-4">
                <MessageCircle className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Telegram Support</h3>
                <p className="text-gray-500">@PAYGO Agent</p>
              </div>
            </div>
            <ArrowLeft className="transform rotate-180 text-gray-400" />
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-[#9b87f5] mb-4">Support Hours</h3>
          <p className="text-xl text-[#9b87f5] mb-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p className="text-xl text-[#9b87f5]">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
