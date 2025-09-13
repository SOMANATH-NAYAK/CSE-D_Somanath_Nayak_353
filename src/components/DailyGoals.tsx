import { useState } from "react";
import { Calendar, Target, CheckCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DailyGoal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  completed: boolean;
}

const DailyGoals = () => {
  const [goals, setGoals] = useState<DailyGoal[]>([
    {
      id: "1",
      title: "Study Time",
      target: 60,
      current: 45,
      unit: "minutes",
      completed: false,
    },
    {
      id: "2", 
      title: "Quiz Questions",
      target: 20,
      current: 20,
      unit: "questions",
      completed: true,
    },
    {
      id: "3",
      title: "Reading Pages",
      target: 10,
      current: 7,
      unit: "pages", 
      completed: false,
    },
  ]);

  const completeGoal = (id: string) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: true, current: goal.target } : goal
    ));
  };

  const completedGoals = goals.filter(g => g.completed).length;
  const totalGoals = goals.length;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Daily Goals</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {completedGoals}/{totalGoals} complete
          </span>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          
          return (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`font-medium ${goal.completed ? 'text-secondary' : 'text-foreground'}`}>
                  {goal.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {goal.current}/{goal.target} {goal.unit}
                  </span>
                  {goal.completed && (
                    <CheckCircle className="h-4 w-4 text-secondary animate-bounce-in" />
                  )}
                </div>
              </div>
              
              <Progress 
                value={progress} 
                className={`h-2 ${goal.completed ? 'opacity-75' : ''}`}
              />
              
              {!goal.completed && progress >= 80 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-xs"
                  onClick={() => completeGoal(goal.id)}
                >
                  Mark as Complete
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Goals reset daily at midnight</span>
        </div>
      </div>
    </Card>
  );
};

export default DailyGoals;