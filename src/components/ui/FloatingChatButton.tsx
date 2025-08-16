import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingChatButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/live-chat");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
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