
import { useNavigate } from "react-router-dom";
import { X, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Refer = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard");
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText("https://paygo.app/join?ref=yourcode");
    toast.success("Invite link copied to clipboard!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="p-4 flex justify-end">
        <X onClick={handleClose} className="cursor-pointer" size={24} />
      </div>
      
      <div className="flex-1 p-5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-2">Refer Friends</h1>
        <p className="text-xl text-gray-600 text-center mb-10">Share PayGo with your contacts</p>
        
        <div className="w-full max-w-md space-y-4">
          {/* Contact List */}
          <div className="bg-white rounded-full p-4 border flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <User className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">John Smith</h3>
                <p className="text-gray-500">+1234567890</p>
              </div>
            </div>
            <Share2 className="cursor-pointer" />
          </div>
          
          <div className="bg-white rounded-full p-4 border flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <User className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                <p className="text-gray-500">+2345678901</p>
              </div>
            </div>
            <Share2 className="cursor-pointer" />
          </div>
          
          <div className="bg-white rounded-full p-4 border flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <User className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Alice Johnson</h3>
                <p className="text-gray-500">+3456789012</p>
              </div>
            </div>
            <Share2 className="cursor-pointer" />
          </div>
          
          <div className="bg-white rounded-full p-4 border flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gray-100 p-2 rounded-full mr-4">
                <User className="text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bob Williams</h3>
                <p className="text-gray-500">+4567890123</p>
              </div>
            </div>
            <Share2 className="cursor-pointer" />
          </div>
          
          <Button 
            onClick={copyInviteLink}
            className="w-full bg-[#9b20f5] hover:bg-[#8b10e5] text-white text-xl py-8 rounded-full mt-8"
          >
            Copy Invite Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Refer;
