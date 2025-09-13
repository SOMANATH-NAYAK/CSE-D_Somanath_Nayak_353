import { Brain, Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import ProgressChart from "@/components/ProgressChart";
import DocumentUpload from "@/components/DocumentUpload";
import QuickActions from "@/components/QuickActions";
import RecentActivity from "@/components/RecentActivity";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                Adaptive Learning Made Simple
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your study materials into personalized learning experiences with AI-powered assessments and intelligent progress tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="gradient" className="text-lg px-8 py-6">
                  Start Learning
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Upload Materials
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students learning with AI technology" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Your Learning Dashboard</h2>
          <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Study Time"
            value="24.5h"
            subtitle="+2.1h this week"
            icon={Clock}
            trend="up"
          />
          <StatsCard
            title="Learning Streak"
            value="12 days"
            subtitle="Personal best!"
            icon={TrendingUp}
            trend="up"
          />
          <StatsCard
            title="Courses Active"
            value="3"
            subtitle="Mathematics, Physics, Biology"
            icon={Brain}
          />
          <StatsCard
            title="Study Groups"
            value="2"
            subtitle="Collaborative learning"
            icon={Users}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProgressChart />
            <DocumentUpload />
          </div>
          
          <div className="space-y-8">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Intelligent Learning Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform adapts to your learning style and helps you achieve your educational goals faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Document Processing",
              description: "Upload PDFs, texts, and documents. Our AI extracts key concepts and creates study materials automatically.",
              icon: "📄"
            },
            {
              title: "Adaptive Assessments",
              description: "Generate personalized quizzes and tests that adapt to your knowledge level and learning pace.",
              icon: "🧠"
            },
            {
              title: "Progress Analytics",
              description: "Detailed insights into your learning patterns, strengths, and areas for improvement.",
              icon: "📊"
            }
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
