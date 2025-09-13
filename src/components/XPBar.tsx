import { useState } from "react";
import { Zap, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface XPBarProps {
  currentXP: number;
  level: number;
  xpToNextLevel: number;
  totalXPForNextLevel: number;
}

const XPBar = ({ currentXP, level, xpToNextLevel, totalXPForNextLevel }: XPBarProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const progressPercentage = ((totalXPForNextLevel - xpToNextLevel) / totalXPForNextLevel) * 100;

  return (
    <div 
      className="bg-gradient-to-r from-xp/20 to-secondary/20 rounded-xl p-4 border border-xp/30 cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-xp to-secondary rounded-full p-2">
            <Zap className="h-4 w-4 text-xp-foreground" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-foreground">Level {level}</span>
              <Star className="h-4 w-4 text-gold fill-current" />
            </div>
            <p className="text-sm text-muted-foreground">
              {currentXP.toLocaleString()} XP
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">
            {xpToNextLevel} XP to Level {level + 1}
          </p>
          <p className="text-xs text-muted-foreground">
            {Math.round(progressPercentage)}% complete
          </p>
        </div>
      </div>
      
      <Progress 
        value={progressPercentage} 
        className="h-3 bg-muted/50"
      />
      
      {showDetails && (
        <div className="mt-3 pt-3 border-t border-border/50 animate-slide-up">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-xp">{currentXP.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total XP</p>
            </div>
            <div>
              <p className="text-lg font-bold text-secondary">{level}</p>
              <p className="text-xs text-muted-foreground">Current Level</p>
            </div>
            <div>
              <p className="text-lg font-bold text-accent">{Math.round(progressPercentage)}%</p>
              <p className="text-xs text-muted-foreground">Progress</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default XPBar;