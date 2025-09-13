import { Star, Trophy, Zap, Shield, Crown, Target } from "lucide-react";

interface BadgeProps {
  type: "gold" | "silver" | "bronze";
  icon: "star" | "trophy" | "zap" | "shield" | "crown" | "target";
  title: string;
  description: string;
  earned?: boolean;
  progress?: number;
}

const Badge = ({ type, icon, title, description, earned = false, progress }: BadgeProps) => {
  const iconMap = {
    star: Star,
    trophy: Trophy,
    zap: Zap,
    shield: Shield,
    crown: Crown,
    target: Target,
  };

  const Icon = iconMap[icon];

  const badgeStyles = {
    gold: earned ? "bg-gradient-to-br from-gold to-gold/80 text-gold-foreground shadow-lg" : "bg-muted text-muted-foreground",
    silver: earned ? "bg-gradient-to-br from-silver to-silver/80 text-silver-foreground shadow-lg" : "bg-muted text-muted-foreground",
    bronze: earned ? "bg-gradient-to-br from-bronze to-bronze/80 text-bronze-foreground shadow-lg" : "bg-muted text-muted-foreground",
  };

  return (
    <div className={`group relative rounded-xl p-4 transition-all duration-300 hover:scale-105 ${earned ? 'animate-celebrate' : ''}`}>
      <div className={`rounded-full p-3 transition-all duration-300 ${badgeStyles[type]}`}>
        <Icon className="h-6 w-6" />
      </div>
      
      <div className="mt-3">
        <h4 className={`font-medium text-sm ${earned ? 'text-foreground' : 'text-muted-foreground'}`}>
          {title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        
        {progress !== undefined && !earned && (
          <div className="mt-2">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{progress}% complete</p>
          </div>
        )}
      </div>

      {earned && (
        <div className="absolute -top-2 -right-2 bg-gold text-gold-foreground rounded-full p-1 animate-bounce-in">
          <Star className="h-3 w-3 fill-current" />
        </div>
      )}
    </div>
  );
};

export default Badge;