import { Plus, FileQuestion, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const QuickActions = () => {
  const actions = [
    {
      icon: Plus,
      title: "Create Assessment",
      description: "Generate questions from your materials",
      variant: "gradient" as const,
    },
    {
      icon: FileQuestion,
      title: "Take Quiz",
      description: "Test your knowledge",
      variant: "secondary" as const,
    },
    {
      icon: TrendingUp,
      title: "View Analytics",
      description: "Track your progress",
      variant: "outline" as const,
    },
    {
      icon: BookOpen,
      title: "Study Plan",
      description: "Get personalized recommendations",
      variant: "success" as const,
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.variant}
            className="h-auto p-4 flex-col gap-2"
          >
            <action.icon className="h-6 w-6" />
            <div className="text-center">
              <div className="font-medium text-sm">{action.title}</div>
              <div className="text-xs opacity-80">{action.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;