
import React from "react";

interface MenuCardProps {
  title: string;
  icon: string;
  bgColor?: string;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, bgColor = "bg-white", onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={`${bgColor} rounded-xl shadow-sm p-4 flex flex-col items-center justify-center gap-2 h-[90px] cursor-pointer hover:shadow-md transition-shadow border border-gray-100`}
    >
      <div className="text-2xl">
        {icon}
      </div>
      <p className="font-medium text-center text-xs text-gray-700">{title}</p>
    </div>
  );
};

export default MenuCard;
