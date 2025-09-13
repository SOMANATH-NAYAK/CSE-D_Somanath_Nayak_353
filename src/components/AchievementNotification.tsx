import { useEffect, useState } from "react";
import { Trophy, Star, Zap, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: "trophy" | "star" | "zap" | "target";
  xpReward: number;
  type: "gold" | "silver" | "bronze";
}

interface AchievementNotificationProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementNotification = ({ achievement, onClose }: AchievementNotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const iconMap = {
    trophy: Trophy,
    star: Star,
    zap: Zap,
    target: Target,
  };

  const Icon = iconMap[achievement.icon];

  const typeStyles = {
    gold: "from-gold to-gold/80 text-gold-foreground",
    silver: "from-silver to-silver/80 text-silver-foreground", 
    bronze: "from-bronze to-bronze/80 text-bronze-foreground",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-celebrate">
      <div className={`bg-gradient-to-r ${typeStyles[achievement.type]} rounded-xl p-4 shadow-2xl border-2 border-white/20 max-w-sm`}>
        <div className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-sm">Achievement Unlocked!</h3>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <p className="font-medium text-sm mb-1">{achievement.title}</p>
            <p className="text-xs opacity-90 mb-2">{achievement.description}</p>
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span className="text-xs font-medium">+{achievement.xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementNotification;