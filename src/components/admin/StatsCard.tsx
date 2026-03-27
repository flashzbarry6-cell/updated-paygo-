import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color?: string;
}

const StatsCard = ({ title, value, icon: Icon, color = "text-primary" }: StatsCardProps) => (
  <div className="glass-card p-6 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center ${color}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold text-foreground animate-count-up">{value}</p>
    </div>
  </div>
);

export default StatsCard;
