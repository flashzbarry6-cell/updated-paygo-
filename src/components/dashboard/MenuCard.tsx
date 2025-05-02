
import React from "react";
import { LucideIcon } from "lucide-react";

interface MenuCardProps {
  title: string;
  icon: LucideIcon | React.ReactNode;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center gap-2 h-[110px] cursor-pointer"
    >
      <div className="text-center">
        {React.isValidElement(icon) ? 
          icon : 
          React.createElement(icon as React.ComponentType, { size: 28 })}
      </div>
      <p className="font-medium text-center">{title}</p>
    </div>
  );
};

export default MenuCard;
