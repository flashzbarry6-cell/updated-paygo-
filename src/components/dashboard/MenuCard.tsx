
import React from "react";

interface MenuCardProps {
  title: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, iconColor = "text-white", bgColor = "bg-black", onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={`${bgColor} rounded-xl shadow-sm p-3 sm:p-4 flex flex-col items-center justify-center gap-1 sm:gap-2 h-[80px] sm:h-[90px] cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-800 active:scale-95`}
    >
      <div className={`text-xl sm:text-2xl ${iconColor}`}>
        {icon}
      </div>
      <p className="font-medium text-center text-[10px] sm:text-xs text-white leading-tight">{title}</p>
    </div>
  );
};

export default MenuCard;
