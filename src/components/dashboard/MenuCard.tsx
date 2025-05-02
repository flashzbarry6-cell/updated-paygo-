
import React from "react";
import { Icon } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MenuCardProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon: IconComponent, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="paygo-card cursor-pointer hover:bg-gray-50"
    >
      <div className="paygo-icon">
        <IconComponent size={28} />
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default MenuCard;
