import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

const StatsCard = ({ title, value, subtitle, icon: Icon, trend = "neutral" }: StatsCardProps) => {
  const trendColor = {
    up: "text-secondary",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <div className="rounded-xl bg-card border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className={`text-sm ${trendColor}`}>{subtitle}</p>
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;