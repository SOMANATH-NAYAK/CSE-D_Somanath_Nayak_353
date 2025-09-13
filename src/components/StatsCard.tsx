import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  xpValue?: number;
}

const StatsCard = ({ title, value, subtitle, icon: Icon, trend = "neutral", xpValue }: StatsCardProps) => {
  const trendColor = {
    up: "text-secondary",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <div className="rounded-xl bg-card border border-border/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className={`text-sm ${trendColor}`}>{subtitle}</p>
          {xpValue && (
            <div className="flex items-center gap-1 mt-2">
              <div className="w-2 h-2 bg-xp rounded-full animate-pulse-slow"></div>
              <span className="text-xs text-xp font-medium">+{xpValue} XP today</span>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;