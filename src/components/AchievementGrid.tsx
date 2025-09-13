import Badge from "./Badge";

const AchievementGrid = () => {
  const achievements = [
    {
      type: "gold" as const,
      icon: "crown" as const,
      title: "Learning Master",
      description: "Complete 50 study sessions",
      earned: true,
    },
    {
      type: "silver" as const,
      icon: "trophy" as const,
      title: "Quiz Champion",
      description: "Score 90% on 10 quizzes",
      earned: true,
    },
    {
      type: "bronze" as const,
      icon: "star" as const,
      title: "First Steps",
      description: "Complete your first lesson",
      earned: true,
    },
    {
      type: "gold" as const,
      icon: "zap" as const,
      title: "Speed Learner",
      description: "Complete 5 lessons in one day",
      earned: false,
      progress: 60,
    },
    {
      type: "silver" as const,
      icon: "shield" as const,
      title: "Consistent Learner",
      description: "Study for 30 days straight",
      earned: false,
      progress: 40,
    },
    {
      type: "bronze" as const,
      icon: "target" as const,
      title: "Goal Setter",
      description: "Set and achieve 3 learning goals",
      earned: false,
      progress: 66,
    },
  ];

  return (
    <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Achievements</h3>
        <span className="text-sm text-muted-foreground">
          {achievements.filter(a => a.earned).length}/{achievements.length} earned
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <Badge
            key={index}
            type={achievement.type}
            icon={achievement.icon}
            title={achievement.title}
            description={achievement.description}
            earned={achievement.earned}
            progress={achievement.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementGrid;