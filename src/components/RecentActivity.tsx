import { Clock, Trophy, FileText, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const RecentActivity = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Completed Quiz: Advanced Mathematics",
      time: "2 hours ago",
      score: "92%",
      type: "success"
    },
    {
      icon: FileText,
      title: "Uploaded: Physics Chapter 5 Notes",
      time: "5 hours ago",
      type: "info"
    },
    {
      icon: Target,
      title: "Set Learning Goal: Complete 3 modules this week",
      time: "1 day ago",
      type: "default"
    },
    {
      icon: Clock,
      title: "Study Session: 45 minutes on Biology",
      time: "2 days ago",
      type: "default"
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-secondary/10 text-secondary";
      case "info":
        return "bg-accent/10 text-accent";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`rounded-lg p-2 ${getTypeStyles(activity.type)}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs text-muted-foreground">{activity.time}</p>
                {activity.score && (
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                    {activity.score}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;