
import React from "react";

interface MenuCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center justify-center gap-2 h-[100px] cursor-pointer"
    >
      <div className="text-center">
        {icon}
      </div>
      <p className="font-medium text-center text-sm">{title}</p>
    </div>
  );
};

export default MenuCard;
