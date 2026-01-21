import React from "react";

interface MenuCardProps {
  title: string;
  icon: string;
  bgColor?: string;
  onClick?: () => void;
  delay?: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, onClick, delay = 0 }) => {
  return (
    <div 
      onClick={onClick} 
      className="glass-card p-3 flex flex-col items-center justify-center gap-2 h-[85px] cursor-pointer 
        hover:border-primary/50 hover:shadow-glow transition-all duration-300 
        active:scale-95 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl animate-float" style={{ animationDelay: `${delay * 2}ms` }}>
        {icon}
      </div>
      <p className="font-medium text-center text-[10px] sm:text-xs text-foreground leading-tight">
        {title}
      </p>
    </div>
  );
};

export default MenuCard;
