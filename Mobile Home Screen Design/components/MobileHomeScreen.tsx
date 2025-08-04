import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { BottomNavigation, SafeAreaBottom } from "./ui/bottom-navigation";
import { Spinner, ProgressBar } from "./ui/loading-states";
import { Bell, Settings, Search, Video, Clock, TrendingUp, Users, BookOpen, Target, ChevronRight } from "lucide-react";

export function MobileHomeScreen() {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const showComingSoon = () => {
    alert("🚀 Coming Soon! This feature is under development.");
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // In a real app, this would navigate to different screens
    showComingSoon();
  };

  const quickActions = [
    {
      emoji: "🎯",
      title: "Mock Interview",
      description: "Practice with experts"
    },
    {
      emoji: "💼",
      title: "1-on-1 Session",
      description: "Book with mentors"
    },
    {
      emoji: "📋",
      title: "Resume Review",
      description: "Get expert feedback"
    },
    {
      emoji: "📈",
      title: "Career Assessment",
      description: "Discover your path"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-sm mx-auto relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-8">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">PR</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-medium">Hi, Priya!</h2>
            <p className="text-sm text-muted-foreground">Ready to grow today?</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={showComingSoon} className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-destructive">2</Badge>
          </Button>
          <Button variant="ghost" size="icon" onClick={showComingSoon}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <Card className="p-3 cursor-pointer border-border/50" onClick={showComingSoon}>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Search className="h-4 w-4" />
            <span className="text-sm">Find mentors, topics, companies...</span>
          </div>
        </Card>
      </div>

      {/* Progress Card */}
      <div className="px-4 pb-4">
        <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Your Progress</h3>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-xl font-medium text-primary">8</div>
              <div className="text-xs text-muted-foreground">Sessions</div>
            </div>
            <div>
              <div className="text-xl font-medium text-primary">4.8</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
            <div>
              <div className="text-xl font-medium text-primary">87%</div>
              <div className="text-xs text-muted-foreground">Goal Progress</div>
            </div>
          </div>
          {/* Goal Progress Bar */}
          <ProgressBar 
            value={87} 
            max={100} 
            label="Monthly Goal"
            className="mt-3"
          />
        </Card>
      </div>

      {/* Upcoming Session */}
      <div className="px-4 pb-4">
        <h3 className="font-medium mb-3">Next Session</h3>
        <Card className="p-4 cursor-pointer border-orange-200 bg-orange-50/50" onClick={showComingSoon}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Video className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium">Mock Interview - FAANG</h4>
                <p className="text-sm text-muted-foreground">with Rajesh Kumar • Senior SDE at Google</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Tomorrow at 2:00 PM</span>
                </div>
              </div>
            </div>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
              Upcoming
            </Badge>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-4 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Quick Actions</h3>
          <Button variant="ghost" size="sm" onClick={showComingSoon} className="text-primary">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <FeatureCard
              key={index}
              emoji={action.emoji}
              title={action.title}
              description={action.description}
              onClick={showComingSoon}
            />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 pb-4">
        <h3 className="font-medium mb-3">Recent Activity</h3>
        <Card className="p-3 cursor-pointer" onClick={showComingSoon}>
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <BookOpen className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Completed: System Design Basics</h4>
              <p className="text-xs text-muted-foreground">with Ankit Sharma • 2 hours ago</p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-200">
              Completed
            </Badge>
          </div>
        </Card>
      </div>

      {/* Bottom Action */}
      <div className="p-4 pb-20">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 h-12" 
          onClick={showComingSoon}
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner size="sm" className="mr-2" />
          ) : (
            <Users className="h-4 w-4 mr-2" />
          )}
          Book 1-on-1 Session
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* Safe area for bottom navigation */}
      <SafeAreaBottom />
    </div>
  );
}